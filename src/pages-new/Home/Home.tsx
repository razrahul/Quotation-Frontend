import Navbar from "@components-new/Layout/Navbar";
import Hero from "@components-new/Home/Hero";
import KeyFeatures from "@components-new/Home/KeyFeatures";
import MeetTechtime from "@components-new/Home/MeetTechtime";
import OurProducts from "@components-new/Home/OurProducts";
import WhyChoose from "@components-new/Home/WhyChoose";
import FeaturesDifference from "@components-new/Home/FeaturesDifference";
import Footer from "@components-new/Layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="grow">
        <Hero />
        <KeyFeatures />
        <MeetTechtime />
        <OurProducts />
        <WhyChoose />
        <FeaturesDifference />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}