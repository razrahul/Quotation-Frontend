import "./AccountSecurity.scss";

const AccountSecurity = () => {
  return (
    <div className="account-security">
      <h3>Account Security</h3>

      <div className="security-card">
        <div>
          <p><strong>Change Password</strong></p>
          <small>
            Update your password regularly to keep your account secure.
          </small>
        </div>

        <button className="change-btn">Change Password</button>
      </div>

      <button className="save-btn">Save Changes</button>
    </div>
  );
};

export default AccountSecurity;
