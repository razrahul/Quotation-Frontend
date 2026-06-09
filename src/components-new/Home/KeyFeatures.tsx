import { useState } from "react";
import img1 from "@assets-new/KeyFeatures/key-feature-image-1.png";
import img2 from "@assets-new/KeyFeatures/key-feature-image-2.png";
import img3 from "@assets-new/KeyFeatures/key-feature-image-3.png";
// import rectDecor from "@assets-new/KeyFeatures/key-feature-rectangle.png";
import vectorLine from "@assets-new/KeyFeatures/key-feature-vector-line.png";

export default function KeyFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative background item */}
      {/* <div className="absolute top-10 left-10 opacity-30 select-none pointer-events-none">
        <img src={rectDecor} alt="" className="w-20" />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-16">
          Key Features
        </h2>

        {/* Accordion Carousel Container */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full max-w-6xl mx-auto min-h-[300px]">
          {features.map((feature, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ease-in-out cursor-pointer ${
                  isActive
                    ? "flex-[4.5] bg-[#eef5fc] border-blue-200/50 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm"
                    : "flex-1 h-64 lg:h-auto min-w-[140px] border-slate-100 hover:border-blue-100"
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
                    <div className="w-full md:w-[220px] lg:w-[260px] shrink-0 flex justify-center relative z-10">
                      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-sm w-full max-w-[250px]">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-40 md:h-44 object-cover rounded-xl"
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
