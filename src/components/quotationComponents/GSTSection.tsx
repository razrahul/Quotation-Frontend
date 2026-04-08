import { useState, useEffect } from "react";
import { INDIAN_STATE_OPTIONS } from "../../utils/countryOptions";
import type { QuoteTaxConfig } from "../../types/quotation.types";
import "./GSTSection.scss";

type Props = {
  open: boolean;
  subTotal: number;
  initialPercentage?: number;
  initialConfig: QuoteTaxConfig;
  onClose: () => void;
  onApply: (gst: { percentage: number; amount: number }, config: QuoteTaxConfig) => void;
};

export default function GSTPopup({
  open,
  subTotal,
  initialPercentage = 0,
  initialConfig,
  onClose,
  onApply,
}: Props) {
  const [percentage, setPercentage] = useState(initialPercentage);
  const [taxConfig, setTaxConfig] = useState<QuoteTaxConfig>(initialConfig);

  useEffect(() => {
    setPercentage(initialPercentage);
    setTaxConfig(initialConfig);
  }, [initialPercentage, initialConfig, open]);

  if (!open) return null;

  const gstAmount = (subTotal * percentage) / 100;

  return (
    <div className="gst-backdrop" onClick={onClose}>
      <div className="gst-modal" onClick={(event) => event.stopPropagation()}>
        <div className="gst-header">
          <span>Configure Tax</span>
          <button type="button" onClick={onClose}>
            x
          </button>
        </div>

        <div className="gst-body">
          <div className="gst-stack">
            <label>1. Select Tax Type</label>
            <select
              className="gst-select"
              value={taxConfig.taxType}
              onChange={(event) =>
                setTaxConfig((prev) => ({ ...prev, taxType: event.target.value }))
              }
            >
              <option value="GST India">GST India</option>
              <option value="IGST">IGST</option>
            </select>
          </div>

          <div className="gst-stack">
            <label>2. Place Of Supply</label>
            <select
              className="gst-select"
              value={taxConfig.placeOfSupply}
              onChange={(event) =>
                setTaxConfig((prev) => ({ ...prev, placeOfSupply: event.target.value }))
              }
            >
              {INDIAN_STATE_OPTIONS.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="gst-stack">
            <label>3. GST Type</label>
            <div className="radio-row">
              <label className={`radio-chip ${taxConfig.gstMode === "igst" ? "active" : ""}`}>
                <input
                  type="radio"
                  checked={taxConfig.gstMode === "igst"}
                  onChange={() =>
                    setTaxConfig((prev) => ({ ...prev, gstMode: "igst" }))
                  }
                />
                IGST
              </label>
              <label
                className={`radio-chip ${taxConfig.gstMode === "cgst_sgst" ? "active" : ""}`}
              >
                <input
                  type="radio"
                  checked={taxConfig.gstMode === "cgst_sgst"}
                  onChange={() =>
                    setTaxConfig((prev) => ({ ...prev, gstMode: "cgst_sgst" }))
                  }
                />
                CGST &amp; SGST
              </label>
            </div>
          </div>

          <div className="gst-inline-grid">
            <div className="gst-stack">
              <label>4. Other Options</label>
              <label className="checkbox-line">
                <input
                  type="checkbox"
                  checked={taxConfig.reverseCharge}
                  onChange={(event) =>
                    setTaxConfig((prev) => ({
                      ...prev,
                      reverseCharge: event.target.checked,
                    }))
                  }
                />
                Is Reverse Charge Applicable?
              </label>
            </div>

            <div className="gst-stack gst-percent">
              <label>GST %</label>
              <input
                className="gst-input"
                type="number"
                min={0}
                inputMode="numeric"
                value={percentage}
                onChange={(event) => setPercentage(Number(event.target.value))}
              />
            </div>
          </div>

          <div className="gst-row amount">
            <span>GST Amount</span>
            <strong>Rs. {gstAmount.toFixed(2)}</strong>
          </div>
        </div>

        <div className="gst-footer">
          <button type="button" className="btn-secondary" onClick={onClose}>
            Cancel
          </button>

          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              onApply({ percentage, amount: gstAmount }, taxConfig);
              onClose();
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
