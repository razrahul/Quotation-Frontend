import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/profile">Profile Settings</NavLink>
    </aside>
  );
};

export default Sidebar;
