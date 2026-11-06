import Navbar from "../../components-new/Layout/Navbar";
import Footer from "../../components-new/Layout/Footer";
// import GetInTouch from "../../components/home/GetInTouch/GetInTouch";
import PrivacyPolicy from "../../components/legal/PrivacyPolicy/PrivacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      {/* <GetInTouch /> */}
      <Footer />
    </>
  );
}