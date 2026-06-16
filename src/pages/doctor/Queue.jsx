// import { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
// import api from "../../api/axios";

// const Queue = () => {
//    const [tokens, setTokens] = useState([]);

//    const fetchQueue = async () => {
//       try {
//          const res = await api.get("/doctor/queue");

//          setTokens(res.data.tokens);
//       } catch (error) {
//          console.log(error);
//       }
//    };

//    useEffect(() => {
//       fetchQueue();
//    }, []);

//    return (
//       <div className="bg-white p-6 rounded-xl shadow">
//          <h2 className="text-2xl font-bold mb-5">Waiting Patients</h2>

//          <table className="w-full">
//             <thead>
//                <tr>
//                   <th>Token</th>
//                   <th>Patient</th>
//                   <th>Age</th>
//                   <th>Action</th>
//                </tr>
//             </thead>

//             <tbody>
//                {tokens.map((token) => (
//                   <tr key={token._id} className="border-b text-center">
//                      <td>{token.tokenNo}</td>

//                      <td>{token.patient?.name}</td>

//                      <td>{token.patient?.age}</td>

//                      <td>
//                         <Link
//                            to={`/doctor/prescription/${token._id}`}
//                            className="bg-green-600 text-white px-4 py-2 rounded"
//                         >
//                            Open
//                         </Link>
//                      </td>
//                   </tr>
//                ))}
//             </tbody>
//          </table>
//       </div>
//    );
// };

// export default Queue;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";

const Queue = () => {
   const [tokens, setTokens] = useState(null);

   const fetchQueue = async () => {
      try {
         const res = await api.get("/doctor/queue");
         setTokens(res.data.tokens);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchQueue();
   }, []);

   if (!tokens) {
      return (
         <div className="bg-white rounded-2xl p-6 shadow-sm animate-pulse">
            Loading queue...
         </div>
      );
   }

   return (
      <div>
         {/* Header */}
         <div className="bg-white border rounded-2xl p-5 shadow-sm mb-6">
            <h2 className="text-xl font-bold text-slate-900">
               Waiting Patients Queue
            </h2>
            <p className="text-slate-500 text-sm">
               Manage and open patient prescriptions
            </p>
         </div>

         {/* Table Card */}
         <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
               <thead className="bg-slate-50 text-slate-500">
                  <tr>
                     <th className="p-4 text-left">Token</th>
                     <th className="p-4 text-left">Patient</th>
                     <th className="p-4 text-left">Age</th>
                     <th className="p-4 text-center">Action</th>
                  </tr>
               </thead>

               <tbody className="divide-y divide-slate-100">
                  {tokens.map((token) => (
                     <tr
                        key={token._id}
                        className="hover:bg-slate-50 transition"
                     >
                        <td className="p-4 font-semibold text-cyan-600">
                           #{token.tokenNo}
                        </td>

                        <td className="p-4 text-slate-700">
                           {token.patient?.name}
                        </td>

                        <td className="p-4 text-slate-500">
                           {token.patient?.age}
                        </td>

                        <td className="p-4 text-center">
                           <Link
                              to={`/doctor/prescription/${token._id}`}
                              className="inline-flex items-center px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition"
                           >
                              Open
                           </Link>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Queue;
