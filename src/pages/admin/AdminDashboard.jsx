// import { useEffect, useState } from "react";
// import { FaUserMd, FaUserNurse, FaPills, FaUsers } from "react-icons/fa";
// import api from "../../api/axios";

// const AdminDashboard = () => {
//    const [stats, setStats] = useState(null);

//    useEffect(() => {
//       fetchStats();
//    }, []);

//    const fetchStats = async () => {
//       try {
//          const res = await api.get("/dashboard/admin");
//          setStats(res.data.stats);
//       } catch (error) {
//          console.log(error);
//       }
//    };

//    if (!stats)
//       return (
//          <div className="min-h-screen flex items-center justify-center bg-slate-950">
//             <div className="text-center">
//                <div className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
//                <p className="text-white mt-5 text-lg">
//                   Loading Hospital Dashboard...
//                </p>
//             </div>
//          </div>
//       );

//    return (
//       <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-cyan-950 p-8 relative overflow-hidden">
//          {/* Background Glow */}
//          <div className="fixed top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>
//          <div className="fixed bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

//          {/* Header */}
//          <div className="relative z-10 mb-10">
//             <h1 className="text-5xl font-extrabold text-white">
//                Hospital Admin Dashboard
//             </h1>

//             <p className="text-cyan-300 mt-2 text-lg">
//                Medical Management & Analytics Overview
//             </p>
//          </div>

//          {/* Stats Cards */}
//          <div className="relative z-10 grid lg:grid-cols-4 md:grid-cols-2 gap-6">
//             {/* Doctors */}
//             <div
//                className="
//                group
//                bg-white/10
//                backdrop-blur-xl
//                border border-white/10
//                rounded-3xl
//                p-6
//                shadow-2xl
//                hover:scale-105
//                transition-all
//                duration-500
//             "
//             >
//                <div className="flex items-center justify-between">
//                   <div>
//                      <p className="text-cyan-200 text-sm">Total Doctors</p>

//                      <h2 className="text-5xl font-bold text-white mt-3">
//                         {stats.doctors}
//                      </h2>
//                   </div>

//                   <div className="text-6xl text-cyan-400 group-hover:rotate-12 transition-all">
//                      <FaUserMd />
//                   </div>
//                </div>
//             </div>

//             {/* Receptionists */}
//             <div
//                className="
//                group
//                bg-white/10
//                backdrop-blur-xl
//                border border-white/10
//                rounded-3xl
//                p-6
//                shadow-2xl
//                hover:scale-105
//                transition-all
//                duration-500
//             "
//             >
//                <div className="flex items-center justify-between">
//                   <div>
//                      <p className="text-purple-200 text-sm">Receptionists</p>

//                      <h2 className="text-5xl font-bold text-white mt-3">
//                         {stats.receptionists}
//                      </h2>
//                   </div>

//                   <div className="text-6xl text-purple-400 group-hover:rotate-12 transition-all">
//                      <FaUserNurse />
//                   </div>
//                </div>
//             </div>

//             {/* Pharmacists */}
//             <div
//                className="
//                group
//                bg-white/10
//                backdrop-blur-xl
//                border border-white/10
//                rounded-3xl
//                p-6
//                shadow-2xl
//                hover:scale-105
//                transition-all
//                duration-500
//             "
//             >
//                <div className="flex items-center justify-between">
//                   <div>
//                      <p className="text-orange-200 text-sm">Pharmacists</p>

//                      <h2 className="text-5xl font-bold text-white mt-3">
//                         {stats.pharmacists}
//                      </h2>
//                   </div>

//                   <div className="text-6xl text-orange-400 group-hover:rotate-12 transition-all">
//                      <FaPills />
//                   </div>
//                </div>
//             </div>

//             {/* Patients */}
//             <div
//                className="
//                group
//                bg-white/10
//                backdrop-blur-xl
//                border border-white/10
//                rounded-3xl
//                p-6
//                shadow-2xl
//                hover:scale-105
//                transition-all
//                duration-500
//             "
//             >
//                <div className="flex items-center justify-between">
//                   <div>
//                      <p className="text-green-200 text-sm">
//                         Registered Patients
//                      </p>

//                      <h2 className="text-5xl font-bold text-white mt-3">
//                         {stats.patients}
//                      </h2>
//                   </div>

