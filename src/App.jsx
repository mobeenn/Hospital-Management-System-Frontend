import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";

import AdminDashboard from "./pages/admin/AdminDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import ReceptionDashboard from "./pages/receptionist/ReceptionDashboard";
import PharmacistDashboard from "./pages/pharmacist/PharmacistDashboard";

import AdminLayout from "./layouts/AdminLayout";
import DoctorLayout from "./layouts/DoctorLayout";
import ReceptionistLayout from "./layouts/ReceptionistLayout";
import PharmacistLayout from "./layouts/PharmacistLayout";

import ProtectedRoute from "./routes/ProtectedRoute";

import CreateUser from "./pages/admin/CreateUser";
import UsersList from "./pages/admin/UsersList";

import RegisterPatient from "./pages/receptionist/RegisterPatient";
import TokenList from "./pages/receptionist/TokenList";

import Queue from "./pages/doctor/Queue";
import Prescription from "./pages/doctor/Prescription";

import SearchToken from "./pages/pharmacist/SearchToken";
import PrescriptionView from "./pages/pharmacist/PrescriptionView";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Features from "./pages/public/Features";
import Contact from "./pages/public/Contact";

function App() {
   return (
      <Routes>
         {/* <Route path="/" element={<Login />} /> */}
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/features" element={<Features />} />
         <Route path="/contact" element={<Contact />} />

         {/* ── Auth ── */}
         <Route path="/login" element={<Login />} />

         {/* Admin */}
         <Route
            path="/admin"
            element={
               <ProtectedRoute allowedRole="admin">
                  <AdminLayout />
               </ProtectedRoute>
            }
         >
            <Route index element={<AdminDashboard />} />
            <Route path="create-user" element={<CreateUser />} />

            <Route path="users" element={<UsersList />} />
         </Route>

         {/* Doctor */}
         <Route
            path="/doctor"
            element={
               <ProtectedRoute allowedRole="doctor">
                  <DoctorLayout />
               </ProtectedRoute>
            }
         >
            <Route index element={<DoctorDashboard />} />

            <Route path="queue" element={<Queue />} />

            <Route path="prescription/:tokenId" element={<Prescription />} />
         </Route>

         {/* Receptionist */}
         <Route
            path="/receptionist"
            element={
               <ProtectedRoute allowedRole="receptionist">
                  <ReceptionistLayout />
               </ProtectedRoute>
            }
         >
            <Route index element={<ReceptionDashboard />} />

            <Route path="register-patient" element={<RegisterPatient />} />

            <Route path="tokens" element={<TokenList />} />
         </Route>

         {/* Pharmacist */}
         <Route
            path="/pharmacist"
            element={
               <ProtectedRoute allowedRole="pharmacist">
                  <PharmacistLayout />
               </ProtectedRoute>
            }
         >
            <Route index element={<PharmacistDashboard />} />

            <Route path="search" element={<SearchToken />} />

            <Route
               path="prescription/:tokenNo"
               element={<PrescriptionView />}
            />
         </Route>
      </Routes>
   );
}

export default App;
