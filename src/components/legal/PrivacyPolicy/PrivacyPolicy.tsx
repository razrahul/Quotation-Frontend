import { NEXQUOTE_CONFIG } from "../../../utils/contex";
import "./PrivacyPolicy.scss";

const privacyData = {
  effectiveYear: NEXQUOTE_CONFIG.effectiveYear,
  intro: `Welcome to ${NEXQUOTE_CONFIG.websiteName}! By using our platform to create, customize, and manage business quotations, you agree to comply with our Terms & Conditions. These terms form a legal agreement between you and ${NEXQUOTE_CONFIG.companyName}, so please read them carefully. If you do not accept any part of these terms, we recommend not using our services. Our platform is designed to simplify your quoting process while ensuring ease, speed, and accuracy. By continuing to use the site, you acknowledge that you understand and accept all policies outlined here.`,
  sections: [
    {
      title: "Information We Collect",
      content:
        "When you sign up or use our platform, we collect personal details such as your name, email address, business name, and contact number. We also gather usage data including your IP address, device information, browser type, and pages you visit. Any details you enter into quotation templates, like client names or prices, are also securely stored.",
    },
    {
      title: "How Your Information is Used",
      content:
        "We use your data to operate and improve our services. This includes sending account-related notifications, helping you generate and manage quotations, and ensuring platform functionality. We may also use anonymized data to understand user behavior and enhance your experience.",
    },
    {
      title: "Data Security",
      content:
        "Your information is stored on secure servers and protected by encryption and industry-standard security protocols. While we strive for full protection, no online system is entirely immune to risks. We continuously monitor and update our practices to maintain data integrity.",
    },
    {
      title: "Data Sharing",
      content:
        "We do not sell or rent your personal data. We may share information with trusted third-party service providers (e.g., hosting, analytics) only when necessary and under strict confidentiality.",
    },
    {
      title: "Cookies and Tracking Technologies",
      content:
        "Cookies help us recognize you, remember your preferences, and enhance site performance. You can manage your cookie settings in your browser, although disabling them may limit certain features.",
    },
    {
      title: "Your Rights",
      content:
        "You have full control over your personal data. You can access, edit, or delete your information at any time. You may also opt out of non-essential communications and request a copy of the data we hold about you.",
    },
    {
      title: "Third-Party Links",
      content:
        "Our platform may include links to other websites. We are not responsible for the content or privacy practices of those third-party sites.",
    },
    {
      title: "Changes to This Policy",
      content:
        "We may update this Privacy Policy occasionally. If we make significant changes, we’ll notify you via email or platform alerts. Continued use of our services means you agree to the updated policy.",
    },
    {
      title: "Contact Us",
      content:
        `For questions or concerns about your privacy, feel free to contact us at [${NEXQUOTE_CONFIG.supportEmail}].`,
    },
  ],
};

export default function PrivacyPolicy() {
  return (
    <section className="privacy">
      <div className="privacy__container">
        <h1>Privacy Policy</h1>
        <p className="privacy__effective">
          Effective from Year: {privacyData.effectiveYear}
        </p>

        <p className="privacy__intro">{privacyData.intro}</p>

        <div className="privacy__content">
          {privacyData.sections.map((item, index) => (
            <div className="privacy__section" key={index}>
              <h3>
                {index + 1}. {item.title}
              </h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
