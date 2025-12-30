import "./Features.scss";

// 👇 Icons yahan import karna (Figma se export karke)
import quotationIcon from "../../../assets/images/features/quotation.png";
import manageIcon from "../../../assets/images/features/manage.png";
import shareIcon from "../../../assets/images/features/share.png";
import securityIcon from "../../../assets/images/features/security.png";
import pdfIcon from "../../../assets/images/features/pdf.png";
import uiIcon from "../../../assets/images/features/ui.png";
import freeIcon from "../../../assets/images/features/free.png";
import currencyIcon from "../../../assets/images/features/currency.png";
import discountIcon from "../../../assets/images/features/discount.png";
import attachIcon from "../../../assets/images/features/attach.png";
import feedbackIcon from "../../../assets/images/features/feedback.png";
import customIcon from "../../../assets/images/features/custom.png";
import itemIcon from "../../../assets/images/features/item.png";
import notesIcon from "../../../assets/images/features/notes.png";
import bulkIcon from "../../../assets/images/features/bulk.png";

const features = [
  { icon: quotationIcon, title: "Quotation Creation", desc: "Craft simple yet professional quotations effortlessly. Our intuitive interface ensures polished quotes without hassle." },
  { icon: manageIcon, title: "Quotation Management", desc: "Manage all your quotations from a single dashboard. Edit, duplicate, and track status easily." },
  { icon: shareIcon, title: "Quotation Sharing", desc: "Share quotations instantly via email, link, or PDF for faster communication." },

  { icon: securityIcon, title: "Data Security", desc: "Your data is protected with strong encryption and secure servers." },
  { icon: pdfIcon, title: "PDF Export", desc: "Download well-structured, high-quality PDF quotations in one click." },
  { icon: uiIcon, title: "User-Friendly Interface", desc: "Clean and intuitive interface designed to be simple and fast." },

  { icon: freeIcon, title: "Free and Cost-Effective", desc: "Enjoy premium-quality features without paying anything." },
  { icon: currencyIcon, title: "Multi-Currency Quotations", desc: "Create quotations in any currency to work with global clients." },
  { icon: discountIcon, title: "Discount Column", desc: "Add fixed or percentage-based discounts easily." },

  { icon: attachIcon, title: "Embedded Attachments", desc: "Attach product images or documents directly inside quotations." },
  { icon: feedbackIcon, title: "Client Feedback", desc: "Allow clients to review and leave feedback on your quotation." },
  { icon: customIcon, title: "Custom Fields", desc: "Add extra fields to personalize every quotation." },

  { icon: itemIcon, title: "Itemized Listings", desc: "Break quotations into detailed line items with quantities and prices." },
  { icon: notesIcon, title: "Custom Notes and Terms", desc: "Include personalized notes and payment terms." },
  { icon: bulkIcon, title: "Bulk Creation", desc: "Create multiple quotations at once to save time." },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>
          Key Features We Provide
          <span className="underline" />
        </h2>

        <div className="grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <img src={f.icon} alt={f.title} />
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
