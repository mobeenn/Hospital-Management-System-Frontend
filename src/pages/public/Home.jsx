import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
   FaUserInjured,
   FaUserMd,
   FaPills,
   FaTicketAlt,
   FaBolt,
   FaShieldAlt,
   FaSyncAlt,
   FaPalette,
   FaArrowRight,
   FaHospital,
   FaPhone,
   FaEnvelope,
   FaMapMarkerAlt,
   FaHeartbeat,
   FaChevronRight,
} from "react-icons/fa";
import { MdDashboard, MdSecurity } from "react-icons/md";

const GlowBlob = ({ className }) => (
   <div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
   />
);

const FeatureCard = ({ icon: Icon, title, desc, accent }) => (
   <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/10 hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 shadow-xl">
      <div
         className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${accent}`}
      >
         <Icon className="text-white text-xl" />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
         Learn more <FaChevronRight className="ml-1 text-xs" />
      </div>
   </div>
);

const WhyCard = ({ icon: Icon, title, desc }) => (
   <div className="flex gap-4 items-start p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-cyan-500/20 transition-all duration-300">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center">
         <Icon className="text-cyan-400 text-lg" />
      </div>
      <div>
         <h4 className="text-white font-semibold mb-1">{title}</h4>
         <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      </div>
   </div>
);

export default function Home() {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   return (
      <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
         {/* ── NAV ── */}
         <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/90 backdrop-blur-xl border-b border-white/10 shadow-xl" : "bg-transparent"}`}
         >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                     <FaHospital className="text-white text-sm" />
                  </div>
                  <span className="font-bold text-white text-lg tracking-tight">
                     MediCore <span className="text-cyan-400">HMS</span>
                  </span>
               </div>
               <div className="hidden md:flex items-center gap-8 text-slate-300 text-sm font-medium">
                  <Link
                     to="/"
                     className="hover:text-cyan-400 transition-colors"
                  >
                     Home
                  </Link>
                  <Link
                     to="/about"
                     className="hover:text-cyan-400 transition-colors"
                  >
                     About
                  </Link>
                  <Link
                     to="/features"
                     className="hover:text-cyan-400 transition-colors"
                  >
                     Features
                  </Link>
                  <Link
                     to="/contact"
                     className="hover:text-cyan-400 transition-colors"
                  >
                     Contact
                  </Link>
               </div>
               <div className="flex items-center gap-3">
                  <Link
                     to="/login"
                     className="text-slate-300 hover:text-white text-sm font-medium transition-colors px-4 py-2 rounded-xl hover:bg-white/10"
                  >
                     Login
                  </Link>
                  <Link
                     to="/contact"
                     className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/25"
                  >
                     Get Started
                  </Link>
               </div>
            </div>
         </nav>

         {/* ── HERO ── */}
         <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
            {/* Blobs */}
            <GlowBlob className="w-[600px] h-[600px] bg-cyan-500 -top-40 -left-40" />
            <GlowBlob className="w-[500px] h-[500px] bg-blue-600 top-20 -right-60" />
            <GlowBlob className="w-[400px] h-[400px] bg-purple-600 bottom-0 left-1/2 -translate-x-1/2" />

            <div className="relative max-w-5xl mx-auto text-center">
               {/* Badge */}
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8">
                  <FaHeartbeat className="animate-pulse" />
                  Next-generation Hospital Management
               </div>

               <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
                  <span className="text-white">Modern Healthcare</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                     Reimagined
                  </span>
               </h1>

               <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                  MediCore HMS is a complete hospital management platform — from
                  patient registration and doctor dashboards to pharmacy and
                  real-time queue management. One system, every department.
               </p>

               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                     to="/register"
                     className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-0.5 text-base"
                  >
                     Get Started Free <FaArrowRight />
                  </Link>
                  <Link
                     to="/login"
                     className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-xl text-base"
                  >
                     Login to Dashboard
                  </Link>
               </div>

               {/* Stats strip */}
               <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                  {[
                     ["10,000+", "Patients Managed"],
                     ["500+", "Doctors Onboarded"],
                     ["99.9%", "System Uptime"],
                  ].map(([num, label]) => (
                     <div key={label} className="text-center">
                        <div className="text-2xl md:text-3xl font-extrabold text-white">
                           {num}
                        </div>
                        <div className="text-slate-500 text-xs mt-1">
                           {label}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* ── FEATURES PREVIEW ── */}
         <section className="relative py-24 px-6">
            <GlowBlob className="w-[400px] h-[400px] bg-cyan-600 top-0 right-0 opacity-10" />
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-16">
                  <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                     Core Modules
                  </p>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                     Everything your hospital needs
                  </h2>
                  <p className="text-slate-400 text-lg max-w-xl mx-auto">
                     Purpose-built modules that work together seamlessly, so
                     your staff spends time on care — not software.
                  </p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <FeatureCard
                     icon={FaUserInjured}
                     title="Patient Management"
                     desc="Register, track, and manage patient records, history, and visits from a unified dashboard."
                     accent="bg-gradient-to-br from-cyan-500 to-cyan-700"
                  />
                  <FeatureCard
                     icon={FaUserMd}
                     title="Doctor Dashboard"
                     desc="Doctors see their daily queue, write prescriptions, and review patient histories in one place."
                     accent="bg-gradient-to-br from-blue-500 to-blue-700"
                  />
                  <FeatureCard
                     icon={FaPills}
                     title="Pharmacy System"
                     desc="Manage medicine inventory, process prescriptions, and track dispensed medication in real time."
                     accent="bg-gradient-to-br from-purple-500 to-purple-700"
                  />
                  <FeatureCard
                     icon={FaTicketAlt}
                     title="Reception Queue"
                     desc="Token-based queue management ensures patients are served in order, reducing wait-time chaos."
                     accent="bg-gradient-to-br from-emerald-500 to-teal-700"
                  />
               </div>
            </div>
         </section>

         {/* ── WHY CHOOSE US ── */}
         <section className="relative py-24 px-6">
            <GlowBlob className="w-[500px] h-[500px] bg-blue-700 bottom-0 left-0 opacity-10" />
            <div className="max-w-7xl mx-auto">
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left copy */}
                  <div>
                     <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                        Why MediCore
                     </p>
                     <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Built for the way hospitals actually work
                     </h2>
                     <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        We've studied real hospital workflows and built software
                        that adapts to them — not the other way around. From a
                        busy ER to a small clinic, MediCore scales without
                        complexity.
                     </p>
                     <Link
                        to="/features"
                        className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                     >
                        Explore all features{" "}
                        <FaArrowRight className="text-sm" />
                     </Link>
                  </div>
                  {/* Right grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <WhyCard
                        icon={FaBolt}
                        title="Blazing Fast"
                        desc="Optimized React frontend with instant navigation and real-time data updates."
                     />
                     <WhyCard
                        icon={FaShieldAlt}
                        title="Secure by Default"
                        desc="Role-based access control, encrypted data storage, and audit-ready activity logs."
                     />
                     <WhyCard
                        icon={FaSyncAlt}
                        title="Real-time Flow"
                        desc="Live patient queue, token updates, and bed status — always current, no refresh needed."
                     />
                     <WhyCard
                        icon={MdDashboard}
                        title="Modern UI"
                        desc="Designed for speed and clarity so staff can learn the system in minutes, not days."
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* ── CTA BANNER ── */}
         <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
               <div className="relative bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-xl overflow-hidden">
                  <GlowBlob className="w-80 h-80 bg-cyan-500 -top-20 -left-20 opacity-20" />
                  <GlowBlob className="w-80 h-80 bg-purple-500 -bottom-20 -right-20 opacity-20" />
                  <div className="relative">
                     <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Ready to modernise your hospital?
                     </h2>
                     <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                        Join hundreds of healthcare facilities already running
                        smoother operations with MediCore HMS.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                           to="/register"
                           className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl shadow-cyan-500/30"
                        >
                           Start for Free
                        </Link>
                        <Link
                           to="/contact"
                           className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-xl"
                        >
                           Contact Sales
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* ── FOOTER ── */}
         <footer className="border-t border-white/10 py-12 px-6">
            <div className="max-w-7xl mx-auto">
               <div className="grid md:grid-cols-4 gap-8 mb-10">
                  <div className="md:col-span-2">
                     <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                           <FaHospital className="text-white text-sm" />
                        </div>
                        <span className="font-bold text-white text-lg">
                           MediCore <span className="text-cyan-400">HMS</span>
                        </span>
                     </div>
                     <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                        A modern Hospital Management System designed for real
                        clinical workflows. Fast, secure, and built for the
                        whole team.
                     </p>
                  </div>
                  <div>
                     <h4 className="text-white font-semibold mb-4">Product</h4>
                     <ul className="space-y-2 text-slate-400 text-sm">
                        {["Features", "About", "Contact"].map((l) => (
                           <li key={l}>
                              <Link
                                 to={`/${l.toLowerCase()}`}
                                 className="hover:text-cyan-400 transition-colors"
                              >
                                 {l}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <h4 className="text-white font-semibold mb-4">Contact</h4>
                     <ul className="space-y-3 text-slate-400 text-sm">
                        <li className="flex items-center gap-2">
                           <FaPhone className="text-cyan-400 flex-shrink-0" />{" "}
                           +92-300-0000000
                        </li>
                        <li className="flex items-center gap-2">
                           <FaEnvelope className="text-cyan-400 flex-shrink-0" />{" "}
                           info@medicorehms.com
                        </li>
                        <li className="flex items-center gap-2">
                           <FaMapMarkerAlt className="text-cyan-400 flex-shrink-0" />{" "}
                           Lahore, Punjab, Pakistan
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="border-t border-white/10 pt-6 text-center text-slate-500 text-sm">
                  © {new Date().getFullYear()} MediCore HMS. All rights
                  reserved.
               </div>
            </div>
         </footer>
      </div>
   );
}
