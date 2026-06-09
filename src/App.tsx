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

import AppLayout from "./components/dashboardLayout/AppLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicQutations from "./pages/Quotation/PublicQutations";

// for dashboard

import DashboardPage from "./pages/Dashboard/DashboardPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import PersonalInfo from "./pages/Profile/components/PersonalInfo";
import AccountSecurity from "./pages/Profile/components/AccountSecurity";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { loadUser, logoutUser } from "./redux/action/userActions";
import type { AppDispatch, RootState } from "./redux/store";


// for New-Schema 
import NewHomePage from "./pages-new/Home/Home";
import NewAboutPage from "./pages-new/AboutUs/AboutUs";
import NewContactPage from "./pages-new/ContactUs/ContactUs";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();

  const ranOnce = useRef(false);

  const { isAuthenticated, user, authChecked } = useSelector(
    (state: RootState) => state.auth,
  );

  console.log(isAuthenticated, user);

  useEffect(() => {
    if (ranOnce.current) return;
    ranOnce.current = true;

    if (!authChecked && localStorage.getItem("tt_token")) {
      dispatch(loadUser());
    }

    if (!authChecked && !localStorage.getItem("tt_token")) {
      dispatch(logoutUser());
    }
  }, [authChecked, dispatch]);
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
        <Route element={<PublicQutations />}>
          <Route path="/quotation" element={<QuotationPage />} />
        </Route>

        {/* /* ========== PROTECTED ROUTES ========== */}

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />

            <Route path="/profile" element={<ProfilePage />}>
              <Route index element={<PersonalInfo />} />
              <Route path="security" element={<AccountSecurity />} />
            </Route>
          </Route>
        </Route>

        {/* New Schema Routes */}
        <Route path="/home" element={<NewHomePage />} />
        <Route path="/new-about" element={<NewAboutPage />} />
        <Route path="/new-contact" element={<NewContactPage />} />
      </Routes>
    </>
  );
}
