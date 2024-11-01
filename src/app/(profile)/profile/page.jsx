// "use client";

// import Loading from "@/common/Loading";
// import { useGetUser } from "@/hooks/useAuth";
// import { toLocalDateString } from "@/utils/toLocalDate";
// import PaymentTable from "./payments/PaymentTable";
// import Link from "next/link";

// function Profile() {
//   const { data, isLoading } = useGetUser();
//   const { user, payments } = data || {};
//   if (isLoading) return <Loading />;
//   return (
//     <div className="py-4">
//       <h1 className="mb-4 text-xl">
//         سلام ! <span className="font-bold">{user.name}</span> خوش آمدی!
//       </h1>
//       <p>
//         <span>تاریخ پیوستن:</span>
//         <span> {toLocalDateString(user.createdAt)} </span>
//       </p>
//       <div className="border rounded-xl  mt-8">
//         <div className="p-4 flex items-center justify-between">
//           <h2 className="font-bold text-xl">آخرین سفارشات کاربر</h2>
//           <Link className="text-primary-900 font-bold" href="/profile/payments">
//             مشاهده همه سفارشات
//           </Link>
//         </div>
//         <PaymentTable
//           payments={payments
//             .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//             .slice(0, 3)}
//         />
//       </div>
//     </div>
//   );
// }
// export default Profile;
"use client";

import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import { toLocalDateString } from "@/utils/toLocalDate";
import PaymentTable from "./payments/PaymentTable";
import Link from "next/link";

function Profile() {
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {};
  if (isLoading) return <Loading />;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-lg shadow-lg animate-fadeIn">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">
        سلام، <span className="text-primary-600">{user.name}</span>! خوش آمدی.
      </h1>
      <p className="mb-6 text-gray-600">
        <span className="font-semibold">تاریخ پیوستن:</span> {toLocalDateString(user.createdAt)}
      </p>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm mt-10">
        <div className="p-5 flex items-center justify-between bg-primary-50 rounded-t-lg">
          <h2 className="font-bold text-lg text-primary-900">آخرین سفارشات شما</h2>
          <Link className="text-primary-700 hover:text-primary-900 transition-colors font-semibold" href="/profile/payments">
            مشاهده همه سفارشات
          </Link>
        </div>
        <PaymentTable
          payments={payments
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 3)}
        />
      </div>
    </div>
  );
}

export default Profile;
