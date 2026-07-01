import "./Footer.scss";
import logo from "../../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left */}
        <div className="footer__brand">
          <img src={logo} alt="NexQuote" />
          <p>
            Simplifying the way businesses create and manage quotations.
            Trusted by thousands of professionals for fast, customizable,
            and reliable quote generation.
          </p>

          <div className="footer__socials">
            <span>🌐</span>
            <span>in</span>
            <span>X</span>
          </div>

          <small className="desktop-copy">
            © 2025 NexQuote | All rights reserved
          </small>
        </div>

        {/* Company */}
        <div className="footer__col footer__col--company">
          <h4>Company</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer__col footer__col--products">
          <h4>Products</h4>
          <ul>
            <li>ToolsBuzz</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col footer__col--contact">
          <h4>Contact Us</h4>
          <ul className="footer__contact">
            <li>📍 123 Business Avenue, Suite 456, City, Country</li>
            <li>✉ support@nexquote.com</li>
            <li>📞 +1 (123) 456-7890</li>
          </ul>
        </div>

        <small className="mobile-copy">
          © 2025 NexQuote | All rights reserved
        </small>
      </div>
    </footer>
  );
}
