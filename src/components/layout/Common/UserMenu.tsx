import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";
import type { AppDispatch, RootState } from "../../../redux/store";
import { Link, useNavigate } from "react-router-dom";
import "./UserMenu.scss";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("tt_token");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="user-menu" onClick={() => setOpen(!open)}>
      <div className="avatar">
        {user?.name?.[0] ?? "U"}
      </div>

      {open && (
        <div className="dropdown">
          <Link to="/dashboard" className="menu-item">
            DashBoard
          </Link>

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
