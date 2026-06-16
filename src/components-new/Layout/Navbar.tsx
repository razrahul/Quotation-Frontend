import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import UserMenu from "../../components/layout/Common/UserMenu";
import logo from "@assets-new/logowithtext.png";

// Import product dropdown icons
import quotGenIcon from "@assets-new/Product/quataion generator.png";
import invGenIcon from "@assets-new/Product/invoice generator.png";
import gstCalcIcon from "@assets-new/Product/gst calculator.png";
import smmPanelIcon from "@assets-new/Product/smm panel.png";

export default function Navbar() {
  const { isAuthenticated, authChecked } = useSelector(
    (state: RootState) => state.auth
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  const showUserMenu = isAuthenticated && authChecked;

  const products = [
    { name: "Quotation Generator", path: "/nexquote", icon: quotGenIcon },
    { name: "Invoice Generator", path: "/invoice-generator", icon: invGenIcon },
    { name: "GST Calculator", path: "/gst-calculator", icon: gstCalcIcon },
    { name: "SMM Panel", path: "/smm-panel", icon: smmPanelIcon },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="TechTime Logo"
                className="h-10 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation & Auth */}
          <div className="hidden md:flex items-center space-x-10">
            {/* Desktop Nav Links */}
            <div className="flex items-center space-x-8">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-all duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-250 ${
                    isActive
                      ? "text-blue-600 after:w-full"
                      : "text-gray-600 hover:text-blue-600 after:w-0 hover:after:w-full"
                  }`
                }
              >
                Home
              </NavLink>

              {/* Product Dropdown Anchor */}
              <div
                className="relative py-4"
                onMouseEnter={() => setProductDropdownOpen(true)}
                onMouseLeave={() => setProductDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-[15px] font-medium text-gray-600 hover:text-blue-600 transition-colors cursor-pointer focus:outline-none"
                >
                  Product
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-250 ${
                      productDropdownOpen ? "rotate-180 text-blue-600" : "text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Box */}
                {productDropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-64 bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden py-1 z-50 animate-fadeIn">
                    {products.map((prod, idx) => (
                      <div key={prod.name}>
                        <Link
                          to={prod.path}
                          className="flex items-center gap-3.5 px-4 py-3.5 hover:bg-slate-50/50 transition-colors"
                        >
                          <img
                            src={prod.icon}
                            alt={prod.name}
                            className="w-12 h-8 object-cover rounded-md border border-slate-200 shrink-0"
                          />
                          <span className="text-[15px] font-semibold text-slate-850 hover:text-blue-600 transition-colors">
                            {prod.name}
                          </span>
                        </Link>
                        {idx < products.length - 1 && (
                          <div className="mx-4 border-b border-[#ffb703]/50" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-all duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-250 ${
                    isActive
                      ? "text-blue-600 after:w-full"
                      : "text-gray-600 hover:text-blue-600 after:w-0 hover:after:w-full"
                  }`
                }
              >
                About us
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-all duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-250 ${
                    isActive
                      ? "text-blue-600 after:w-full"
                      : "text-gray-600 hover:text-blue-600 after:w-0 hover:after:w-full"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="flex items-center space-x-4">
              {showUserMenu ? (
                <div className="flex items-center gap-3">
                  <Link
                    to="/dashboard"
                    className="text-sm font-semibold text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <UserMenu />
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            {showUserMenu && (
              <div className="mr-3">
                <UserMenu />
              </div>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-600 hover:bg-gray-50 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-fadeIn border-t border-gray-100 bg-white" id="mobile-menu">
          <div className="px-2 pt-3 pb-4 space-y-1">
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>

            {/* Product Collapsible Accordion */}
            <div>
              <button
                onClick={() => setMobileProductOpen(!mobileProductOpen)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors focus:outline-none"
              >
                Product
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileProductOpen ? "rotate-180 text-blue-600" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileProductOpen && (
                <div className="pl-6 pr-3 py-1 space-y-1 border-l-2 border-[#ffb703]/60 ml-3">
                  {products.map((prod) => (
                    <Link
                      key={prod.name}
                      to={prod.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <img
                        src={prod.icon}
                        alt={prod.name}
                        className="w-9 h-6 object-cover rounded-md border border-slate-200 shrink-0"
                      />
                      <span className="text-sm font-semibold text-slate-800 hover:text-blue-600">
                        {prod.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`
              }
            >
              About us
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`
              }
            >
              Contact Us
            </NavLink>

            {!showUserMenu && (
              <div className="pt-4 pb-2 border-t border-gray-100 mt-2 px-3 flex flex-col gap-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center font-medium text-gray-700 hover:text-blue-600 py-2.5 rounded-lg border border-gray-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center font-medium bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg shadow-sm"
                >
                  Register
                </Link>
              </div>
            )}
            {showUserMenu && (
              <div className="pt-2 border-t border-gray-100 mt-2 px-3">
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600 rounded-md"
                >
                  Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
