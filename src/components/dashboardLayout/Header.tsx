import { useState } from "react";
import "./Header.scss";
import { logout } from "../../redux/slices/authSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { user } = useSelector((state: RootState) => state.auth);

  const logoutHandler = () => {
    localStorage.removeItem("tt_token");
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          Nex<span>Quote</span>
        </Link>
      </div>

      <div className={`user ${open ? "is-open" : ""}`}>
        <button
          className="avatar"
          type="button"
          aria-label="Open user menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {(user?.name?.[0] ?? "U").toUpperCase()}
        </button>

        {open && (
          <div className="dropdown">
            <Link to="/profile" className="menu-item">
              Profile
            </Link>

            <Link to="/profile/security" className="menu-item">
              Security
            </Link>

            <button
              className="menu-item danger"
              type="button"
              onClick={logoutHandler}
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
