// import { Link, Outlet, useNavigate } from "react-router-dom";

// const DoctorLayout = () => {
//    const navigate = useNavigate();

//    const logout = () => {
//       localStorage.clear();
//       navigate("/login");
//    };

//    return (
//       <div className="min-h-screen flex bg-gray-100">
//          <aside className="w-64 bg-green-700 text-white">
//             <div className="p-6 text-2xl font-bold border-b">Doctor Panel</div>

//             <nav className="p-4 flex flex-col gap-2">
//                <Link to="/doctor" className="p-3 rounded hover:bg-green-600">
//                   Dashboard
//                </Link>

//                <Link
//                   to="/doctor/queue"
//                   className="p-3 rounded hover:bg-green-600"
//                >
//                   Waiting Queue
//                </Link>

//                <button onClick={logout} className="bg-red-500 p-3 rounded mt-4">
//                   Logout
//                </button>
//             </nav>
//          </aside>

//          <main className="flex-1 p-6">
//             <Outlet />
//          </main>
//       </div>
//    );
// };

// export default DoctorLayout;

import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import DoctorSidebar from "../components/DoctorSidebar";
import DoctorTopbar from "../components/DoctorTopbar";

const DoctorLayout = () => {
   const navigate = useNavigate();
   const [sidebarOpen, setSidebarOpen] = useState(false);

   const logout = () => {
      localStorage.clear();
      navigate("/login");
   };

   return (
      <div className="flex min-h-screen bg-slate-50">
         <DoctorSidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            onLogout={logout}
         />

         <div className="flex flex-1 flex-col">
            <DoctorTopbar onMenuClick={() => setSidebarOpen(true)} />

            <main className="flex-1 p-4 sm:p-6 lg:p-8">
               <Outlet />
            </main>
         </div>
      </div>
   );
};

export default DoctorLayout;
