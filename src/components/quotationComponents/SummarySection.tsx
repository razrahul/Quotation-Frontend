import "./SummarySection.scss";

export default function SummarySection({ total }: { total: number }) {
  return (
    <div className="summary">
      <div className="row">
        <span>GST</span>
        <span>₹ 2.00</span>
      </div>
      <div className="row total">
        <span>Total</span>
        <span>₹ {total.toFixed(2)}</span>
      </div>
    </div>
  );
}
