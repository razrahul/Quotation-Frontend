import "./SummarySection.scss";

type Props = {
  subTotal: number;
  gstAmount: number;
  total: number;
  totalInWords?: string;
  showTotalInWords?: boolean;
};

export default function SummarySection({
  subTotal,
  gstAmount,
  total,
  totalInWords,
  showTotalInWords = false,
}: Props) {
  return (
    <div className="summary">
      <div className="row">
        <span>Sub Total</span>
        <span>Rs. {subTotal.toFixed(2)}</span>
      </div>

      {gstAmount > 0 && (
        <div className="row">
          <span>GST</span>
          <span>Rs. {gstAmount.toFixed(2)}</span>
        </div>
      )}

      <div className="row total">
        <span>Total</span>
        <span>Rs. {total.toFixed(2)}</span>
      </div>

      {showTotalInWords && totalInWords && (
        <div className="total-in-words">
          <span>Total in Words</span>
          <strong>{totalInWords}</strong>
        </div>
      )}
    </div>
  );
}
