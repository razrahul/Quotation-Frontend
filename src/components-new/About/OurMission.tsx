import elipse1 from "@assets-new/About/Our-Mission/Elipse-1.png";
import elipse2 from "@assets-new/About/Our-Mission/Elipse-2.png";
import elipse3 from "@assets-new/About/Our-Mission/Elipse-3.png";
import elipse4 from "@assets-new/About/Our-Mission/Elipse-4.png";
import elipse5 from "@assets-new/About/Our-Mission/Elipse-5.png";
import elipse6 from "@assets-new/About/Our-Mission/Elipse-6.png";
import missionImg from "@assets-new/About/Our-Mission/image.png";

export default function OurMission() {
  const missionPoints = [
    {
      title: "Simplify Quotation Creation",
      description:
        "We aim to eliminate the complexity of preparing business quotations manually. Our free online quotation maker helps users organize customer details, product information, quantities, and pricing to create professional quotations through a straightforward process.",
    },
    {
      title: "Improve Business Productivity",
      description:
        "Our mission is to help businesses spend less time preparing quotations and more time serving customers. By simplifying repetitive documentation tasks, we support faster workflows, better organization, and more efficient business communication.",
    },
    {
      title: "Promote Secure & Reliable Operations",
      description:
        "We strive to maintain a dependable platform that respects the importance of business information. Our approach emphasizes responsible data handling, platform reliability, and ongoing improvements to the user experience.",
    },
    {
      title: "Make Professional Tools Accessible",
      description:
        "We are committed to making essential business tools easier to use and more affordable. Our free quotation generator helps entrepreneurs, freelancers, and growing businesses prepare professional quotations without requiring advanced technical skills.",
    },
  ];

  return (
    <section className="relative w-full bg-[#EDF6FE] py-8 sm:py-10 lg:py-12 overflow-hidden z-10">
      {/* Background Blue concentric circle Ellipses */}
      <img
        src={elipse1}
        alt=""
        className="absolute top-16 -right-14 w-36 sm:w-48 h-auto object-contain pointer-events-none z-0 opacity-60"
      />
      <img
        src={elipse2}
        alt=""
        className="absolute -top-5 right-[24%] w-20 sm:w-28 h-auto object-contain pointer-events-none z-0 opacity-60"
      />
      <img
        src={elipse3}
        alt=""
        className="absolute top-14 left-[28%] w-12 sm:w-16 h-auto object-contain pointer-events-none z-0 opacity-60"
      />
      <img
        src={elipse4}
        alt=""
        className="absolute left-[48%] -bottom-4 w-36 sm:w-48 h-auto object-contain pointer-events-none z-0 opacity-60"
      />
      <img
        src={elipse5}
        alt=""
        className="absolute -bottom-5 left-16 w-24 sm:w-32 h-auto object-contain pointer-events-none z-0 opacity-60"
      />
      <img
        src={elipse6}
        alt=""
        className="absolute top-0 -left-5 w-32 sm:w-42 h-auto object-contain pointer-events-none z-0 opacity-50"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-12 w-full">
          {/* Left Column: Mission Points */}
          <div className="flex-1 max-w-2xl w-full text-left space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-slate-900 tracking-tight leading-snug">
              Our Mission – Helping Businesses Create Quotations Faster & Smarter
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal text-justify [text-align:justify]">
              Our mission is to simplify quotation creation by providing an easy-to-use
              online platform that helps businesses save time, reduce manual effort,
              and prepare professional business documents. We focus on practical features
              that support efficient quotation management and improve everyday business
              productivity.
            </p>

            <ul className="space-y-2.5 sm:space-y-3 pt-1">
              {missionPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#014798] shrink-0"></span>
                  <span className="flex-1 text-justify [text-align:justify]">
                    <strong className="font-bold text-slate-900 tracking-tight">
                      {point.title}:{" "}
                    </strong>
                    {point.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Mission Laptops Image */}
          <div className="w-full md:w-[420px] lg:w-[480px] shrink-0 flex justify-center md:justify-end">
            <div className="w-full aspect-16/10 overflow-hidden rounded-2xl shadow-sm border border-slate-200/40 bg-white p-2">
              <img
                src={missionImg}
                alt="Montage of three laptops displaying vibrant screens"
                className="w-full h-full object-contain transform hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
