import "./Disclaimer.scss";

const disclaimerData = {
  effectiveYear: 2025,
  content: [
    `The information provided by NexQuote on this website is for general informational purposes only. While we strive to ensure accuracy and reliability, we make no guarantees of any kind regarding the completeness, accuracy, or suitability of the information and tools available on this platform.`,

    `All quotations generated through our platform are based on user-provided inputs. We do not validate, audit, or assume responsibility for the accuracy of this data. It is the sole responsibility of the user to ensure correctness, including pricing, taxes, and legal compliance.`,

    `NexQuote does not provide legal, tax, or financial advice. Any reliance you place on the information or tools provided is strictly at your own risk. We strongly recommend consulting qualified professionals for matters related to taxation, accounting, or regulatory compliance such as GST or other applicable laws.`,

    `We shall not be held liable for any loss, damage, or inconvenience arising from the use or misuse of our services, including errors in generated documents or business decisions made based on platform outputs.`,

    `By using this website, you acknowledge and accept that you are solely responsible for how you use the information and tools available and agree to the terms outlined in this disclaimer.`,
  ],
};

export default function Disclaimer() {
  return (
    <section className="disclaimer">
      <div className="disclaimer__container">
        <h1>Disclaimer</h1>
        <p className="disclaimer__effective">
          Effective from Year: {disclaimerData.effectiveYear}
        </p>

        <div className="disclaimer__content">
          {disclaimerData.content.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
