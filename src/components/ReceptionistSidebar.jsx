import { NavLink } from "react-router-dom";
import {
   FaTachometerAlt,
   FaUserPlus,
   FaListAlt,
   FaSignOutAlt,
   FaTimes,
   FaUserCircle,
   FaHospital,
} from "react-icons/fa";

const navItems = [
   {
      to: "/receptionist",
      label: "Dashboard",
      icon: FaTachometerAlt,
      end: true,
   },
   {
      to: "/receptionist/register-patient",
      label: "Register Patient",
      icon: FaUserPlus,
      end: false,
   },
   {
      to: "/receptionist/tokens",
      label: "Token List",
      icon: FaListAlt,
      end: false,
   },
];

const ReceptionistSidebar = ({ open, onClose, onLogout }) => {
   return (
      <>
         {/* Overlay */}
         <div
            className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity lg:hidden ${
               open ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            onClick={onClose}
         />

         <aside
            className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-slate-900 text-slate-100 transition-transform lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
               open ? "translate-x-0" : "-translate-x-full"
            }`}
         >
            {/* Brand */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-800 px-6 py-5">
               <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-white shadow-lg shadow-purple-500/30">
                     <FaHospital />
                  </div>

                  <div>
                     <p className="text-base font-bold text-white">
                        Reception Panel
                     </p>
                     <p className="text-xs text-slate-400">
                        Patient Registration
                     </p>
                  </div>
               </div>

               <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
               >
                  <FaTimes />
               </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">
               <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Main
               </p>

               {navItems.map(({ to, label, icon: Icon, end }) => (
                  <NavLink
                     key={to}
                     to={to}
                     end={end}
                     onClick={onClose}
                     className={({ isActive }) =>
                        `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                           isActive
                              ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20"
                              : "text-slate-300 hover:bg-slate-800 hover:text-white"
                        }`
                     }
                  >
                     <Icon className="text-base group-hover:scale-110 transition" />
                     {label}
                  </NavLink>
               ))}
            </nav>

            {/* Footer */}
            <div className="border-t border-slate-800 px-4 py-4">
               <div className="mb-3 flex items-center gap-3 rounded-xl bg-slate-800/60 px-3 py-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-slate-300">
                     <FaUserCircle className="text-xl" />
                  </div>

                  <div>
                     <p className="text-sm font-semibold text-white">
                        Receptionist
                     </p>
                     <p className="text-xs text-slate-400">Front Desk</p>
                  </div>
               </div>

               <button
                  onClick={onLogout}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500/10 px-3 py-2.5 text-sm font-semibold text-red-400 hover:bg-red-500 hover:text-white transition"
               >
                  <FaSignOutAlt />
                  Logout
               </button>
            </div>
         </aside>
      </>
   );
};

export default ReceptionistSidebar;
