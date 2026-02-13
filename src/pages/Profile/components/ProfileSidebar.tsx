import { NavLink } from "react-router-dom";
import "./ProfileSidebar.scss";
import { useState } from "react";
import DeleteAccountModal from "./DeleteAccountModal";

const ProfileSidebar = () => {
  const [openDelete, setOpenDelete] = useState(false);
  return (
    <>
      <aside className="profile-sidebar">
        <NavLink end to="/profile">
          Personal Information
        </NavLink>

        <NavLink to="/profile/security">Account Security</NavLink>

        <button className="delete-btn" onClick={() => setOpenDelete(true)}>
          Delete Account
        </button>
      </aside>

      {/* Model */}
      {openDelete && (
        <DeleteAccountModal onClose={() => setOpenDelete(false)} />
      )}
    </>
  );
};

export default ProfileSidebar;
