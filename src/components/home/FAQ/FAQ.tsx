import { useState } from "react";
import "./FAQ.scss";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is a Quotation Generator System?",
    answer:
      "A Quotation Generator System is an online tool designed to help businesses create professional, accurate, and customized quotations quickly. It automates the process of adding client details, product descriptions, pricing, and terms, saving time and reducing manual errors.",
  },
  {
    id: 2,
    question: "Why should I use a Quotation Generator?",
    answer:
      "It saves time, reduces errors, and helps you generate professional quotations instantly without manual effort.",
  },
  {
    id: 3,
    question: "Is it easy to use for beginners?",
    answer:
      "Yes, the interface is simple and user-friendly, making it easy even for beginners to create quotations.",
  },
  {
    id: 4,
    question: "Can I customize my quotations?",
    answer:
      "Yes, you can customize fields, branding, notes, and terms as per your business requirements.",
  },
  {
    id: 5,
    question: "Is the Quotation Generator secure?",
    answer:
      "Yes, your data is protected with secure servers and proper access controls.",
  },
  {
    id: 6,
    question: "Can I download or share the quotation?",
    answer:
      "You can download quotations as PDFs or share them via link or email.",
  },
  {
    id: 7,
    question: "Does it support multiple currencies and tax calculations?",
    answer:
      "Yes, it supports multi-currency quotations along with GST and tax calculations.",
  },
];

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq">
      <div className="faq__container">
        <h2 className="faq__title">
          Frequently Asked Questions
          <span className="faq__underline" />
        </h2>

        <div className="faq__list">
          {faqs.map((item) => (
            <div
              key={item.id}
              className={`faq__item ${
                activeId === item.id ? "active" : ""
              }`}
            >
              <button
                className="faq__question"
                onClick={() => toggleFAQ(item.id)}
              >
                {item.question}
                <span className="faq__icon">
                  {activeId === item.id ? "−" : "›"}
                </span>
              </button>

              <div className="faq__answer">
                <p>A: {item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
