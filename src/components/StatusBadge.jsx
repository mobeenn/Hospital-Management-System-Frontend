const statusStyles = {
   completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
   checked: "bg-blue-50 text-blue-700 ring-blue-600/20",
   pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
   default: "bg-slate-50 text-slate-700 ring-slate-600/20",
};

const StatusBadge = ({ status }) => {
   const key = String(status || "").toLowerCase();
   const style = statusStyles[key] || statusStyles.default;

   return (
      <span
         className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${style}`}
      >
         <span className="h-1.5 w-1.5 rounded-full bg-current" />
         {status}
      </span>
   );
};

export default StatusBadge;
