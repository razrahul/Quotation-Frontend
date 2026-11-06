import "./Footer.scss";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left */}
        <div className="footer__brand">
          <img src={logo} alt="NexQuote" />
          <p>
            Simplifying the way businesses create and manage quotations. Trusted
            by thousands of professionals for fast, customizable, and reliable
            quote generation.
          </p>

          <div className="footer__socials">
            <span>🌐</span>
            <span>in</span>
            <span>X</span>
          </div>

          <small className="desktop-copy">
            © 2026 NexQuote | All rights reserved.
          </small>
        </div>

        {/* Company */}
        <div className="footer__col footer__col--company">
          <h4>Company</h4>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>{" "}
            </Link>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer__col footer__col--products">
          <h4>Products</h4>
          <ul>
            <a
              href="https://toolsbuzz.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>ToolsBuzz</li>
            </a>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col footer__col--contact">
          <h4>Contact Us</h4>
          <ul className="footer__contact">
            <li>
              📍001, Bhama Shah Dwar Road, Malang Asthan, Bhagwanpur,
              Muzaffarpur, Bihar, 842001.
            </li>
            <li>✉ support@techtimesoftware.com</li>
            <li>📞 +91 9876543210</li>
          </ul>
        </div>

        <small className="mobile-copy">
          © 2026 NexQuote | All rights reserved.
        </small>
      </div>
    </footer>
  );
}
