import { useState } from "react";
import { Link } from "react-router-dom";
import leftImage from "@assets-new/Contact/ContatctUs/leftImage.png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
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
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative w-full bg-white pt-6 lg:pt-10 pb-12 lg:pb-20 overflow-hidden">
      {/* Background Decorative Outline Triangle - Top Right */}
      <div className="absolute right-[20%] top-[8%] pointer-events-none select-none opacity-80 animate-bounce delay-150">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#ffb703] stroke-current stroke-2"
        >
          <polygon points="12,3 2,21 22,21" className="transform rotate-15" />
        </svg>
      </div>

      {/* Background Decorative Outline Circle - Middle Right */}
      <div className="absolute -right-3 top-[42%] pointer-events-none select-none opacity-80">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-[#ffb703] stroke-current stroke-2 animate-pulse"
        >
          <circle cx="10" cy="10" r="8" />
        </svg>
      </div>

      {/* Background Decorative Outline Triangle - Bottom Center */}
      <div className="absolute left-[58%] bottom-[6%] pointer-events-none select-none opacity-80 animate-bounce">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#ffb703] stroke-current stroke-2"
        >
          <polygon points="12,3 2,21 22,21" className="transform rotate-135" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column: Phone Illustration */}
          <div className="w-full lg:w-[46%] flex justify-center">
            <img
              src={leftImage}
              alt="Customer assistance illustration"
              className="w-full max-w-[460px] h-auto object-contain pointer-events-none select-none"
            />
          </div>

          {/* Right Column: Contact Us Form */}
          <div className="w-full lg:w-[54%] space-y-6 bg-slate-50/40 p-6 sm:p-8 lg:p-0 rounded-3xl border border-slate-100/80 lg:border-none lg:bg-transparent">
            {/* Header row with Title and Back to Home button */}
            <div className="space-y-2">
              <div className="flex justify-end">
                <Link
                  to="/"
                  className="inline-flex items-center gap-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold select-none shadow-xs transition-colors shrink-0"
                >
                  ← Back to Home
                </Link>
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#014798] text-center">
                WE&apos;RE HERE TO HELP
              </p>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Have Questions About Our Quotation Generator? Contact Our Team
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed tracking-tight">
                Need assistance with our free online quotation generator? Whether
                you have questions about quotation templates, PDF downloads,
                business quotation creation, or platform functionality,
                we&apos;d love to hear from you. Fill out the contact form below to
                share your inquiry, feedback, or suggestions with the TechTime
                Software team. We&apos;re committed to helping you enjoy a simple
                and convenient quotation creation experience.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Full Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-800 text-xs sm:text-sm bg-slate-50/50 hover:bg-slate-50/20 focus:bg-white transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter Your Company Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-800 text-xs sm:text-sm bg-slate-50/50 hover:bg-slate-50/20 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-800 text-xs sm:text-sm bg-slate-50/50 hover:bg-slate-50/20 focus:bg-white transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Phone Number"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-800 text-xs sm:text-sm bg-slate-50/50 hover:bg-slate-50/20 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell Us How We Can Help You..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-800 text-xs sm:text-sm bg-slate-50/50 hover:bg-slate-50/20 focus:bg-white transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#014798] hover:bg-[#003c82] text-white rounded-xl font-bold tracking-wide shadow-xs hover:shadow transition-all duration-200 cursor-pointer text-xs sm:text-sm"
              >
                Send Your Message →
              </button>

              {submitted && (
                <div className="p-3.5 bg-green-50 text-green-700 text-xs font-bold rounded-xl text-center border border-green-150 animate-fadeIn">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              <p className="text-[11px] text-slate-400 leading-relaxed font-normal text-center sm:text-left select-none pt-1">
                By submitting this form, you agree to our{" "}
                <Link to="/terms" className="underline hover:text-slate-600">
                  Terms of Service
                </Link>{" "}
                and acknowledge our{" "}
                <Link
                  to="/privacy-policy"
                  className="underline hover:text-slate-600"
                >
                  Privacy Policy
                </Link>{" "}
                regarding the collection and use of your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
