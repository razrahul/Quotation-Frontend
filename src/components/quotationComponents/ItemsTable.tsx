import type { Item } from "../../types/quotation.types";
import "./ItemsTable.scss";

type Props = {
  items: Item[];
  onChange: (i: number, field: keyof Item, val: any) => void;
  onAdd: () => void;
  onRemove: (i: number) => void;
};

export default function ItemsTable({ items, onChange, onAdd, onRemove }: Props) {
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
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  placeholder="Add Item"
                  value={item.name}
                  onChange={(event) => onChange(index, "name", event.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="0"
                  type="number"
                  value={item.qty === 0 ? "" : item.qty}
                  onChange={(event) => onChange(index, "qty", +event.target.value)}
                />
              </td>
              <td>
                <input
                  placeholder="XYZ"
                  value={item.unit === "Service" ? "" : item.unit}
                  onChange={(event) => onChange(index, "unit", event.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Rs. 0.00"
                  value={item.rate === 0 ? "" : item.rate}
                  onChange={(event) => onChange(index, "rate", +event.target.value)}
                />
              </td>
              <td className="amount-cell">Rs. {(item.qty * item.rate).toFixed(2)}</td>
              <td>
                {items.length > 1 && (
                  <button type="button" onClick={() => onRemove(index)}>
                    x
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" className="add-line" onClick={onAdd}>
        + Add New Line
      </button>
    </>
  );
}
