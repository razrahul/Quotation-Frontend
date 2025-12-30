import "./DetailsCard.scss";

export default function YourDetails() {
  return (
    <div className="details-card">
      <div className="header">Your Details</div>
      <div className="body">
        <div className="field">
          <label>Name</label>
          <input />
        </div>
        <div className="field">
          <label>Email</label>
          <input />
        </div>
      </div>
    </div>
  );
}
