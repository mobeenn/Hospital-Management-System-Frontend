// import { useEffect, useState } from "react";

// import { useNavigate, useParams } from "react-router-dom";
// import {
//    FaUserInjured,
//    FaUserMd,
//    FaNotesMedical,
//    FaPills,
//    FaCheckCircle,
// } from "react-icons/fa";
// import api from "../../api/axios";

// const PrescriptionView = () => {
//    const { tokenNo } = useParams();

//    const navigate = useNavigate();

//    const [data, setData] = useState(null);

//    useEffect(() => {
//       fetchPrescription();
//    }, []);

//    const fetchPrescription = async () => {
//       try {
//          const res = await api.get(`/pharmacist/token/${tokenNo}`);

//          setData(res.data);
//       } catch (error) {
//          console.log(error);
//       }
//    };

//    const dispenseMedicine = async () => {
//       try {
//          await api.post("/pharmacist/dispense", {
//             tokenId: data.token._id,
//          });

//          alert("Medicines Dispensed");

//          navigate("/pharmacist/search");
//       } catch (error) {
//          console.log(error);
//       }
//    };

//    if (!data)
//       return (
//          <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-blue-950 to-cyan-950">
//             {" "}
//             <div className="text-center">
//                {" "}
//                <div className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>{" "}
//                <p className="text-white mt-5 text-lg">
//                   {" "}
//                   Loading Prescription...{" "}
//                </p>{" "}
//             </div>{" "}
//          </div>
//       );
//    return (
//       // <div className="bg-white p-6 rounded-xl shadow">
//       //    <h2 className="text-2xl font-bold mb-6">Prescription</h2>

//       //    <div className="mb-6">
//       //       <p>
//       //          <strong>Patient:</strong> {data.token.patient?.name}
//       //       </p>

//       //       <p>
//       //          <strong>Doctor:</strong> {data.token.doctor?.name}
//       //       </p>

//       //       <p>
//       //          <strong>Diagnosis:</strong> {data.prescription.diagnosis}
//       //       </p>
//       //    </div>

//       //    <h3 className="text-xl font-semibold mb-4">Medicines</h3>

//       //    <table className="w-full mb-6">
//       //       <thead>
//       //          <tr>
//       //             <th>Medicine</th>
//       //             <th>Dosage</th>
//       //             <th>Quantity</th>
//       //          </tr>
//       //       </thead>

//       //       <tbody>
//       //          {data.prescription.medicines.map((medicine, index) => (
//       //             <tr key={index} className="border-b text-center">
//       //                <td>{medicine.medicineName}</td>

//       //                <td>{medicine.dosage}</td>

//       //                <td>{medicine.quantity}</td>
//       //             </tr>
//       //          ))}
//       //       </tbody>
//       //    </table>

