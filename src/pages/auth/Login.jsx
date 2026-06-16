// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHeartbeat, FaUserMd } from "react-icons/fa";
// import { HiLockClosed } from "react-icons/hi";
// import { MdLocalHospital } from "react-icons/md";
// import api from "../../api/axios";

// const Login = () => {
//    const navigate = useNavigate();

//    const [formData, setFormData] = useState({
//       email: "",
//       password: "",
//    });

//    const handleChange = (e) => {
//       setFormData({
//          ...formData,
//          [e.target.name]: e.target.value,
//       });
//    };

//    const handleSubmit = async (e) => {
//       e.preventDefault();

//       try {
//          const res = await api.post("/auth/login", formData);

//          localStorage.setItem("token", res.data.token);

//          localStorage.setItem("user", JSON.stringify(res.data.user));

//          const role = res.data.user.role;

//          if (role === "admin") {
//             navigate("/admin");
//          }

//          if (role === "doctor") {
//             navigate("/doctor");
//          }

//          if (role === "receptionist") {
//             navigate("/receptionist");
//          }

//          if (role === "pharmacist") {
//             navigate("/pharmacist");
//          }
//       } catch (error) {
//          alert(error.response?.data?.message || "Login Failed");
//       }
//    };

//    return (
//       <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-cyan-900 via-blue-900 to-slate-950 flex items-center justify-center">
//          {/* Animated Background */}
//          <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

//             <div className="absolute top-24 left-32 text-cyan-400 text-7xl animate-bounce opacity-20">
//                <FaHeartbeat />
//             </div>

//             <div className="absolute bottom-24 right-40 text-blue-300 text-7xl animate-pulse opacity-20">
//                <FaUserMd />
//             </div>

//             <div className="absolute top-1/2 left-10 text-white text-5xl animate-spin opacity-10">
//                <MdLocalHospital />
//             </div>
//          </div>

//          {/* Login Card */}
//          <div
//             className="
//             relative z-10
//             w-full max-w-md
//             bg-white/10
//             backdrop-blur-xl
//             border border-white/20
//             shadow-[0_20px_60px_rgba(0,0,0,0.5)]
//             rounded-3xl
//             p-8
//             transform
//             transition-all
//             duration-500
//             hover:scale-105
//             hover:-translate-y-2
//          "
//          >
//             {/* Header */}
//             <div className="text-center mb-8">
//                <div
//                   className="
//                   mx-auto
//                   w-24
//                   h-24
//                   rounded-full
//                   bg-linear-to-r
//                   from-cyan-400
//                   to-blue-500
//                   flex
//                   items-center
//                   justify-center
//                   text-white
//                   text-5xl
//                   shadow-xl
//                   animate-pulse
//                "
//                >
//                   <MdLocalHospital />
//                </div>

//                <h1 className="text-4xl font-extrabold text-white mt-5">
//                   Hospital Portal
//                </h1>

//                <p className="text-cyan-200 mt-2">
//                   Secure Medical Management System
//                </p>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-5">
//                <div className="relative">
//                   <FaUserMd className="absolute left-4 top-4 text-cyan-300 text-lg" />

//                   <input
//                      type="email"
//                      name="email"
//                      placeholder="Doctor / Staff Email"
//                      className="
//                      w-full
//                      pl-12
//                      p-4
//                      rounded-xl
//                      bg-white/10
//                      border
//                      border-cyan-400/30
//                      text-white
//                      placeholder-cyan-200
//                      outline-none
//                      focus:ring-2
//                      focus:ring-cyan-400
//                      transition-all
//                   "
//                      onChange={handleChange}
//                   />
//                </div>

//                <div className="relative">
//                   <HiLockClosed className="absolute left-4 top-4 text-cyan-300 text-lg" />

//                   <input
//                      type="password"
//                      name="password"
//                      placeholder="Password"
//                      className="
//                      w-full
//                      pl-12
//                      p-4
//                      rounded-xl
//                      bg-white/10
//                      border
//                      border-cyan-400/30
//                      text-white
//                      placeholder-cyan-200
//                      outline-none
//                      focus:ring-2
//                      focus:ring-cyan-400
//                      transition-all
//                   "
//                      onChange={handleChange}
//                   />
//                </div>

//                <button
//                   className="
//                   w-full
//                   py-4
//                   rounded-xl
//                   font-bold
//                   text-lg
//                   text-white
//                   bg-linear-to-r
//                   from-cyan-500
//                   via-blue-500
//                   to-cyan-500
//                   bg-size-[200%_200%]
//                   animate-pulse
//                   shadow-lg
//                   hover:scale-105
//                   transition-all
//                   duration-300
//                "
//                >
//                   Login To Hospital System
//                </button>
//             </form>

//             {/* Footer */}
//             <div className="mt-8 text-center">
//                <div className="flex justify-center gap-5 text-cyan-300 text-2xl">
//                   <FaHeartbeat className="animate-pulse" />
//                   <MdLocalHospital className="animate-bounce" />
//                   <FaUserMd className="animate-pulse" />
//                </div>

//                <p className="text-cyan-200 text-sm mt-3">
//                   Advanced Healthcare Management Platform
//                </p>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default Login;
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
