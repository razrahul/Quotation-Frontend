import { useState } from "react";
import Navbar from "@components-new/Layout/Navbar";
import Footer from "@components-new/Layout/Footer";
import defaultAvatar from "../../assets/images/user1.png";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const teamMembers = [
    { name: "Sohan Lal Seny", role: "Software Eng. Intern" },
    { name: "Rahul Saini", role: "Software Eng. Intern" },
    { name: "Neha Yadav", role: "UI/UX Designer Intern" },
    { name: "Amit Kumar", role: "Software Eng. Intern" },
    { name: "Priya Sharma", role: "Frontend Dev Intern" },
    { name: "Vikram Singh", role: "QA Engineer Intern" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Navbar />

      <main className="grow">
        {/* Hero Section */}
        <section className="bg-linear-to-b from-blue-50/50 via-white to-white py-12 sm:py-16 border-b border-gray-100/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-3">
            <span className="text-blue-600 text-[11px] font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contact Us
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              Have questions or need assistance? Reach out to our team, and we'll get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Form & Details Section (Centered Compact Layout) */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
            
            {/* Contact Details Stacked Vertically */}
            <div className="space-y-6 text-center">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                How Can We Help?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
                We're here to help you get the most out of TechTime. If you have any inquiries about custom team pricing, feature requests, or technical issues, please message us. Our support team responds within 24 hours.
              </p>
            </div>

            {/* Info Cards Stacked */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-slate-100/80 hover:bg-slate-50 transition-colors">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-sm font-bold">
                  📍
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Office Location</h4>
                  <p className="text-slate-600 text-[11px] mt-0.5">123 Business Avenue, Suite 456, City, Country</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-slate-100/80 hover:bg-slate-50 transition-colors">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-sm font-bold">
                  ✉
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Email Address</h4>
                  <p className="text-slate-600 text-[11px] mt-0.5">support@techtimes.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-slate-100/80 hover:bg-slate-50 transition-colors">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-sm font-bold">
                  📞
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Phone Support</h4>
                  <p className="text-slate-600 text-[11px] mt-0.5">+1 (123) 456-7890</p>
                </div>
              </div>
            </div>

            {/* Premium Contact Form Box */}
            <div className="bg-slate-50/50 p-6 sm:p-8 rounded-3xl border border-slate-100/80 shadow-sm max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-850 text-xs bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-855 text-xs bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-855 text-xs bg-white"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-855 text-xs bg-white resize-none"
                    placeholder="Hi, I would like to know about..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-sm hover:shadow transition-all duration-200 cursor-pointer text-xs"
                >
                  Send Message
                </button>

                {submitted && (
                  <div className="p-3 bg-green-50 text-green-700 text-[10px] font-bold rounded-xl text-center border border-green-100 animate-fadeIn">
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>

          </div>
        </section>

        {/* Our Team Section - Restructured to 2 Columns matching Figma */}
        <section className="py-16 bg-slate-50/50 border-t border-slate-100/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Team
              </h2>
              <p className="text-slate-650 text-sm">
                The developers and designers who build and maintain the TechTime application suite.
              </p>
            </div>

            {/* Team Grid (2 columns on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-5 border border-slate-200/60 shadow-sm flex items-center gap-4 hover:shadow-md hover:border-blue-100/50 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <div className="relative shrink-0 w-12 h-12 rounded-full overflow-hidden border border-slate-200 bg-blue-50 flex items-center justify-center">
                    <img
                      src={defaultAvatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950">{member.name}</h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
