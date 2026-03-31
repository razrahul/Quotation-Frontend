import { useNavigate } from "react-router-dom";

import type { QuoteRecord } from "../../../types/quotationApi.types";

import "./InvoiceCard.scss";

type Props = {
  quote: QuoteRecord;
};

const InvoiceCard = ({ quote }: Props) => {
  const navigate = useNavigate();
  const itemCount = quote.payload.items.length;
  const firstItemName = quote.payload.items[0]?.name || "No item added";
  const formattedDate =
    quote.quoteDate && quote.quoteDate !== "0000-00-00"
      ? new Date(quote.quoteDate).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "N/A";

  return (
    <div className="invoice-card">
      <div className="preview">
        <div className="preview__header">
          <div>
            <h4>{quote.quoteName || "Quotation"}</h4>
            <p>{quote.quoteNo || "No quote number"}</p>
          </div>
          <span className="preview__amount">
            {quote.currency} {quote.totalAmount}
          </span>
        </div>

        <div className="preview__body">
          <div>
            <span>Client</span>
            <strong>{quote.payload.client.name || "N/A"}</strong>
          </div>
          <div>
            <span>Date</span>
            <strong>{formattedDate}</strong>
          </div>
          <div>
            <span>Items</span>
            <strong>{itemCount}</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>{quote.status}</strong>
          </div>
        </div>

        <div className="preview__footer">
          <span>Company: {quote.payload.company.name || "N/A"}</span>
          <span>First Item: {firstItemName}</span>
        </div>
      </div>
      <button onClick={() => navigate("/preview", { state: { quotation: quote } })}>
        View Invoice
      </button>
    </div>
  );
};

export default InvoiceCard;
