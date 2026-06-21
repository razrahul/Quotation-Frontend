import { getBrandConfig } from "../../../utils/contex";
import "./Terms.scss";

const NEXQUOTE_CONFIG =  getBrandConfig("nexquote");

const termsData = {
  effectiveYear: NEXQUOTE_CONFIG.effectiveYear,
  intro: `Welcome to ${NEXQUOTE_CONFIG.websiteName}! By using our platform to create, customize, and manage business quotations, you agree to comply with our Terms & Conditions. These terms form a legal agreement between you and ${NEXQUOTE_CONFIG.companyName}, so please read them carefully. If you do not accept any part of these terms, we recommend not using our services. Our platform is designed to simplify your quoting process while ensuring ease, speed, and accuracy. By continuing to use the site, you acknowledge that you understand and accept all policies outlined here.`,
  sections: [
    {
      title: "Acceptance of Terms",
      content:
        "You may use our quotation tools only for lawful purposes and in accordance with these terms. You agree not to misuse or attempt to disrupt the functionality, security, or access of our platform.",
    },
    {
      title: "User Responsibilities",
      content:
        "You are responsible for maintaining the confidentiality of your account and ensuring that all information you provide is accurate and up to date. Any misuse or fraudulent activity may result in suspension or termination of your account.",
    },
    {
      title: "Intellectual Property",
      content:
        `All content, including templates, designs, logos, text, and features on this site, are the property of ${NEXQUOTE_CONFIG.companyName} and are protected by intellectual property laws. Unauthorized use or reproduction is strictly prohibited.`,
    },
    {
      title: "Updates and Modifications",
      content:
        "We reserve the right to update or modify these Terms & Conditions at any time. Changes will be posted on this page, and continued use of the platform constitutes acceptance of those changes.",
    },
    {
      title: "Service Availability",
      content:
        "We aim to provide continuous access to our platform. However, we reserve the right to temporarily suspend or restrict access for maintenance, updates, or unforeseen issues without prior notice.",
    },
    {
      title: "Account Termination",
      content:
        "We may suspend or terminate your access if you violate these Terms & Conditions, misuse the platform, or engage in any fraudulent, illegal, or abusive activity.",
    },
    {
      title: "Third-Party Links",
      content:
        "Our platform may contain links to third-party websites or services. We are not responsible for their content, terms, or privacy practices and advise users to review their policies.",
    },
    {
      title: "Disclaimer",
      content:
        "While we strive for accuracy and reliability, we do not guarantee that all features will always work without error. The platform is provided “as-is” without warranties of any kind.",
    },
    {
      title: "Governing Law",
      content:
        `These Terms & Conditions are governed by and construed in accordance with the laws of ${NEXQUOTE_CONFIG.countryState}, and any disputes will be handled in its courts.`,
    },
  ],
};

export default function Terms() {
  return (
    <section className="terms">
      <div className="terms__container">
        <h1>Terms & Conditions</h1>
        <p className="terms__effective">
          Effective from Year: {termsData.effectiveYear}
        </p>

        <p className="terms__intro">{termsData.intro}</p>

        <div className="terms__content">
          {termsData.sections.map((item, index) => (
            <div className="terms__section" key={index}>
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
