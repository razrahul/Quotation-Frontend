import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Quotation from "./pages/Quotation/Quotation";
import QuotationPreview from "./pages/QuotationPreview/QuotationPreview";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ContactPage from "./pages/ContactUs/ContactPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/preview" element={<QuotationPreview />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
