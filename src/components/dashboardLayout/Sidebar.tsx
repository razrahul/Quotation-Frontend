import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <NavLink to="/dashboard" onClick={closeSidebar}>Dashboard</NavLink>
      <NavLink to="/profile" onClick={closeSidebar}>Profile Settings</NavLink>
    </aside>
  );
};

export default Sidebar;
