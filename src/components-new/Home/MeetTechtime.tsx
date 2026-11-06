import frameDecor from "@assets-new/MeetTechtime/meet-techtime-sofware-frame.png";
import softwareImg from "@assets-new/MeetTechtime/meet-techtime-sofware-image-1.png";
import vectorLine from "@assets-new/KeyFeatures/key-feature-vector-line.png";

export default function MeetTechtime() {
  return (
    <section className="relative pt-6 pb-6 lg:pt-10 lg:pb-10 bg-white overflow-hidden">
      {/* Background decoration blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#014798] mb-2">
            ABOUT TECHTIME SOFTWARE
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Meet TechTime Software — Your Partner in Digital Business Efficiency
          </h2>
        </div>

        {/* Two Side-by-Side Cards wrapped in Dotted Border Frame */}
        <div className="relative max-w-[1200px] w-full mx-auto bg-[#e9f2ff] min-h-[580px] flex items-center justify-center overflow-hidden border-[3.5px] border-dashed border-[#ffb703] lg:border-none rounded-3xl lg:rounded-none py-6 lg:py-10">
          {/* Figma Yellow Dotted Frame Backdrop */}
          <img
            src={frameDecor}
            alt=""
            className="hidden lg:block absolute inset-0 w-full h-full object-fill pointer-events-none scale-[1.01] origin-center"
          />

          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-0 w-full flex items-center justify-center">
            {/* Centered inner light-blue box */}
            <div className="bg-[#e7f4fd] rounded-2xl lg:rounded-none lg:w-[1074px] flex items-center justify-center py-4 lg:py-6">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px] p-4 sm:p-6 lg:p-[30px] w-full items-stretch justify-center">
                {/* Card 1: Digital Efficiency (Blue Card) */}
                <div className="bg-[#014798] text-white rounded-2xl lg:rounded-none p-6 lg:p-8 w-full lg:w-[462px] flex flex-col justify-between shadow-md transform transition-transform duration-300 hover:-translate-y-1 shrink-0">
                  <div className="space-y-4">
                    <span className="text-xs font-semibold tracking-wider uppercase text-blue-200">
                      Your Partner in Digital Efficiency
                    </span>
                    <h3 className="text-xl lg:text-[22px] font-extrabold tracking-tight leading-snug pb-2">
                      <span>Simplifying Everyday Business{" "}</span>
                      <span className="relative inline-block">
                         Operations
                        <img
                          src={vectorLine}
                          alt="yellow highlight"
                          className="absolute left-0 bottom-[-14px] w-28 h-auto pointer-events-none"
                        />
                      </span>
                    </h3>
                    <div className="space-y-3 text-xs sm:text-sm text-blue-50/90 leading-relaxed font-normal pt-2 ">
                      <p>
                        TechTime Software provides practical online business
                        tools designed to make everyday work easier, faster, and
                        more organized. From creating professional quotations
                        and invoices to calculating GST, our solutions help
                        businesses reduce manual effort and manage essential
                        tasks efficiently.
                      </p>
                      <p>
                        We focus on delivering accessible, user-friendly digital
                        tools that support freelancers, startups, entrepreneurs,
                        and small businesses in their daily operations.
                      </p>
                      <p className="font-medium text-white">
                        Our goal is simple: make useful business software
                        easier to access and simpler to use.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Our Promise (Yellow Card) */}
                <div className="bg-[#ffb703] text-slate-900 rounded-2xl lg:rounded-none p-6 lg:p-8 w-full lg:w-[462px] flex flex-col justify-between shadow-md transform transition-transform duration-300 hover:-translate-y-1 shrink-0">
                  <div className="space-y-3">
                    <h3 className="text-xl lg:text-[22px] font-extrabold tracking-tight text-slate-950 leading-snug">
                      Simple, Accessible & Reliable Business Tools
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-normal">
                      We believe essential business software should be straightforward
                      and accessible. TechTime Software focuses on practical solutions
                      that help users complete important tasks without unnecessary
                      complexity.
                    </p>

                    <div className="pt-1">
                      <h4 className="text-xs font-extrabold text-slate-950 uppercase tracking-wider mb-2">
                        Our Commitments:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-[13px] leading-tight">
                        <li className="flex items-start gap-2">
                          <span className="text-slate-950 font-bold select-none text-base leading-none">
                            •
                          </span>
                          <span>
                            <strong className="font-extrabold text-slate-950">
                              Free Business Tools:
                            </strong>{" "}
                            <span className="text-slate-800">
                              Access essential online utilities without unnecessary software expenses.
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-950 font-bold select-none text-base leading-none">
                            •
                          </span>
                          <span>
                            <strong className="font-extrabold text-slate-950">
                              Simple User Experience:
                            </strong>{" "}
                            <span className="text-slate-800">
                              Complete everyday tasks using straightforward, easy-to-understand interfaces.
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-950 font-bold select-none text-base leading-none">
                            •
                          </span>
                          <span>
                            <strong className="font-extrabold text-slate-950">
                              Time-Saving Solutions:
                            </strong>{" "}
                            <span className="text-slate-800">
                              Reduce manual calculations and repetitive business activities.
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-950 font-bold select-none text-base leading-none">
                            •
                          </span>
                          <span>
                            <strong className="font-extrabold text-slate-950">
                              Professional Output:
                            </strong>{" "}
                            <span className="text-slate-800">
                              Create organized quotations and invoices suitable for everyday business communication.
                            </span>
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-slate-950 font-bold select-none text-base leading-none">
                            •
                          </span>
                          <span>
                            <strong className="font-extrabold text-slate-950">
                              Continuous Improvement:
                            </strong>{" "}
                            <span className="text-slate-800">
                              Focus on improving usability, convenience, and the overall experience of our digital tools.
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Mockup image inside yellow card */}
                  <div className="mt-4 rounded-xl overflow-hidden shadow-sm border border-slate-900/10 bg-white h-[75px] shrink-0">
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
