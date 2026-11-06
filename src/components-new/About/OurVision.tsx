import ellipse121 from "@assets-new/About/Our-Vision/Ellipse 121.png";
import ellipse127 from "@assets-new/About/Our-Vision/Ellipse 127.png";
import ellipse128 from "@assets-new/About/Our-Vision/Ellipse 128.png";
import ellipse129 from "@assets-new/About/Our-Vision/Ellipse 129.png";
import ellipse130 from "@assets-new/About/Our-Vision/Ellipse 130.png";
import ellipse131 from "@assets-new/About/Our-Vision/Ellipse 131.png";
import earthImg from "@assets-new/About/Our-Vision/Rectangle Image.png";

interface VisionPoint {
  title: string;
  description: string;
}

interface OurVisionProps {
  smallLabel?: string;
  heading?: string;
  intro?: string;
  points?: VisionPoint[];
}

const defaultVisionPoints: VisionPoint[] = [
  {
    title: "All-in-One Quotation Solution",
    description:
      "We envision a complete online quotation management solution where businesses can create, customize, download, and organize professional quotations through one convenient platform. Our focus is to reduce unnecessary paperwork and simplify everyday quotation workflows.",
  },
  {
    title: "Dedicated Business Dashboard",
    description:
      "Our vision includes providing businesses with a centralized quotation dashboard that makes managing customer quotations more organized and convenient. We aim to help users track quotation information, access important documents, and maintain a structured business workflow.",
  },
  {
    title: "Data Security & Reliability",
    description:
      "We recognize the importance of protecting business information. Our vision is to provide a reliable digital environment where users can manage quotation details with confidence, supported by appropriate data protection practices and continuous platform improvements.",
  },
  {
    title: "Accessibility for Every Business",
    description:
      "We believe useful business tools should be available to everyone. Our vision is to make online quotation generation simple and affordable for freelancers, startups, small businesses, and established organizations, regardless of their technical experience.",
  },
];

export default function OurVision({
  smallLabel,
  heading = "Our Vision – Making Digital Quotation Management Easier for Every Business",
  intro = "Our vision is to make professional quotation creation accessible to every business, regardless of its size or technical expertise. We aim to simplify business documentation through user-friendly digital solutions that improve efficiency, accuracy, and convenience.",
  points = defaultVisionPoints,
}: OurVisionProps) {
  return (
    <section className="relative max-w-7xl mx-4 sm:mx-6 lg:mx-auto bg-[#EDF6FE] py-8 sm:py-10 lg:py-14 px-6 sm:px-10 lg:px-12 overflow-hidden rounded-2xl sm:rounded-3xl mb-12 lg:mb-20 z-10 border border-blue-100/60 shadow-sm">
      {/* Background Ellipses positioned exactly as per Figma */}
      <img
        src={ellipse130}
        alt=""
        className="absolute top-0 -left-12 sm:-left-8 w-24 sm:w-25 h-auto object-contain pointer-events-none z-0"
      />
      <img
        src={ellipse127}
        alt=""
        className="absolute top-0 right-[10%] w-16 sm:w-24 h-auto object-contain pointer-events-none z-0"
      />
      <img
        src={ellipse128}
        alt=""
        className="absolute bottom-0 left-[3%] w-24 sm:w-32 h-auto object-contain pointer-events-none z-0"
      />
      <img
        src={ellipse121}
        alt=""
        className="absolute top-[8%] left-[85%] md:left-[48%] lg:left-[55%] w-20 sm:w-28 h-auto object-contain pointer-events-none z-0"
      />
      <img
        src={ellipse131}
        alt=""
        className="absolute bottom-2 -right-10 w-20 sm:w-28 h-auto object-contain pointer-events-none z-0"
      />
      <img
        src={ellipse129}
        alt=""
        className="absolute bottom-[-10px] left-[35%] w-16 sm:w-24 h-auto object-contain pointer-events-none z-0"
      />

      <div className="relative w-full z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16 w-full">
          {/* Left Column: Vision Points */}
          <div className="flex-1 max-w-2xl w-full">
            <div className="mb-3">
              {smallLabel && (
                <p className="text-xs text-center sm:text-sm font-bold uppercase tracking-wider text-[#014798] mb-1">
                  {smallLabel}
                </p>
              )}
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 tracking-tight leading-snug">
                {heading}
              </h2>
              {intro && (
                <p className="text-slate-600 tracking-tight text-justify text-xs sm:text-sm leading-relaxed font-normal mt-1.5">
                  {intro}
                </p>
              )}
            </div>

            <ul className="space-y-2.5 sm:space-y-3 max-w-xl pt-1">
              {points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-600 text-xs sm:text-sm leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#014798] shrink-0"></span>
                  <span className="font-normal text-slate-700 tracking-tight text-justify">
                    <strong className="font-bold text-slate-950">
                      {point.title}:{" "}
                    </strong>
                    {point.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Earth Space Image */}
          <div className="w-full md:w-[420px] lg:w-[480px] shrink-0 flex justify-center md:justify-end">
            <div className="w-full aspect-16/10 overflow-hidden rounded-2xl shadow-sm border border-slate-200/40 bg-slate-950">
              <img
                src={earthImg}
                alt="Earth view showing city lights from space"
                className="w-full h-full object-cover transform hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
