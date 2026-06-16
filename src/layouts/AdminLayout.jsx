// import { Link, Outlet, useNavigate } from "react-router-dom";

// import {
//    FaTachometerAlt,
//    FaUserPlus,
//    FaUsers,
//    FaSignOutAlt,
//    FaHospital,
// } from "react-icons/fa";

// const AdminLayout = () => {
//    const navigate = useNavigate();

//    const logout = () => {
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");

//       navigate("/login");
//    };

//    return (
//       <div className="min-h-screen flex bg-linear-to-br from-slate-950 via-blue-950 to-cyan-950 relative overflow-hidden">
//          {/* Background Glow */}
//          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

//          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

//          {/* Sidebar */}
//          <aside
//             className="
//                relative z-10
//                w-72
//                bg-white/10
//                backdrop-blur-xl
//                border-r
//                border-white/10
//                shadow-2xl
//                flex
//                flex-col
//             "
//          >
//             {/* Logo */}
//             <div className="p-6 border-b border-white/10">
//                <div className="flex items-center gap-4">
//                   <div
//                      className="
//                         w-14
//                         h-14
//                         rounded-2xl
//                         bg-linear-to-r
//                         from-cyan-500
//                         via-blue-500
//                         to-cyan-500
//                         flex
//                         items-center
//                         justify-center
//                         text-white
//                         text-2xl
//                      "
//                   >
//                      <FaHospital />
//                   </div>

//                   <div>
//                      <h1 className="text-white font-bold text-2xl">
//                         HMS Admin
//                      </h1>

//                      <p className="text-cyan-300 text-sm">
//                         Hospital Management
//                      </p>
//                   </div>
//                </div>
//             </div>

//             {/* Navigation */}
//             <nav className="flex flex-col gap-3 p-5">
//                <Link
//                   to="/admin"
//                   className="
//                      flex
//                      items-center
//                      gap-3
//                      p-4
//                      rounded-2xl
//                      text-white
//                      hover:bg-cyan-500/20
//                      transition-all
//                      duration-300
//                   "
//                >
//                   <FaTachometerAlt className="text-cyan-400" />
//                   Dashboard
//                </Link>

//                <Link
//                   to="/admin/create-user"
//                   className="
//                      flex
//                      items-center
//                      gap-3
//                      p-4
//                      rounded-2xl
//                      text-white
//                      hover:bg-cyan-500/20
//                      transition-all
//                      duration-300
//                   "
//                >
//                   <FaUserPlus className="text-cyan-400" />
//                   Create User
//                </Link>

//                <Link
//                   to="/admin/users"
//                   className="
//                      flex
//                      items-center
//                      gap-3
//                      p-4
//                      rounded-2xl
//                      text-white
//                      hover:bg-cyan-500/20
//                      transition-all
//                      duration-300
//                   "
//                >
//                   <FaUsers className="text-cyan-400" />
//                   Users List
//                </Link>
//             </nav>

//             {/* Logout Button */}
//             <div className="mt-auto p-5">
//                <button
//                   onClick={logout}
//                   className="
//                      w-full
//                      flex
//                      items-center
//                      justify-center
//                      gap-3
//                      py-4
//                      rounded-2xl
//                      bg-red-500/20
//                      border
//                      border-red-500/20
//                      text-red-400
//                      hover:bg-red-500
//                      hover:text-white
//                      transition-all
//                      duration-300
//                   "
//                >
//                   <FaSignOutAlt />
//                   Logout
//                </button>
//             </div>
//          </aside>

//          {/* Main Content */}
//          <main className="flex-1 relative z-10 p-6 overflow-auto">
//             <Outlet />
//          </main>
//       </div>
//    );
// };

// export default AdminLayout;

import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

const AdminLayout = () => {
   const navigate = useNavigate();
   const [sidebarOpen, setSidebarOpen] = useState(false);

   const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/login");
   };

   return (
      <div className="flex min-h-screen bg-slate-50">
         <AdminSidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            onLogout={logout}
         />

         <div className="flex min-h-screen flex-1 flex-col">
            <AdminTopbar onMenuClick={() => setSidebarOpen(true)} />

            <main className="flex-1 p-4 sm:p-6 lg:p-8">
               <div className="mx-auto w-full max-w-7xl">
                  <Outlet />
               </div>
            </main>
         </div>
      </div>
   );
};

export default AdminLayout;
