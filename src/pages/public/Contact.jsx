import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
   FaHospital,
   FaPhone,
   FaEnvelope,
   FaMapMarkerAlt,
   FaClock,
   FaPaperPlane,
   FaCheckCircle,
   FaSpinner,
} from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const GlowBlob = ({ className }) => (
   <div
      className={`absolute rounded-full blur-3xl opacity-15 pointer-events-none ${className}`}
   />
);

const InputField = ({
   label,
   type = "text",
   name,
   value,
   onChange,
   placeholder,
   error,
}) => (
   <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">
         {label}
      </label>
      <input
         type={type}
         name={name}
         value={value}
         onChange={onChange}
         placeholder={placeholder}
         className={`w-full bg-white/5 border ${error ? "border-red-500/60" : "border-white/10"} rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 backdrop-blur-xl`}
      />
      {error && <p className="mt-1 text-red-400 text-xs">{error}</p>}
   </div>
);

const contactInfo = [
   {
      icon: FaPhone,
      label: "Phone",
      value: "+92-300-0000000",
      sub: "Mon–Sat, 9 AM – 6 PM PKT",
      accent: "from-cyan-500 to-blue-600",
   },
   {
      icon: FaEnvelope,
      label: "Email",
      value: "info@medicorehms.com",
      sub: "We reply within 24 hours",
      accent: "from-blue-500 to-purple-600",
   },
   {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Lahore, Punjab",
      sub: "Pakistan",
      accent: "from-purple-500 to-pink-600",
   },
   {
      icon: FaClock,
      label: "Support Hours",
      value: "24 / 7",
      sub: "Critical system support",
      accent: "from-emerald-500 to-teal-600",
   },
];

