import { useState, useEffect } from "react";
import "./GSTSection.scss";

type Props = {
  open: boolean;
  subTotal: number;
  initialPercentage?: number;
  onClose: () => void;
  onApply: (gst: { percentage: number; amount: number }) => void;
};

export default function GSTPopup({
  open,
  subTotal,
  initialPercentage = 0,
  onClose,
  onApply,
}: Props) {
  const [percentage, setPercentage] = useState(initialPercentage);

  useEffect(() => {
    setPercentage(initialPercentage);
  }, [initialPercentage, open]);

  if (!open) return null;

  const gstAmount = (subTotal * percentage) / 100;

  return (
    <div className="gst-backdrop" onClick={onClose}>
      <div
        className="gst-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="gst-header">
          <span>Add GST</span>
          <button type="button" onClick={onClose}>✕</button>
        </div>

        <div className="gst-body">
          <div className="gst-row">
            <label>GST %</label>
            <input
              className="gst-input"
              type="number"
              min={0}
              value={percentage}
              onChange={(e) => setPercentage(+e.target.value)}
            />
          </div>

          <div className="gst-row amount">
            <span>GST Amount</span>
            <strong>₹ {gstAmount.toFixed(2)}</strong>
          </div>
        </div>

        <div className="gst-footer">
          <button
            type="button"
            className="btn-secondary"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              onApply({ percentage, amount: gstAmount });
              onClose();
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
