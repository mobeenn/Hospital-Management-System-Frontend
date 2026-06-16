// import { useEffect, useState } from "react";

// import { useParams, useNavigate } from "react-router-dom";

// import api from "../../api/axios";

// const Prescription = () => {
//    const { tokenId } = useParams();

//    const navigate = useNavigate();

//    const [token, setToken] = useState(null);

//    const [diagnosis, setDiagnosis] = useState("");

//    const [notes, setNotes] = useState("");

//    const [medicines, setMedicines] = useState([
//       {
//          medicineName: "",
//          dosage: "",
//          quantity: "",
//       },
//    ]);

//    useEffect(() => {
//       fetchToken();
//    }, []);

//    const fetchToken = async () => {
//       try {
//          const res = await api.get(`/doctor/token/${tokenId}`);

//          setToken(res.data.token);
//       } catch (error) {
//          console.log(error);
//       }
//    };

//    const addMedicine = () => {
//       setMedicines([
//          ...medicines,
//          {
//             medicineName: "",
//             dosage: "",
//             quantity: "",
//          },
//       ]);
//    };

//    const handleMedicineChange = (index, field, value) => {
//       const updated = [...medicines];

//       updated[index][field] = value;

//       setMedicines(updated);
//    };

//    const submitPrescription = async () => {
//       try {
//          await api.post("/doctor/prescription", {
//             tokenId,
//             diagnosis,
//             notes,
//             medicines,
//          });

//          alert("Prescription Saved");

//          navigate("/doctor/queue");
//       } catch (error) {
//          console.log(error);
//       }
//    };

//    if (!token) return <p>Loading...</p>;

//    return (
//       <div className="bg-white p-6 rounded-xl shadow">
//          <h2 className="text-2xl font-bold mb-5">Patient Checkup</h2>

//          <div className="mb-6">
//             <p>
//                <strong>Token:</strong> {token.tokenNo}
//             </p>

//             <p>
//                <strong>Name:</strong> {token.patient?.name}
//             </p>

//             <p>
//                <strong>Age:</strong> {token.patient?.age}
//             </p>

//             <p>
//                <strong>Gender:</strong> {token.patient?.gender}
//             </p>
//          </div>

//          <textarea
//             placeholder="Diagnosis"
//             className="w-full border p-3 rounded mb-4"
//             onChange={(e) => setDiagnosis(e.target.value)}
//          />

//          <textarea
//             placeholder="Notes"
//             className="w-full border p-3 rounded mb-4"
//             onChange={(e) => setNotes(e.target.value)}
//          />

//          <h3 className="text-xl font-semibold mb-3">Medicines</h3>

//          {medicines.map((medicine, index) => (
//             <div key={index} className="grid md:grid-cols-3 gap-3 mb-3">
//                <input
//                   placeholder="Medicine"
//                   className="border p-3 rounded"
//                   onChange={(e) =>
//                      handleMedicineChange(index, "medicineName", e.target.value)
//                   }
//                />

//                <input
//                   placeholder="Dosage"
//                   className="border p-3 rounded"
//                   onChange={(e) =>
//                      handleMedicineChange(index, "dosage", e.target.value)
//                   }
//                />

//                <input
//                   placeholder="Quantity"
//                   className="border p-3 rounded"
//                   onChange={(e) =>
//                      handleMedicineChange(index, "quantity", e.target.value)
//                   }
//                />
//             </div>
//          ))}

//          <button
//             onClick={addMedicine}
//             className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
//          >
//             Add Medicine
//          </button>

//          <br />

//          <button
//             onClick={submitPrescription}
//             className="bg-green-700 text-white px-6 py-3 rounded"
//          >
//             Save Prescription
//          </button>
//       </div>
//    );
// };

// export default Prescription;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

import { FaUser, FaPlus, FaSave } from "react-icons/fa";

const Prescription = () => {
   const { tokenId } = useParams();
   const navigate = useNavigate();

   const [token, setToken] = useState(null);
   const [diagnosis, setDiagnosis] = useState("");
   const [notes, setNotes] = useState("");

   const [medicines, setMedicines] = useState([
      { medicineName: "", dosage: "", quantity: "" },
   ]);

   const fetchToken = async () => {
      try {
         const res = await api.get(`/doctor/token/${tokenId}`);
         setToken(res.data.token);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchToken();
   }, []);

   const addMedicine = () => {
      setMedicines([
         ...medicines,
         { medicineName: "", dosage: "", quantity: "" },
      ]);
   };

   const handleMedicineChange = (index, field, value) => {
      const updated = [...medicines];
      updated[index][field] = value;
      setMedicines(updated);
   };

   const submitPrescription = async () => {
      try {
         await api.post("/doctor/prescription", {
            tokenId,
            diagnosis,
            notes,
            medicines,
         });

         navigate("/doctor/queue");
      } catch (error) {
         console.log(error);
      }
   };

   if (!token) {
      return (
         <div className="bg-white rounded-2xl p-6 shadow-sm animate-pulse">
            Loading patient data...
         </div>
      );
   }

   return (
      <div className="space-y-6">
         {/* HEADER */}
         <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
               Patient Checkup
            </h2>

            <p className="text-slate-500 text-sm mt-1">
               Create prescription and diagnosis
            </p>
         </div>

         {/* PATIENT CARD */}
         <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
               <div className="h-10 w-10 flex items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                  <FaUser />
               </div>

               <h3 className="font-semibold text-slate-800">Patient Details</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600">
               <p>
                  <span className="font-medium text-slate-900">Token:</span> #
                  {token.tokenNo}
               </p>

               <p>
                  <span className="font-medium text-slate-900">Name:</span>{" "}
                  {token.patient?.name}
               </p>

               <p>
                  <span className="font-medium text-slate-900">Age:</span>{" "}
                  {token.patient?.age}
               </p>

               <p>
                  <span className="font-medium text-slate-900">Gender:</span>{" "}
                  {token.patient?.gender}
               </p>
            </div>
         </div>

         {/* FORM */}
         <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
            <textarea
               placeholder="Diagnosis"
               className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none"
               onChange={(e) => setDiagnosis(e.target.value)}
            />

            <textarea
               placeholder="Notes"
               className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cyan-500 outline-none"
               onChange={(e) => setNotes(e.target.value)}
            />
         </div>

         {/* MEDICINES */}
         <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
               Medicines
            </h3>

            <div className="space-y-3">
               {medicines.map((m, index) => (
                  <div key={index} className="grid md:grid-cols-3 gap-3">
                     <input
                        placeholder="Medicine Name"
                        className="p-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
                        onChange={(e) =>
                           handleMedicineChange(
                              index,
                              "medicineName",
                              e.target.value,
                           )
                        }
                     />

                     <input
                        placeholder="Dosage"
                        className="p-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
                        onChange={(e) =>
                           handleMedicineChange(index, "dosage", e.target.value)
                        }
                     />

                     <input
                        placeholder="Quantity"
                        className="p-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none"
                        onChange={(e) =>
                           handleMedicineChange(
                              index,
                              "quantity",
                              e.target.value,
                           )
                        }
                     />
                  </div>
               ))}
            </div>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-5">
               <button
                  onClick={addMedicine}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
               >
                  <FaPlus />
                  Add Medicine
               </button>

               <button
                  onClick={submitPrescription}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white"
               >
                  <FaSave />
                  Save Prescription
               </button>
            </div>
         </div>
      </div>
   );
};

export default Prescription;
