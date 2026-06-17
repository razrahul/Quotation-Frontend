import heroLine from "@assets-new/Contact/Hero/Vector_line.png";
import circleDoted1 from "@assets-new/Contact/Hero/circle_doted-1.png";
import circleDoted2 from "@assets-new/Contact/Hero/circle_doted-2.png";
import circleDoted3 from "@assets-new/Contact/Hero/circle_doted-3.png";

export default function ContactHero() {
  return (
    <section className="relative w-full pt-12 pb-12 lg:pt-0 lg:pb-0 lg:h-[425px] flex items-center overflow-hidden bg-[#e7f2fd99] animate-fadeIn">
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
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-slate-800 tracking-tight pb-3 select-none">
            Contact Us
          </h1>
          <img
            src={heroLine}
            alt="underline highlight"
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[110%] max-w-[190px] pointer-events-none select-none"
          />
        </div>
        <p className="text-slate-650 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-3xl mx-auto font-normal">
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
