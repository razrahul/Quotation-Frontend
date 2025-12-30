import "./DetailsCard.scss";

export default function ClientDetails() {
  return (
    <div className="details-card">
      <div className="header">Client Details</div>
      <div className="body">
        <div className="field">
          <label>Client Name</label>
          <input />
        </div>
        <div className="field">
          <label>Phone</label>
          <input />
        </div>
      </div>
    </div>
  );
}
