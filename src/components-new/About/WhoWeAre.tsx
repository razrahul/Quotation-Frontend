export default function WhoWeAre() {
  return (
    <section className="pt-12 pb-12 lg:pt-20 lg:pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading at Top */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Who We Are – Simplifying Business Quotations Through Technology
          </h2>
        </div>

        {/* 3-Column Content Layout: Left Blue Square, Center Description, Right Yellow Square */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12">
          {/* Left Block - Solid Blue Square */}
          <div className="hidden sm:block w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 aspect-square bg-[#014798] shrink-0 rounded-none shadow-sm"></div>

          {/* Center Content - Description perfectly fitted between the two squares */}
          <div className="flex-1 text-center max-w-2xl ">
            <div className="text-slate-600 tracking-tight text-justify text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal space-y-3">
              <p>
                TechTime Software is a digital platform focused on making everyday
                business tasks easier through practical online tools. Our free
                quotation generator is designed to help business owners,
                freelancers, and professionals create clear, accurate, and
                professional quotations in minutes.
              </p>
              <p>
                We understand that preparing quotations manually can be
                time-consuming and challenging. That&apos;s why we focus on
                providing an easy-to-use online quotation maker that simplifies
                pricing, organizes customer information, and helps businesses
                communicate professionally with their clients.
              </p>
              <p className="font-medium text-slate-800">
                Our goal is to make quotation creation more efficient,
                accessible, and convenient for businesses of all sizes.
              </p>
            </div>
          </div>

          {/* Right Block - Solid Yellow Square */}
          <div className="hidden sm:block w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 aspect-square bg-[#ffb703] shrink-0 rounded-none shadow-sm"></div>
        </div>
      </div>
    </section>
  );
}
