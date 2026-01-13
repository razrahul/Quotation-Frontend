import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import GetInTouch from "../../components/home/GetInTouch/GetInTouch";
import Disclaimer from "../../components/legal/Disclaimer/Disclaimer";

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <Disclaimer />
      <GetInTouch />
      <Footer />
    </>
  );
}