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
        <div className="relative max-w-[1200px] w-full mx-auto bg-[#e9f2ff] lg:h-[572px] flex items-center justify-center overflow-hidden">
          {/* Figma Yellow Dotted Frame Backdrop */}
          <img
            src={frameDecor}
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none scale-[1.01] origin-center"
          />
          
          <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-0 w-full flex items-center justify-center">
            {/* Centered inner light-blue box with thin white border */}
            <div className="bg-[#e7f4fd] rounded-none lg:w-[1074px] lg:h-[446px] flex items-center justify-center">
              <div className="flex flex-col md:flex-row gap-6 lg:gap-[30px] p-6 sm:p-8 lg:p-[30px] w-full items-center justify-center">
                
                {/* Card 1: Digital Efficiency (Blue Card) */}
                <div className="bg-[#014798] text-white rounded-none p-6 lg:p-[30px] w-full lg:w-[462px] lg:h-[326px] flex flex-col justify-between shadow-md transform transition-transform duration-300 hover:-translate-y-1 shrink-0">
                  <div className="space-y-4">
                    <h3 className="text-xl lg:text-[22px] font-extrabold tracking-tight leading-tight pb-3">
                      Your Partner in{" "}
                      <span className="relative inline-block">
                        Digital Efficiency
                        <img
                          src={vectorLine}
                          alt="yellow highlight"
                          className="absolute left-0 bottom-[-24px] w-full h-auto pointer-events-none"
                        />
                      </span>
                    </h3>
                    <div className="space-y-2 text-xs lg:text-[15px] text-blue-50/90 leading-normal font-normal">
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
                <div className="bg-[#ffb703] text-slate-900 rounded-none p-6 lg:p-[30px] w-full lg:w-[462px] lg:h-[326px] flex flex-col justify-between shadow-md transform transition-transform duration-300 hover:-translate-y-1 shrink-0">
                  <div className="space-y-4">
                    <h3 className="text-xl lg:text-[22px] font-extrabold tracking-tight text-slate-950 leading-tight">
                      Our Promise
                    </h3>
                    
                    <ul className="space-y-1.5 text-xs lg:text-[13px] font-medium leading-normal">
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
                  <div className="mt-4 lg:mt-0 rounded-none overflow-hidden shadow-sm border border-slate-900/10 bg-white h-[90px] lg:h-[100px] shrink-0">
                    <img
                      src={softwareImg}
                      alt="TechTime Interface Preview"
                      className="w-full h-full object-cover object-top"
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

