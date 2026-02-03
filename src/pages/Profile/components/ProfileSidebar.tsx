import { NavLink } from "react-router-dom";
import "./ProfileSidebar.scss";

const ProfileSidebar = () => {
  return (
    <aside className="profile-sidebar">
      <NavLink end to="/profile">
        Personal Information
      </NavLink>

      <NavLink to="/profile/security">
        Account Security
      </NavLink>

      <button className="delete-btn">
        Delete Account
      </button>
    </aside>
  );
};

export default ProfileSidebar;
