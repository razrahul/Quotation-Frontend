import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../../assets/logo.png";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import UserMenu from "../Common/UserMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, authChecked } = useSelector(
    (state: RootState) => state.auth,
  );

  const showUserMenu = isAuthenticated && authChecked;
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/nexquote" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>

        <div className="navbar__mobile-right">
          {showUserMenu && <UserMenu />}
          <button
            className="navbar__toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`} />
            <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`} />
            <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`} />
          </button>
        </div>

        <ul className={`navbar__menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/nexquote" end onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact-us" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </NavLink>
          </li>

          {showUserMenu && (
            <li>
              <NavLink to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </NavLink>
            </li>
          )}

          {/* 🔐 Auth based UI */}
          <li className="auth-area">
            {showUserMenu ? (
              <div className="desktop-user-menu">
                <UserMenu />
              </div>
            ) : (
              <NavLink
                to="/register"
                className="btn"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
