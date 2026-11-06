import heroLine from "@assets-new/About/Hero/hero Vector line.png";
import circleDoted1 from "@assets-new/Contact/Hero/circle_doted-1.png";
import circleDoted2 from "@assets-new/Contact/Hero/circle_doted-2.png";
import circleDoted3 from "@assets-new/Contact/Hero/circle_doted-3.png";

export default function AboutHero() {
  return (
    <section className="relative w-full pt-16 pb-16 lg:pt-0 lg:pb-0 lg:min-h-[440px] flex items-center overflow-hidden bg-[#e7f2fd99]">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
        <div className="inline-block relative">
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight pb-3">
            About Us – {" "}
            <span className="relative inline-block">
              Making Professional Quotations
              <img
                src={heroLine}
                alt="underline highlight"
                className="absolute right-[-68px] bottom-[-20px] w-72 pointer-events-none"
              />
            </span>{" "}
            Simple & Accessible
          </h1>
        </div>
        <p className="text-slate-700 text-justify tracking-tight text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-4xl mx-auto font-normal">
          At TechTime Software, we believe creating professional business
          quotations should be simple, fast, and accessible to everyone. Our free
          online quotation generator helps freelancers, startups, and businesses
          create accurate, well-structured quotations without complicated software
          or manual calculations. We are committed to simplifying the quotation
          process with practical digital tools that save time, improve
          productivity, and support everyday business operations.
        </p>
      </div>
    </section>
  );
}
