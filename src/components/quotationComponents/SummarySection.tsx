import "./SummarySection.scss";

type Props = {
  subTotal: number;
  gstAmount: number;
  total: number;
};

export default function SummarySection({
  subTotal,
  gstAmount,
  total,
}: Props) {
  return (
    <div className="summary">
      <div className="row">
        <span>Sub Total</span>
        <span>₹ {subTotal.toFixed(2)}</span>
      </div>

      {gstAmount > 0 && (
        <div className="row">
          <span>GST</span>
          <span>₹ {gstAmount.toFixed(2)}</span>
        </div>
      )}

      <div className="row total">
        <span>Total</span>
        <span>₹ {total.toFixed(2)}</span>
      </div>
    </div>
  );
}
