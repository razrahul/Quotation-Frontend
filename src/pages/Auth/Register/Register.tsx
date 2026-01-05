import { Link } from "react-router-dom";
import "./Register.scss";

export default function Register() {
  return (
    <div className="auth-wrapper">
      <div className="register-page">
        {/* LEFT PANEL */}
        <div className="register-left">
          <div className="register-left__content">
            <h1>
              Get Started <br /> with NexQuote
            </h1>
            <p>
              Sign up to create and share professional quotations in seconds.
            </p>
          </div>

          <span className="circle circle--top" />
          <span className="circle circle--bottom" />
          <span className="dots" />
        </div>

        {/* RIGHT PANEL */}
        <div className="register-right">
          <h2>Register</h2>

          <form className="register-form">
            <select>
              <option>🇮🇳 India</option>
            </select>

            <div className="field">
              <span className="icon">👤</span>
              <input type="text" placeholder="Your Name *" />
            </div>

            <div className="field">
              <span className="icon">✉️</span>
              <input type="email" placeholder="Your Email *" />
            </div>

            <div className="field">
              <span className="icon">🔒</span>
              <input type="password" placeholder="Password *" />
            </div>
            <small className="error">At least 8 characters long</small>

            <div className="field">
              <span className="icon">🔒</span>
              <input type="password" placeholder="Confirm Password *" />
            </div>

            <label className="checkbox">
              <input type="checkbox" /> I agree to the Terms & Privacy Policy
            </label>

            <button className="btn-primary">Register</button>

            <p className="switch">
              Already a user? <Link to="/login">Login Here</Link>
            </p>

            <div className="divider">OR</div>

            <button type="button" className="google-btn">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
              />
              <span>Continue with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
