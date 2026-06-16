import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
   FaHospital,
   FaPhone,
   FaEnvelope,
   FaMapMarkerAlt,
   FaUserInjured,
   FaUserMd,
   FaPills,
   FaTicketAlt,
   FaLock,
   FaClipboardList,
   FaChartBar,
   FaBed,
   FaFileAlt,
   FaHistory,
   FaBell,
   FaMobileAlt,
   FaArrowRight,
   FaCheckCircle,
} from "react-icons/fa";
import { MdAdminPanelSettings, MdVerified } from "react-icons/md";

const GlowBlob = ({ className }) => (
   <div
      className={`absolute rounded-full blur-3xl opacity-15 pointer-events-none ${className}`}
   />
);

const features = [
   {
      category: "Patient Services",
      accent: "from-cyan-500 to-blue-600",
      border: "border-cyan-500/20",
      glow: "bg-cyan-500",
      items: [
         {
            icon: FaUserInjured,
            title: "Patient Registration",
            desc: "Register patients quickly with full demographic details, CNIC, contact info, and medical history. Instant duplicate detection prevents double-entry.",
            bullets: [
               "Unique patient ID generation",
               "Photo & document upload",
               "Search by name, CNIC, or token",
            ],
         },
         {
            icon: FaTicketAlt,
            title: "Token Queue System",
            desc: "Issue numbered tokens at reception and manage real-time patient queues per department — eliminating crowding and confusion.",
            bullets: [
               "Department-wise queues",
               "Live status display board",
               "Token recall & skip logic",
            ],
         },
         {
            icon: FaHistory,
            title: "Visit History",
            desc: "Every patient visit, diagnosis, prescription, and lab result is stored and instantly accessible to any authorised staff member.",
            bullets: [
               "Full chronological history",
               "Filter by date or doctor",
               "Export as PDF report",
            ],
         },
      ],
   },
   {
      category: "Clinical Tools",
      accent: "from-blue-500 to-purple-600",
      border: "border-blue-500/20",
      glow: "bg-blue-500",
      items: [
         {
            icon: FaUserMd,
            title: "Doctor Dashboard",
            desc: "Doctors see today's patient queue, write structured prescriptions, and review full visit histories without leaving their screen.",
            bullets: [
               "Live daily queue view",
               "Prescription builder with drug search",
               "Quick re-prescription from history",
            ],
         },
         {
            icon: FaClipboardList,
            title: "Prescription System",
            desc: "Structured digital prescriptions with medicine, dosage, duration, and instructions — automatically sent to the pharmacy module.",
            bullets: [
               "Linked directly to pharmacy",
               "Dosage & frequency templates",
               "Printable & PDF-ready",
            ],
         },
         {
            icon: FaBed,
            title: "Ward & Bed Management",
            desc: "Track bed availability across wards in real time. Admit, transfer, and discharge patients with a few clicks.",
            bullets: [
               "Live occupancy map",
               "Ward-wise filtering",
               "Admission & discharge records",
            ],
         },
      ],
   },
   {
      category: "Pharmacy & Inventory",
      accent: "from-purple-500 to-pink-600",
      border: "border-purple-500/20",
      glow: "bg-purple-500",
      items: [
         {
            icon: FaPills,
            title: "Pharmacy Management",
            desc: "Process prescriptions, dispense medicine, and maintain a complete inventory — all in a single pharmacy interface.",
            bullets: [
               "Prescription-linked dispensing",
               "Stock level alerts",
               "Medicine batch tracking",
            ],
         },
         {
            icon: FaChartBar,
            title: "Inventory & Reports",
            desc: "Monitor stock, set reorder thresholds, and generate usage reports so the pharmacy is never caught short.",
            bullets: [
               "Low-stock notifications",
               "Supplier management",
               "Monthly usage analytics",
            ],
         },
      ],
   },
   {
      category: "Administration",
      accent: "from-emerald-500 to-teal-600",
      border: "border-emerald-500/20",
      glow: "bg-emerald-500",
      items: [
         {
            icon: MdAdminPanelSettings,
            title: "Role-Based Access Control",
            desc: "Assign granular permissions per role — Admin, Doctor, Nurse, Receptionist, Pharmacist — so staff only see what they need.",
            bullets: [
               "Per-module permission control",
               "Audit trail for all actions",
               "Multi-hospital support ready",
            ],
         },
         {
            icon: FaLock,
            title: "Security & Compliance",
            desc: "All data is encrypted at rest and in transit. Session management, login logs, and inactivity timeouts keep records safe.",
            bullets: [
               "JWT-based authentication",
               "Session timeout control",
               "Comprehensive activity logs",
            ],
         },
         {
            icon: FaFileAlt,
            title: "Reporting & Analytics",
            desc: "Generate OPD summaries, pharmacy reports, and admission statistics — exportable as PDF or Excel at any time.",
            bullets: [
               "Daily, weekly, monthly views",
               "Department-level breakdowns",
               "One-click PDF export",
            ],
         },
      ],
   },
];

