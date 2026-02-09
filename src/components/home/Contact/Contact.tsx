import { Link } from "react-router-dom";
import "./Contact.scss";

const contactInfo = [
  {
    id: 1,
    icon: "📍",
    text: "123 Business Avenue, Suite 456, City, Country",
  },
  {
    id: 2,
    icon: "✉️",
    text: "support@nexquote.com",
  },
  {
    id: 3,
    icon: "📞",
    text: "+1 (123) 456-7890",
  },
];

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        {/* LEFT */}
        <div className="contact__left">
          <div className="contact__left_content">
            <h2>Get in Touch</h2>
            <p className="contact__desc">
              Have a question or need support? We’re here to help—just fill out
              the form and we’ll get back to you shortly.
            </p>

            <ul className="contact__info">
              {contactInfo.map((item) => (
                <li key={item.id}>
                  <span className="icon">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact__right">
          <div className="contact__right_content">
            <h3>Contact Us</h3>

            <form className="contact__form">
              <div className="row">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Company" />
              </div>

              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <textarea placeholder="Your Message" rows={5} />

              <button type="submit" className="btn-primary">
                Send Message
              </button>

              <p className="contact-form__privacy">
                By submitting this form, you agree to our{" "}
                <Link to="/terms">
                  <strong>Terms of Service</strong>
                </Link>{" "}
                and{" "}
                <Link to="/privacy-policy">
                  <strong>Privacy Policy</strong>
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
