import heroLine from "@assets-new/Contact/Hero/Vector_line.png";
import circleDoted1 from "@assets-new/Contact/Hero/circle_doted-1.png";
import circleDoted2 from "@assets-new/Contact/Hero/circle_doted-2.png";
import circleDoted3 from "@assets-new/Contact/Hero/circle_doted-3.png";

export default function ContactHero() {
  return (
    <section className="relative w-full pt-16 pb-16 lg:pt-0 lg:pb-0 lg:min-h-[440px] flex items-center overflow-hidden bg-[#e7f2fd99] animate-fadeIn mb-12 lg:mb-20">
      {/* Decorative Dotted Circle - Left Top */}
      <img
        src={circleDoted1}
        alt="dotted circle left top"
        className="absolute left-12 top-0 w-36 sm:w-48 md:w-64 lg:w-[280px] pointer-events-none select-none opacity-85 z-0"
      />

      {/* Decorative Dotted Circle - Left Bottom */}
      <img
        src={circleDoted2}
        alt="dotted circle left bottom"
        className="absolute left-62 bottom-0 w-52 sm:w-64 md:w-80 lg:w-[320px] pointer-events-none select-none opacity-85 z-0"
      />

      {/* Decorative Dotted Circle - Right Vertical */}
      <img
        src={circleDoted3}
        alt="dotted circle right vertical"
        className="absolute right-0 top-0 bottom-0 h-full w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] pointer-events-none select-none object-contain opacity-85 z-0"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 z-10">
        <div>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#014798] mb-2">
            GET IN TOUCH WITH US
          </p>
          <div className="inline-block relative">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight pb-3">
              Contact Us – Get Support for Your{" "}
              <span className="relative inline-block">
                Online Quotation
                <img
                  src={heroLine}
                  alt="underline highlight"
                  className="absolute left-6 bottom-[-14px] w-72 pointer-events-none select-none"
                />
              </span>{" "}
              Generator
            </h1>
          </div>
        </div>
        <p className="text-slate-700 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-4xl mx-auto font-normal">
          Have questions about creating professional business quotations? The
          TechTime Software team is here to help. Whether you need assistance
          using our free online quotation generator, customizing quotation
          templates, downloading PDF quotations, or understanding our
          platform&apos;s features, we&apos;re ready to hear from you. Contact us for
          product inquiries, technical support, feedback, or general
          assistance, and let us help make your quotation creation process
          easier, faster, and more efficient.
        </p>
      </div>
    </section>
  );
}
