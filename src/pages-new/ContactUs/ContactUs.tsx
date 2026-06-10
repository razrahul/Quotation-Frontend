import Navbar from "@components-new/Layout/Navbar";
import ContactHero from "@components-new/Home/Contact/ContactHero";
import OurVision from "@components-new/About/OurVision";
import ContactTeam from "@components-new/Home/Contact/ContactTeam";
import ContactForm from "@components-new/Home/Contact/ContactForm";
import Footer from "@components-new/Layout/Footer";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="grow">
        <ContactHero />
        
        {/* Render the pre-built OurVision section */}
        <OurVision />

        <ContactTeam />

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

