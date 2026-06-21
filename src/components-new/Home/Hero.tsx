import heroLine from "@assets-new/Hero/hero-vector-line.png";
import { Link } from "react-router-dom";
import frameImg from "@assets-new/Hero/frame-image.png";
import circleDoted1 from "@assets-new/Contact/Hero/circle_doted-1.png";
import circleDoted2 from "@assets-new/Contact/Hero/circle_doted-2.png";
import circleDoted3 from "@assets-new/Contact/Hero/circle_doted-3.png";

export default function Hero() {
  return (
    <section className="relative w-full pt-12 pb-12 lg:pt-0 lg:pb-0 lg:h-[425px] flex items-center overflow-hidden bg-[#e7f2fd99] animate-fadeIn">
      {/* Decorative Dotted Circle - Left Top */}
      <img
        src={circleDoted1}
        alt="dotted circle left top"
        className="absolute left-12 top-0 w-36 sm:w-48 md:w-64 lg:w-[280px] pointer-events-none select-none opacity-85 z-0"
      />

      {/* Decorative Dotted Circle - Left Bottom */}
      <img
        src={circleDoted2}
        alt="dotted circle left bottom"
        className="absolute left-62 bottom-0 w-52 sm:w-64 md:w-80 lg:w-[320px] pointer-events-none select-none opacity-85 z-0"
      />

      {/* Decorative Dotted Circle - Right Vertical */}
      <img
        src={circleDoted3}
        alt="dotted circle right vertical"
        className="absolute right-0 top-0 bottom-0 h-full w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] pointer-events-none select-none object-contain opacity-85 z-0"
      />

      {/* Mobile/Tablet Background Illustration Mockup */}
      <img
        src={frameImg}
        alt="mockup background"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[280px] sm:max-h-[320px] w-auto object-contain opacity-15 pointer-events-none select-none lg:hidden z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-4 lg:space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[44px] font-extrabold text-slate-800 tracking-tight leading-tight lg:leading-[1.2]">
              All-in-One{" "}
              <span className="relative inline-block pb-2 lg:pb-3">
                Business Tools
                <img
                  src={heroLine}
                  alt="yellow highlight"
                  className="absolute right-2.5 bottom-0 pointer-events-none"
                />
              </span>
              <br className="hidden sm:inline" />
              to Simplify Your Work
            </h1>

            <p className="text-slate-700 text-sm sm:text-base lg:text-base font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              Generate accurate, ready-to-send quotations anytime, anywhere.
              Customize templates to match your needs and simplify your quoting
              process—all for free.
            </p>

            <div className="pt-1">
              <Link
                to="/nexquote"
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#00489a] hover:bg-[#003b80] rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Create a Quote Now
              </Link>
            </div>
          </div>

          {/* Right Frame Image Column - Desktop Only */}
          <div className="hidden lg:flex lg:col-span-6 justify-end items-center relative z-10">
            <img
              src={frameImg}
              alt="Business Tools Frame"
              className="max-h-[350px] xl:max-h-[370px] w-auto object-contain select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
