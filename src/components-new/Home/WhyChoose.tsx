import fullLine from "@assets-new/WhyChoose/Why-Businesses-full-line-design.png";
import curveLine from "@assets-new/WhyChoose/Why-Businesses-vector-line.png";

export default function WhyChoose() {
  const points = [
    {
      title: "Save Time on Everyday Business Tasks",
      description:
        "Reduce manual work and complete routine business activities faster. Generate quotations, prepare invoices, and calculate GST with convenient online tools that help you focus on customers and business growth.",
    },
    {
      title: "Create Professional Business Documents",
      description:
        "Prepare clear, organized, and professional-looking quotations and invoices that improve your business communication. Present pricing, customer details, and transaction information in a structured format.",
    },
    {
      title: "Simple Tools Anyone Can Use",
      description:
        "Our user-friendly business tools are designed for easy navigation and straightforward workflows. Create quotations, generate invoices, and perform GST calculations without advanced technical knowledge.",
    },
    {
      title: "Free Tools for Everyday Business Needs",
      description:
        "Access essential quotation, invoice, and GST calculation tools without expensive software subscriptions. TechTime Software helps small businesses and independent professionals manage routine tasks more affordably.",
    },
  ];

  return (
    <section className="relative pt-12 pb-6 lg:pt-20 lg:pb-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#014798] mb-2">
            WHY CHOOSE TECHTIME
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Why Businesses Choose TechTime Software
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            TechTime Software helps businesses simplify routine tasks with practical, easy-to-use online tools. Our solutions are designed to save time, improve efficiency, and make professional business documentation more accessible.
          </p>
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

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-x-20 md:gap-y-16 px-4 pt-2 pb-2 sm:px-8 sm:pt-4 sm:pb-2">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex flex-col space-y-3 text-left p-2 pb-3 border-b border-slate-100 last:border-b-0 md:border-b-0 md:p-3"
              >
                {/* Title with number badge */}
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#014798] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                      {idx + 1}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      {point.title}
                    </h3>
                  </div>
                  <div className="pl-11">
                    <img
                      src={curveLine}
                      alt=""
                      className="w-26 max-w-[120px] h-auto pointer-events-none"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal pl-0 sm:pl-11 tracking-tight">
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
