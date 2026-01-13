import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import GetInTouch from "../../components/home/GetInTouch/GetInTouch";
import Terms from "../../components/legal/Terms/Terms";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <Terms />
      <GetInTouch />
      <Footer />
    </>
  );
}
