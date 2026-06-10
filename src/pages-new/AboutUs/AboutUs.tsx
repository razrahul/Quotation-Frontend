import Navbar from "@components-new/Layout/Navbar";
import Footer from "@components-new/Layout/Footer";
import AboutHero from "@components-new/About/AboutHero";
import WhoWeAre from "@components-new/About/WhoWeAre";
import OurVision from "@components-new/About/OurVision";
import OurMission from "@components-new/About/OurMission";
import FeaturesDifference from "@components-new/Home/FeaturesDifference";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation Header */}
      <Navbar />

      <main className="grow">
        {/* Section 1: Hero */}
        <AboutHero />

        {/* Section 2: Who Are We */}
        <WhoWeAre />

        {/* Section 3: Our Vision */}
        <OurVision />

        {/* Section 4: Our Mission */}
        <OurMission />

        {/* Section 5: Features That Make a Difference */}
        <FeaturesDifference />
      </main>

      {/* Section 6: Footer */}
      <Footer />
    </div>
  );
}

