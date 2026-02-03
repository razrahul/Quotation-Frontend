import { useState } from "react";
import "./PersonalInfo.scss";

const PersonalInfo = () => {
  const [edit, setEdit] = useState(false);

  return (
    <div className="personal-info">
      <div className="header">
        <h3>Personal Information</h3>
        <button className="edit-btn" onClick={() => setEdit(!edit)}>
          Edit
        </button>
      </div>

      <div className="info-card">
        <div className="field">
          <label>First Name</label>
          <input disabled={!edit} defaultValue="Neha" />
        </div>

        <div className="field">
          <label>Last Name</label>
          <input disabled={!edit} defaultValue="Verma" />
        </div>

        <div className="field">
          <label>Email Address</label>
          <input disabled value="neha@gmail.com" />
        </div>

        <div className="field">
          <label>Phone Number</label>
          <input disabled={!edit} defaultValue="+91 78654 67544" />
        </div>

        <div className="field">
          <label>Country</label>
          <input disabled={!edit} defaultValue="India" />
        </div>
      </div>

      {edit && <button className="save-btn">Save Changes</button>}
    </div>
  );
};

export default PersonalInfo;
