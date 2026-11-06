import Navbar from "@components-new/Layout/Navbar";
import ContactHero from "@components-new/Home/Contact/ContactHero";
import OurVision from "@components-new/About/OurVision";
import ContactTeam from "@components-new/Home/Contact/ContactTeam";
import ContactForm from "@components-new/Home/Contact/ContactForm";
import Footer from "@components-new/Layout/Footer";

export default function ContactUs() {
  const contactVisionPoints = [
    {
      title: "All-in-One Quotation Solution",
      description:
        "Our vision is to provide a complete online quotation solution that helps businesses create, customize, download, and share professional quotations from one convenient platform. We strive to simplify everyday quotation tasks and make business documentation more organized and efficient.",
    },
    {
      title: "Dedicated Quotation Dashboard",
      description:
        "We envision a dedicated business dashboard that allows users to manage customer quotations, organize important documents, and access quotation information conveniently. Our goal is to make quotation tracking and management easier for businesses of all sizes.",
    },
    {
      title: "Data Security & Reliability",
      description:
        "Protecting business information is an important part of our long-term vision. We aim to build a dependable online quotation platform that prioritizes responsible data handling, reliable performance, and a trustworthy user experience.",
    },
    {
      title: "Accessibility for Every Business",
      description:
        "We believe professional business tools should be accessible to everyone. Our vision is to make online quotation generation simple and affordable for freelancers, entrepreneurs, startups, small businesses, and established organizations without requiring advanced technical knowledge.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="grow">
        <ContactHero />

        {/* Section 2: Our Vision (Contact Us specific) */}
        <OurVision
          smallLabel="OUR VISION & COMMITMENT"
          heading="Our Vision – Making Business Quotation Management Simple & Accessible"
          intro="At TechTime Software, our vision is to simplify business quotation creation through accessible, reliable, and user-friendly digital solutions. We aim to empower freelancers, startups, and growing businesses with practical tools that reduce manual work, improve productivity, and make professional quotation management easier."
          points={contactVisionPoints}
        />

        {/* Section 3: Meet Our Team */}
        <ContactTeam />

        {/* Section 4: Contact Form */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
