import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./QuotationPage.scss";
import UploadLogo from "../../components/quotationComponents/UploadLogo";
import QuotationHeader from "../../components/quotationComponents/QuotationHeader";
import PartyDetails from "../../components/quotationComponents/PartyDetails";
import ItemsTable from "../../components/quotationComponents/ItemsTable";
import SummarySection from "../../components/quotationComponents/SummarySection";

import type { RootState, AppDispatch } from "../../redux/store";
import { createQuotation } from "../../redux/action/quotationActions";
import type { QuotationFormState } from "../../types/quotation.types";

export default function QuotationPage() {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error } = useSelector((state: RootState) => state.quotation);

  /* ========= UI STATE (SIMPLE & STABLE) ========= */
  const [quotation, setQuotation] = useState<QuotationFormState>({
    quoteNo: "",
    quoteDate: "",

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
    gstEnabled: true,
  });

  console.log("🚀 QUOTATION PAGE STATE:", quotation);

  /* ========= CALC ========= */
  const subTotal = quotation.items.reduce((sum, i) => sum + i.qty * i.rate, 0);

  const grandTotal = subTotal;

  /* ========= SAVE ========= */
  const handleSave = () => {

    console.log("🔥 handleSave called");
    const payload = {
      quoteNo: quotation.quoteNo,
      quoteDate: quotation.quoteDate,

      payload: {
        company: quotation.company,
        client: quotation.client,

        items: quotation.items.map((i) => ({
          name: i.name,
          qty: i.qty,
          unit: i.unit,
          rate: i.rate,
          amount: i.qty * i.rate,
        })),

        // gst: quotation.gstEnabled
        //   ? {
        //       percentage: 100,
        //       amount: subTotal,
        //     }
        //   : null,

        gst: null,

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
    dispatch(createQuotation(payload));
  };

  return (
    <div className="quotation-page">
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

      <SummarySection total={grandTotal} />

      <button
        type="button" // 🔴 YE LINE BAHUT IMPORTANT HAI
        className="save-btn"
        onClick={handleSave}
        disabled={loading}
      >
        {loading ? "Saving..." : "Save & Continue"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
