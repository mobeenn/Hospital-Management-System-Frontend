// import { useEffect, useState } from "react";

// import api from "../../api/axios";

// const ReceptionDashboard = () => {
//    const [data, setData] = useState(null);

//    useEffect(() => {
//       fetchStats();
//    }, []);

//    const fetchStats = async () => {
//       const res = await api.get("/dashboard/receptionist");

//       setData(res.data);
//    };

//    if (!data) return <p>Loading...</p>;

//    return (
//       <div>
//          <h1 className="text-3xl font-bold mb-6">Reception Dashboard</h1>

//          <div className="grid md:grid-cols-2 gap-5 mb-8">
//             <div className="bg-purple-600 text-white p-6 rounded-xl">
//                <h3>Today's Patients</h3>

//                <p className="text-4xl font-bold">{data.stats.patients}</p>
//             </div>

//             <div className="bg-blue-600 text-white p-6 rounded-xl">
//                <h3>Today's Tokens</h3>

//                <p className="text-4xl font-bold">{data.stats.tokens}</p>
//             </div>
//          </div>

//          <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-xl font-bold mb-4">Recent Tokens</h2>

//             <table className="w-full">
//                <thead>
//                   <tr>
//                      <th>Token</th>
//                      <th>Patient</th>
//                      <th>Doctor</th>
//                   </tr>
//                </thead>

//                <tbody>
//                   {data.recentTokens.map((token) => (
//                      <tr key={token._id} className="border-b text-center">
//                         <td>{token.tokenNo}</td>

//                         <td>{token.patient?.name}</td>

//                         <td>{token.doctor?.name}</td>
//                      </tr>
//                   ))}
//                </tbody>
//             </table>
//          </div>
//       </div>
//    );
// };

// export default ReceptionDashboard;
import { useEffect, useState } from "react";
import api from "../../api/axios";

import { FaUsers, FaTicketAlt, FaUserInjured, FaUserMd } from "react-icons/fa";

const ReceptionDashboard = () => {
   const [data, setData] = useState(null);

   useEffect(() => {
      fetchStats();
   }, []);

   const fetchStats = async () => {
      const res = await api.get("/dashboard/receptionist");
      setData(res.data);
   };

   if (!data) {
      return (
         <div className="flex items-center justify-center min-h-[60vh] text-slate-500">
            Loading Reception Dashboard...
         </div>
      );
   }

   return (
      <div>
         {/* Header */}
         <div className="mb-6">
            <h1 className="text-3xl font-bold text-slate-900">
               Reception Dashboard
            </h1>

            <p className="text-slate-500 text-sm mt-1">
               Patient registration & token management overview
            </p>
         </div>

         {/* Stats */}
         <div className="grid md:grid-cols-2 gap-5 mb-8">
            {/* Patients */}
            <div className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
               <div className="flex items-center justify-between">
                  <div>
                     <p className="text-slate-500 text-sm">Today's Patients</p>
                     <h2 className="text-4xl font-bold text-slate-900 mt-2">
                        {data.stats.patients}
                     </h2>
                  </div>

                  <div className="text-4xl text-purple-500 group-hover:scale-110 transition">
                     <FaUsers />
                  </div>
               </div>
            </div>

            {/* Tokens */}
            <div className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
               <div className="flex items-center justify-between">
                  <div>
                     <p className="text-slate-500 text-sm">Today's Tokens</p>
                     <h2 className="text-4xl font-bold text-slate-900 mt-2">
                        {data.stats.tokens}
                     </h2>
                  </div>

                  <div className="text-4xl text-cyan-500 group-hover:scale-110 transition">
                     <FaTicketAlt />
                  </div>
               </div>
            </div>
         </div>

         {/* Recent Tokens Table */}
         <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <FaUserInjured />
               </div>

               <div>
                  <h2 className="text-base font-semibold text-slate-900">
                     Recent Tokens
                  </h2>
                  <p className="text-xs text-slate-400">
                     Latest patient registrations
                  </p>
               </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
               <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-500">
                     <tr>
                        <th className="p-4 text-left">Token</th>
                        <th className="p-4 text-left">Patient</th>
                        <th className="p-4 text-left">Doctor</th>
                     </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                     {data.recentTokens.map((token) => (
                        <tr
                           key={token._id}
                           className="hover:bg-slate-50 transition"
                        >
                           <td className="p-4 font-medium text-slate-800">
                              #{token.tokenNo}
                           </td>

                           <td className="p-4 text-slate-600">
                              {token.patient?.name}
                           </td>

                           <td className="p-4 text-slate-600">
                              {token.doctor?.name}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default ReceptionDashboard;
