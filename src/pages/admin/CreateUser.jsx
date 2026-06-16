// import { useState } from "react";
// import api from "../../api/axios";

// import {
//    FaUserMd,
//    FaUserNurse,
//    FaPills,
//    FaUserPlus,
//    FaUser,
//    FaEnvelope,
//    FaLock,
//    FaDoorOpen,
// } from "react-icons/fa";

// const CreateUser = () => {
//    const [formData, setFormData] = useState({
//       name: "",
//       email: "",
//       password: "",
//       role: "doctor",
//       roomNo: "",
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
//          await api.post("/users/create", formData);

//          alert("User Created Successfully");

//          setFormData({
//             name: "",
//             email: "",
//             password: "",
//             role: "doctor",
//             roomNo: "",
//          });
//       } catch (error) {
//          alert(error.response?.data?.message);
//       }
//    };

//    return (
//       <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-cyan-950 p-6 md:p-8 relative overflow-hidden">
//          {/* Background Glow */}
//          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

//          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

//          <div className="relative z-10 max-w-5xl mx-auto">
//             {/* Header */}
//             <div className="text-center mb-8">
//                <div
//                   className="
//                      mx-auto
//                      w-24
//                      h-24
//                      rounded-full
//                      bg-linear-to-r
//                      from-cyan-500
//                      via-blue-500
//                      to-cyan-500
//                      flex
//                      items-center
//                      justify-center
//                      text-white
//                      text-5xl
//                      shadow-2xl
//                      animate-pulse
//                   "
//                >
//                   <FaUserPlus />
//                </div>

//                <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-5">
//                   Create Medical Staff
//                </h1>

//                <p className="text-cyan-300 mt-3 text-lg">
//                   Register Doctors, Receptionists & Pharmacists
//                </p>
//             </div>

//             {/* Main Card */}
//             <div
//                className="
//                   bg-white/10
//                   backdrop-blur-xl
//                   border border-white/10
//                   rounded-3xl
//                   shadow-2xl
//                   p-8
//                "
//             >
//                <form
//                   onSubmit={handleSubmit}
//                   className="grid md:grid-cols-2 gap-5"
//                >
//                   {/* Name */}
//                   <div className="relative">
//                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />

//                      <input
//                         type="text"
//                         name="name"
//                         placeholder="Full Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="
//                            w-full
//                            pl-12
//                            p-4
//                            rounded-xl
//                            bg-slate-900/40
//                            border
//                            border-cyan-500/20
//                            text-white
//                            placeholder-cyan-200
//                            focus:outline-none
//                            focus:ring-2
//                            focus:ring-cyan-500
//                            transition-all
//                         "
//                      />
//                   </div>

//                   {/* Email */}
//                   <div className="relative">
//                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />

//                      <input
//                         type="email"
//                         name="email"
//                         placeholder="Staff Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="
//                            w-full
//                            pl-12
//                            p-4
//                            rounded-xl
//                            bg-slate-900/40
//                            border
//                            border-cyan-500/20
//                            text-white
//                            placeholder-cyan-200
//                            focus:outline-none
//                            focus:ring-2
//                            focus:ring-cyan-500
//                            transition-all
//                         "
//                      />
//                   </div>

//                   {/* Password */}
//                   <div className="relative">
//                      <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />

//                      <input
//                         type="password"
//                         name="password"
//                         placeholder="Secure Password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         className="
//                            w-full
//                            pl-12
//                            p-4
//                            rounded-xl
//                            bg-slate-900/40
//                            border
//                            border-cyan-500/20
//                            text-white
//                            placeholder-cyan-200
//                            focus:outline-none
//                            focus:ring-2
//                            focus:ring-cyan-500
//                            transition-all
//                         "
//                      />
//                   </div>

//                   {/* Role */}
//                   <select
//                      name="role"
//                      value={formData.role}
//                      onChange={handleChange}
//                      className="
//                         w-full
//                         p-4
//                         rounded-xl
//                         bg-slate-900/40
//                         border
//                         border-cyan-500/20
//                         text-white
//                         focus:outline-none
//                         focus:ring-2
//                         focus:ring-cyan-500
//                      "
//                   >
//                      <option className="text-black" value="doctor">
//                         Doctor
//                      </option>

//                      <option className="text-black" value="receptionist">
//                         Receptionist
//                      </option>

//                      <option className="text-black" value="pharmacist">
//                         Pharmacist
//                      </option>
//                   </select>

//                   {/* Room Number */}
//                   <div className="relative md:col-span-2">
//                      <FaDoorOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />

//                      <input
//                         type="text"
//                         name="roomNo"
//                         placeholder="Assigned Room Number"
//                         value={formData.roomNo}
//                         onChange={handleChange}
//                         className="
//                            w-full
//                            pl-12
//                            p-4
//                            rounded-xl
//                            bg-slate-900/40
//                            border
//                            border-cyan-500/20
//                            text-white
//                            placeholder-cyan-200
//                            focus:outline-none
//                            focus:ring-2
//                            focus:ring-cyan-500
//                            transition-all
//                         "
//                      />
//                   </div>

