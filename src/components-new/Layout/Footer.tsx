import { Link } from "react-router-dom";
import logo from "@assets-new/logowithtext.png";

export default function Footer() {
  return (
    <footer className="bg-[#014798] text-white pt-12 pb-10 lg:pt-16 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Columns Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Brand Column */}
          <div className="w-full lg:max-w-sm space-y-5">
            <Link to="/" className="inline-block">
              <div className="relative h-12 w-44">
                {/* White parts (Hand icon + TechTime) */}
                <img
                  src={logo}
                  alt="TechTime Logo"
                  className="absolute inset-0 h-full w-full object-contain object-left brightness-0 invert"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 55%, 21% 55%, 21% 100%, 0% 100%)",
                  }}
                />
                {/* Colored parts (Software text) */}
                <img
                  src={logo}
                  alt=""
                  className="absolute inset-0 h-full w-full object-contain object-left"
                  style={{
                    clipPath: "polygon(21% 55%, 100% 55%, 100% 100%, 21% 100%)",
                  }}
                />
              </div>
            </Link>
            <p className="text-white/90 text-sm leading-relaxed font-normal">
              TechTime Software offers free online business tools to simplify
              quotations, invoicing, GST calculations, and everyday business
              activities. Our easy-to-use digital solutions help freelancers,
              startups, and small businesses save time, improve productivity, and
              manage essential tasks efficiently.
            </p>
          </div>

          {/* Links and Info Columns Wrapper */}
          <div className="w-full lg:flex-1 grid grid-cols-2 gap-8 sm:flex sm:flex-row justify-between items-start lg:pl-16">
            {/* Quick Links Column */}
            <div className="space-y-4 min-w-[120px]">
              <h3 className="text-[#ffb703] font-bold text-base sm:text-lg tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-sm text-white">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#products"
                    onClick={(e) => {
                      if (window.location.pathname === "/") {
                        e.preventDefault();
                        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="hover:text-blue-200 transition-colors"
                  >
                    Our Products
                  </a>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-200 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center bg-white text-[#014798] font-bold rounded-full px-6 py-2.5 shadow-md hover:bg-slate-50 transition-colors text-xs sm:text-sm"
                >
                  Get Started Free →
                </Link>
              </div>
            </div>

            {/* Products Column */}
            <div className="space-y-4 min-w-[140px]">
              <h3 className="text-[#ffb703] font-bold text-base sm:text-lg tracking-wider">
                Our Products
              </h3>
              <ul className="space-y-2.5 text-sm text-white">
                <li>
                  <Link
                    to="/nexquote"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Free Quotation Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/invoice-generator"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Online Invoice Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gst-calculator"
                    className="hover:text-blue-200 transition-colors"
                  >
                    GST Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/smm-panel"
                    className="hover:text-blue-200 transition-colors"
                  >
                    SMM Panel
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="space-y-4 min-w-[180px] col-span-2 sm:col-span-1">
              <h3 className="text-[#ffb703] font-bold text-base sm:text-lg tracking-wider">
                Contact Us
              </h3>
              <div className="space-y-4 text-sm text-white">
                <div className="space-y-1">
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                    Email
                  </div>
                  <div>
                    <a
                      href="mailto:support@techtimesoftware.com"
                      className="hover:text-blue-200 transition-colors break-all"
                    >
                      support@techtimesoftware.com
                    </a>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                    Phone
                  </div>
                  <div>
                    <a
                      href="tel:+919876543210"
                      className="hover:text-blue-200 transition-colors"
                    >
                      +91 9876543210
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Recommended Footer Links */}
        <div className="pt-8 mt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/70">
          <p>© 2026 TechTime Software. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/disclaimer"
              className="hover:text-white transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
