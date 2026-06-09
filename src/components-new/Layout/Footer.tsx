import { Link } from "react-router-dom";
import logo from "@assets-new/logowithtext.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#014798] text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Columns Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Brand Column */}
          <div className="w-full lg:max-w-sm space-y-6">
            <Link to="/home" className="inline-block">
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
            <p className="text-white text-sm leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel Lorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>
            {/* Copyright notice nested inside Brand Column matching Figma exactly */}
            <p className="text-white/50 text-xs pt-4 hidden lg:block">
              © {currentYear} techtime.software. All rights reserved.
            </p>
          </div>

          {/* Links and Info Columns Wrapper */}
          <div className="w-full lg:flex-1 flex flex-col sm:flex-row justify-between items-start gap-10 lg:pl-16">
            {/* Quick Links Column */}
            <div className="space-y-4 min-w-[120px]">
              <h3 className="text-[#ffb703] font-bold text-lg tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-sm text-white">
                <li>
                  <Link
                    to="/home"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/new-about"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/new-about"
                    className="hover:text-blue-200 transition-colors"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/new-contact"
                    className="hover:text-blue-200 transition-colors"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
              <div className="pt-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center bg-white text-[#014798] font-bold rounded-full px-8 py-2.5 shadow-md hover:bg-slate-50 transition-colors text-sm"
                >
                  Register
                </Link>
              </div>
            </div>

            {/* Products Column */}
            <div className="space-y-4 min-w-[120px]">
              <h3 className="text-[#ffb703] font-bold text-lg tracking-wider">
                Products
              </h3>
              <ul className="space-y-2.5 text-sm text-white">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-blue-200 transition-colors"
                    >
                      Invoice Generator
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="space-y-4 min-w-[200px]">
              <h3 className="text-[#ffb703] font-bold text-lg tracking-wider">
                Contact
              </h3>
              <div className="space-y-4 text-sm text-white">
                <div className="space-y-1">
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                    Email
                  </div>
                  <div className="hover:text-blue-200 transition-colors">
                    <a href="mailto:support@techtimesoftware.com">
                      support@techtimesoftware.com
                    </a>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                    Phone
                  </div>
                  <div>+91 9876543210</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright notice for mobile view at the very bottom */}
        <div className="pt-8 text-sm text-white/50 text-left lg:hidden">
          <p>© {currentYear} techtime.software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
