import "./QuotationMeta.scss";

export default function QuotationMeta() {
  return (
    <div className="quotation-meta">
      <div className="left">
        <div className="field">
          <label>Quotation No</label>
          <input placeholder="QTN-001" />
        </div>

        <div className="field checkbox">
          <input type="checkbox" id="addDate" />
          <label htmlFor="addDate">Add Date</label>
        </div>

        <div className="field checkbox">
          <input type="checkbox" id="customFields" />
          <label htmlFor="customFields">Add Custom Fields</label>
        </div>
      </div>

      <div className="right">
        <div className="title">Quotation</div>

        <div className="field">
          <label>Quotation Date</label>
          <input type="date" />
        </div>
      </div>
    </div>
  );
}
