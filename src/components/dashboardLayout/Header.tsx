import "./Header.scss";
import { Link } from "react-router-dom";
import UserMenu from "../layout/Common/UserMenu";

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header = ({ toggleSidebar, isSidebarOpen }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header__left">
        <button
          className="sidebar-toggle"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          {isSidebarOpen ? "✕" : "☰"}
        </button>
        <div className="logo">
          <Link to="/nexquote">
            Nex<span>Quote</span>
          </Link>
        </div>
      </div>

      <UserMenu />
    </header>
  );
};

export default Header;
