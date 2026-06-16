// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { FaSearch, FaPrescriptionBottleAlt } from "react-icons/fa";

// const SearchToken = () => {
//    const [tokenNo, setTokenNo] = useState("");

//    const navigate = useNavigate();

//    const handleSearch = () => {
//       if (!tokenNo) return;

//       navigate(`/pharmacist/prescription/${tokenNo}`);
//    };

//    return (
//       <div className="relative">
//          {/* Main Card */}
//          <div
//             className="
//                bg-white/10
//                backdrop-blur-xl
//                border border-white/10
//                rounded-3xl
//                shadow-2xl
//                p-8
//             "
//          >
//             {/* Header */}
//             <div className="flex items-center gap-4 mb-8">
//                <div
//                   className="
//                      w-16
//                      h-16
//                      rounded-2xl
//                      bg-linear-to-r from-cyan-500 via-blue-500 to-cyan-500
//                      flex
//                      items-center
//                      justify-center
//                      text-white
//                      text-2xl
//                      shadow-xl
//                   "
//                >
//                   <FaPrescriptionBottleAlt />
//                </div>

//                <div>
//                   <h2 className="text-3xl font-bold text-white">
//                      Search Prescription Token
//                   </h2>

//                   <p className="text-cyan-300">
//                      Find patient prescriptions using token number
//                   </p>
//                </div>
//             </div>

//             {/* Search Section */}
//             <div className="flex flex-col md:flex-row gap-4">
//                <div className="relative flex-1">
//                   <FaSearch
//                      className="
//                         absolute
//                         left-4
//                         top-1/2
//                         -translate-y-1/2
//                         text-cyan-400
//                      "
//                   />

//                   <input
//                      type="text"
//                      placeholder="Enter Token Number"
//                      value={tokenNo}
//                      onChange={(e) => setTokenNo(e.target.value)}
//                      className="
//                         w-full
//                         pl-12
//                         p-4
//                         rounded-xl
//                         bg-slate-900/40
//                         border
//                         border-cyan-500/20
//                         text-white
//                         placeholder-cyan-200
//                         focus:outline-none
//                         focus:ring-2
//                         focus:ring-cyan-500
//                         transition-all
//                      "
//                   />
//                </div>

//                <button
//                   onClick={handleSearch}
//                   className="
//                      px-8
//                      py-4
//                      rounded-xl
//                      font-bold
//                      text-white
//                      bg-gradient-to-r
//                      from-cyan-500
//                      via-blue-500
//                      to-cyan-500
//                      hover:scale-105
//                      transition-all
//                      duration-300
//                      shadow-xl
//                      flex
//                      items-center
//                      justify-center
//                      gap-3
//                   "
//                >
//                   <FaSearch />
//                   Search
//                </button>
//             </div>

//             {/* Info Card */}
//             <div
//                className="
//                   mt-6
//                   bg-slate-900/40
//                   border
//                   border-cyan-500/20
//                   rounded-2xl
//                   p-4
//                "
//             >
//                <p className="text-cyan-300 text-sm">
//                   Enter a valid token number to access the patient's
//                   prescription and medication details.
//                </p>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default SearchToken;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
   FaSearch,
   FaPrescriptionBottleAlt,
   FaExclamationCircle,
} from "react-icons/fa";
import PageHeader from "../../components/PageHeader";

const SearchToken = () => {
   const [tokenNo, setTokenNo] = useState("");
   const [error, setError] = useState("");
   const navigate = useNavigate();

   const handleSearch = () => {
      if (!tokenNo.trim()) {
         setError("Enter a token number to continue.");
         return;
      }
      setError("");
      navigate(`/pharmacist/prescription/${tokenNo.trim()}`);
   };

   const handleChange = (e) => {
      setTokenNo(e.target.value);
      if (error) setError("");
   };

   const handleKeyDown = (e) => {
      if (e.key === "Enter") handleSearch();
   };

   return (
      <div>
         <PageHeader
            title="Search Prescription Token"
            description="Find a patient's prescription using their token number"
            breadcrumbs={[{ label: "Pharmacy" }, { label: "Search Token" }]}
         />

         <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {/* Header */}
            <div className="mb-6 flex items-center gap-4">
               <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 text-2xl text-white shadow-lg shadow-teal-500/20">
                  <FaPrescriptionBottleAlt />
               </div>
               <div>
                  <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                     Prescription Lookup
                  </h2>
                  <p className="text-sm text-slate-500">
                     Enter a token number to view medication details
                  </p>
               </div>
            </div>

            {/* Search form */}
            <label
               htmlFor="tokenNo"
               className="mb-2 block text-sm font-medium text-slate-700"
            >
               Token number
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
               <div className="relative flex-1">
                  <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                     id="tokenNo"
                     type="text"
                     placeholder="e.g. TKN-00123"
                     value={tokenNo}
                     onChange={handleChange}
                     onKeyDown={handleKeyDown}
                     aria-invalid={Boolean(error)}
                     aria-describedby={error ? "tokenNo-error" : undefined}
                     className={`w-full rounded-xl border bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 transition-all duration-200 focus:bg-white focus:outline-none focus:ring-2 ${
                        error
                           ? "border-red-300 focus:ring-red-400"
                           : "border-slate-200 focus:ring-teal-500"
                     }`}
                  />
               </div>
               <button
                  type="button"
                  onClick={handleSearch}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-500/20 transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 active:scale-[0.98]"
               >
                  <FaSearch className="text-xs" />
                  Search
               </button>
            </div>

            {error && (
               <p
                  id="tokenNo-error"
                  role="alert"
                  className="mt-2 flex items-center gap-1.5 text-sm font-medium text-red-600"
               >
                  <FaExclamationCircle className="text-xs" />
                  {error}
               </p>
            )}

            {/* Info card */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
               <FaPrescriptionBottleAlt className="mt-0.5 flex-shrink-0 text-teal-500" />
               <p className="text-sm text-slate-500">
                  Enter a valid token number to access the patient's
                  prescription and medication details.
               </p>
            </div>
         </div>
      </div>
   );
};

export default SearchToken;
