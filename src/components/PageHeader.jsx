import { FaChevronRight } from "react-icons/fa";

/**
 * PageHeader
 * @param {string} title - main page title
 * @param {string} description - supporting subtitle text
 * @param {Array<{label: string, href?: string}>} breadcrumbs - breadcrumb trail
 * @param {React.ReactNode} actions - optional right-aligned actions/buttons
 */
const PageHeader = ({ title, description, breadcrumbs = [], actions }) => {
   return (
      <div className="mb-6 sm:mb-8">
         {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-2">
               <ol className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                  {breadcrumbs.map((crumb, idx) => (
                     <li key={idx} className="flex items-center gap-1.5">
                        {idx > 0 && (
                           <FaChevronRight className="h-2.5 w-2.5 text-slate-300" />
                        )}
                        <span
                           className={
                              idx === breadcrumbs.length - 1
                                 ? "text-slate-600"
                                 : "text-slate-400"
                           }
                        >
                           {crumb.label}
                        </span>
                     </li>
                  ))}
               </ol>
            </nav>
         )}
         <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
               <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {title}
               </h1>
               {description && (
                  <p className="mt-1.5 text-sm text-slate-500 sm:text-base">
                     {description}
                  </p>
               )}
            </div>
            {actions && <div className="flex-shrink-0">{actions}</div>}
         </div>
      </div>
   );
};

export default PageHeader;
