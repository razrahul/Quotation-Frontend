import { Outlet } from "react-router-dom";
import ProfileSidebar from "./components/ProfileSidebar";
import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <ProfileSidebar />
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