//       //    <button
//       //       onClick={dispenseMedicine}
//       //       className="bg-green-600 text-white px-6 py-3 rounded"
//       //    >
//       //       Dispense Medicines
//       //    </button>
//       // </div>
//       <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 p-6 md:p-8 relative overflow-hidden">
//          {" "}
//          {/* Glow Effects */}{" "}
//          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse pointer-events-none"></div>{" "}
//          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse pointer-events-none"></div>{" "}
//          <div className="relative z-10">
//             {" "}
//             {/* Main Card */}{" "}
//             <div className=" bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 ">
//                {" "}
//                {/* Header */}{" "}
//                <div className="flex items-center gap-4 mb-8">
//                   {" "}
//                   <div className=" w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl ">
//                      {" "}
//                      <FaNotesMedical />{" "}
//                   </div>{" "}
//                   <div>
//                      {" "}
//                      <h2 className="text-3xl font-bold text-white">
//                         {" "}
//                         Prescription Details{" "}
//                      </h2>{" "}
//                      <p className="text-cyan-300">
//                         {" "}
//                         Patient Medication & Treatment Information{" "}
//                      </p>{" "}
//                   </div>{" "}
//                </div>{" "}
//                {/* Patient Info */}{" "}
//                <div className="grid md:grid-cols-3 gap-5 mb-8">
//                   {" "}
//                   <div className=" bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-5 ">
//                      {" "}
//                      <div className="flex items-center gap-3 mb-2">
//                         {" "}
//                         <FaUserInjured className="text-cyan-400" />{" "}
//                         <span className="text-cyan-300"> Patient </span>{" "}
//                      </div>{" "}
//                      <p className="text-white font-bold text-lg">
//                         {" "}
//                         {data.token.patient?.name}{" "}
//                      </p>{" "}
//                   </div>{" "}
//                   <div className=" bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-5 ">
//                      {" "}
//                      <div className="flex items-center gap-3 mb-2">
//                         {" "}
//                         <FaUserMd className="text-cyan-400" />{" "}
//                         <span className="text-cyan-300"> Doctor </span>{" "}
//                      </div>{" "}
//                      <p className="text-white font-bold text-lg">
//                         {" "}
//                         {data.token.doctor?.name}{" "}
//                      </p>{" "}
//                   </div>{" "}
//                   <div className=" bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-5 ">
//                      {" "}
//                      <div className="flex items-center gap-3 mb-2">
//                         {" "}
//                         <FaNotesMedical className="text-cyan-400" />{" "}
//                         <span className="text-cyan-300"> Diagnosis </span>{" "}
//                      </div>{" "}
//                      <p className="text-white font-bold">
//                         {" "}
//                         {data.prescription.diagnosis}{" "}
//                      </p>{" "}
//                   </div>{" "}
//                </div>{" "}
//                {/* Medicines */}{" "}
//                <div className=" bg-slate-900/40 border border-cyan-500/20 rounded-3xl p-6 mb-8 ">
//                   {" "}
//                   <div className="flex items-center gap-3 mb-5">
//                      {" "}
//                      <FaPills className="text-cyan-400 text-2xl" />{" "}
//                      <h3 className="text-2xl font-bold text-white">
//                         {" "}
//                         Prescribed Medicines{" "}
//                      </h3>{" "}
//                   </div>{" "}
//                   <div className="overflow-x-auto">
//                      {" "}
//                      <table className="w-full text-white">
//                         {" "}
//                         <thead>
//                            {" "}
//                            <tr className="border-b border-cyan-500/20">
//                               {" "}
//                               <th className="p-4 text-left text-cyan-300">
//                                  {" "}
//                                  Medicine{" "}
//                               </th>{" "}
//                               <th className="p-4 text-left text-cyan-300">
//                                  {" "}
//                                  Dosage{" "}
//                               </th>{" "}
//                               <th className="p-4 text-left text-cyan-300">
//                                  {" "}
//                                  Quantity{" "}
//                               </th>{" "}
//                            </tr>{" "}
//                         </thead>{" "}
//                         <tbody>
//                            {" "}
//                            {data.prescription.medicines.map(
//                               (medicine, index) => (
//                                  <tr
//                                     key={index}
//                                     className=" border-b border-white/10 hover:bg-white/5 transition-all "
//                                  >
//                                     {" "}
//                                     <td className="p-4">
//                                        {" "}
//                                        {medicine.medicineName}{" "}
//                                     </td>{" "}
//                                     <td className="p-4"> {medicine.dosage} </td>{" "}
//                                     <td className="p-4">
//                                        {" "}
//                                        {medicine.quantity}{" "}
//                                     </td>{" "}
//                                  </tr>
//                               ),
//                            )}{" "}
//                         </tbody>{" "}
//                      </table>{" "}
//                   </div>{" "}
//                </div>{" "}
//                {/* Dispense Button */}{" "}
//                <button
//                   onClick={dispenseMedicine}
//                   className=" w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 text-white font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 "
//                >
//                   {" "}
//                   <FaCheckCircle /> Dispense Medicines{" "}
//                </button>{" "}
//             </div>{" "}
//          </div>{" "}
//       </div>
//    );
// };

// export default PrescriptionView;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
   FaUserInjured,
   FaUserMd,
   FaNotesMedical,
   FaPills,
   FaCheckCircle,
   FaStickyNote,
} from "react-icons/fa";
import api from "../../api/axios";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import LoadingSkeleton from "../../components/LoadingSkeleton";

