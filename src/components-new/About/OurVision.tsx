import ellipse121 from "@assets-new/About/Our-Vision/Ellipse 121.png";
import ellipse127 from "@assets-new/About/Our-Vision/Ellipse 127.png";
import ellipse128 from "@assets-new/About/Our-Vision/Ellipse 128.png";
import ellipse129 from "@assets-new/About/Our-Vision/Ellipse 129.png";
import ellipse130 from "@assets-new/About/Our-Vision/Ellipse 130.png";
import ellipse131 from "@assets-new/About/Our-Vision/Ellipse 131.png";
import earthImg from "@assets-new/About/Our-Vision/Rectangle Image.png";

export default function OurVision() {
  const visionPoints = [
    {
      title: "All in one product",
      description:
        "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool.",
    },
    {
      title: "Dedicated dashboard",
      description:
        "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool.",
    },
    {
      title: "Data security",
      description:
        "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool.",
    },
    {
      title: "Accessibility",
      description:
        "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool.",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-4 sm:mx-6 lg:mx-auto bg-[#EDF6FE] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-3xl lg:rounded-none z-10 my-8 shadow-sm">
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
            <div className="inline-block relative mb-4 sm:mb-0">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight select-none pb-1">
                Our Vision
              </h2>
            </div>

            <ul className="space-y-3 sm:space-y-5 max-w-xl">
              {visionPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-600 text-[13px] sm:text-base leading-normal sm:leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-950 shrink-0"></span>
                  <span className="font-normal text-slate-700">
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
            <div className="w-full aspect-16/10 overflow-hidden rounded-none shadow-sm border border-slate-200/40 bg-slate-950">
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
