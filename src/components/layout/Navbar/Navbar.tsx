import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../../assets/logo.png";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import UserMenu from "../Common/UserMenu";

export default function Navbar() {
  const { isAuthenticated, authChecked } = useSelector(
    (state: RootState) => state.auth,
  );

  const showUserMenu = isAuthenticated && authChecked;
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>

        <ul className="navbar__menu">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>

          {/* 🔐 Auth based UI */}
          <li className="auth-area">
            {showUserMenu ? (
              <UserMenu />
            ) : (
              <NavLink to="/register" className="btn">
                Register
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
