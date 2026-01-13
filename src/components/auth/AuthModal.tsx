import "./AuthModal.scss";
import { useNavigate } from "react-router-dom";

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="auth-modal">
      <div className="auth-modal__box">
        <button className="close" onClick={onClose}>✕</button>

        <h3>Create an Account</h3>
        <p>
          Register to create and manage professional quotations.
        </p>

        <button
          className="btn-primary"
          onClick={() => navigate("/register")}
        >
          Register Now
        </button>

        <button className="skip" onClick={onClose}>
          Skip for now
        </button>
      </div>
    </div>
  );
}
