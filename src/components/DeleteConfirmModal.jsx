import { FaTrash, FaTimes } from "react-icons/fa";

const DeleteConfirmModal = ({
   open,
   onClose,
   onConfirm,
   title = "Delete User?",
   description = "Are you sure you want to delete this record? This action cannot be undone.",
}) => {
   if (!open) return null;

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
         {/* Background Overlay */}
         <div
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"
         />

         {/* Modal */}
         <div className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl p-6 transform animate-popIn">
            {/* Close Button */}
            <button
               onClick={onClose}
               className="absolute top-3 right-3 text-slate-400 hover:text-slate-700"
            >
               <FaTimes />
            </button>

            {/* Icon */}
            <div className="flex items-center justify-center mb-4">
               <div className="h-14 w-14 rounded-full bg-red-50 flex items-center justify-center text-red-600 text-2xl">
                  <FaTrash />
               </div>
            </div>

            {/* Text */}
            <h2 className="text-center text-lg font-semibold text-slate-900">
               {title}
            </h2>

            <p className="text-center text-sm text-slate-500 mt-2">
               {description}
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
               <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50"
               >
                  Cancel
               </button>

               <button
                  onClick={onConfirm}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
               >
                  Delete
               </button>
            </div>
         </div>
      </div>
   );
};

export default DeleteConfirmModal;
