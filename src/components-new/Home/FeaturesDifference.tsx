import img1 from "@assets-new/FeaturesDifference/feature-image-1.png";
import img2 from "@assets-new/FeaturesDifference/feature-image-2.png";

export default function FeaturesDifference() {
  return (
    <section className="py-12 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Features That Make a Difference
          </h2>
        </div>

        {/* 3-Column Showcase Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {/* Images container - side-by-side on mobile/tablet, direct flex items on desktop */}
          <div className="grid grid-cols-2 gap-4 lg:contents">
            {/* Column 1: Image 1 */}
            <img
              src={img1}
              alt="Workspace image 1"
              className="w-full object-cover rounded-3xl border border-slate-200/50 shadow-sm aspect-square sm:aspect-4/3 lg:aspect-3/4 lg:flex-1 lg:basis-0"
            />

            {/* Column 2: Image 2 */}
            <img
              src={img2}
              alt="Workspace image 2"
              className="w-full object-cover rounded-3xl border border-slate-200/50 shadow-sm aspect-square sm:aspect-4/3 lg:aspect-3/4 lg:flex-1 lg:basis-0"
            />
          </div>

          {/* Column 3: Features Details Box */}
          <div className="w-full lg:flex-2 lg:basis-0 bg-[#f0f6ff] border border-slate-200/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-center space-y-6 sm:space-y-8 shadow-sm">
            {/* Feature 1 */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                Professional Templates
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                Choose from multiple professionally designed templates that
                match your brand identity. Customizable to match your company
                colors and logo.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                PDF Export
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                Download quotes as PDF files instantly. Perfect for sharing with
                clients and keeping records organized.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight">
                Cloud Sync
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                Access your quotes from any device. Never lose track of
                important documents again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
