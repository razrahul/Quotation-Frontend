import Navbar from "@components-new/Layout/Navbar";
import Footer from "../../components-new/Layout/Footer";
// import GetInTouch from "../../components/home/GetInTouch/GetInTouch";
import Disclaimer from "../../components/legal/Disclaimer/Disclaimer";

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <Disclaimer />
      {/* <GetInTouch /> */}
      <Footer />
    </>
  );
}