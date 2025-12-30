import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/home/Hero/Hero";
import Features from "../../components/home/Features/Features";
import Pricing from "../../components/home/Pricing/Pricing";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import FAQ from "../../components/home/FAQ/FAQ";
import GetInTouch from "../../components/home/GetInTouch/GetInTouch";
import Footer from "../../components/layout/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <GetInTouch />
      <Footer />
    </>
  );
}
