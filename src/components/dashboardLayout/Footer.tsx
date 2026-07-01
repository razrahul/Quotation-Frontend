import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="app-footer">
      <p className="app-footer__title">Get in touch for any queries or assistance</p>

      <div className="app-footer__contact">
        <a href="tel:+11234567890" className="contact-link">
          <span className="icon">📞</span> +1 (123) 456-7890
        </a>
        <a href="mailto:support@nexquote.com" className="contact-link">
          <span className="icon">✉️</span> support@nexquote.com
        </a>
      </div>

      <small className="app-footer__legal">
        By continuing, you agree to our{" "}
        <Link to="/privacy-policy" className="legal-link">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link to="/terms" className="legal-link">
          Terms of Service
        </Link>
        .
      </small>
    </footer>
  );
};

export default Footer;
