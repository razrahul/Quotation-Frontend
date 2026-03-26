import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

export default function QuotationPage() {
  const { loading, error } = useSelector((state: RootState) => state.quotation);

  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  /* ========= UI STATE (SIMPLE & STABLE) ========= */
  const [quotation, setQuotation] = useState<QuotationFormState>({
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
  });

  const [gstOpen, setGstOpen] = useState(false);

  // console.log("🚀 QUOTATION PAGE STATE:", quotation);

  /* ========= CALC ========= */
  const subTotal = quotation.items.reduce((sum, i) => sum + i.qty * i.rate, 0);

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

  /* ========= SAVE ========= */
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("🔥 handleSave called");
    e.preventDefault();

    if (!quotation.quoteNo.trim()) {
      alert("Quotation number is required");
      return;
    }

    const finalDate = quotation.quoteDate || today;

    const payload = {
      quoteName: quotation.quoteName.trim() || "Quotation",
      quoteNo: quotation.quoteNo,
      quoteDate: finalDate,

      payload: {
        company: buildPartyPayload(quotation.company),
        client: buildPartyPayload(quotation.client),

        items: quotation.items.map((i) => ({
          name: i.name,
          qty: i.qty,
          unit: i.unit,
          rate: i.rate,
          amount: i.qty * i.rate,
        })),

        // ✅ GST final format
        gst:
          quotation.gstEnabled && quotation.gst
            ? {
                percentage: quotation.gst.percentage,
                amount: quotation.gst.amount,
              }
            : null,

        // gst: null,

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

    // console.log("🚀 CREATE payload:", payload);
    // dispatch(createQuotation(payload));
    navigate("/preview", { state: { quotation: payload } });
  };

  return (
    <form className="quotation-page" onSubmit={handleSave}>
      <div className="top-quotes">
        <UploadLogo />
        <QuotationHeader
          value={quotation}
          onChange={(k, v) => setQuotation((prev) => ({ ...prev, [k]: v }))}
        />
      </div>

      <div className="grid">
        <PartyDetails
          title="Your Details"
          value={quotation.company}
          onChange={(k, v) =>
            setQuotation((prev) => ({
              ...prev,
              company: { ...prev.company, [k]: v },
            }))
          }
        />

        <PartyDetails
          title="Client Details"
          value={quotation.client}
          onChange={(k, v) =>
            setQuotation((prev) => ({
              ...prev,
              client: { ...prev.client, [k]: v },
            }))
          }
        />
      </div>

      <ItemsTable
        items={quotation.items}
        onChange={(i, f, v) => {
          const copy = [...quotation.items];
          (copy[i] as any)[f] = v;
          setQuotation({ ...quotation, items: copy });
        }}
        onAdd={() =>
          setQuotation((prev) => ({
            ...prev,
            items: [
              ...prev.items,
              { name: "", qty: 1, unit: "Service", rate: 0 },
            ],
          }))
        }
        onRemove={(i) =>
          setQuotation((prev) => ({
            ...prev,
            items: prev.items.filter((_, idx) => idx !== i),
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

      <button
        type="submit" // 🔴 YE LINE BAHUT IMPORTANT HAI
        className="save-btn"
        disabled={loading}
      >
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
