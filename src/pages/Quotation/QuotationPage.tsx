import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import "./QuotationPage.scss";
import UploadLogo from "../../components/quotationComponents/UploadLogo";
import QuotationHeader from "../../components/quotationComponents/QuotationHeader";
import PartyDetails from "../../components/quotationComponents/PartyDetails";
import ItemsTable from "../../components/quotationComponents/ItemsTable";
import SummarySection from "../../components/quotationComponents/SummarySection";
import GSTPopup from "../../components/quotationComponents/GSTSection";

import type {
  QuoteDesign,
  QuotationFormState,
  QuoteTaxConfig,
} from "../../types/quotation.types";
import type { RootState } from "../../redux/store";
import {
  FONT_OPTIONS,
  INDIAN_STATE_OPTIONS,
  LANGUAGE_OPTIONS,
  formatPhoneWithCountryCode,
} from "../../utils/countryOptions";
import { mapQuoteToForm } from "../../utils/mapQuoteToForm";

const defaultDesign: QuoteDesign = {
  accentColor: "#0f4c81",
  language: "English",
  headingFont: "Open Sans",
  bodyFont: "Open Sans",
  headingFontSize: 20,
  bodyFontSize: 14,
  paperSize: "A4",
  marginPreset: "compact",
  textScale: "normal",
};

const defaultTaxConfig: QuoteTaxConfig = {
  taxType: "GST India",
  placeOfSupply: "Other Territory",
  gstMode: "cgst_sgst",
  reverseCharge: false,
};

type EditorMode = "terms" | "signature" | "additional" | null;

function numberToWords(value: number) {
  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const convertBelowThousand = (num: number): string => {
    if (num < 20) return units[num];
    if (num < 100) {
      return `${tens[Math.floor(num / 10)]}${num % 10 ? ` ${units[num % 10]}` : ""}`;
    }
    return `${units[Math.floor(num / 100)]} Hundred${num % 100 ? ` ${convertBelowThousand(num % 100)}` : ""}`;
  };

  if (value === 0) return "Zero Rupees Only";

  const parts: string[] = [];
  const crore = Math.floor(value / 10000000);
  const lakh = Math.floor((value % 10000000) / 100000);
  const thousand = Math.floor((value % 100000) / 1000);
  const hundred = value % 1000;

  if (crore) parts.push(`${convertBelowThousand(crore)} Crore`);
  if (lakh) parts.push(`${convertBelowThousand(lakh)} Lakh`);
  if (thousand) parts.push(`${convertBelowThousand(thousand)} Thousand`);
  if (hundred) parts.push(convertBelowThousand(hundred));

  return `${parts.join(" ").trim()} Rupees Only`;
}

