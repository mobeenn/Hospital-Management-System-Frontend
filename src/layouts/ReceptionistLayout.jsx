// import { Link, Outlet, useNavigate } from "react-router-dom";

// const ReceptionistLayout = () => {
//    const navigate = useNavigate();

//    const logout = () => {
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");

//       navigate("/login");
//    };

//    return (
//       <div className="min-h-screen flex bg-gray-100">
//          <aside className="w-64 bg-purple-700 text-white">
//             <div className="p-6 text-2xl font-bold border-b">
//                Reception Desk
//             </div>

//             <nav className="p-4 flex flex-col gap-2">
//                <Link
//                   to="/receptionist"
//                   className="p-3 rounded hover:bg-purple-600"
//                >
//                   Dashboard
//                </Link>

//                <Link
//                   to="/receptionist/register-patient"
//                   className="p-3 rounded hover:bg-purple-600"
//                >
//                   Register Patient
//                </Link>

//                <Link
//                   to="/receptionist/tokens"
//                   className="p-3 rounded hover:bg-purple-600"
//                >
//                   Token List
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

// export default ReceptionistLayout;

import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ReceptionistSidebar from "../components/ReceptionistSidebar";
import ReceptionistTopbar from "../components/ReceptionistTopbar";

const ReceptionistLayout = () => {
   const [open, setOpen] = useState(false);
   const navigate = useNavigate();

   const logout = () => {
      localStorage.clear();
      navigate("/login");
   };

   return (
      <div className="flex min-h-screen bg-slate-50">
         <ReceptionistSidebar
            open={open}
            onClose={() => setOpen(false)}
            onLogout={logout}
         />

         <div className="flex flex-1 flex-col">
            <ReceptionistTopbar onMenuClick={() => setOpen(true)} />

            <main className="flex-1 p-4 sm:p-6 lg:p-8">
               <Outlet />
            </main>
         </div>
      </div>
   );
};

export default ReceptionistLayout;