const PrescriptionView = () => {
   const { tokenNo } = useParams();
   const navigate = useNavigate();
   const [data, setData] = useState(null);

   useEffect(() => {
      fetchPrescription();
   }, []);

   const fetchPrescription = async () => {
      try {
         const res = await api.get(`/pharmacist/token/${tokenNo}`);
         setData(res.data);
         console.log("🚀 ~ fetchPrescription ~ res.data:", res.data);
      } catch (error) {
         console.log(error);
      }
   };

   const dispenseMedicine = async () => {
      try {
         await api.post("/pharmacist/dispense", {
            tokenId: data.token._id,
         });
         alert("Medicines Dispensed");
         navigate("/pharmacist/search");
      } catch (error) {
         console.log(error);
      }
   };

   const medicineColumns = [
      {
         key: "medicineName",
         label: "Medicine",
         render: (med) => (
            <div className="flex items-center gap-3">
               <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                  <FaPills className="text-sm" />
               </div>
               <span className="font-medium text-slate-800">
                  {med.medicineName}
               </span>
            </div>
         ),
      },
      {
         key: "dosage",
         label: "Dosage",
      },
      {
         key: "quantity",
         label: "Quantity",
         className: "font-semibold text-slate-900",
      },
   ];

   if (!data) {
      return (
         <div>
            <PageHeader
               title="Prescription Details"
               description="Patient medication & treatment information"
               breadcrumbs={[
                  { label: "Pharmacy" },
                  { label: "Search Token" },
                  { label: tokenNo },
               ]}
            />
            <LoadingSkeleton variant="card" />
         </div>
      );
   }

   return (
      <div className="pb-24 sm:pb-8">
         <PageHeader
            title="Prescription Details"
            description="Patient medication & treatment information"
            breadcrumbs={[
               { label: "Pharmacy" },
               { label: "Search Token" },
               { label: `Token ${tokenNo}` },
            ]}
         />

         {/* Patient summary */}
         <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
               <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                     <FaUserInjured />
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                     Patient
                  </span>
               </div>
               <p className="truncate text-lg font-bold text-slate-900">
                  {data.token.patient?.name}
               </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
               <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                     <FaUserMd />
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                     Doctor
                  </span>
               </div>
               <p className="truncate text-lg font-bold text-slate-900">
                  {data.token.doctor?.name}
               </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-1">
               <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                     <FaNotesMedical />
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                     Diagnosis
                  </span>
               </div>
               <p className="text-base font-semibold text-slate-900">
                  {data.prescription.diagnosis}
               </p>{" "}
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-1">
               <div className="mb-2 flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                     <FaStickyNote />
                  </div>
                  <span className="text-sm font-medium text-slate-500">
                     Notes
                  </span>
               </div>
               <p className="text-base font-semibold text-slate-900">
                  {data.prescription.notes}
               </p>{" "}
            </div>
         </div>

         {/* Medicines table */}
         <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:mt-8">
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
               <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                  <FaPills />
               </div>
               <div>
                  <h2 className="text-base font-semibold text-slate-900">
                     Prescribed Medicines
                  </h2>
                  <p className="text-xs text-slate-400">
                     Confirm each item before dispensing
                  </p>
               </div>
            </div>
            <DataTable
               columns={medicineColumns}
               data={data.prescription.medicines}
               rowKey="medicineName"
               emptyTitle="No medicines listed"
               emptyDescription="This prescription does not contain any medicines."
            />
         </div>

         {/* Desktop dispense button */}
         <div className="mt-6 hidden sm:block">
            <button
               type="button"
               onClick={dispenseMedicine}
               className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-teal-500 to-blue-500 py-4 text-lg font-bold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 active:scale-[0.99]"
            >
               <FaCheckCircle />
               Dispense Medicines
            </button>
         </div>

         {/* Mobile sticky action bar */}
         <div className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-200 bg-white/95 p-4 backdrop-blur-md sm:hidden">
            <button
               type="button"
               onClick={dispenseMedicine}
               className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-teal-500 to-blue-500 py-3.5 text-base font-bold text-white shadow-lg shadow-teal-500/20 transition-all duration-300 active:scale-[0.99]"
            >
               <FaCheckCircle />
               Dispense Medicines
            </button>
         </div>
      </div>
   );
};

export default PrescriptionView;
