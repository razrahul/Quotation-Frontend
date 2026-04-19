import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../redux/store";
import { loginUser } from "../../../redux/action/userActions";
import Navbar from "../../../components/layout/Navbar/Navbar";

type LoginFormSubmit = {
  email: string;
  password: string;
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const naviagte = useNavigate();

  const redirectTo = location.state?.redirectTo;
  const quotation = location.state?.quotation;
  const originalQuotation = location.state?.originalQuotation;
  const postLoginAction = location.state?.postLoginAction;

  const dispatch = useDispatch<AppDispatch>();

  const { isAuthenticated, success } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    if (!isAuthenticated) return;

    if (redirectTo) {
      naviagte(redirectTo, {
        state: {
          quotation,
          originalQuotation,
          postLoginAction,
        },
      });
    } else {
      naviagte("/dashboard");
    }
  }, [isAuthenticated, redirectTo, quotation, originalQuotation, postLoginAction, naviagte]);

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log("🚀 LOGIN SUBMIT:", email, password);
    const LoginPayload: LoginFormSubmit = {
      email,
      password,
    };

    setLoading(true);
    await dispatch(loginUser(LoginPayload));
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="authlogin-wrapper">
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

            <form className="login-form" onSubmit={handleLoginSubmit}>
              <div className="field">
                <span className="icon">✉️</span>
                <input
                  type="email"
                  placeholder="Your Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="field">
                <span className="icon">🔒</span>
                <input
                  type={showpassword ? "text" : "password"}
                  placeholder="Password *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="eye"
                  onClick={() => setShowPassword((prev) => !prev)}
                  style={{ cursor: "pointer" }}
                  title={showpassword ? "Hide password" : "Show password"}
                >
                  {showpassword ? "🙈" : "👁️"}
                </span>
              </div>

              <div className="login-options">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  Remember me
                </label>

                <span className="forgot">Forgot Password</span>
              </div>

              <button className="btn-primary" type="submit" disabled={loading}>
                {loading ? "Logging In..." : "Log In"}
              </button>

              {success && !redirectTo && (
                <p className="login-success">Login successful</p>
              )}

              <p className="switch">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  state={
                    redirectTo && quotation
                      ? { redirectTo, quotation, originalQuotation, postLoginAction }
                      : undefined
                  }
                >
                  Sign up now
                </Link>
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
    </>
  );
}
