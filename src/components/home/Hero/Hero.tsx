import "./Hero.scss";
import heroImg from "../../../assets/images/hero-invoice.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="left">
          <h1>
            Fast & Accurate Quotes <br />
            for Your Business
          </h1>

          <p>
            Generate accurate, ready-to-send quotations anytime, anywhere.
            Customize templates to match your needs and simplify your quoting
            process—all for free.
          </p>

          <button className="cta-btn">Create a Quote Now</button>
        </div>

        <div className="right">
          <div className="image-wrap">
            <img src={heroImg} alt="Invoice Preview" />
          </div>
        </div>
      </div>
    </section>
  );
}
