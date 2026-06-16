// import { useEffect, useState } from "react";

// import api from "../../api/axios";

// const RegisterPatient = () => {
//    const [doctors, setDoctors] = useState([]);

//    const [token, setToken] = useState(null);

//    const [formData, setFormData] = useState({
//       name: "",
//       age: "",
//       gender: "Male",
//       cnic: "",
//       phone: "",
//       address: "",
//       doctorId: "",
//    });

//    const fetchDoctors = async () => {
//       try {
//          const res = await api.get("/users/doctors");

//          setDoctors(res.data.doctors);
//       } catch (error) {
//          console.log(error);
//       }
//    };

//    useEffect(() => {
//       fetchDoctors();
//    }, []);

//    const handleChange = (e) => {
//       setFormData({
//          ...formData,
//          [e.target.name]: e.target.value,
//       });
//    };

//    const handleSubmit = async (e) => {
//       e.preventDefault();

//       try {
//          const res = await api.post("/patients/register", formData);

//          setToken(res.data.token);

//          alert("Patient Registered");
//       } catch (error) {
//          alert(error.response?.data?.message);
//       }
//    };

//    return (
//       <div className="bg-white p-6 rounded-xl shadow">
//          <h2 className="text-2xl font-bold mb-5">Register Patient</h2>

//          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
//             <input
//                name="name"
//                placeholder="Name"
//                className="border p-3 rounded"
//                onChange={handleChange}
//             />

//             <input
//                name="age"
//                placeholder="Age"
//                className="border p-3 rounded"
//                onChange={handleChange}
//             />

//             <input
//                name="cnic"
//                placeholder="CNIC"
//                className="border p-3 rounded"
//                onChange={handleChange}
//             />

//             <input
//                name="phone"
//                placeholder="Phone"
//                className="border p-3 rounded"
//                onChange={handleChange}
//             />

//             <input
//                name="address"
//                placeholder="Address"
//                className="border p-3 rounded"
//                onChange={handleChange}
//             />

//             <select
//                name="gender"
//                className="border p-3 rounded"
//                onChange={handleChange}
//             >
//                <option>Male</option>

//                <option>Female</option>
//             </select>

//             <select
//                name="doctorId"
//                className="border p-3 rounded"
//                onChange={handleChange}
//             >
//                <option value="">Select Doctor</option>

//                {doctors.map((doctor) => (
//                   <option key={doctor._id} value={doctor._id}>
//                      {doctor.name}
//                      {" - "}
//                      Room {doctor.roomNo}
//                   </option>
//                ))}
//             </select>

//             <button className="bg-purple-700 text-white p-3 rounded">
//                Generate Token
//             </button>
//          </form>

//          {/* {token && (
//             <div className="mt-8 bg-green-100 p-5 rounded">
//                <h3 className="text-xl font-bold">Token Generated</h3>

//                <p>
//                   Token No:
//                   {token.tokenNo}
//                </p>

//                <p>
//                   Status:
//                   {token.status}
//                </p>
//             </div>
//          )} */}
//          {token && (
//             <div
//                id="print-slip"
//                className="mt-8 bg-white border-2 border-gray-300 p-6 rounded"
//             >
//                <h2 className="text-center text-2xl font-bold mb-4">
//                   ABC Hospital
//                </h2>

//                <h3 className="text-center font-semibold mb-6">
//                   Patient Token Slip
//                </h3>

//                <div className="space-y-2">
//                   <p>
//                      <strong>Token No:</strong> {token.tokenNo}
//                   </p>

//                   <p>
//                      <strong>Patient:</strong> {token.patientName}
//                   </p>

//                   <p>
//                      <strong>Doctor:</strong> {token.doctorName}
//                   </p>

//                   <p>
//                      <strong>Room No:</strong> {token.roomNo}
//                   </p>

//                   <p>
//                      <strong>Date:</strong> {new Date().toLocaleDateString()}
//                   </p>

//                   <p>
//                      <strong>Status:</strong> Waiting
//                   </p>
//                </div>

//                <p className="mt-6 text-center text-gray-600">
//                   Please wait for your turn.
//                </p>

//                <button
//                   onClick={() => window.print()}
//                   className="mt-6 w-full bg-purple-700 text-white p-3 rounded"
//                >
//                   Print Token
//                </button>
//             </div>
//          )}
//       </div>
//    );
// };

// export default RegisterPatient;

import { useEffect, useState } from "react";
import api from "../../api/axios";
import { FaUserPlus } from "react-icons/fa";

const RegisterPatient = () => {
   const [doctors, setDoctors] = useState([]);
   const [token, setToken] = useState(null);

   const [formData, setFormData] = useState({
      name: "",
      age: "",
      gender: "Male",
      cnic: "",
      phone: "",
      address: "",
      doctorId: "",
   });

   useEffect(() => {
      fetchDoctors();
   }, []);

   const fetchDoctors = async () => {
      const res = await api.get("/users/doctors");
      setDoctors(res.data.doctors);
   };

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await api.post("/patients/register", formData);
      setToken(res.data.token);
   };

   return (
      <div>
         {/* Header */}
         <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
               <FaUserPlus />
            </div>

            <div>
               <h1 className="text-lg font-semibold text-slate-900">
                  Register Patient
               </h1>
               <p className="text-xs text-slate-400">
                  Create patient & generate token
               </p>
            </div>
         </div>

         {/* Form Card */}
         <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
               {["name", "age", "cnic", "phone", "address"].map((field) => (
                  <input
                     key={field}
                     name={field}
                     placeholder={field.toUpperCase()}
                     onChange={handleChange}
                     className="p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
               ))}

               <select
                  name="gender"
                  onChange={handleChange}
                  className="p-3 rounded-xl border border-slate-200"
               >
                  <option>Male</option>
                  <option>Female</option>
               </select>

               <select
                  name="doctorId"
                  onChange={handleChange}
                  className="p-3 rounded-xl border border-slate-200"
               >
                  <option>Select Doctor</option>
                  {doctors.map((d) => (
                     <option key={d._id} value={d._id}>
                        {d.name} - Room {d.roomNo}
                     </option>
                  ))}
               </select>

               <button className="md:col-span-2 bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition">
                  Generate Token
               </button>
            </form>
         </div>

         {/* Token Slip */}
         {token && (
            <div className="mt-6 bg-white border rounded-2xl p-6 shadow-sm">
               <h2 className="text-center text-lg font-bold mb-4">
                  ABC Hospital Token Slip
               </h2>

               <div className="space-y-2 text-slate-700">
                  <p>Token: {token.tokenNo}</p>
                  <p>Patient: {token.patientName}</p>
                  <p>Doctor: {token.doctorName}</p>
                  <p>Room: {token.roomNo}</p>
               </div>

               <button
                  onClick={() => window.print()}
                  className="mt-4 w-full bg-purple-600 text-white p-3 rounded-xl"
               >
                  Print
               </button>
            </div>
         )}
      </div>
   );
};

export default RegisterPatient;
