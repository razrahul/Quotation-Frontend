import profileImage from "@assets-new/Contact/Team/profileImage.png";

export default function ContactTeam() {
  const teamMembers = [
    {
      id: 1,
      name: "Team Member 1",
      role: "Founder & Product Strategist",
      description:
        "Responsible for defining the platform's vision, understanding business requirements, and guiding the development of practical digital solutions that simplify quotation creation.",
    },
    {
      id: 2,
      name: "Team Member 2",
      role: "Lead Software Developer",
      description:
        "Focused on developing and improving the online quotation generator to deliver a smooth, reliable, and user-friendly experience.",
    },
    {
      id: 3,
      name: "Team Member 3",
      role: "UI/UX Designer",
      description:
        "Dedicated to creating intuitive interfaces and professional quotation layouts that make the platform easy to navigate and use.",
    },
    {
      id: 4,
      name: "Team Member 4",
      role: "Product Research Specialist",
      description:
        "Researches business documentation requirements, user expectations, and opportunities to improve quotation creation workflows.",
    },
    {
      id: 5,
      name: "Team Member 5",
      role: "Quality Assurance Specialist",
      description:
        "Focused on reviewing platform functionality, identifying usability issues, and supporting continuous improvements to the quotation generator.",
    },
    {
      id: 6,
      name: "Team Member 6",
      role: "Customer Support Executive",
      description:
        "Helps users with quotation generator inquiries, platform navigation, and general product-related questions.",
    },
    {
      id: 7,
      name: "Team Member 7",
      role: "Digital Marketing Specialist",
      description:
        "Works on improving online visibility, communicating product benefits, and helping businesses discover useful quotation management tools.",
    },
    {
      id: 8,
      name: "Team Member 8",
      role: "Business Development Executive",
      description:
        "Focused on understanding business needs, exploring growth opportunities, and building relationships that support the platform's development.",
    },
    {
      id: 9,
      name: "Team Member 9",
      role: "Technical Support Specialist",
      description:
        "Assists with technical inquiries, investigates reported platform issues, and helps improve the overall user experience.",
    },
  ];

  return (
    <section className="relative w-full bg-white pt-0 pb-6 lg:pb-10 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#014798] mb-1.5">
            THE PEOPLE BEHIND TECHTIME SOFTWARE
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
            Meet the Team Behind Our Free Online Quotation Generator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal tracking-tight">
            Behind TechTime Software is a team focused on simplifying everyday
            business operations through practical digital solutions. Our work
            involves understanding business needs, improving user experiences,
            and developing accessible tools that make professional quotation
            creation easier. From product research and software development to
            platform improvements and user support, our goal is to help businesses
            create quotations efficiently and confidently.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="relative shrink-0 w-11 h-11 rounded-full overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center">
                    <img
                      src={profileImage}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight truncate">
                      {member.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#014798] truncate">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 text-xs tracking-tight  leading-relaxed font-normal">
                  {member.description}
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
          <polygon
            points="12,3 2,21 22,21"
            className="transform rotate-75 origin-center"
          />
        </svg>
      </div>
    </section>
  );
}
