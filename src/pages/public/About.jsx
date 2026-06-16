import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
   FaHospital,
   FaPhone,
   FaEnvelope,
   FaMapMarkerAlt,
   FaReact,
   FaNodeJs,
   FaDatabase,
   FaArrowRight,
   FaHeartbeat,
   FaLightbulb,
   FaUsers,
   FaShieldAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { MdVerified } from "react-icons/md";

const GlowBlob = ({ className }) => (
   <div
      className={`absolute rounded-full blur-3xl opacity-15 pointer-events-none ${className}`}
   />
);

const teamMembers = [
   {
      name: "Dr. Ayesha Malik",
      role: "Chief Medical Officer",
      initials: "AM",
      color: "from-cyan-500 to-blue-600",
   },
   {
      name: "Usman Raza",
      role: "Lead Developer",
      initials: "UR",
      color: "from-blue-500 to-purple-600",
   },
   {
      name: "Sara Iqbal",
      role: "UX Designer",
      initials: "SI",
      color: "from-purple-500 to-pink-600",
   },
   {
      name: "Bilal Khan",
      role: "Backend Engineer",
      initials: "BK",
      color: "from-emerald-500 to-teal-600",
   },
];

const techStack = [
   {
      icon: FaReact,
      name: "React 18",
      desc: "Component-based UI",
      color: "text-cyan-400",
   },
   {
      icon: FaNodeJs,
      name: "Node.js",
      desc: "REST API backend",
      color: "text-emerald-400",
   },
   {
      icon: SiMongodb,
      name: "MongoDB",
      desc: "NoSQL database",
      color: "text-green-400",
   },
   {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      desc: "Utility-first styling",
      color: "text-sky-400",
   },
];

export default function About() {
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
                  <Link to="/about" className="text-cyan-400">
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
            <div className="relative max-w-3xl mx-auto">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
                  <MdVerified /> Trusted Healthcare Technology
               </div>
               <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                  About{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                     MediCore
                  </span>
               </h1>
               <p className="text-slate-400 text-lg leading-relaxed">
                  We are a team of healthcare professionals and software
                  engineers who got tired of clunky hospital software. So we
                  built the system we always wished existed.
               </p>
            </div>
         </section>

         {/* ── INTRODUCTION ── */}
         <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                     <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                        Our Story
                     </p>
                     <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                        Healthcare software shouldn't feel like 2005
                     </h2>
                     <p className="text-slate-400 leading-relaxed mb-5">
                        MediCore HMS was founded after years of watching
                        hospital staff struggle with outdated, fragmented tools
                        — one system for admissions, another for pharmacy, and
                        spreadsheets holding the rest together. We knew there
                        had to be a better way.
                     </p>
                     <p className="text-slate-400 leading-relaxed mb-8">
                        Built from the ground up with modern web technologies,
                        MediCore unifies every department into a single, fast,
                        and intuitive platform. Our design philosophy is simple:
                        if a nurse can't learn it in 20 minutes, we haven't done
                        our job.
                     </p>
                     <Link
                        to="/features"
                        className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                     >
                        See what's inside <FaArrowRight className="text-sm" />
                     </Link>
                  </div>
                  {/* Stat cards */}
                  <div className="grid grid-cols-2 gap-4">
                     {[
                        { val: "2021", label: "Founded", icon: FaHospital },
                        {
                           val: "50+",
                           label: "Hospitals Using HMS",
                           icon: FaUsers,
                        },
                        {
                           val: "99.9%",
                           label: "Uptime SLA",
                           icon: FaShieldAlt,
                        },
                        {
                           val: "24/7",
                           label: "Support Available",
                           icon: FaHeartbeat,
                        },
                     ].map(({ val, label, icon: Icon }) => (
                        <div
                           key={label}
                           className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl text-center hover:border-cyan-500/20 transition-all"
                        >
                           <Icon className="text-cyan-400 text-2xl mx-auto mb-3" />
                           <div className="text-3xl font-extrabold text-white">
                              {val}
                           </div>
                           <div className="text-slate-400 text-sm mt-1">
                              {label}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* ── MISSION & VISION ── */}
         <section className="relative py-20 px-6">
            <GlowBlob className="w-[400px] h-[400px] bg-purple-600 bottom-0 right-0" />
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
               {/* Mission */}
               <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-xl overflow-hidden">
                  <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-cyan-500/10 blur-2xl" />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-5">
                     <FaLightbulb className="text-white text-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                     Our Mission
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                     To empower healthcare institutions with technology that is
                     fast, intuitive, and accessible — so that every doctor,
                     nurse, and administrator can focus entirely on patient care
                     rather than fighting their software.
                  </p>
               </div>
               {/* Vision */}
               <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-xl overflow-hidden">
                  <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-purple-500/10 blur-2xl" />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-5">
                     <FaHeartbeat className="text-white text-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                     Our Vision
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                     A future where every hospital — from a major city medical
                     centre to a rural clinic — has access to world-class
                     digital infrastructure that elevates the standard of
                     patient care across the board.
                  </p>
               </div>
            </div>
         </section>

         {/* ── TECH STACK ── */}
         <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-12">
                  <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                     Technology
                  </p>
                  <h2 className="text-4xl font-extrabold text-white mb-4">
                     Built with best-in-class tools
                  </h2>
                  <p className="text-slate-400 max-w-xl mx-auto">
                     We chose our stack deliberately — proven technologies that
                     are fast to develop with, easy to maintain, and
                     battle-tested in production.
                  </p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {techStack.map(({ icon: Icon, name, desc, color }) => (
                     <div
                        key={name}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl text-center hover:bg-white/10 hover:border-cyan-500/20 hover:-translate-y-1 transition-all duration-300"
                     >
                        <Icon className={`text-4xl mx-auto mb-3 ${color}`} />
                        <h4 className="text-white font-semibold mb-1">
                           {name}
                        </h4>
                        <p className="text-slate-400 text-sm">{desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* ── TEAM ── */}
         <section className="relative py-20 px-6">
            <GlowBlob className="w-[400px] h-[400px] bg-blue-600 top-0 left-0" />
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-12">
                  <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
                     The People
                  </p>
                  <h2 className="text-4xl font-extrabold text-white mb-4">
                     Meet the team
                  </h2>
                  <p className="text-slate-400 max-w-xl mx-auto">
                     A cross-functional group of clinicians, engineers, and
                     designers with one shared goal: better hospital software.
                  </p>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {teamMembers.map(({ name, role, initials, color }) => (
                     <div
                        key={name}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl text-center hover:bg-white/8 hover:border-cyan-500/20 hover:-translate-y-1 transition-all duration-300 group"
                     >
                        <div
                           className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all`}
                        >
                           {initials}
                        </div>
                        <h4 className="text-white font-semibold text-lg">
                           {name}
                        </h4>
                        <p className="text-slate-400 text-sm mt-1">{role}</p>
                     </div>
                  ))}
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
