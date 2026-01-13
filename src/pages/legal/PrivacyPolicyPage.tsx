import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import GetInTouch from "../../components/home/GetInTouch/GetInTouch";
import PrivacyPolicy from "../../components/legal/PrivacyPolicy/PrivacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      <GetInTouch />
      <Footer />
    </>
  );
}