const FeatureCard = ({ icon: Icon, title, desc, bullets, accent, border }) => (
   <div
      className={`bg-white/5 border ${border} rounded-2xl p-7 backdrop-blur-xl hover:bg-white/8 hover:-translate-y-1 transition-all duration-300 group`}
   >
      <div
         className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 bg-gradient-to-br ${accent} shadow-lg`}
      >
         <Icon className="text-white text-lg" />
      </div>
      <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
      <ul className="space-y-2">
         {bullets.map((b) => (
            <li
               key={b}
               className="flex items-center gap-2 text-slate-300 text-sm"
            >
               <FaCheckCircle className="text-cyan-400 flex-shrink-0 text-xs" />
               {b}
            </li>
         ))}
      </ul>
   </div>
);

export default function Features() {
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
                  <Link to="/features" className="text-cyan-400">
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
                     to="/register"
                     className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/25"
                  >
                     Get Started
                  </Link>
               </div>
            </div>
         </nav>

         {/* ── PAGE HERO ── */}
         <section className="relative pt-36 pb-20 px-6 text-center">
            <GlowBlob className="w-[500px] h-[500px] bg-cyan-500 -top-20 left-1/2 -translate-x-1/2" />
            <GlowBlob className="w-[400px] h-[400px] bg-purple-600 top-40 right-0" />
            <div className="relative max-w-3xl mx-auto">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
                  <MdVerified /> Complete Feature Set
               </div>
               <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                  Every tool your hospital{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                     actually needs
                  </span>
               </h1>
               <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                  MediCore HMS covers the full clinical and administrative
                  workflow — from the moment a patient walks in to the moment
                  they leave, and everything in between.
               </p>
            </div>

            {/* Quick feature count */}
            <div className="relative mt-12 flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
               {[
                  "11 Modules",
                  "Role-Based Access",
                  "Real-time Data",
                  "Mobile Responsive",
                  "PDF Reports",
               ].map((tag) => (
                  <span
                     key={tag}
                     className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm backdrop-blur-xl"
                  >
                     {tag}
                  </span>
               ))}
            </div>
         </section>

         {/* ── FEATURE CATEGORIES ── */}
         {features.map(({ category, accent, border, glow, items }) => (
            <section key={category} className="relative py-16 px-6">
               <GlowBlob
                  className={`w-[300px] h-[300px] ${glow} top-0 left-0`}
               />
               <div className="max-w-7xl mx-auto">
                  <div className="flex items-center gap-3 mb-10">
                     <div
                        className={`h-px flex-1 bg-gradient-to-r ${accent} opacity-30`}
                     />
                     <h2 className="text-2xl font-bold text-white whitespace-nowrap">
                        {category}
                     </h2>
                     <div
                        className={`h-px flex-1 bg-gradient-to-l ${accent} opacity-30`}
                     />
                  </div>
                  <div
                     className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
                  >
                     {items.map((item) => (
                        <FeatureCard
                           key={item.title}
                           {...item}
                           accent={accent}
                           border={border}
                        />
                     ))}
                  </div>
               </div>
            </section>
         ))}

         {/* ── CTA ── */}
         <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
               <div className="relative bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-xl overflow-hidden">
                  <GlowBlob className="w-80 h-80 bg-cyan-500 -top-20 -left-20 opacity-20" />
                  <GlowBlob className="w-80 h-80 bg-purple-500 -bottom-20 -right-20 opacity-20" />
                  <div className="relative">
                     <h2 className="text-4xl font-extrabold text-white mb-4">
                        See it all in action
                     </h2>
                     <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                        Get access to the full system and explore every module.
                        No credit card required.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                           to="/register"
                           className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl shadow-cyan-500/30 flex items-center gap-2 justify-center"
                        >
                           Get Started Free <FaArrowRight />
                        </Link>
                        <Link
                           to="/contact"
                           className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-xl"
                        >
                           Book a Demo
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
                        clinical workflows.
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
