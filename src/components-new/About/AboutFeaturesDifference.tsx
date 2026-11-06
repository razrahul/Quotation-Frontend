import img1 from "@assets-new/FeaturesDifference/feature-image-1.png";
import img2 from "@assets-new/FeaturesDifference/feature-image-2.png";

export default function AboutFeaturesDifference() {
  const features = [
    {
      title: "Customizable Professional Quotation Templates",
      description:
        "Create impressive business quotations using professionally designed templates that help present your products, services, and pricing clearly. Customize available quotation layouts with your business details, branding, and customer information to maintain a consistent and professional appearance.",
      benefits: [
        "Create professional-looking quotations.",
        "Customize available quotation templates.",
        "Present product and service details clearly.",
        "Maintain consistent business branding.",
        "Improve quotation readability and presentation.",
      ],
    },
    {
      title: "Instant PDF Quotation Download & Sharing",
      description:
        "Generate downloadable PDF quotations that are easy to share with customers and business partners. Our online quotation maker helps you prepare organized quotation documents that can be saved, printed, or sent to clients for review.",
      benefits: [
        "Download quotations in PDF format.",
        "Share professional quotations with clients.",
        "Maintain organized digital quotation records.",
        "Print quotations when required.",
        "Simplify business documentation and communication.",
      ],
    },
    {
      title: "Convenient Cloud-Based Quotation Access",
      description:
        "Keep your quotation workflow organized with convenient online access to your business documents. Cloud synchronization, where supported, can help users retrieve saved quotations across compatible devices and maintain continuity when working from different locations.",
      benefits: [
        "Convenient access to saved quotations.",
        "Improved organization of business documents.",
        "Easier quotation management.",
        "Greater flexibility for remote working.",
        "More efficient document retrieval.",
      ],
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Smart Features That Make Online Quotation Creation Easier
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed tracking-tight">
            Our online quotation generator combines simplicity with practical
            business features to help you create professional quotations quickly
            and efficiently. From customizable quotation templates to convenient
            PDF downloads, TechTime Software makes everyday quotation management
            easier for businesses and independent professionals.
          </p>
        </div>

        {/* 3-Column Showcase Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {/* Images container */}
          <div className="grid grid-cols-2 gap-4 lg:contents">
            <img
              src={img1}
              alt="Workspace preview 1"
              className="w-full object-cover rounded-3xl border border-slate-200/50 shadow-sm aspect-square sm:aspect-4/3 lg:aspect-3/4 lg:flex-1 lg:basis-0"
            />
            <img
              src={img2}
              alt="Workspace preview 2"
              className="w-full object-cover rounded-3xl border border-slate-200/50 shadow-sm aspect-square sm:aspect-4/3 lg:aspect-3/4 lg:flex-1 lg:basis-0"
            />
          </div>

          {/* Column 3: Features Details Box */}
          <div className="w-full lg:flex-2 lg:basis-0 bg-[#f0f6ff] border border-slate-200/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-center space-y-6 shadow-sm">
            {features.map((feature, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                  {feature.description}
                </p>
                <div className="pt-1">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-1">
                    Key Benefits:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                    {feature.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <span className="text-[#014798] font-bold">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

