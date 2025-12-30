import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../../assets/logo.png";

export default function Navbar() {
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

          <li className="btn">
            <NavLink to="/login">Register</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
