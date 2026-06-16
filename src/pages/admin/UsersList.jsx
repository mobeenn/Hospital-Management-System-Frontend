// import { useEffect, useState } from "react";
// import api from "../../api/axios";

// import {
//    FaUserMd,
//    FaUserNurse,
//    FaPills,
//    FaTrash,
//    FaUsers,
// } from "react-icons/fa";

// const UsersList = () => {
//    const [users, setUsers] = useState([]);

//    const fetchUsers = async () => {
//       try {
//          const res = await api.get("/users");
//          setUsers(res.data.users);
//       } catch (error) {
//          console.log(error);
//       }
//    };

//    const deleteUser = async (id) => {
//       if (!window.confirm("Delete user?")) return;

//       try {
//          await api.delete(`/users/${id}`);
//          fetchUsers();
//       } catch (error) {
//          console.log(error);
//       }
//    };

//    useEffect(() => {
//       fetchUsers();
//    }, []);

//    return (
//       <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-cyan-950 p-6 md:p-8 relative overflow-hidden">
//          {/* Background Glow */}
//          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

//          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

//          <div className="relative z-10">
//             {/* Main Card */}
//             <div
//                className="
//                   bg-white/10
//                   backdrop-blur-xl
//                   border border-white/10
//                   rounded-3xl
//                   shadow-2xl
//                   p-6
//                "
//             >
//                {/* Header */}
//                <div className="flex items-center gap-4 mb-8">
//                   <div
//                      className="
//                         w-16
//                         h-16
//                         rounded-2xl
//                         bg-linear-to-r
//                         from-cyan-500
//                         via-blue-500
//                         to-cyan-500
//                         flex
//                         items-center
//                         justify-center
//                         text-white
//                         text-2xl
//                         shadow-xl
//                      "
//                   >
//                      <FaUsers />
//                   </div>

//                   <div>
//                      <h2 className="text-3xl font-bold text-white">
//                         Medical Staff Directory
//                      </h2>

//                      <p className="text-cyan-300">
//                         Manage Doctors, Receptionists & Pharmacists
//                      </p>
//                   </div>
//                </div>

//                {/* Table */}
//                <div className="overflow-x-auto">
//                   <table className="w-full text-white">
//                      <thead>
//                         <tr className="border-b border-cyan-500/20">
//                            <th className="p-4 text-left text-cyan-300">
//                               Staff
//                            </th>

//                            <th className="p-4 text-left text-cyan-300">
//                               Email
//                            </th>

//                            <th className="p-4 text-left text-cyan-300">Role</th>

//                            <th className="p-4 text-left text-cyan-300">Room</th>

//                            <th className="p-4 text-center text-cyan-300">
//                               Action
//                            </th>
//                         </tr>
//                      </thead>

//                      <tbody>
//                         {users.map((user) => (
//                            <tr
//                               key={user._id}
//                               className="
//                                  border-b
//                                  border-white/10
//                                  hover:bg-white/5
//                                  transition-all
//                                  duration-300
//                               "
//                            >
//                               {/* Staff Name */}
//                               <td className="p-4">
//                                  <div className="flex items-center gap-3">
//                                     <div
//                                        className="
//                                           w-10
//                                           h-10
//                                           rounded-full
//                                           bg-cyan-500/10
//                                           flex
//                                           items-center
//                                           justify-center
//                                        "
//                                     >
//                                        {user.role === "doctor" && (
//                                           <FaUserMd className="text-cyan-400" />
//                                        )}

//                                        {user.role === "receptionist" && (
//                                           <FaUserNurse className="text-purple-400" />
//                                        )}

//                                        {user.role === "pharmacist" && (
//                                           <FaPills className="text-orange-400" />
//                                        )}
//                                     </div>

//                                     <span className="font-semibold">
//                                        {user.name}
//                                     </span>
//                                  </div>
//                               </td>

//                               {/* Email */}
//                               <td className="p-4 text-slate-300">
//                                  {user.email}
//                               </td>

//                               {/* Role */}
//                               <td className="p-4">
//                                  <span
//                                     className={`
//                                        px-4 py-2 rounded-full text-sm font-semibold

//                                        ${
//                                           user.role === "doctor"
//                                              ? "bg-cyan-500/20 text-cyan-300"
//                                              : ""
//                                        }

//                                        ${
//                                           user.role === "receptionist"
//                                              ? "bg-purple-500/20 text-purple-300"
//                                              : ""
//                                        }

//                                        ${
//                                           user.role === "pharmacist"
//                                              ? "bg-orange-500/20 text-orange-300"
//                                              : ""
//                                        }
//                                     `}
//                                  >
//                                     {user.role}
//                                  </span>
//                               </td>

