import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";
import type { AppDispatch, RootState } from "../../../redux/store";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./UserMenu.scss";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Safety guard for authentication (must be placed after hooks declarations)
  if (!isAuthenticated || !user) return null;

  const logoutHandler = () => {
    localStorage.removeItem("tt_token");
    dispatch(logout());
    navigate("/");
  };

  // Determine if we are inside the dashboard or profile panels
  const isDashboard =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/profile");

  return (
    <div ref={menuRef} className={`user-menu ${open ? "is-open" : ""}`}>
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
        <div className="dropdown" onClick={() => setOpen(false)}>
          {!isDashboard && (
            <Link to="/dashboard" className="menu-item">
              DashBoard
            </Link>
          )}

          <Link to="/profile" className="menu-item">
            Profile
          </Link>

          <Link to="/profile/security" className="menu-item">
            Security
          </Link>

          <button
            className="menu-item danger"
            onClick={logoutHandler}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
