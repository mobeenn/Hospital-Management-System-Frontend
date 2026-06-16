// import { useEffect, useState } from "react";

// import api from "../../api/axios";

// const TokenList = () => {
//    const [tokens, setTokens] = useState([]);

//    const fetchTokens = async () => {
//       try {
//          const res = await api.get("/tokens");

//          setTokens(res.data.tokens);
//       } catch (error) {
//          console.log(error);
//       }
//    };

//    useEffect(() => {
//       fetchTokens();
//    }, []);

//    return (
//       <div className="bg-white rounded-xl shadow p-6">
//          <h2 className="text-2xl font-bold mb-5">Today's Tokens</h2>

//          <table className="w-full">
//             <thead>
//                <tr>
//                   <th>Token</th>
//                   <th>Patient</th>
//                   <th>Doctor</th>
//                   <th>Status</th>
//                </tr>
//             </thead>

//             <tbody>
//                {tokens.map((token) => (
//                   <tr key={token._id} className="border-b text-center">
//                      <td>{token.tokenNo}</td>

//                      <td>{token.patient?.name}</td>

//                      <td>{token.doctor?.name}</td>

//                      <td>{token.status}</td>
//                   </tr>
//                ))}
//             </tbody>
//          </table>
//       </div>
//    );
// };

// export default TokenList;

import { useEffect, useState } from "react";
import api from "../../api/axios";
import PageHeader from "../../components/PageHeader";
import LoadingSkeleton from "../../components/LoadingSkeleton";

const TokenList = () => {
   const [tokens, setTokens] = useState(null);

   const fetchTokens = async () => {
      try {
         const res = await api.get("/tokens");
         setTokens(res.data.tokens);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchTokens();
   }, []);

   const getStatusColor = (status) => {
      switch (status) {
         case "waiting":
            return "bg-yellow-50 text-yellow-700";
         case "checked":
            return "bg-cyan-50 text-cyan-700";
         case "completed":
            return "bg-emerald-50 text-emerald-700";
         default:
            return "bg-slate-50 text-slate-600";
      }
   };

   if (!tokens) {
      return (
         <div>
            <PageHeader
               title="Token Management"
               description="All generated tokens & their status"
               breadcrumbs={[{ label: "Reception" }, { label: "Tokens" }]}
            />
            <LoadingSkeleton variant="table" />
         </div>
      );
   }

   return (
      <div>
         {/* Header */}
         <PageHeader
            title="Today's Tokens"
            description="Track patient tokens and their current status"
            breadcrumbs={[{ label: "Reception" }, { label: "Tokens" }]}
         />

         {/* Table Card */}
         <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
               <h2 className="text-base font-semibold text-slate-900">
                  Token List
               </h2>
               <p className="text-xs text-slate-400">
                  All patient tokens generated today
               </p>
            </div>

            <div className="overflow-x-auto">
               <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-500">
                     <tr>
                        <th className="p-4 text-left">Token</th>
                        <th className="p-4 text-left">Patient</th>
                        <th className="p-4 text-left">Doctor</th>
                        <th className="p-4 text-left">Status</th>
                     </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                     {tokens.map((token) => (
                        <tr
                           key={token._id}
                           className="hover:bg-slate-50 transition"
                        >
                           <td className="p-4 font-semibold text-slate-900">
                              #{token.tokenNo}
                           </td>

                           <td className="p-4 text-slate-600">
                              {token.patient?.name}
                           </td>

                           <td className="p-4 text-slate-600">
                              {token.doctor?.name}
                           </td>

                           <td className="p-4">
                              <span
                                 className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(
                                    token.status,
                                 )}`}
                              >
                                 {token.status}
                              </span>
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

export default TokenList;
