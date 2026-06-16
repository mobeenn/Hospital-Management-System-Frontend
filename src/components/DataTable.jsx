import { FaInbox } from "react-icons/fa";

/**
 * DataTable
 * @param {Array<{key: string, label: string, render?: (row) => React.ReactNode, className?: string}>} columns
 * @param {Array<object>} data
 * @param {string} rowKey - field used as React key for each row
 * @param {string} emptyTitle
 * @param {string} emptyDescription
 */
const DataTable = ({
   columns,
   data = [],
   rowKey = "_id",
   emptyTitle = "Nothing to show yet",
   emptyDescription = "Records will appear here once available.",
}) => {
   if (!data.length) {
      return (
         <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
               <FaInbox className="text-xl" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-slate-700">
               {emptyTitle}
            </h3>
            <p className="mt-1 max-w-sm text-sm text-slate-500">
               {emptyDescription}
            </p>
         </div>
      );
   }

   return (
      <div className="overflow-x-auto">
         <table className="w-full min-w-[420px] text-left text-sm">
            <thead>
               <tr className="border-b border-slate-200 bg-slate-50/60">
                  {columns.map((col) => (
                     <th
                        key={col.key}
                        scope="col"
                        className={`whitespace-nowrap px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 ${
                           col.className || ""
                        }`}
                     >
                        {col.label}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
               {data.map((row) => (
                  <tr
                     key={row[rowKey]}
                     className="transition-colors duration-150 hover:bg-slate-50"
                  >
                     {columns.map((col) => (
                        <td
                           key={col.key}
                           className={`whitespace-nowrap px-5 py-4 text-slate-700 ${
                              col.className || ""
                           }`}
                        >
                           {col.render ? col.render(row) : row[col.key]}
                        </td>
                     ))}
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default DataTable;
