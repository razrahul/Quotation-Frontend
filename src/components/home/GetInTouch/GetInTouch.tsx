import { useNavigate } from "react-router-dom";
import "./GetInTouch.scss";

export default function GetInTouch() {
  const navigate = useNavigate();
  return (
    <section className="getintouch">
      <div className="getintouch__overlay">
        <div className="getintouch__content">
          <div>
            <h2>Get in Touch</h2>
            <p>
              Have a question or need assistance? Whether it’s a feature
              request, support issue, or partnership inquiry — we’d love to hear
              from you.
            </p>
          </div>

          <button
            className="getintouch__btn"
            onClick={() => navigate("/contact-us")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
