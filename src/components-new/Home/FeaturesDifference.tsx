import img1 from "@assets-new/FeaturesDifference/feature-image-1.png";
import img2 from "@assets-new/FeaturesDifference/feature-image-2.png";

export default function FeaturesDifference() {
  return (
    <section className="pt-6 pb-12 lg:pt-10 lg:pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#014798] mb-2">
            SMARTER FEATURES
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Smart Features That Simplify Your Business Workflow
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Make business documentation easier with practical features designed to improve speed, accuracy, and convenience. From professional templates to document downloads, TechTime Software helps streamline essential business activities.
          </p>
        </div>

        {/* 3-Column Showcase Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {/* Images container - side-by-side on mobile/tablet, direct flex items on desktop */}
          <div className="grid grid-cols-2 gap-4 lg:contents">
            {/* Column 1: Image 1 */}
            <img
              src={img1}
              alt="Workspace preview 1"
              className="w-full object-cover rounded-3xl border border-slate-200/50 shadow-sm aspect-square sm:aspect-4/3 lg:aspect-3/4 lg:flex-1 lg:basis-0"
            />

            {/* Column 2: Image 2 */}
            <img
              src={img2}
              alt="Workspace preview 2"
              className="w-full object-cover rounded-3xl border border-slate-200/50 shadow-sm aspect-square sm:aspect-4/3 lg:aspect-3/4 lg:flex-1 lg:basis-0"
            />
          </div>

          {/* Column 3: Features Details Box */}
          <div className="w-full lg:flex-2 lg:basis-0 bg-[#f0f6ff] border border-slate-200/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-center space-y-6 sm:space-y-8 shadow-sm">
            {/* Feature 1 */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                Professional Quotation & Invoice Templates
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                Create business documents using clean, organized templates designed for professional communication. Present customer information, product details, service descriptions, pricing, and totals in a clear and readable format.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                Download Professional Quotations & Invoices as PDFs
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                Convert your completed quotations and invoices into convenient PDF documents. Easily download, share, print, and maintain digital records of important business transactions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                Convenient Access to Your Business Documents
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                Keep your business workflow organized with convenient access to your online tools. Where account-based document storage and synchronization are available, you can manage saved business documents across supported devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
