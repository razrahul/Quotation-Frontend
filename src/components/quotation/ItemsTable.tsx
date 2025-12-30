import { useDispatch, useSelector } from "react-redux";
import { addRow, removeRow, updateItem } from "../../redux/slices/quotationSlice";
import "./ItemsTable.scss";

export default function ItemsTable() {
  const dispatch = useDispatch();
  const items = useSelector((s: any) => s.quotation.items);

  return (
    <div className="items-wrapper">
      <table className="items-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map((item: any, i: number) => (
            <tr key={item.id}>
              <td>{i + 1}</td>

              <td>
                <input
                  value={item.name}
                  onChange={e =>
                    dispatch(updateItem({ id: item.id, field: "name", value: e.target.value }))
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  value={item.qty}
                  onChange={e =>
                    dispatch(updateItem({ id: item.id, field: "qty", value: +e.target.value }))
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  value={item.rate}
                  onChange={e =>
                    dispatch(updateItem({ id: item.id, field: "rate", value: +e.target.value }))
                  }
                />
              </td>

              <td>₹ {(item.qty * item.rate).toFixed(2)}</td>

              <td>
                {items.length > 1 && (
                  <button onClick={() => dispatch(removeRow(item.id))}>✕</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="add-row" onClick={() => dispatch(addRow())}>
        + Add Item
      </div>
    </div>
  );
}