//                   <div className="text-6xl text-green-400 group-hover:rotate-12 transition-all">
//                      <FaUsers />
//                   </div>
//                </div>
//             </div>
//          </div>

//          {/* Summary Section */}
//          <div className="relative z-10 mt-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
//             <h2 className="text-2xl font-bold text-white mb-6">
//                Hospital Overview
//             </h2>

//             <div className="grid md:grid-cols-4 gap-6">
//                <div>
//                   <p className="text-cyan-300">Doctors</p>
//                   <p className="text-3xl font-bold text-white">
//                      {stats.doctors}
//                   </p>
//                </div>

//                <div>
//                   <p className="text-purple-300">Receptionists</p>
//                   <p className="text-3xl font-bold text-white">
//                      {stats.receptionists}
//                   </p>
//                </div>

//                <div>
//                   <p className="text-orange-300">Pharmacists</p>
//                   <p className="text-3xl font-bold text-white">
//                      {stats.pharmacists}
//                   </p>
//                </div>

//                <div>
//                   <p className="text-green-300">Patients</p>
//                   <p className="text-3xl font-bold text-white">
//                      {stats.patients}
//                   </p>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default AdminDashboard;
import { useEffect, useState } from "react";
import { FaUserMd, FaUserNurse, FaPills, FaUsers } from "react-icons/fa";

import api from "../../api/axios";
import PageHeader from "../../components/PageHeader";
import DashboardCard from "../../components/DashboardCard";
import LoadingSkeleton from "../../components/LoadingSkeleton";

const AdminDashboard = () => {
   const [stats, setStats] = useState(null);

   useEffect(() => {
      fetchStats();
   }, []);

   const fetchStats = async () => {
      try {
         const res = await api.get("/dashboard/admin");
         setStats(res.data.stats);
      } catch (error) {
         console.log(error);
      }
   };

   if (!stats) {
      return (
         <div>
            <PageHeader
               title="Admin Dashboard"
               description="Hospital management overview & system statistics"
               breadcrumbs={[{ label: "Admin" }, { label: "Dashboard" }]}
            />
            <LoadingSkeleton variant="page" />
         </div>
      );
   }

   return (
      <div>
         {/* Header */}
         <PageHeader
            title="Admin Dashboard"
            description="Hospital management overview & system statistics"
            breadcrumbs={[{ label: "Admin" }, { label: "Dashboard" }]}
         />

         {/* Stats Cards */}
         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            <DashboardCard
               label="Total Doctors"
               value={stats.doctors}
               icon={<FaUserMd />}
               color="cyan"
               subtitle="Active medical professionals"
            />

            <DashboardCard
               label="Receptionists"
               value={stats.receptionists}
               icon={<FaUserNurse />}
               color="purple"
               subtitle="Front desk staff"
            />

            <DashboardCard
               label="Pharmacists"
               value={stats.pharmacists}
               icon={<FaPills />}
               color="orange"
               subtitle="Medicine & prescriptions"
            />

            <DashboardCard
               label="Patients"
               value={stats.patients}
               icon={<FaUsers />}
               color="emerald"
               subtitle="Registered patients"
            />
         </div>

         {/* Summary Section */}
         <div className="mt-6 sm:mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
               <h2 className="text-base font-semibold text-slate-900">
                  Hospital Overview
               </h2>
               <p className="text-xs text-slate-400">
                  System-wide staff and patient distribution
               </p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-4">
               <div>
                  <p className="text-xs text-cyan-500 font-medium">Doctors</p>
                  <p className="text-2xl font-bold text-slate-900">
                     {stats.doctors}
                  </p>
               </div>

               <div>
                  <p className="text-xs text-purple-500 font-medium">
                     Receptionists
                  </p>
                  <p className="text-2xl font-bold text-slate-900">
                     {stats.receptionists}
                  </p>
               </div>

               <div>
                  <p className="text-xs text-orange-500 font-medium">
                     Pharmacists
                  </p>
                  <p className="text-2xl font-bold text-slate-900">
                     {stats.pharmacists}
                  </p>
               </div>

               <div>
                  <p className="text-xs text-emerald-500 font-medium">
                     Patients
                  </p>
                  <p className="text-2xl font-bold text-slate-900">
                     {stats.patients}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdminDashboard;
