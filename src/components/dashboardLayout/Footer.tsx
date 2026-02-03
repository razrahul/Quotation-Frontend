import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>Get in touch for any queries or assistance</p>

      <div className="footer-contact">
        <span>📞 +1 (123) 456-7890</span>
        <span>✉️ support@nexquote.com</span>
      </div>

      <small>
        By continuing, you agree to our Privacy Policy and Terms of Service.
      </small>
    </footer>
  );
};

export default Footer;
