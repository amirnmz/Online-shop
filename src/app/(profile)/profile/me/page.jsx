// "use client";

// import Loading from "@/common/Loading";
// import TextField from "@/common/TextField";
// import { useGetUser } from "@/hooks/useAuth";
// import { updateProfile } from "@/services/authServices";
// import { includeObj } from "@/utils/objectUtils";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";

// function MePage() {
//   const { data, isLoading } = useGetUser();
//   const queryClient = useQueryClient();
//   const { isLoading: isUpdating, mutateAsync } = useMutation({
//     mutationFn: updateProfile,
//   });
//   const [formData, setFormData] = useState({});
//   const { user } = data || {};

//   const includeskey = ["name", "email", "phoneNumber", "biography"];
//   useEffect(() => {
//     if (user) setFormData(includeObj(user, includeskey));
//   }, [user]);

//   const sumbitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const { message } = await mutateAsync(formData);
//       queryClient.invalidateQueries({ queryKey: ["get-user"] });
//       toast.success(message);
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   };
  
//   if (isLoading) return <Loading />;

//   return (
//     <div className="max-w-sm">
//       <h1 className="text-xl font-bold mb-4">اطلاعات کاربری</h1>
//       <form onSubmit={sumbitHandler} className="space-y-5">
//         {Object.keys(includeObj(user, includeskey)).map((key) => {
//           return (
//             <TextField
//               label={key}
//               name={key}
//               key={key}
//               value={formData[key] || ""}
//               onChange={(e) =>
//                 setFormData({ ...formData, [e.target.name]: e.target.value })
//               }
//             />
//           );
//         })}
//         <div className="pt-2">
//           {isUpdating ? (
//             <Loading />
//           ) : (
//             <button type="submit" className="btn btn--primary w-full">
//               تایید
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }
// export default MePage;
"use client";

import Loading from "@/common/Loading";
import TextField from "@/common/TextField";
import { useGetUser } from "@/hooks/useAuth";
import { updateProfile } from "@/services/authServices";
import { includeObj } from "@/utils/objectUtils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function MePage() {
  const { data, isLoading } = useGetUser();
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutateAsync } = useMutation({
    mutationFn: updateProfile,
  });
  const [formData, setFormData] = useState({});
  const { user } = data || {};

  const includeskey = ["name", "email", "phoneNumber", "biography"];
  useEffect(() => {
    if (user) setFormData(includeObj(user, includeskey));
  }, [user]);

  const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync(formData);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  
  if (isLoading) return <Loading />;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8 mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">اطلاعات کاربری</h1>
      <form onSubmit={sumbitHandler} className="space-y-6">
        {Object.keys(includeObj(user, includeskey)).map((key) => {
          return (
            <TextField
              label={key}
              name={key}
              key={key}
              value={formData[key] || ""}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="bg-gray-100 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary-500"
            />
          );
        })}
        <div className="pt-4">
          {isUpdating ? (
            <Loading />
          ) : (
            <button
              type="submit"
              className="btn btn--primary w-full bg-primary-600 text-white font-semibold py-3 rounded-md hover:bg-primary-700 transition-all duration-200"
            >
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default MePage;
