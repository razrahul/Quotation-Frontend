import { useState, useEffect, useRef } from "react";
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

  const [isTaxTypeOpen, setIsTaxTypeOpen] = useState(false);
  const [isPlaceOfSupplyOpen, setIsPlaceOfSupplyOpen] = useState(false);

  const taxTypeDropdownRef = useRef<HTMLDivElement>(null);
  const placeOfSupplyDropdownRef = useRef<HTMLDivElement>(null);

  const [prevOpen, setPrevOpen] = useState(open);

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setPercentage(initialPercentage);
      setTaxConfig(initialConfig);
      setIsTaxTypeOpen(false);
      setIsPlaceOfSupplyOpen(false);
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        taxTypeDropdownRef.current &&
        !taxTypeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsTaxTypeOpen(false);
      }
      if (
        placeOfSupplyDropdownRef.current &&
        !placeOfSupplyDropdownRef.current.contains(event.target as Node)
      ) {
        setIsPlaceOfSupplyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!open) return null;

  const gstAmount = (subTotal * percentage) / 100;

  return (
    <div className="gst-backdrop" onClick={onClose}>
      <div className="gst-modal" onClick={(event) => event.stopPropagation()}>
        <div className="gst-header">
          <span>Configure Tax</span>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="gst-body">
          <div className="gst-stack">
            <label>1. Select Tax Type</label>
            <div className="gst-select-container" ref={taxTypeDropdownRef}>
              <div
                className="gst-select-trigger"
                onClick={() => setIsTaxTypeOpen((prev) => !prev)}
              >
                <span className="selected-value">{taxConfig.taxType || "Select Tax Type"}</span>
                <span className={`arrow ${isTaxTypeOpen ? "arrow--open" : ""}`}>▼</span>
              </div>
              {isTaxTypeOpen && (
                <div className="gst-dropdown-list">
                  <div
                    className={`gst-dropdown-item ${taxConfig.taxType === "GST India" ? "active" : ""}`}
                    onClick={() => {
                      setTaxConfig((prev) => ({ ...prev, taxType: "GST India" }));
                      setIsTaxTypeOpen(false);
                    }}
                  >
                    GST India
                  </div>
                  <div
                    className={`gst-dropdown-item ${taxConfig.taxType === "IGST" ? "active" : ""}`}
                    onClick={() => {
                      setTaxConfig((prev) => ({ ...prev, taxType: "IGST" }));
                      setIsTaxTypeOpen(false);
                    }}
                  >
                    IGST
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="gst-stack">
            <label>2. Place Of Supply</label>
            <div className="gst-select-container" ref={placeOfSupplyDropdownRef}>
              <div
                className="gst-select-trigger"
                onClick={() => setIsPlaceOfSupplyOpen((prev) => !prev)}
              >
                <span className="selected-value">{taxConfig.placeOfSupply || "Select State"}</span>
                <span className={`arrow ${isPlaceOfSupplyOpen ? "arrow--open" : ""}`}>▼</span>
              </div>
              {isPlaceOfSupplyOpen && (
                <div className="gst-dropdown-list">
                  {INDIAN_STATE_OPTIONS.map((state) => (
                    <div
                      key={state}
                      className={`gst-dropdown-item ${taxConfig.placeOfSupply === state ? "active" : ""}`}
                      onClick={() => {
                        setTaxConfig((prev) => ({ ...prev, placeOfSupply: state }));
                        setIsPlaceOfSupplyOpen(false);
                      }}
                    >
                      {state}
                    </div>
                  ))}
                </div>
              )}
            </div>
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
