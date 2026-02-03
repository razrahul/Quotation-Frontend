import InvoiceCard from "./InvoiceCard";
import "./GettingStarted.scss";

const GettingStarted = () => {
  return (
    <section className="getting-started">
      <h3>Getting Started</h3>
      <div className="dash-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <InvoiceCard key={i} primary={i === 0} />
        ))}
      </div>
    </section>
  );
};

export default GettingStarted;
