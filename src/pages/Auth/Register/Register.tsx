import { Link } from "react-router-dom";
import "./Register.scss";
import { useState } from "react";
import { createUser } from "../../../redux/action/userActions";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import Navbar from "../../../components/layout/Navbar/Navbar";

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

  const dispatch = useDispatch<AppDispatch>();

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
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="India">🇮🇳 India</option>
                <option value="USA">🇺🇸 USA</option>
                <option value="UK">🇬🇧 UK</option>
              </select>

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
    </>
  );
}
