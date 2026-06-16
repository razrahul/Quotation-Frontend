import heroImg from "@assets-new/Hero/hero-1.png";
import heroLine from "@assets-new/Hero/hero-vector-line.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-cover bg-right bg-no-repeat flex items-center py-16 md:py-0 md:aspect-1440/390"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Soft overlay on mobile view to ensure high text contrast */}
      <div className="absolute inset-0 bg-white/40 md:hidden pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5 lg:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-extrabold text-slate-800 tracking-tight leading-tight lg:leading-[1.2]">
              All-in-One{" "}
              <span className="relative inline-block pb-3">
                Business Tools
                <img
                  src={heroLine}
                  alt="yellow highlight"
                  className="absolute right-2.5 pointer-events-none"
                />
              </span>
              <br />
              to Simplify Your Work
            </h1>

            <p className="text-slate-700 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Generate accurate, ready-to-send quotations anytime, anywhere.
              Customize templates to match your needs and simplify your quoting
              process—all for free.
            </p>

            <div className="pt-2">
              <Link
                to="/nexquote"
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#00489a] hover:bg-[#003b80] rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Create a Quote Now
              </Link>
            </div>
          </div>

          {/* Right Spacer Column (keeps the background graphic visible and uncovered) */}
          <div className="hidden lg:block lg:col-span-5 h-20"></div>
        </div>
      </div>
    </section>
  );
}
