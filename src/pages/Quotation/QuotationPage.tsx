import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import "./QuotationPage.scss";
import UploadLogo from "../../components/quotationComponents/UploadLogo";
import QuotationHeader from "../../components/quotationComponents/QuotationHeader";
import PartyDetails from "../../components/quotationComponents/PartyDetails";
import ItemsTable from "../../components/quotationComponents/ItemsTable";
import SummarySection from "../../components/quotationComponents/SummarySection";
import GSTPopup from "../../components/quotationComponents/GSTSection";

import type { RootState } from "../../redux/store";
import type { QuotationFormState } from "../../types/quotation.types";
import { formatPhoneWithCountryCode } from "../../utils/countryOptions";
import { mapQuoteToForm } from "../../utils/mapQuoteToForm";

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
        }),
  });

  const [gstOpen, setGstOpen] = useState(false);

  const subTotal = quotation.items.reduce((sum, item) => sum + item.qty * item.rate, 0);
  const gstAmount =
    quotation.gstEnabled && quotation.gst
      ? (subTotal * quotation.gst.percentage) / 100
      : 0;
  const grandTotal = subTotal + gstAmount;

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
        meta: {
          showTotalInWords: true,
        },
      },
    };
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      <div className="top-quotes">
        <UploadLogo />
        <QuotationHeader
          value={quotation}
          onChange={(key, value) => setQuotation((prev) => ({ ...prev, [key]: value }))}
        />
      </div>

      <div className="grid">
        <PartyDetails
          title="Your Details"
          value={quotation.company}
          onChange={(key, value) =>
            setQuotation((prev) => ({
              ...prev,
              company: { ...prev.company, [key]: value },
            }))
          }
        />

        <PartyDetails
          title="Client Details"
          value={quotation.client}
          onChange={(key, value) =>
            setQuotation((prev) => ({
              ...prev,
              client: { ...prev.client, [key]: value },
            }))
          }
        />
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

      <div className="quote-footer">
        <div className="summary-actions">
          <button
            type="button"
            className="add-gst-btn"
            onClick={() => setGstOpen(true)}
          >
            + Add GST
          </button>

          <SummarySection
            subTotal={subTotal}
            gstAmount={gstAmount}
            total={grandTotal}
          />
        </div>
      </div>

      <button type="submit" className="save-btn" disabled={loading}>
        {loading ? "Saving..." : "Save & Continue"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <GSTPopup
        open={gstOpen}
        subTotal={subTotal}
        initialPercentage={quotation.gst?.percentage ?? 0}
        onClose={() => setGstOpen(false)}
        onApply={(gst) =>
          setQuotation((prev) => ({
            ...prev,
            gstEnabled: true,
            gst,
          }))
        }
      />
    </form>
  );
}
