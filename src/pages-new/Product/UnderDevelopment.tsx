import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@components-new/Layout/Navbar";
import Footer from "@components-new/Layout/Footer";

// Import dotted circles for background decoration
import circleDoted1 from "@assets-new/Contact/Hero/circle_doted-1.png";
import circleDoted2 from "@assets-new/Contact/Hero/circle_doted-2.png";
import circleDoted3 from "@assets-new/Contact/Hero/circle_doted-3.png";

export default function UnderDevelopment() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Notification email submitted:", email);
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className=" h-[520px] grow flex items-center justify-center py-16 px-4 relative overflow-hidden bg-white">
        {/* Absolute Background Circles */}
        <img
          src={circleDoted1}
          alt="dotted circle left top"
          className="absolute left-12 top-0 w-36 sm:w-48 md:w-64 lg:w-[280px] pointer-events-none select-none opacity-85"
        />
        <img
          src={circleDoted2}
          alt="dotted circle left bottom"
          className="absolute left-62 bottom-0 w-52 sm:w-64 md:w-80 lg:w-[320px] pointer-events-none select-none opacity-85"
        />
        <img
          src={circleDoted3}
          alt="dotted circle right vertical"
          className="absolute right-0 top-0 bottom-0 h-full w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] pointer-events-none select-none object-contain opacity-85"
        />

        {/* Content Box */}
        <div className="relative max-w-2xl w-full text-center space-y-8 z-10 px-4">
          {/* Animated Construction SVG (Gears) */}
          <div className="flex justify-center select-none pointer-events-none">
            <div className="relative w-28 h-28 bg-[#edf6fe] rounded-3xl border border-blue-100 flex items-center justify-center shadow-xs">
              {/* Outer Gear */}
              <svg
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="text-[#014798] animate-spin [animation-duration:12s]"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>

              {/* Smaller Inner Gear */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="text-[#ffb703] absolute bottom-4 right-4 animate-spin [animation-duration:8s] [animation-direction:reverse]"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              Feature Under Development
            </h1>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto font-normal">
              We are actively working on this feature to bring you the best
              tools. Submit your email below to get notified as soon as it goes
              live!
            </p>
          </div>

          {/* Email Form */}
          <div className="max-w-md mx-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-slate-800 text-sm bg-slate-50/50 hover:bg-slate-50/20 focus:bg-white transition-all duration-200"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#014798] hover:bg-[#00387a] text-white rounded-xl text-sm font-bold shadow-xs hover:shadow transition-all duration-200 cursor-pointer shrink-0"
              >
                Notify Me
              </button>
            </form>

            {submitted && (
              <div className="mt-4 p-3 bg-green-50 text-green-700 text-xs font-bold rounded-xl border border-green-150 animate-fadeIn">
                ✓ Thank you! We will notify you once this feature is ready.
              </div>
            )}
          </div>

          {/* Back to Home Button */}
          <div className="pt-2">
            <Link
              to="/home"
              className="inline-block border border-slate-200 bg-white hover:bg-slate-50 text-slate-650 px-6 py-2.5 rounded-full text-sm font-bold shadow-xs hover:shadow-sm transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
