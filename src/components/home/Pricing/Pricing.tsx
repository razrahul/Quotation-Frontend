import "./Pricing.scss";
import rupee from "../../../assets/images/pricing-rupee.png";

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="pricing__container">
        <h2 className="pricing__title">
          How Much Does It Cost to Create Quotation?
          <span className="pricing__underline" />
        </h2>

        <div className="pricing__box">
          <div className="pricing__image">
            <img src={rupee} alt="Pricing Illustration" />
          </div>

          <div className="pricing__content">
            <h3>₹0 / Forever</h3>
            <p className="plan">Free Plan</p>

            <p className="desc">
              Our Free Plan gives you everything you need to generate clean,
              branded, and ready-to-share quotations—without hidden charges.
            </p>

            <ul>
              <li>Create unlimited quotations</li>
              <li>Export PDF anytime</li>
              <li>Add custom branding</li>
              <li>Manage & track quotations</li>
              <li>Share via link or email</li>
            </ul>

            <button>
              <span>+</span> Create New Quotation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
