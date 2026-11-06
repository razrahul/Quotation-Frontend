import { useState, useRef } from "react";
import img1 from "@assets-new/KeyFeatures/key-feature-image-1.png";
import img2 from "@assets-new/KeyFeatures/key-feature-image-2.png";
import img3 from "@assets-new/KeyFeatures/key-feature-image-3.png";
import vectorLine from "@assets-new/KeyFeatures/key-feature-vector-line.png";

export default function KeyFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      tabLabel: "Lightning Fast",
      heading: "Get Your Business Work Done in Minutes",
      description:
        "Save valuable time with fast and convenient online business tools. Whether you need to create a customer quotation, prepare an invoice, or calculate GST, TechTime Software simplifies repetitive tasks and helps you complete your work with greater efficiency.",
      benefits: [
        "Create professional quotations quickly.",
        "Simplify invoice preparation.",
        "Calculate GST without manual formulas.",
        "Reduce repetitive data entry.",
        "Improve everyday business productivity.",
      ],
      image: img1,
    },
    {
      tabLabel: "Completely Free",
      heading: "Essential Business Tools Without the Extra Cost",
      description:
        "Access free online tools for quotations, invoices, and GST calculations without investing in expensive software. TechTime Software makes essential business utilities accessible to freelancers, entrepreneurs, startups, and growing businesses.",
      benefits: [
        "Free quotation generation.",
        "Convenient invoice creation.",
        "Easy GST calculations.",
        "Suitable for small businesses and freelancers.",
        "Simple tools for everyday business needs.",
      ],
      image: img2,
    },
    {
      tabLabel: "Always Available",
      heading: "Access Your Business Tools Anytime, Anywhere",
      description:
        "Work more conveniently with browser-based business tools that help you manage important tasks from your computer, laptop, or smartphone. Whether you are working from your office, home, or while travelling, TechTime Software makes essential business utilities easy to access with an internet connection.",
      benefits: [
        "Convenient browser-based access.",
        "Works across supported devices.",
        "No complicated software installation.",
        "Easy navigation and user-friendly interface.",
        "Suitable for remote and office-based work.",
      ],
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
    <section className="relative pt-12 pb-6 lg:pt-20 lg:pb-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#014798] mb-2">
            SMART BUSINESS SOLUTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Powerful Features for Faster, Easier Business Management
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover simple and efficient online tools designed to streamline quotations, invoicing, and everyday business operations. TechTime Software helps you work smarter with an easy-to-use interface and convenient access to essential business utilities.
          </p>
        </div>

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
                  {feature.tabLabel}
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
                  <div className="grow space-y-2 text-left relative z-10 w-full">
                    <div>
                      <span className="text-xs font-bold text-[#014798] uppercase tracking-wider block mb-1">
                        {feature.tabLabel}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight inline-flex flex-col items-start gap-0.5">
                        <span>{feature.heading}</span>
                        <img
                          src={vectorLine}
                          alt="highlight line"
                          className="relative w-28 h-auto bottom-1 pointer-events-none"
                        />
                      </h3>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {feature.description}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                        {feature.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-[#014798] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mockup Image */}
                  <div className="w-full shrink-0 flex justify-center relative z-10">
                    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-sm w-full max-w-[260px]">
                      <img
                        src={feature.image}
                        alt={feature.tabLabel}
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
        <div className="hidden lg:flex gap-6 items-stretch w-full max-w-6xl mx-auto min-h-[420px]">
          {features.map((feature, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ease-in-out cursor-pointer ${
                  isActive
                    ? "flex-[4.8] bg-[#eef5fc] border-blue-200/50 p-8 xl:p-10 flex items-center gap-8 shadow-sm"
                    : "flex-1 min-w-[130px] border-slate-100 hover:border-blue-100"
                }`}
              >
                {isActive ? (
                  <>
                    {/* Dotted/Circle background lines matching Figma exactly */}
                    <div className="absolute top-0 left-[34%] -translate-y-1/2 w-24 h-23 bg-[#FFC107]/40 border-[3.5px] border-[#004584] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-[50%] translate-y-1/2 w-23 h-22 bg-[#FFC107]/40 border-[3.5px] border-[#004584] rounded-full pointer-events-none"></div>

                    {/* Left Details Column */}
                    <div className="grow space-y-2 text-left relative z-10">
                      <div>
                        <span className="text-xs font-bold text-[#014798] uppercase tracking-wider block mb-1">
                          {feature.tabLabel}
                        </span>
                        <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight inline-flex flex-col items-start gap-0.5">
                          <span>{feature.heading}</span>
                          <img
                            src={vectorLine}
                            alt="highlight line"
                            className="relative w-28 h-auto bottom-1 pointer-events-none"
                          />
                        </h3>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal max-w-xl">
                        {feature.description}
                      </p>

                      <div className="pt-1">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                          Key Benefits:
                        </h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                          {feature.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-[#014798] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Mockup Image Column */}
                    <div className="w-[240px] xl:w-[260px] shrink-0 flex justify-center relative z-10">
                      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-sm w-full">
                        <img
                          src={feature.image}
                          alt={feature.tabLabel}
                          className="w-full h-52 object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  /* Inactive Card View - Displays cover image and tab label */
                  <div className="w-full h-full relative group flex items-end justify-center pb-6">
                    <img
                      src={feature.image}
                      alt={feature.tabLabel}
                      className="w-full h-full object-cover absolute inset-0 rounded-3xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent rounded-3xl group-hover:from-slate-950/60 transition-colors duration-300"></div>
                    <span className="relative z-10 text-white font-bold text-xs sm:text-sm tracking-wide text-center px-2">
                      {feature.tabLabel}
                    </span>
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
