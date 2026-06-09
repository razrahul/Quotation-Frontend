import frameDecor from "@assets-new/MeetTechtime/meet-techtime-sofware-frame.png";
import softwareImg from "@assets-new/MeetTechtime/meet-techtime-sofware-image-1.png";
import vectorLine from "@assets-new/KeyFeatures/key-feature-vector-line.png";

export default function MeetTechtime() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background decoration blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Meet Techtime Software
          </h2>
        </div>

        {/* Two Side-by-Side Cards wrapped in Dotted Border Frame */}
        <div className="relative max-w-6xl mx-auto bg-[#e9f2ff]">
          {/* Figma Yellow Dotted Frame Backdrop */}
          <img
            src={frameDecor}
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          />
          
          <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Centered inner light-blue box with white border */}
            <div className="bg-[#e9f2ff] border-8 sm:border-12 md:border-16 border-white outline outline-[#014798]/10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] rounded-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
                
                {/* Card 1: Digital Efficiency (Blue Card) */}
                <div className="bg-[#014798] text-white rounded-none p-8 sm:p-10 flex flex-col justify-between shadow-md transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                      Your Partner in <br />
                      <span className="inline-flex flex-col items-start gap-1 pb-2">
                        <span>Digital Efficiency</span>
                        <img
                          src={vectorLine}
                          alt="yellow highlight"
                          className="w-full h-auto pointer-events-none"
                        />
                      </span>
                    </h3>
                    <div className="space-y-4 text-sm sm:text-base text-blue-50/90 leading-relaxed font-normal">
                      <p>
                        We build simple, powerful, and efficient online tools to
                        help businesses streamline their daily operations. Our
                        mission is to make professional business software
                        accessible to everyone—no complicated training required.
                      </p>
                      <p>
                        Founded with the belief that technology should work for
                        you, not against you, we focus on creating intuitive
                        solutions that solve real business problems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Our Promise (Yellow Card) */}
                <div className="bg-[#ffb703] text-slate-900 rounded-none p-8 sm:p-10 flex flex-col justify-between shadow-md transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                      Our Promise
                    </h3>
                    
                    <ul className="space-y-3.5 text-sm sm:text-base font-medium">
                      <li className="flex items-start gap-2.5">
                        <span className="text-slate-900 font-bold select-none">•</span>
                        <span>
                          <strong className="font-extrabold text-slate-950">Free tools:</strong>{" "}
                          <span className="text-slate-800">Zero cost to get started.</span>
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-slate-900 font-bold select-none">•</span>
                        <span>
                          <strong className="font-extrabold text-slate-950">Simple design:</strong>{" "}
                          <span className="text-slate-800">Learn in seconds</span>
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-slate-900 font-bold select-none">•</span>
                        <span>
                          <strong className="font-extrabold text-slate-950">Reliable service:</strong>{" "}
                          <span className="text-slate-800">Your data is secure.</span>
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Mockup image inside yellow card */}
                  <div className="mt-8 rounded-none overflow-hidden shadow-sm border border-slate-900/10 bg-white">
                    <img
                      src={softwareImg}
                      alt="TechTime Interface Preview"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

