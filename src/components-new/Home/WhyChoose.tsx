import fullLine from "@assets-new/WhyChoose/Why-Businesses-full-line-design.png";
import curveLine from "@assets-new/WhyChoose/Why-Businesses-vector-line.png";

export default function WhyChoose() {
  const points = [
    {
      title: "Saves Time",
      description:
        "Automate repetitive tasks and focus on what matters most —growing your business.",
    },
    {
      title: "Professional Results",
      description:
        "Generate documents that look like they came from an enterprise-grade system.",
    },
    {
      title: "No Learning Curve",
      description:
        "Intuitive design means you can start using tools immediately without training.",
    },
    {
      title: "Always Free",
      description:
        "Access all core features without ever paying a cent. No trials, no credit card required.",
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Businesses Choose Techtime
          </h2>
        </div>

        {/* Benefits Quadrant Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical and Horizontal Separator Lines Cross */}
          <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none z-0">
            <img
              src={fullLine}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20 md:gap-x-28 md:gap-y-28 p-6 sm:p-10">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex flex-col space-y-4 text-left p-4"
              >
                {/* Title with number badge */}
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#014798] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                      {point.title}
                    </h3>
                  </div>
                  <div className="pl-11">
                    <img
                      src={curveLine}
                      alt=""
                      className="w-full max-w-[120px] h-auto pointer-events-none"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
