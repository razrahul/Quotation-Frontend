import profileImage from "@assets-new/Contact/Team/profileImage.png";

export default function ContactTeam() {
  const teamMembers = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    name: "Sekhar Raja Ganguly",
    role: "Lead Researcher",
  }));

  return (
    <section className="relative w-full bg-white py-12 sm:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Team
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal">
            Generate accurate, ready-to-send quotations anytime, anywhere.
            Customize templates to match your needs and simplify your quoting
            process—all for free. Generate accurate, ready-to-send quotations
            anytime, anywhere. Customize templates to match your needs and
            simplify your quoting process—all for free.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl p-2 sm:p-2.5 border border-slate-200/70 shadow-xs flex items-center gap-2.5 hover:shadow-md hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="relative shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center">
                <img
                  src={profileImage}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5 min-w-0">
                <h4 className="text-[11px] sm:text-xs font-bold text-slate-950 tracking-tight truncate">
                  {member.name}
                </h4>
                <p className="text-slate-550 text-[9px] sm:text-[10px] font-medium truncate">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Yellow Triangle - Bottom Right */}
      <div className="absolute right-8 sm:right-16 lg:right-24 bottom-6 sm:bottom-12 pointer-events-none select-none opacity-80 animate-pulse">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#ffb703] stroke-current stroke-2"
        >
          <polygon points="12,3 2,21 22,21" className="transform rotate-75 origin-center" />
        </svg>
      </div>
    </section>
  );
}
