/**
 * LoadingSkeleton
 * @param {"page" | "cards" | "table" | "card"} variant
 */
const LoadingSkeleton = ({ variant = "page" }) => {
   const shimmer =
      "animate-pulse bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100";

   if (variant === "cards") {
      return (
         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {[0, 1].map((i) => (
               <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
               >
                  <div className="flex items-start justify-between gap-4">
                     <div className="flex-1 space-y-3">
                        <div className={`h-3 w-24 rounded ${shimmer}`} />
                        <div className={`h-9 w-16 rounded ${shimmer}`} />
                        <div className={`h-2 w-20 rounded ${shimmer}`} />
                     </div>
                     <div className={`h-14 w-14 rounded-xl ${shimmer}`} />
                  </div>
               </div>
            ))}
         </div>
      );
   }

   if (variant === "table") {
      return (
         <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 p-5">
               <div className={`h-4 w-48 rounded ${shimmer}`} />
            </div>
            <div className="divide-y divide-slate-100">
               {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-4">
                     <div
                        className={`h-9 w-9 flex-shrink-0 rounded-full ${shimmer}`}
                     />
                     <div className="flex-1 space-y-2">
                        <div className={`h-3 w-1/3 rounded ${shimmer}`} />
                     </div>
                     <div className={`h-6 w-20 rounded-full ${shimmer}`} />
                  </div>
               ))}
            </div>
         </div>
      );
   }

   if (variant === "card") {
      return (
         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="space-y-4">
               <div className={`h-5 w-40 rounded ${shimmer}`} />
               <div className={`h-3 w-full rounded ${shimmer}`} />
               <div className={`h-3 w-5/6 rounded ${shimmer}`} />
               <div className={`h-24 w-full rounded-xl ${shimmer}`} />
            </div>
         </div>
      );
   }

   // "page" — full dashboard skeleton
   return (
      <div className="space-y-6">
         <div className="space-y-2">
            <div className={`h-7 w-56 rounded ${shimmer}`} />
            <div className={`h-4 w-72 rounded ${shimmer}`} />
         </div>
         <LoadingSkeleton variant="cards" />
         <LoadingSkeleton variant="table" />
      </div>
   );
};

export default LoadingSkeleton;