//                               {/* Room */}
//                               <td className="p-4">
//                                  <span className="text-green-300 font-medium">
//                                     {user.roomNo || "N/A"}
//                                  </span>
//                               </td>

//                               {/* Action */}
//                               <td className="p-4 text-center">
//                                  <button
//                                     onClick={() => deleteUser(user._id)}
//                                     className="
//                                        inline-flex
//                                        items-center
//                                        gap-2
//                                        px-4
//                                        py-2
//                                        rounded-xl
//                                        bg-red-500/20
//                                        text-red-400
//                                        border
//                                        border-red-500/20
//                                        hover:bg-red-500
//                                        hover:text-white
//                                        transition-all
//                                        duration-300
//                                     "
//                                  >
//                                     <FaTrash />
//                                     Delete
//                                  </button>
//                               </td>
//                            </tr>
//                         ))}
//                      </tbody>
//                   </table>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default UsersList;

import { useEffect, useState } from "react";
import api from "../../api/axios";

import {
   FaUserMd,
   FaUserNurse,
   FaPills,
   FaUsers,
   FaTrash,
} from "react-icons/fa";

import PageHeader from "../../components/PageHeader";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import DeleteConfirmModal from "../../components/DeleteConfirmModal";

const UsersList = () => {
   const [users, setUsers] = useState(null);
   const [deleteId, setDeleteId] = useState(null);

   const fetchUsers = async () => {
      try {
         const res = await api.get("/users");
         setUsers(res.data.users);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchUsers();
   }, []);

   const roleIcon = {
      doctor: <FaUserMd className="text-cyan-500" />,
      receptionist: <FaUserNurse className="text-purple-500" />,
      pharmacist: <FaPills className="text-orange-500" />,
   };

   const roleBadge = {
      doctor: "bg-cyan-50 text-cyan-700",
      receptionist: "bg-purple-50 text-purple-700",
      pharmacist: "bg-orange-50 text-orange-700",
   };

   if (!users) {
      return (
         <div>
            <PageHeader
               title="Users Management"
               description="Manage doctors, receptionists & pharmacists"
               breadcrumbs={[{ label: "Admin" }, { label: "Users" }]}
            />
            <LoadingSkeleton variant="table" />
         </div>
      );
   }

   return (
      <div>
         {/* HEADER */}
         <PageHeader
            title="Users Management"
            description="Manage doctors, receptionists & pharmacists"
            breadcrumbs={[{ label: "Admin" }, { label: "Users" }]}
         />

         {/* TABLE CARD */}
         <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <FaUsers />
               </div>

               <div>
                  <h2 className="text-base font-semibold text-slate-900">
                     Medical Staff Directory
                  </h2>
                  <p className="text-xs text-slate-400">
                     Doctors, Receptionists & Pharmacists
                  </p>
               </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
               <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-500">
                     <tr>
                        <th className="p-4 text-left">Staff</th>
                        <th className="p-4 text-left">Email</th>
                        <th className="p-4 text-left">Role</th>
                        <th className="p-4 text-left">Room</th>
                        <th className="p-4 text-center">Action</th>
                     </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                     {users.map((user) => (
                        <tr
                           key={user._id}
                           className="hover:bg-slate-50 transition"
                        >
                           {/* STAFF */}
                           <td className="p-4">
                              <div className="flex items-center gap-3">
                                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-lg">
                                    {roleIcon[user.role]}
                                 </div>

                                 <span className="font-medium text-slate-800">
                                    {user.name}
                                 </span>
                              </div>
                           </td>

                           {/* EMAIL */}
                           <td className="p-4 text-slate-500">{user.email}</td>

                           {/* ROLE */}
                           <td className="p-4">
                              <span
                                 className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                                    roleBadge[user.role]
                                 }`}
                              >
                                 {user.role}
                              </span>
                           </td>

                           {/* ROOM */}
                           <td className="p-4 text-slate-600">
                              {user.roomNo || "N/A"}
                           </td>

                           {/* ACTION */}
                           <td className="p-4 text-center">
                              <button
                                 onClick={() => setDeleteId(user._id)}
                                 className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition"
                              >
                                 <FaTrash />
                                 Delete
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>

         {/* DELETE MODAL (IMPORTANT: OUTSIDE TABLE) */}
         <DeleteConfirmModal
            open={!!deleteId}
            onClose={() => setDeleteId(null)}
            onConfirm={async () => {
               try {
                  await api.delete(`/users/${deleteId}`);
                  setDeleteId(null);
                  fetchUsers();
               } catch (error) {
                  console.log(error);
               }
            }}
         />
      </div>
   );
};

export default UsersList;
