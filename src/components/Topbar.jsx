import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

/**
 * Topbar
 * Sticky header shown above the page content. Provides the mobile menu
 * toggle, page title, and user/notification placeholders.
 */
const Topbar = ({ onMenuClick }) => {
   return (
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md sm:px-6 lg:px-8">
         <div className="flex items-center gap-3">
            <button
               type="button"
               onClick={onMenuClick}
               className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 lg:hidden"
               aria-label="Open navigation menu"
            >
               <FaBars className="text-lg" />
            </button>
            <div>
               <p className="text-sm font-semibold text-slate-900">
                  Pharmacy Panel
               </p>
               <p className="text-xs text-slate-400">
                  Hospital Management System
               </p>
            </div>
         </div>

         <div className="flex items-center gap-2 sm:gap-4">
            <button
               type="button"
               className="relative rounded-full p-2.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
               aria-label="Notifications"
            >
               <FaBell className="text-lg" />
               <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
            <div className="flex items-center gap-2 rounded-full border border-slate-200 px-2 py-1.5 pr-3 sm:gap-3">
               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                  <FaUserCircle className="text-lg" />
               </div>
               <div className="hidden text-left sm:block">
                  <p className="text-sm font-semibold leading-tight text-slate-900">
                     Pharmacist
                  </p>
                  <p className="text-xs leading-tight text-slate-400">
                     Staff Account
                  </p>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Topbar;