function CustomSelect({
  value,
  onChange,
  options,
}: {
  value: string | number;
  onChange: (val: any) => void;
  options: { value: string | number; label: string | number }[] | (string | number)[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const normalizedOptions = options.map((opt) => {
    if (typeof opt === "object" && opt !== null) {
      return opt;
    }
    return { value: opt, label: opt };
  });

  const selectedOpt = normalizedOptions.find((opt) => String(opt.value) === String(value));

  return (
    <div className="custom-select-container" ref={dropdownRef}>
      <div
        className={`custom-select-trigger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="selected-value">{selectedOpt ? selectedOpt.label : value}</span>
        <span className={`arrow ${isOpen ? "arrow--open" : ""}`}>▼</span>
      </div>
      {isOpen && (
        <div className="custom-dropdown-list">
          {normalizedOptions.map((opt) => {
            const isFontOption = typeof opt.value === "string" && FONT_OPTIONS.includes(opt.value);
            const itemStyle: React.CSSProperties | undefined = isFontOption
              ? { fontFamily: opt.value as string }
              : undefined;

            return (
              <div
                key={opt.value}
                className={`custom-dropdown-item ${String(opt.value) === String(value) ? "active" : ""}`}
                style={itemStyle}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function EntryModal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="entry-modal-backdrop" onClick={onClose}>
      <div className="entry-modal" onClick={(event) => event.stopPropagation()}>
        <div className="entry-modal__header">
          <h3>{title}</h3>
          <button type="button" onClick={onClose}>
            x
          </button>
        </div>
        <div className="entry-modal__body">{children}</div>
      </div>
    </div>
  );
}

export default function QuotationPage() {
  const { loading, error } = useSelector((state: RootState) => state.quotation);

  const location = useLocation();
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];
  const incomingQuotation = location.state?.quotation;
  const originalQuotation = location.state?.originalQuotation;

  const [quotation, setQuotation] = useState<QuotationFormState>({
    ...(incomingQuotation
      ? mapQuoteToForm(incomingQuotation)
      : {
          quoteName: "",
          quoteNo: "",
          quoteDate: today,
          validUntil: "",
          company: {
            country: "India",
            name: "",
            phone: "",
            gstin: null,
            address: "",
            city: "",
            state: "",
          },
          client: {
            country: "India",
            name: "",
            phone: "",
            gstin: null,
            address: "",
            city: "",
            state: "",
          },
          items: [{ name: "", qty: 1, unit: "Service", rate: 0 }],
          gst: null,
          discount: { type: "FLAT", value: 0 },
          terms: "",
          notes: "",
          gstEnabled: false,
          companyLogo: null,
          signature: null,
          headerFields: [],
          additionalFields: [],
          showTotalInWords: true,
          design: defaultDesign,
          gstConfig: defaultTaxConfig,
        }),
  });

  const [gstOpen, setGstOpen] = useState(false);
  const [editorMode, setEditorMode] = useState<EditorMode>(null);

  const subTotal = quotation.items.reduce((sum, item) => sum + item.qty * item.rate, 0);
  const gstAmount =
    quotation.gstEnabled && quotation.gst ? (subTotal * quotation.gst.percentage) / 100 : 0;
  const grandTotal = subTotal + gstAmount;
  const totalInWords = numberToWords(Math.round(grandTotal));
  const additionalField = quotation.additionalFields[0] ?? { label: "", value: "" };

  const buildPartyPayload = (
    party: QuotationFormState["company"] | QuotationFormState["client"],
  ) => ({
    ...party,
    phone: formatPhoneWithCountryCode(party.country, party.phone),
  });

  const buildPreviewQuotation = () => {
    const finalDate = quotation.quoteDate || today;
    const baseQuote = originalQuotation ?? incomingQuotation;

    return {
      ...(baseQuote?.id ? { id: baseQuote.id } : {}),
      ...(baseQuote?.userId ? { userId: baseQuote.userId } : {}),
      ...(baseQuote?.status ? { status: baseQuote.status } : {}),
      currency: baseQuote?.currency || "INR",
      ...(baseQuote?.createdAt ? { createdAt: baseQuote.createdAt } : {}),
      ...(baseQuote?.updatedAt ? { updatedAt: baseQuote.updatedAt } : {}),
      quoteName: quotation.quoteName.trim() || "Quotation",
      quoteNo: quotation.quoteNo,
      quoteDate: finalDate,
      totalAmount: String(grandTotal),
      payload: {
        company: buildPartyPayload(quotation.company),
        client: buildPartyPayload(quotation.client),
        items: quotation.items.map((item) => ({
          name: item.name,
          qty: item.qty,
          unit: item.unit,
          rate: item.rate,
          amount: item.qty * item.rate,
        })),
        gst:
          quotation.gstEnabled && quotation.gst
            ? {
                percentage: quotation.gst.percentage,
                amount: quotation.gst.amount,
              }
            : null,
        discount: {
          type: "FLAT",
          value: 0,
          amount: 0,
        },
        subTotal,
        grandTotal,
        terms: quotation.terms,
        notes: quotation.notes,
        companyLogo: quotation.companyLogo,
        signature: quotation.signature,
        headerFields: quotation.headerFields.filter((field) => field.label || field.value),
        additionalFields: quotation.additionalFields.filter((field) => field.label || field.value),
        design: {
          ...quotation.design,
          // Keep PDF output as compact as possible so the backend can use more printable area.
          marginPreset: "compact",
        },
        taxConfig: quotation.gstConfig,
        meta: {
          showTotalInWords: quotation.showTotalInWords,
          showTotalInWordsLabel: totalInWords,
          validUntil: quotation.validUntil,
        },
      },
    };
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!quotation.quoteNo.trim()) {
      alert("Quotation number is required");
      return;
    }

    navigate("/preview", {
      state: {
        quotation: buildPreviewQuotation(),
        originalQuotation:
          originalQuotation ?? (incomingQuotation?.id ? incomingQuotation : undefined),
      },
    });
  };

  return (
    <form className="quotation-page" onSubmit={handleSave}>
      <div className="page-shell">
        <div className="page-top">
          <div className="page-intro">
            <h1>Generate &amp; Download Quotation PDFs Instantly</h1>
            <p>
              Add your details, customize layout, and download ready-to-send PDF quotations in
              seconds.
            </p>
          </div>

          <div className="page-steps">
            <span className="active">Add Details</span>
            <span>Preview</span>
          </div>
        </div>

        <div className="builder-card" style={{ ["--accent" as string]: quotation.design.accentColor }}>
          <div className="top-quotes">
            <UploadLogo
              value={quotation.companyLogo}
              onChange={(companyLogo) => setQuotation((prev) => ({ ...prev, companyLogo }))}
            />

            <QuotationHeader
              value={{
                quoteName: quotation.quoteName,
                quoteNo: quotation.quoteNo,
                quoteDate: quotation.quoteDate,
                validUntil: quotation.validUntil,
                headerFields: quotation.headerFields,
              }}
              onChange={(key, value) => setQuotation((prev) => ({ ...prev, [key]: value }))}
            />
          </div>

          <div className="builder-grid">
            <PartyDetails
              title="Your Details"
              value={quotation.company}
              onChange={(key, value) =>
                setQuotation((prev) => ({
                  ...prev,
                  company: {
                    ...prev.company,
                    [key]: value,
                    ...(key === "country" && value !== "India" ? { state: "" } : {}),
                  },
                }))
              }
            />

            <PartyDetails
              title="Client Details"
              value={quotation.client}
              onChange={(key, value) =>
                setQuotation((prev) => ({
                  ...prev,
                  client: {
                    ...prev.client,
                    [key]: value,
                    ...(key === "country" && value !== "India" ? { state: "" } : {}),
                  },
                }))
              }
            />
          </div>

          <div className="toolbar-row">
            <button type="button" className="toolbar-btn" onClick={() => setGstOpen(true)}>
              Add GST
            </button>
          </div>

          <ItemsTable
            items={quotation.items}
            onChange={(index, field, value) => {
              const nextItems = [...quotation.items];
              (nextItems[index] as any)[field] = value;
              setQuotation({ ...quotation, items: nextItems });
            }}
            onAdd={() =>
              setQuotation((prev) => ({
                ...prev,
                items: [...prev.items, { name: "", qty: 1, unit: "Service", rate: 0 }],
              }))
            }
            onRemove={(index) =>
              setQuotation((prev) => ({
                ...prev,
                items: prev.items.filter((_, itemIndex) => itemIndex !== index),
              }))
            }
          />

          <div className="bottom-grid">
            <div className="meta-column">
              <div className="quick-values">
                {quotation.terms && (
                  <div className="quick-value">
                    <span>Terms &amp; Conditions</span>
                    <strong>{quotation.terms}</strong>
                  </div>
                )}
                {quotation.notes && (
                  <div className="quick-value">
                    <span>Notes</span>
                    <strong>{quotation.notes}</strong>
                  </div>
                )}
                {quotation.showTotalInWords && (
                  <div className="quick-value">
                    <span>Total In Words</span>
                    <strong>{totalInWords}</strong>
                  </div>
                )}
              </div>

              <div className="action-strip">
                <button type="button" className="outline-action wide" onClick={() => setEditorMode("terms")}>
                  + Add Terms &amp; Conditions
                </button>
                <button type="button" className="outline-action" onClick={() => setEditorMode("signature")}>
                  + Add Signature
                </button>
                <button type="button" className="outline-action" onClick={() => setEditorMode("additional")}>
                  + Add Additional Info
                </button>
              </div>
            </div>

            <div className="side-column">
              <SummarySection
                subTotal={subTotal}
                gstAmount={gstAmount}
                total={grandTotal}
                totalInWords={totalInWords}
                showTotalInWords={quotation.showTotalInWords}
              />
            </div>
          </div>

          <div className="design-panels-row">
            <div className="design-card">
              <div className="design-card__header">
                <h3>Custom Design</h3>
              </div>

              <div className="design-grid">
                <label>
                  Change Color
                  <input
                    type="color"
                    value={quotation.design.accentColor}
                    onChange={(event) =>
                      setQuotation((prev) => ({
                        ...prev,
                        design: { ...prev.design, accentColor: event.target.value },
                      }))
                    }
                  />
                </label>

                <label>
                  Select Language
                  <CustomSelect
                    value={quotation.design.language}
                    onChange={(val) =>
                      setQuotation((prev) => ({
                        ...prev,
                        design: { ...prev.design, language: val },
                      }))
                    }
                    options={LANGUAGE_OPTIONS}
                  />
                </label>

                <label>
                  Select Heading Font Family
                  <CustomSelect
                    value={quotation.design.headingFont}
                    onChange={(val) =>
                      setQuotation((prev) => ({
                        ...prev,
                        design: { ...prev.design, headingFont: val },
                      }))
                    }
                    options={FONT_OPTIONS}
                  />
                </label>

                <label>
                  Select Body Font Family
                  <CustomSelect
                    value={quotation.design.bodyFont}
                    onChange={(val) =>
                      setQuotation((prev) => ({
                        ...prev,
                        design: { ...prev.design, bodyFont: val },
                      }))
                    }
                    options={FONT_OPTIONS}
                  />
                </label>

                <label>
                  Select Heading Font Size
                  <CustomSelect
                    value={quotation.design.headingFontSize}
                    onChange={(val) =>
                      setQuotation((prev) => ({
                        ...prev,
                        design: {
                          ...prev.design,
                          headingFontSize: Number(val),
                        },
                      }))
                    }
                    options={[18, 20, 22, 24, 26].map((size) => ({ value: size, label: `${size}px` }))}
                  />
                </label>

                <label>
                  Select Body Font Size
                  <CustomSelect
                    value={quotation.design.bodyFontSize}
                    onChange={(val) =>
                      setQuotation((prev) => ({
                        ...prev,
                        design: { ...prev.design, bodyFontSize: Number(val) },
                      }))
                    }
                    options={[12, 14, 16, 18].map((size) => ({ value: size, label: `${size}px` }))}
                  />
                </label>
              </div>
            </div>

            <div className="design-card">
              <div className="design-card__header">
                <h3>Page Size, Margins</h3>
              </div>

              <div className="design-grid compact">
                <label>
                  Select Paper Size
                  <CustomSelect
                    value={quotation.design.paperSize}
                    onChange={(val) =>
                      setQuotation((prev) => ({
                        ...prev,
                        design: {
                          ...prev.design,
                          paperSize: val as QuoteDesign["paperSize"],
                        },
                      }))
                    }
                    options={["A4", "Letter"]}
                  />
                </label>

                <label>
                  Select Margin
                  <CustomSelect
                    value={quotation.design.marginPreset}
                    onChange={(val) =>
                      setQuotation((prev) => ({
                        ...prev,
                        design: {
                          ...prev.design,
                          marginPreset: val as QuoteDesign["marginPreset"],
                        },
                      }))
                    }
                    options={[
                      { value: "compact", label: "Compact" },
                      { value: "normal", label: "Normal" },
                      { value: "wide", label: "Wide" },
                    ]}
                  />
                </label>

                <label>
                  Text Scale
                  <CustomSelect
                    value={quotation.design.textScale}
                    onChange={(val) =>
                      setQuotation((prev) => ({
                        ...prev,
                        design: {
                          ...prev.design,
                          textScale: val as QuoteDesign["textScale"],
                        },
                      }))
                    }
                    options={[
                      { value: "small", label: "Small" },
                      { value: "normal", label: "Normal" },
                      { value: "large", label: "Large" },
                    ]}
                  />
                </label>

                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    checked={quotation.showTotalInWords}
                    onChange={(event) =>
                      setQuotation((prev) => ({
                        ...prev,
                        showTotalInWords: event.target.checked,
                      }))
                    }
                  />
                  Show Total In Words
                </label>
              </div>
            </div>
          </div>

          <div className="page-actions">
            <button type="submit" className="save-btn" disabled={loading}>
              {loading ? "Saving..." : "Save & Continue"}
            </button>
          </div>
        </div>
      </div>

      {error && <p className="form-error">{error}</p>}

      <GSTPopup
        open={gstOpen}
        subTotal={subTotal}
        initialPercentage={quotation.gst?.percentage ?? 18}
        initialConfig={{
          ...quotation.gstConfig,
          placeOfSupply:
            quotation.gstConfig.placeOfSupply ||
            quotation.company.state ||
            INDIAN_STATE_OPTIONS[INDIAN_STATE_OPTIONS.length - 1],
        }}
        onClose={() => setGstOpen(false)}
        onApply={(gst, config) =>
          setQuotation((prev) => ({
            ...prev,
            gstEnabled: true,
            gst,
            gstConfig: config,
          }))
        }
      />

      <EntryModal
        open={editorMode === "terms"}
        title="Add Terms & Notes"
        onClose={() => setEditorMode(null)}
      >
        <textarea
          className="entry-input entry-textarea"
          placeholder="Add terms and conditions"
          value={quotation.terms}
          onChange={(event) =>
            setQuotation((prev) => ({ ...prev, terms: event.target.value }))
          }
        />
        <textarea
          className="entry-input entry-textarea"
          placeholder="Add additional notes"
          value={quotation.notes}
          onChange={(event) =>
            setQuotation((prev) => ({ ...prev, notes: event.target.value }))
          }
        />
      </EntryModal>

      <EntryModal
        open={editorMode === "signature"}
        title="Add Signature"
        onClose={() => setEditorMode(null)}
      >
        <UploadLogo
          label="Upload Signature"
          helperText="PNG or JPG"
          value={quotation.signature}
          onChange={(signature) => setQuotation((prev) => ({ ...prev, signature }))}
        />
      </EntryModal>

      <EntryModal
        open={editorMode === "additional"}
        title="Add Additional Info"
        onClose={() => setEditorMode(null)}
      >
        <input
          className="entry-input"
          placeholder="Field Name"
          value={additionalField.label}
          onChange={(event) =>
            setQuotation((prev) => ({
              ...prev,
              additionalFields: [{ ...additionalField, label: event.target.value }],
            }))
          }
        />
        <input
          className="entry-input"
          placeholder="Value"
          value={additionalField.value}
          onChange={(event) =>
            setQuotation((prev) => ({
              ...prev,
              additionalFields: [{ ...additionalField, value: event.target.value }],
            }))
          }
        />
      </EntryModal>
    </form>
  );
}
