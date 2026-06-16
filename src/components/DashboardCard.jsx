const colorMap = {
   teal: {
      iconBg: "bg-teal-50",
      iconText: "text-teal-600",
      accent: "from-teal-500 to-teal-400",
   },
   blue: {
      iconBg: "bg-blue-50",
      iconText: "text-blue-600",
      accent: "from-blue-500 to-blue-400",
   },
   emerald: {
      iconBg: "bg-emerald-50",
      iconText: "text-emerald-600",
      accent: "from-emerald-500 to-emerald-400",
   },
   amber: {
      iconBg: "bg-amber-50",
      iconText: "text-amber-600",
      accent: "from-amber-500 to-amber-400",
   },
};

const DashboardCard = ({ label, value, icon, color = "teal", subtitle }) => {
   const palette = colorMap[color] || colorMap.teal;

   return (
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6">
         <div
            className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${palette.accent}`}
            aria-hidden="true"
         />
         <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
               <p className="text-sm font-medium text-slate-500">{label}</p>
               <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {value}
               </h2>
               {subtitle && (
                  <p className="mt-1 text-xs font-medium text-slate-400">
                     {subtitle}
                  </p>
               )}
            </div>
            <div
               className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${palette.iconBg} ${palette.iconText} text-xl sm:h-14 sm:w-14 sm:text-2xl`}
            >
               {icon}
            </div>
         </div>
      </div>
   );
};

export default DashboardCard;