//                   {/* Role Preview */}
//                   <div className="md:col-span-2">
//                      <div
//                         className="
//                            bg-slate-900/40
//                            border
//                            border-cyan-500/20
//                            rounded-2xl
//                            p-6
//                            flex
//                            items-center
//                            justify-center
//                            gap-4
//                         "
//                      >
//                         {formData.role === "doctor" && (
//                            <FaUserMd className="text-5xl text-cyan-400 animate-pulse" />
//                         )}

//                         {formData.role === "receptionist" && (
//                            <FaUserNurse className="text-5xl text-purple-400 animate-pulse" />
//                         )}

//                         {formData.role === "pharmacist" && (
//                            <FaPills className="text-5xl text-orange-400 animate-pulse" />
//                         )}

//                         <span className="text-white text-xl font-bold uppercase">
//                            {formData.role}
//                         </span>
//                      </div>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="md:col-span-2">
//                      <button
//                         className="
//                            w-full
//                            py-4
//                            rounded-xl
//                            text-lg
//                            font-bold
//                            text-white
//                            bg-linear-to-r
//                            from-cyan-500
//                            via-blue-500
//                            to-cyan-500
//                            hover:scale-[1.02]
//                            transition-all
//                            duration-300
//                            shadow-xl
//                         "
//                      >
//                         Create Medical Staff Account
//                      </button>
//                   </div>
//                </form>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default CreateUser;

import { useState } from "react";
import api from "../../api/axios";

import {
   FaUserPlus,
   FaUser,
   FaEnvelope,
   FaLock,
   FaDoorOpen,
   FaUserMd,
   FaUserNurse,
   FaPills,
} from "react-icons/fa";

import PageHeader from "../../components/PageHeader";

const CreateUser = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      role: "doctor",
      roomNo: "",
   });

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await api.post("/users/create", formData);

         alert("User Created Successfully");

         setFormData({
            name: "",
            email: "",
            password: "",
            role: "doctor",
            roomNo: "",
         });
      } catch (error) {
         alert(error.response?.data?.message);
      }
   };

   const roleIcon = {
      doctor: <FaUserMd className="text-cyan-500 text-4xl" />,
      receptionist: <FaUserNurse className="text-purple-500 text-4xl" />,
      pharmacist: <FaPills className="text-orange-500 text-4xl" />,
   };

   return (
      <div>
         {/* Header */}
         <PageHeader
            title="Create Medical Staff"
            description="Register doctors, receptionists & pharmacists"
            breadcrumbs={[{ label: "Admin" }, { label: "Create User" }]}
         />

         {/* Form Card */}
         <div className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-4 flex items-center gap-3">
               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <FaUserPlus />
               </div>

               <div>
                  <h2 className="text-base font-semibold text-slate-900">
                     New Staff Registration
                  </h2>
                  <p className="text-xs text-slate-400">
                     Fill details to create hospital staff account
                  </p>
               </div>
            </div>

            <form
               onSubmit={handleSubmit}
               className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5"
            >
               {/* Name */}
               <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                     type="text"
                     name="name"
                     placeholder="Full Name"
                     value={formData.name}
                     onChange={handleChange}
                     className="w-full pl-11 p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
               </div>

               {/* Email */}
               <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                     type="email"
                     name="email"
                     placeholder="Email Address"
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full pl-11 p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
               </div>

               {/* Password */}
               <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                     type="password"
                     name="password"
                     placeholder="Password"
                     value={formData.password}
                     onChange={handleChange}
                     className="w-full pl-11 p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
               </div>

               {/* Role */}
               <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none"
               >
                  <option value="doctor">Doctor</option>
                  <option value="receptionist">Receptionist</option>
                  <option value="pharmacist">Pharmacist</option>
               </select>

               {/* Room No */}
               <div className="relative md:col-span-2">
                  <FaDoorOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                     type="text"
                     name="roomNo"
                     placeholder="Room Number (Optional)"
                     value={formData.roomNo}
                     onChange={handleChange}
                     className="w-full pl-11 p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
               </div>

               {/* Role Preview */}
               <div className="md:col-span-2">
                  <div className="flex items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                     {roleIcon[formData.role]}

                     <div className="text-center">
                        <p className="text-xs text-slate-400">Selected Role</p>
                        <p className="text-lg font-bold text-slate-900 uppercase">
                           {formData.role}
                        </p>
                     </div>
                  </div>
               </div>

               {/* Submit */}
               <div className="md:col-span-2">
                  <button
                     type="submit"
                     className="w-full py-3 rounded-xl bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition"
                  >
                     Create Staff Account
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default CreateUser;
