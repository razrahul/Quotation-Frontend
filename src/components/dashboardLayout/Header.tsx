import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Nex<span>Quote</span></div>

      <div className="user" onClick={() => setOpen(!open)}>
        <div className="avatar">N</div>
        {open && (
          <div className="dropdown">
            <button>Profile</button>
            <button>Settings</button>
            <button className="danger">Log out</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
