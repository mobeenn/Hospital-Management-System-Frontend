// import { Link, Outlet, useNavigate } from "react-router-dom";

// const PharmacistLayout = () => {
//    const navigate = useNavigate();

//    const logout = () => {
//       localStorage.clear();
//       navigate("/login");
//    };

//    return (
//       <div className="min-h-screen flex bg-gray-100">
//          <aside className="w-64 bg-orange-600 text-white">
//             <div className="p-6 text-2xl font-bold border-b">
//                Pharmacy Panel
//             </div>

//             <nav className="p-4 flex flex-col gap-2">
//                <Link
//                   to="/pharmacist"
//                   className="p-3 rounded hover:bg-orange-500"
//                >
//                   Dashboard
//                </Link>

//                <Link
//                   to="/pharmacist/search"
//                   className="p-3 rounded hover:bg-orange-500"
//                >
//                   Search Token
//                </Link>

//                <button onClick={logout} className="bg-red-500 mt-4 p-3 rounded">
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

// export default PharmacistLayout;

import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const PharmacistLayout = () => {
   const navigate = useNavigate();
   const [sidebarOpen, setSidebarOpen] = useState(false);

   const logout = () => {
      localStorage.clear();
      navigate("/login");
   };

   return (
      <div className="flex min-h-screen bg-slate-50">
         <Sidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            onLogout={logout}
         />

         <div className="flex min-h-screen flex-1 flex-col">
            <Topbar onMenuClick={() => setSidebarOpen(true)} />

            <main className="flex-1 p-4 sm:p-6 lg:p-8">
               <div className="mx-auto w-full max-w-7xl">
                  <Outlet />
               </div>
            </main>
         </div>
      </div>
   );
};

export default PharmacistLayout;
