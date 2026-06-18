import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Register.scss";
import { useEffect, useState, useRef } from "react";
import { createUser } from "../../../redux/action/userActions";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import Navbar from "../../../components/layout/Navbar/Navbar";
import type { RootState } from "../../../redux/store";
import { COUNTRY_OPTIONS } from "../../../utils/countryOptions";

type RegisterFormSubmit = {
  name: string;
  email: string;
  password: string;
  country: string;
};

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("India");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const location = useLocation();
  const naviagte = useNavigate();

  const redirectTo = location.state?.redirectTo;
  const quotation = location.state?.quotation;
  const originalQuotation = location.state?.originalQuotation;
  const postLoginAction = location.state?.postLoginAction;

  const dispatch = useDispatch<AppDispatch>();

  const { isAuthenticated, success } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuthenticated && redirectTo) {
      naviagte(redirectTo, {
        state: {
          quotation,
          originalQuotation,
          postLoginAction,
        },
      });
    }
  }, [isAuthenticated, redirectTo, quotation, originalQuotation, postLoginAction, naviagte]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agree) {
      alert("Please accept Terms & Conditions to continue");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    const payload: RegisterFormSubmit = {
      name,
      email,
      password,
      country,
    };
    setLoading(true);
    await dispatch(createUser(payload));
    setLoading(false);
    // console.log(payload);

    // ✅ yahin API / redux action call hoga
    // dispatch(createUser(payload));
  };

  return (
    <>
      <Navbar />
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

            <form className="register-form" onSubmit={handleSubmit}>
              <div className="field-select-container" ref={dropdownRef}>
                <div
                  className="field-select-trigger"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  <span className="icon">🌍</span>
                  <span className="selected-value">{country || "Select Country *"}</span>
                  <span className={`arrow ${isDropdownOpen ? "arrow--open" : ""}`}>▼</span>
                </div>
                {isDropdownOpen && (
                  <div className="custom-dropdown-list">
                    {COUNTRY_OPTIONS.map((countryOption) => (
                      <div
                        key={countryOption.value}
                        className={`custom-dropdown-item ${country === countryOption.value ? "active" : ""}`}
                        onClick={() => {
                          setCountry(countryOption.value);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {countryOption.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="field">
                <span className="icon">👤</span>
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="field">
                <span className="icon">✉️</span>
                <input
                  type="email"
                  placeholder="Your Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="field">
                <span className="icon">🔒</span>
                <input
                  type="password"
                  placeholder="Password *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <small className="error">At least 8 characters long</small>

              <div className="field">
                <span className="icon">🔒</span>
                <input
                  type="text"
                  placeholder="Confirm Password *"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <span>
                  I agree to the <Link to="/terms">Terms & Conditions</Link> and{" "}
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </span>
              </label>

              <button className="btn-primary" type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </button>

              {success && !redirectTo && (
                <p className="register-success">Register successful</p>
              )}

              <p className="switch">
                Already a user?{" "}
                <Link
                  to="/login"
                  state={
                    redirectTo && quotation
                      ? { redirectTo, quotation, originalQuotation, postLoginAction }
                      : undefined
                  }
                >
                  Login Here
                </Link>
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
    </>
  );
}
