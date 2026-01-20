import type { Item } from "../../types/quotation.types";
import "./ItemsTable.scss";

type Props = {
  items: Item[];
  onChange: (i: number, field: keyof Item, val: any) => void;
  onAdd: () => void;
  onRemove: (i: number) => void;
};

export default function ItemsTable({
  items,
  onChange,
  onAdd,
  onRemove,
}: Props) {
  return (
    <>
      <table className="items-table">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Rate</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map((it, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                <input
                  placeholder="Add Item"
                  value={it.name}
                  onChange={(e) => onChange(i, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="₹ 0"
                  type="number"
                  value={it.qty === 0 ? "" : it.qty}
                  onChange={(e) => onChange(i, "qty", +e.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="XYZ"
                  value={it.unit === "Service" ? "" : it.unit}
                  onChange={(e) => onChange(i, "unit", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="₹ 0.00"
                  value={it.rate === 0 ? "" : it.rate}
                  onChange={(e) => onChange(i, "rate", +e.target.value)}
                />
              </td>
              <td>₹ {(it.qty * it.rate).toFixed(2)}</td>
              <td>
                {items.length > 1 && (
                  <button onClick={() => onRemove(i)}>✕</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="add-line" onClick={onAdd}>
        ＋ Add New Line
      </div>
    </>
  );
}
