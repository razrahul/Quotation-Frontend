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
      title: "All in one product",
      description: "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool."
    },
    {
      title: "Dedicated dashboard",
      description: "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool."
    },
    {
      title: "Data security",
      description: "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool."
    },
    {
      title: "Accessibility",
      description: "Create professional quotations online instantly. Manage, download, and share quotes easily with our free tool."
    }
  ];

  return (
    <section className="relative w-full h-full bg-[#EDF6FE] py-16 overflow-hidden z-10">
      {/* Background Blue concentric circle Ellipses */}
      <img
        src={elipse1}
        alt=""
        className="absolute top-16 -right-14 w-48 h-48 object-contain pointer-events-none z-0 opacity-60"
      />
      <img
        src={elipse2}
        alt=""
        className="absolute -top-5 right-[24%] w-28 h-16 object-contain pointer-events-none z-0 opacity-60"
      />
      <img
        src={elipse3}
        alt=""
        className="absolute top-14 left-[28%] w-16 h-16 object-contain pointer-events-none z-0 opacity-60"
      />
      <img
        src={elipse4}
        alt=""
        className="absolute left-[48%] -bottom-4 w-48 h-48 object-contain pointer-events-none z-0 opacity-60"
      />
      <img
        src={elipse5}
        alt=""
        className="absolute -bottom-5 left-16 w-32 h-18 object-contain pointer-events-none z-0 opacity-60"
      />
      <img
        src={elipse6}
        alt=""
        className="absolute top-0 -left-5 w-42 h-42 object-contain pointer-events-none z-0 opacity-50"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16 w-full">
          {/* Left Column: Mission Points */}
          <div className="flex-1 max-w-2xl w-full space-y-8 lg:space-y-10 text-left">
            <h2 className="flex text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Mission
            </h2>

            <ul className="list-disc pl-5 space-y-6 marker:text-slate-950">
              {missionPoints.map((point, idx) => (
                <li key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  <strong className="font-bold text-slate-900">{point.title}: </strong>
                  {point.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Mission Laptops Image */}
          <div className="w-full md:w-[420px] lg:w-[480px] shrink-0 flex justify-center md:justify-end">
            <div className="w-full aspect-16/10 overflow-hidden rounded-none shadow-sm">
              <img
                src={missionImg}
                alt="Montage of three laptops displaying vibrant screens"
                className="w-full h-full object-contain transform hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
