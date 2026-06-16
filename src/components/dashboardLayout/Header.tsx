import "./Header.scss";
import { Link } from "react-router-dom";
import UserMenu from "../layout/Common/UserMenu";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/nexquote">
          Nex<span>Quote</span>
        </Link>
      </div>

      <UserMenu />
    </header>
  );
};

export default Header;
