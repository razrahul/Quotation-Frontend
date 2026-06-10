import heroLine from "@assets-new/About/Hero/hero Vector line.png";
import circleDoted1 from "@assets-new/About/Hero/circle_doted-1.png";
import circleDoted2 from "@assets-new/About/Hero/circle_doted-2.png";
import circleDoted3 from "@assets-new/About/Hero/circle_doted-3.png";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#e7f2fd99] py-16 sm:py-24 md:py-28">
      {/* Decorative Dotted Circle - Left Top */}
      <img
        src={circleDoted1}
        alt="dotted circle left top"
        className="absolute left-15 top-0 w-42 sm:w-48 md:w-64 lg:w-[320px] pointer-events-none"
      />

      {/* Decorative Dotted Circle - Left Bottom */}
      <img
        src={circleDoted2}
        alt="dotted circle left bottom"
        className="absolute right-0 top-0 w-48 sm:w-64 md:w-80 lg:w-[180px] pointer-events-none"
      />

      {/* Decorative Dotted Circle - Right Vertical */}
      <img
        src={circleDoted3}
        alt="dotted circle right vertical"
        className="absolute left-[16%] -bottom-40 h-full w-2xl sm:max-w-[250px] md:max-w-[300px] lg:w-[360px] pointer-events-none object-contain"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
        <div className="inline-block relative">
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-800 tracking-tight pb-3 select-none">
            About Us
          </h1>
          <img
            src={heroLine}
            alt="underline highlight"
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[110%] max-w-[190px] pointer-events-none"
          />
        </div>
        <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-3xl mx-auto font-normal">
          Generate accurate, ready-to-send quotations anytime, anywhere.
          Customize templates to match your needs and simplify your quoting
          process—all for free. Generate accurate, ready-to-send quotations
          anytime, anywhere. Customize templates to match your needs and
          simplify your quoting process—all for free.
        </p>
      </div>
    </section>
  );
}

