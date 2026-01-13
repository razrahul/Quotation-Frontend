import { Link } from "react-router-dom";
import "./Login.scss";

export default function Login() {
  return (
    <div className="auth-wrapper">
      <div className="login-page">
        {/* LEFT PANEL */}
        <div className="login-left">
          <div className="login-left__content">
            <h1>
              Hello <br /> Welcome Back!
            </h1>
            <p>
              Log in to manage your quotations and customize templates
              effortlessly.
            </p>
          </div>

          {/* decorative shapes */}
          <span className="circle circle--top" />
          <span className="circle circle--bottom" />
          <span className="dots" />
        </div>

        {/* RIGHT PANEL */}
        <div className="login-right">
          <h2>Login to Your Account</h2>

          <form className="login-form">
            <div className="field">
              <span className="icon">✉️</span>
              <input type="email" placeholder="Your Email *" />
            </div>

            <div className="field">
              <span className="icon">🔒</span>
              <input type="password" placeholder="Password *" />
              <span className="eye">👁️</span>
            </div>

            <div className="login-options">
              <label className="checkbox">
                <input type="checkbox" />
                Remember me
              </label>

              <span className="forgot">Forgot Password</span>
            </div>

            <button className="btn-primary">Log In</button>

            <p className="switch">
              Don’t have an account? <Link to="/register">Sign up now</Link>
            </p>

            <div className="divider">OR</div>

            <button type="button" className="google-btn">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
              />
              <span>Sign in with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
