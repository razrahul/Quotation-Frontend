import Navbar from "@components-new/Layout/Navbar";
import Footer from "@components-new/Layout/Footer";
import earthImg from "@assets-new/earth_space.png";
import sparkleIcon from "@assets-new/WhyChoose/Why-Businesses-vector-line.png";
import diffImg2 from "@assets-new/FeaturesDifference/feature-image-2.png";
import FeaturesDifference from "@components-new/Home/FeaturesDifference";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Navbar />

      <main className="grow">
        {/* Page Hero */}
        <section className="bg-linear-to-b from-blue-50/50 via-white to-white py-16 sm:py-24 border-b border-gray-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Company Overview
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              About Us
            </h1>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              TechTime is a powerful suite of productivity tools designed to help business owners, freelancers, and teams manage quotes, track expenses, and more.
            </p>
          </div>
        </section>

        {/* Who We Are - Stacked Layout with Large Color Panels */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Who We Are
              </h2>
              <p className="text-slate-600 text-base leading-relaxed max-w-3xl mx-auto">
                Founded with a vision to eliminate administration hassles for small businesses, TechTime has evolved into a premier toolset. We believe that software should be intuitive, highly responsive, and visually beautiful. Our products are built by engineering experts who understand the challenges of running a business. By centralizing quotations, invoicing, and calculations, we enable professionals to work faster and focus on what truly matters.
              </p>
            </div>

            {/* Side-by-side Large Rectangular Color Panels */}
            <div className="grid grid-cols-2 gap-6 h-40 sm:h-52">
              <div className="bg-blue-600 rounded-4xl shadow-md flex items-center justify-center transform hover:scale-[1.01] transition-transform duration-300">
                <span className="text-white font-extrabold text-xl sm:text-2xl tracking-wider">Tech</span>
              </div>
              <div className="bg-[#ffb703] rounded-4xl shadow-md flex items-center justify-center transform hover:scale-[1.01] transition-transform duration-300">
                <span className="text-slate-950 font-extrabold text-xl sm:text-2xl tracking-wider">Time</span>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision (with Earth Image) */}
        <section className="py-20 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Vision Points */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Our Vision
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    We aim to power the global workforce of freelancers and small businesses by setting the benchmark for visual standard and efficiency.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center mt-1">
                      <img src={sparkleIcon} alt="" className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Innovation-Driven</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mt-0.5">Constantly pushing limits to deliver smarter productivity features and automatic upgrades.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center mt-1">
                      <img src={sparkleIcon} alt="" className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">User-Centric UI</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mt-0.5">Designing simple interfaces that require zero learning curve and feel premium.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center mt-1">
                      <img src={sparkleIcon} alt="" className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Secure Architecture</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mt-0.5">Ensuring that all calculations, client histories, and PDF exports remain securely protected.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Earth Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                  <img
                    src={earthImg}
                    alt="Earth from Space"
                    className="w-full h-auto object-cover opacity-90 transform transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Decorative Mockup */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-2 shadow-lg">
                  <img
                    src={diffImg2}
                    alt="Mission Illustration"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Right Column: Mission Points */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Our Mission
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    We deliver tools engineered for high performance, reliability, and visual distinction.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-yellow-100 flex items-center justify-center mt-1">
                      <span className="text-yellow-700 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Efficiency First</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mt-0.5">Reduce hours of admin tasks into minutes so you can focus on core work.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-yellow-100 flex items-center justify-center mt-1">
                      <span className="text-yellow-700 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Professional Standards</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mt-0.5">Enable every small business to present themselves beautifully with curated styles.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-yellow-100 flex items-center justify-center mt-1">
                      <span className="text-yellow-700 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Centralized Toolkit</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mt-0.5">Provide invoicing, calculations, and active work notes in one unified workspace.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="bg-white">
            <FeaturesDifference />
        </section>
        

       
       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
