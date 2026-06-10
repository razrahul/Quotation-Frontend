export default function WhoWeAre() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Left Block - Solid Blue */}
          <div className="w-full sm:w-[22%] aspect-3/4 sm:aspect-square md:aspect-3/4 lg:aspect-square max-h-[300px] bg-[#014798] shrink-0 rounded-none shadow-sm"></div>

          {/* Center Content */}
          <div className="flex-1 text-center space-y-6 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Who Are We
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Generate accurate, ready-to-send quotations anytime, anywhere.
              Customize templates to match your needs and simplify your quoting
              process—all for free. Generate accurate, ready-to-send quotations
              anytime, anywhere. Customize templates to match your needs and
              simplify your quoting process—all for free.
            </p>
          </div>

          {/* Right Block - Solid Yellow */}
          <div className="w-full sm:w-[22%] aspect-3/4 sm:aspect-square md:aspect-3/4 lg:aspect-square max-h-[300px] bg-[#ffb703] shrink-0 rounded-none shadow-sm"></div>
        </div>
      </div>
    </section>
  );
}
