// import { useEffect, useState } from "react";

// import api from "../../api/axios";

// const DoctorDashboard = () => {
//    const [stats, setStats] = useState(null);

//    useEffect(() => {
//       fetchStats();
//    }, []);

//    const fetchStats = async () => {
//       const res = await api.get("/dashboard/doctor");

//       setStats(res.data.stats);
//    };

//    if (!stats) return <p>Loading...</p>;

//    return (
//       <div>
//          <h1 className="text-3xl font-bold mb-6">Doctor Dashboard</h1>

//          <div className="grid md:grid-cols-2 gap-5">
//             <div className="bg-yellow-500 text-white p-6 rounded-xl">
//                <h3>Waiting Patients</h3>

//                <p className="text-4xl font-bold">{stats.waiting}</p>
//             </div>

//             <div className="bg-green-600 text-white p-6 rounded-xl">
//                <h3>Checked Patients</h3>

//                <p className="text-4xl font-bold">{stats.checked}</p>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default DoctorDashboard;
import { useEffect, useState } from "react";
import api from "../../api/axios";

import { FaUserClock, FaCheckCircle } from "react-icons/fa";

const DoctorDashboard = () => {
   const [stats, setStats] = useState(null);

   const fetchStats = async () => {
      try {
         const res = await api.get("/dashboard/doctor");
         setStats(res.data.stats);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchStats();
   }, []);

   if (!stats) {
      return (
         <div className="bg-white rounded-2xl p-6 shadow-sm animate-pulse">
            Loading dashboard...
         </div>
      );
   }

   return (
      <div>
         {/* Header */}
         <div className="bg-white border rounded-2xl p-6 shadow-sm mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
               Doctor Dashboard
            </h1>

            <p className="text-slate-500 mt-2">
               Manage your patients and consultations efficiently
            </p>
         </div>

         {/* Stats Cards */}
         <div className="grid sm:grid-cols-2 gap-5">
            {/* Waiting Patients */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
               <div className="flex items-center justify-between">
                  <div>
                     <p className="text-sm text-slate-500">Waiting Patients</p>

                     <h2 className="text-4xl font-bold text-amber-500 mt-2">
                        {stats.waiting}
                     </h2>
                  </div>

                  <div className="text-5xl text-amber-400">
                     <FaUserClock />
                  </div>
               </div>

               <p className="text-xs text-slate-400 mt-4">
                  Patients currently in queue
               </p>
            </div>

            {/* Checked Patients */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
               <div className="flex items-center justify-between">
                  <div>
                     <p className="text-sm text-slate-500">Checked Patients</p>

                     <h2 className="text-4xl font-bold text-emerald-600 mt-2">
                        {stats.checked}
                     </h2>
                  </div>

                  <div className="text-5xl text-emerald-500">
                     <FaCheckCircle />
                  </div>
               </div>

               <p className="text-xs text-slate-400 mt-4">
                  Successfully completed consultations
               </p>
            </div>
         </div>
      </div>
   );
};

export default DoctorDashboard;
