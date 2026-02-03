import "./InvoiceCard.scss";

const InvoiceCard = ({ primary }: { primary?: boolean }) => {
  return (
    <div className="invoice-card">
      <div className="preview" />
      <button className={primary ? "filled" : ""}>
        View Invoice
      </button>
    </div>
  );
};

export default InvoiceCard;
