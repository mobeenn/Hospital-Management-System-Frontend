// import { useEffect, useState } from "react";
// import api from "../../api/axios";

// import { FaPills, FaCheckCircle, FaClipboardCheck } from "react-icons/fa";

// const PharmacistDashboard = () => {
//    const [data, setData] = useState(null);

//    useEffect(() => {
//       fetchStats();
//    }, []);

//    const fetchStats = async () => {
//       const res = await api.get("/dashboard/pharmacist");
//       setData(res.data);
//    };

//    if (!data)
//       return (
//          <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-blue-950 to-cyan-950">
//             <div className="text-center">
//                <div className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

//                <p className="text-white mt-5 text-lg">
//                   Loading Pharmacy Dashboard...
//                </p>
//             </div>
//          </div>
//       );

//    return (
//       <div className="min-h-screen bg-linear -to-br from-slate-950 via-blue-950 to-cyan-950 p-6 md:p-8 relative overflow-hidden">
//          {/* Background Glow */}
//          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse pointer-events-none"></div>

//          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse pointer-events-none"></div>

//          <div className="relative z-10">
//             {/* Header */}
//             <div className="mb-10">
//                <h1 className="text-5xl font-extrabold text-white">
//                   Pharmacy Dashboard
//                </h1>

//                <p className="text-cyan-300 mt-2 text-lg">
//                   Pharmacy Operations & Medication Management
//                </p>
//             </div>

//             {/* Stats */}
//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//                {/* Completed */}
//                <div
//                   className="
//                      bg-white/10
//                      backdrop-blur-xl
//                      border border-white/10
//                      rounded-3xl
//                      p-6
//                      shadow-2xl
//                      hover:scale-105
//                      transition-all
//                      duration-500
//                   "
//                >
//                   <div className="flex justify-between items-center">
//                      <div>
//                         <p className="text-cyan-300 text-sm">
//                            Completed Prescriptions
//                         </p>

//                         <h2 className="text-5xl font-bold text-white mt-3">
//                            {data.stats.completed}
//                         </h2>
//                      </div>

//                      <FaCheckCircle className="text-6xl text-green-400" />
//                   </div>
//                </div>

//                {/* Ready To Dispense */}
//                <div
//                   className="
//                      bg-white/10
//                      backdrop-blur-xl
//                      border border-white/10
//                      rounded-3xl
//                      p-6
//                      shadow-2xl
//                      hover:scale-105
//                      transition-all
//                      duration-500
//                   "
//                >
//                   <div className="flex justify-between items-center">
//                      <div>
//                         <p className="text-cyan-300 text-sm">
//                            Ready To Dispense
//                         </p>

//                         <h2 className="text-5xl font-bold text-white mt-3">
//                            {data.stats.checked}
//                         </h2>
//                      </div>

//                      <FaPills className="text-6xl text-cyan-400" />
//                   </div>
//                </div>
//             </div>

//             {/* Recent Completed */}
//             <div
//                className="
//                   bg-white/10
//                   backdrop-blur-xl
//                   border border-white/10
//                   rounded-3xl
//                   shadow-2xl
//                   p-6
//                "
//             >
//                <div className="flex items-center gap-3 mb-6">
//                   <FaClipboardCheck className="text-cyan-400 text-3xl" />

//                   <h2 className="text-2xl font-bold text-white">
//                      Recent Completed Prescriptions
//                   </h2>
//                </div>

//                <div className="overflow-x-auto">
//                   <table className="w-full text-white">
//                      <thead>
//                         <tr className="border-b border-cyan-500/20">
//                            <th className="p-4 text-left text-cyan-300">
//                               Patient
//                            </th>

//                            <th className="p-4 text-left text-cyan-300">
//                               Status
//                            </th>
//                         </tr>
//                      </thead>

//                      <tbody>
//                         {data.recent.map((item) => (
//                            <tr
//                               key={item._id}
//                               className="
//                                  border-b
//                                  border-white/10
//                                  hover:bg-white/5
//                                  transition-all
//                                  duration-300
//                               "
//                            >
//                               <td className="p-4 font-medium">
//                                  {item.patient?.name}
//                               </td>

//                               <td className="p-4">
//                                  <span
//                                     className="
//                                        px-4
//                                        py-2
//                                        rounded-full
//                                        bg-green-500/20
//                                        text-green-300
//                                        text-sm
//                                        font-semibold
//                                     "
//                                  >
//                                     {item.status}
//                                  </span>
//                               </td>
//                            </tr>
//                         ))}
//                      </tbody>
//                   </table>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default PharmacistDashboard;

import { useEffect, useState } from "react";
import api from "../../api/axios";
import { FaPills, FaCheckCircle, FaClipboardCheck } from "react-icons/fa";
import PageHeader from "../../components/PageHeader";
import DashboardCard from "../../components/DashboardCard";
import DataTable from "../../components/DataTable";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import StatusBadge from "../../components/StatusBadge";

const PharmacistDashboard = () => {
   const [data, setData] = useState(null);

   useEffect(() => {
      fetchStats();
   }, []);

   const fetchStats = async () => {
      const res = await api.get("/dashboard/pharmacist");
      setData(res.data);
   };

   const columns = [
      {
         key: "patient",
         label: "Patient",
         render: (item) => (
            <div className="flex items-center gap-3">
               <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-semibold text-teal-700">
                  {(item.patient?.name || "?").charAt(0).toUpperCase()}
               </div>
               <span className="font-medium text-slate-800">
                  {item.patient?.name || "Unknown patient"}
               </span>
            </div>
         ),
      },
      {
         key: "status",
         label: "Status",
         render: (item) => <StatusBadge status={item.status} />,
         className: "text-right sm:text-left",
      },
   ];

   if (!data) {
      return (
         <div>
            <PageHeader
               title="Pharmacy Dashboard"
               description="Pharmacy operations & medication management"
               breadcrumbs={[{ label: "Pharmacy" }, { label: "Dashboard" }]}
            />
            <LoadingSkeleton variant="page" />
         </div>
      );
   }

   return (
      <div>
         <PageHeader
            title="Pharmacy Dashboard"
            description="Pharmacy operations & medication management"
            breadcrumbs={[{ label: "Pharmacy" }, { label: "Dashboard" }]}
         />

         {/* Stats */}
         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <DashboardCard
               label="Completed Prescriptions"
               value={data.stats.completed}
               icon={<FaCheckCircle />}
               color="emerald"
               subtitle="Fully dispensed to patients"
            />
            <DashboardCard
               label="Ready to Dispense"
               value={data.stats.checked}
               icon={<FaPills />}
               color="teal"
               subtitle="Verified and awaiting pickup"
            />
         </div>

         {/* Recent completed */}
         <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:mt-8">
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
               <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                  <FaClipboardCheck />
               </div>
               <div>
                  <h2 className="text-base font-semibold text-slate-900">
                     Recent Completed Prescriptions
                  </h2>
                  <p className="text-xs text-slate-400">
                     Latest prescriptions marked as completed
                  </p>
               </div>
            </div>
            <DataTable
               columns={columns}
               data={data.recent}
               emptyTitle="No completed prescriptions yet"
               emptyDescription="Completed prescriptions will appear here as they're dispensed."
            />
         </div>
      </div>
   );
};

export default PharmacistDashboard;
