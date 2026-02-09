import { useState } from "react";
import "./PersonalInfo.scss";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../../redux/store";
import { updateProfile } from "../../../redux/action/userActions";

const PersonalInfo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const [edit, setEdit] = useState(false);

  // split name
  const fullName = user?.name || "";
  const nameParts = fullName.split(" ");

  const [firstName, setFirstName] = useState(nameParts[0] || "");
  const [lastName, setLastName] = useState(nameParts.slice(1).join(" ") || "");
  const [country, setCountry] = useState(user?.country || "");

  const handleSave = async () => {
    const updatedName = `${firstName} ${lastName}`.trim();

    const payload = {
      name: updatedName,
      country,
    };
    console.log(payload);
    await dispatch(updateProfile(payload));
    setEdit(false);
  };

  return (
    <div className="personal-info">
      <div className="per_header">
        <h3>Personal Information</h3>
        <button className="edit-btn" onClick={() => setEdit(!edit)}>
          {edit ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="per_info-card">
        <div className="per_field">
          <label className="per_label">First Name</label>
          <input
            className="per_input"
            disabled={!edit}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="per_field">
          <label className="per_label">Last Name</label>
          <input
            className="per_input"
            disabled={!edit}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="per_field">
          <label className="per_label">Email Address</label>
          <input className="per_input" disabled value={user?.email || ""} />
        </div>

        <div className="per_field">
          <label className="per_label">Country</label>
          <input
            className="per_input"
            disabled={!edit}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
      </div>

      {edit && (
        <button className="per_save-btn" onClick={handleSave}>
          Save Changes
        </button>
      )}
    </div>
  );
};

export default PersonalInfo;
