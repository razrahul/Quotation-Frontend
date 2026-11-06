import "./Hero.scss";
import heroImg from "../../../assets/images/hero-invoice.png";

export default function Hero() {
  const scrollToQuotation = () => {
    const el = document.getElementById("quotation-section") || document.querySelector(".quotation-page");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: 500, behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="left">
          <h1>
            Free Online Quotation Generator – 
            Create Professional Quotes in Minutes
          </h1>

          <p>
            Create accurate, professional, and ready-to-share business quotations
            with NexQuote&apos;s free online quotation generator. Easily add business
            details, customize quotation templates, calculate pricing and taxes,
            and download high-quality PDF quotations in minutes. Whether
            you&apos;re a freelancer, startup, small business owner, or service
            provider, our quotation maker helps you simplify your quoting
            process without complicated software or additional costs.
          </p>

          <button onClick={scrollToQuotation} className="cta-btn">
            Create a Free Quotation Now →
          </button>
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
