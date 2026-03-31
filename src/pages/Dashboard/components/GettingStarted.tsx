import { useSelector } from "react-redux";

import type { RootState } from "../../../redux/store";
import InvoiceCard from "./InvoiceCard";
import "./GettingStarted.scss";

const GettingStarted = () => {
  const { quotationList, loading } = useSelector(
    (state: RootState) => state.quotation,
  );

  return (
    <section className="getting-started">
      <h3>Getting Started</h3>

      {loading ? (
        <p className="getting-started__status">Loading quotations...</p>
      ) : quotationList?.length ? (
        <div className="dash-grid">
          {quotationList.map((quote) => (
            <InvoiceCard key={quote.id} quote={quote} />
          ))}
        </div>
      ) : (
        <p className="getting-started__status">
          No quotations yet. Create your first quotation to see it here.
        </p>
      )}
    </section>
  );
};

export default GettingStarted;
