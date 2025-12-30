import { useSelector } from "react-redux";
import "./TotalSection.scss";

export default function TotalSection() {
  const items = useSelector((s: any) => s.quotation.items);

  const subtotal = items.reduce(
    (sum: number, i: any) => sum + i.qty * i.rate,
    0
  );

  return (
    <div className="total-box">
      <div className="row">
        <span>Subtotal</span>
        <span>₹ {subtotal.toFixed(2)}</span>
      </div>

      <div className="row total">
        <span>Total</span>
        <span>₹ {subtotal.toFixed(2)}</span>
      </div>
    </div>
  );
}
