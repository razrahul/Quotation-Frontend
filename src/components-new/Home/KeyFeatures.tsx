import { useState, useRef } from "react";
import img1 from "@assets-new/KeyFeatures/key-feature-image-1.png";
import img2 from "@assets-new/KeyFeatures/key-feature-image-2.png";
import img3 from "@assets-new/KeyFeatures/key-feature-image-3.png";
// import rectDecor from "@assets-new/KeyFeatures/key-feature-rectangle.png";
import vectorLine from "@assets-new/KeyFeatures/key-feature-vector-line.png";

export default function KeyFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Lightning Fast",
      description:
        "Lorem ipsum when you sign up or use our platform, we collect personal details such as your name, email address, business name, and contact number. We also gather usage data including your IP address, device information, browser type, and pages you visit. Any details you enter into quotation templates, like client names or prices, are also securely stored.",
      image: img1,
    },
    {
      title: "Completely Free",
      description:
        "Lorem ipsum when you sign up or use our platform, we collect personal details such as your name, email address, business name, and contact number. We also gather usage data including your IP address, device information, browser type, and pages you visit. Any details you enter into quotation templates, like client names or prices, are also securely stored.",
      image: img2,
    },
    {
      title: "Always Available",
      description:
        "Lorem ipsum when you sign up or use our platform, we collect personal details such as your name, email address, business name, and contact number. We also gather usage data including your IP address, device information, browser type, and pages you visit. Any details you enter into quotation templates, like client names or prices, are also securely stored.",
      image: img3,
    },
  ];

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTo({
        left: index * container.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const index = Math.round(container.scrollLeft / container.clientWidth);
      if (index !== activeIndex && index >= 0 && index < features.length) {
        setActiveIndex(index);
      }
    }
  };

  return (
    <section className="relative py-12 lg:py-20 bg-white overflow-hidden">
      {/* Decorative background item */}
      {/* <div className="absolute top-10 left-10 opacity-30 select-none pointer-events-none">
        <img src={rectDecor} alt="" className="w-20" />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-8 lg:mb-16">
          Key Features
        </h2>

        {/* Mobile/Tablet View: Interactive Tabs & Swipeable Carousel */}
        <div className="lg:hidden w-full max-w-2xl mx-auto space-y-6">
          {/* Tab Button Header Row */}
          <div className="flex justify-center border-b border-slate-100 pb-2 gap-1.5 overflow-x-auto scrollbar-none select-none">
            {features.map((feature, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleTabClick(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 focus:outline-none whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#014798] text-white shadow-sm"
                      : "text-slate-500 hover:text-[#014798] bg-slate-50 hover:bg-slate-100"
                  }`}
                >
                  {feature.title}
                </button>
              );
            })}
          </div>

          {/* Swipeable Carousel Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none w-full gap-4 pb-4"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {features.map((feature, idx) => {
              return (
                <div
                  key={idx}
                  className="w-full shrink-0 snap-start snap-always relative overflow-hidden rounded-3xl border bg-[#eef5fc] border-blue-200/50 p-6 sm:p-8 flex flex-col items-center gap-6 shadow-sm text-left"
                >
                  {/* Dotted/Circle background lines */}
                  <div className="absolute top-0 left-[34%] -translate-y-1/2 w-24 h-23 bg-[#FFC107]/40 border-[3.5px] border-[#004584] rounded-full pointer-events-none"></div>
                  <div className="absolute bottom-0 left-[50%] translate-y-1/2 w-23 h-22 bg-[#FFC107]/40 border-[3.5px] border-[#004584] rounded-full pointer-events-none"></div>

                  {/* details */}
                  <div className="grow space-y-4 text-left relative z-10 w-full">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight inline-flex flex-col items-start gap-1 pb-2">
                      <span>{feature.title}</span>
                      <img
                        src={vectorLine}
                        alt="highlight line"
                        className="w-full h-auto pointer-events-none"
                      />
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal min-h-[120px]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Mockup Image */}
                  <div className="w-full shrink-0 flex justify-center relative z-10">
                    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-sm w-full max-w-[250px]">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-40 md:h-44 object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-center gap-2 pt-2">
            {features.map((_, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleTabClick(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    isActive
                      ? "bg-[#014798] w-6"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* Desktop View: Horizontal Interactive Accordion */}
        <div className="hidden lg:flex gap-6 items-stretch w-full max-w-6xl mx-auto min-h-[300px]">
          {features.map((feature, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ease-in-out cursor-pointer ${
                  isActive
                    ? "flex-[4.5] bg-[#eef5fc] border-blue-200/50 p-10 flex items-center gap-8 shadow-sm"
                    : "flex-1 min-w-[140px] border-slate-100 hover:border-blue-100"
                }`}
              >
                {isActive ? (
                  <>
                    {/* Dotted/Circle background lines matching Figma exactly */}
                    <div className="absolute top-0 left-[34%] -translate-y-1/2 w-24 h-23 bg-[#FFC107]/40 border-[3.5px] border-[#004584] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-[50%] translate-y-1/2 w-23 h-22 bg-[#FFC107]/40 border-[3.5px] border-[#004584] rounded-full pointer-events-none"></div>

                    {/* Left Details Column */}
                    <div className="grow space-y-4 text-left relative z-10">
                      <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight inline-flex flex-col items-start gap-1 pb-2">
                        <span>{feature.title}</span>
                        <img
                          src={vectorLine}
                          alt="highlight line"
                          className="w-full h-auto pointer-events-none"
                        />
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-xl">
                        {feature.description}
                      </p>
                    </div>

                    {/* Right Mockup Image Column */}
                    <div className="w-[260px] shrink-0 flex justify-center relative z-10">
                      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-sm w-full">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-44 object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  /* Inactive Card View - Displays only the cover image */
                  <div className="w-full h-full relative group">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover absolute inset-0 rounded-3xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
