import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import QuotationPreview from "./pages/QuotationPreview/QuotationPreview";
import Home from "./pages/Home/Home";
import ContactPage from "./pages/ContactUs/ContactPage";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import TermsPage from "./pages/legal/TermsPage";
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicyPage";
import DisclaimerPage from "./pages/legal/DisclaimerPage";
import QuotationPage from "./pages/Quotation/QuotationPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/preview" element={<QuotationPreview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/quotationpage" element={<QuotationPage />} />
      </Routes>
    </>
  );
}
