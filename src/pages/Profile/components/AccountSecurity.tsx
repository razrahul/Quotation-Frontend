import { useState } from "react";
import "./AccountSecurity.scss";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { changePassword } from "../../../redux/action/userActions";

const AccountSecurity = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [open, setOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    const payload = {
      oldPassword,
      newPassword,
    };

    setLoading(true);
    await dispatch(changePassword(payload));
    setLoading(false);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="account-security">
      <h3>Account Security</h3>

      <div className="security-card">
        <div>
          <p>
            <strong>Change Password</strong>
          </p>
          <small>
            Update your password regularly to keep your account secure.
          </small>
        </div>

        <button
          className="change-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? "Cancel" : "Change Password"}
        </button>
      </div>

      {open && (
        <div className="password-form">
          <div className="pass_field">
            <label className="pass_label">Old Password</label>
            <input
            className="pass_input"
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className="pass_field">
            <label className="pass_label">New Password</label>
            <input
            className="pass_input"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="pass_field">
            <label className="pass_label">Confirm Password</label>
            <input
            className="pass_input"
              type="text"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />
          </div>

          <button
            className="pass-btn"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Updating..." : "Save Changes"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountSecurity;
