import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeartbeat, FaUserMd } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { MdLocalHospital } from "react-icons/md";
import api from "../../api/axios";

const Login = () => {
   const navigate = useNavigate();

   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const res = await api.post("/auth/login", formData);

         localStorage.setItem("token", res.data.token);
         localStorage.setItem("user", JSON.stringify(res.data.user));

         const role = res.data.user.role;

         navigate(`/${role}`);
      } catch (error) {
         alert(error.response?.data?.message || "Login Failed");
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
         {/* Background Glow */}
         <div className="absolute w-125 h-125 bg-cyan-500/10 rounded-full blur-3xl -top-20 -left-20" />
         <div className="absolute w-125 h-125 bg-blue-500/10 rounded-full blur-3xl -bottom-30 -right-30" />

         {/* Card */}
         <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
               <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center text-white text-3xl shadow-lg">
                  <MdLocalHospital />
               </div>

               <h1 className="text-2xl font-bold text-white mt-4">
                  Hospital Portal
               </h1>

               <p className="text-slate-300 text-sm mt-1">
                  Secure Healthcare Management System
               </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
               {/* Email */}
               <div className="relative">
                  <FaUserMd className="absolute left-4 top-4 text-cyan-400" />
                  <input
                     type="email"
                     name="email"
                     placeholder="Email"
                     onChange={handleChange}
                     className="w-full pl-12 p-3 rounded-xl bg-slate-900/40 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                  />
               </div>

               {/* Password */}
               <div className="relative">
                  <HiLockClosed className="absolute left-4 top-4 text-cyan-400" />
                  <input
                     type="password"
                     name="password"
                     placeholder="Password"
                     onChange={handleChange}
                     className="w-full pl-12 p-3 rounded-xl bg-slate-900/40 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                  />
               </div>

               {/* Button */}
               <button className="w-full py-3 rounded-xl font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition shadow-lg">
                  Login
               </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center text-slate-400 text-xs">
               Powered by Modern Hospital System
            </div>
         </div>
      </div>
   );
};

export default Login;