export default function Contact() {
   const [scrolled, setScrolled] = useState(false);
   const [form, setForm] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
   });
   const [errors, setErrors] = useState({});
   const [status, setStatus] = useState("idle"); // idle | sending | sent

   useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   const validate = () => {
      const e = {};
      if (!form.name.trim()) e.name = "Name is required";
      if (!form.email.trim()) e.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
         e.email = "Enter a valid email address";
      if (!form.message.trim()) e.message = "Please write a message";
      return e;
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const errs = validate();
      if (Object.keys(errs).length > 0) {
         setErrors(errs);
         return;
      }
      setStatus("sending");
      setTimeout(() => {
         setStatus("sent");
         setForm({ name: "", email: "", subject: "", message: "" });
      }, 1800);
   };

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
                  <Link to="/contact" className="text-cyan-400">
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
         <section className="relative pt-36 pb-16 px-6 text-center">
            <GlowBlob className="w-[500px] h-[500px] bg-cyan-500 -top-20 left-1/2 -translate-x-1/2" />
            <div className="relative max-w-2xl mx-auto">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
                  <MdSupportAgent className="text-base" /> We're here to help
               </div>
               <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
                  Get in{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                     Touch
                  </span>
               </h1>
               <p className="text-slate-400 text-lg leading-relaxed">
                  Have questions about MediCore HMS, want a demo, or need help
                  setting up? Our team is ready.
               </p>
            </div>
         </section>

         {/* ── CONTACT CARDS ── */}
         <section className="py-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
               {contactInfo.map(({ icon: Icon, label, value, sub, accent }) => (
                  <div
                     key={label}
                     className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl hover:border-cyan-500/20 hover:-translate-y-1 transition-all duration-300 text-center"
                  >
                     <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                     >
                        <Icon className="text-white text-lg" />
                     </div>
                     <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                        {label}
                     </p>
                     <p className="text-white font-semibold text-sm">{value}</p>
                     <p className="text-slate-500 text-xs mt-0.5">{sub}</p>
                  </div>
               ))}
            </div>
         </section>

         {/* ── MAIN CONTENT ── */}
         <section className="relative py-16 px-6">
            <GlowBlob className="w-[400px] h-[400px] bg-blue-600 bottom-0 right-0" />
            <GlowBlob className="w-[300px] h-[300px] bg-purple-600 top-0 left-0" />
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
               {/* ── FORM ── */}
               <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                  <h2 className="text-2xl font-bold text-white mb-2">
                     Send us a message
                  </h2>
                  <p className="text-slate-400 text-sm mb-8">
                     Fill out the form and we'll get back to you within 24
                     hours.
                  </p>

                  {status === "sent" ? (
                     <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-5">
                           <FaCheckCircle className="text-emerald-400 text-3xl" />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">
                           Message Sent!
                        </h3>
                        <p className="text-slate-400 text-sm max-w-xs">
                           Thanks for reaching out. Our team will review your
                           message and reply soon.
                        </p>
                        <button
                           onClick={() => setStatus("idle")}
                           className="mt-6 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
                        >
                           Send another message
                        </button>
                     </div>
                  ) : (
                     <form onSubmit={handleSubmit} noValidate>
                        <div className="space-y-5">
                           <div className="grid sm:grid-cols-2 gap-5">
                              <InputField
                                 label="Full Name"
                                 name="name"
                                 value={form.name}
                                 onChange={handleChange}
                                 placeholder="Dr. Ahmed Khan"
                                 error={errors.name}
                              />
                              <InputField
                                 label="Email Address"
                                 type="email"
                                 name="email"
                                 value={form.email}
                                 onChange={handleChange}
                                 placeholder="you@hospital.com"
                                 error={errors.email}
                              />
                           </div>
                           <InputField
                              label="Subject"
                              name="subject"
                              value={form.subject}
                              onChange={handleChange}
                              placeholder="Demo request / Support / General enquiry"
                           />
                           <div>
                              <label className="block text-sm font-medium text-slate-300 mb-2">
                                 Message
                              </label>
                              <textarea
                                 name="message"
                                 value={form.message}
                                 onChange={handleChange}
                                 rows={5}
                                 placeholder="Tell us about your hospital, team size, or what you're looking for..."
                                 className={`w-full bg-white/5 border ${errors.message ? "border-red-500/60" : "border-white/10"} rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:bg-white/8 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200 backdrop-blur-xl resize-none`}
                              />
                              {errors.message && (
                                 <p className="mt-1 text-red-400 text-xs">
                                    {errors.message}
                                 </p>
                              )}
                           </div>
                           <button
                              type="submit"
                              disabled={status === "sending"}
                              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                           >
                              {status === "sending" ? (
                                 <>
                                    <FaSpinner className="animate-spin" />{" "}
                                    Sending…
                                 </>
                              ) : (
                                 <>
                                    <FaPaperPlane /> Send Message
                                 </>
                              )}
                           </button>
                        </div>
                     </form>
                  )}
               </div>

               {/* ── INFO SIDE ── */}
               <div className="space-y-6">
                  {/* Map placeholder */}
                  <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl h-64">
                     {/* Decorative map-like pattern */}
                     <div className="absolute inset-0">
                        {/* Grid lines */}
                        <div
                           className="absolute inset-0 opacity-10"
                           style={{
                              backgroundImage:
                                 "linear-gradient(to right, #22d3ee 1px, transparent 1px), linear-gradient(to bottom, #22d3ee 1px, transparent 1px)",
                              backgroundSize: "40px 40px",
                           }}
                        />
                        <GlowBlob className="w-40 h-40 bg-cyan-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
                     </div>
                     {/* Pin marker */}
                     <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-white/20 flex items-center justify-center shadow-xl shadow-cyan-500/40">
                           <FaMapMarkerAlt className="text-white text-lg" />
                        </div>
                        <div className="text-center">
                           <p className="text-white font-semibold text-sm">
                              MediCore HMS Headquarters
                           </p>
                           <p className="text-slate-400 text-xs">
                              Lahore, Punjab, Pakistan
                           </p>
                        </div>
                        <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-slate-300 backdrop-blur-xl">
                           Interactive map coming soon
                        </span>
                     </div>
                  </div>

                  {/* FAQ snippets */}
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                     <h3 className="text-white font-bold text-lg mb-5">
                        Quick answers
                     </h3>
                     <div className="space-y-4">
                        {[
                           {
                              q: "How long does setup take?",
                              a: "Most hospitals are live within 3–5 working days including staff training.",
                           },
                           {
                              q: "Is there a free trial?",
                              a: "Yes — full access for 30 days, no credit card required.",
                           },
                           {
                              q: "Can I import existing patient data?",
                              a: "Absolutely. We support CSV/Excel import with data validation.",
                           },
                        ].map(({ q, a }) => (
                           <div
                              key={q}
                              className="border-b border-white/5 pb-4 last:border-0 last:pb-0"
                           >
                              <p className="text-white font-medium text-sm mb-1">
                                 {q}
                              </p>
                              <p className="text-slate-400 text-sm leading-relaxed">
                                 {a}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Emergency support */}
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-5 backdrop-blur-xl flex items-start gap-4">
                     <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <FaPhone className="text-white text-sm" />
                     </div>
                     <div>
                        <p className="text-white font-semibold text-sm">
                           Critical system support?
                        </p>
                        <p className="text-slate-400 text-xs mt-0.5 mb-2">
                           Call our emergency helpline — available 24 hours a
                           day.
                        </p>
                        <p className="text-cyan-400 font-bold">
                           +92-300-0000000
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* ── FOOTER ── */}
         <footer className="border-t border-white/10 py-12 px-6 mt-8">
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
