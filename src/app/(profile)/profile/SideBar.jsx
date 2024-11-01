// "use client";

// import { logout } from "@/services/authServices";
// import Link from "next/link";

// function SideBar() {
//   const logoutHandler = async () => {
//     await logout();
//     // localStorage.removeItem("userInfo");
//     // localStorage.removeItem("cartItems");
//     // localStorage.removeItem("token");
//     document.location.href = "/";
//   };

//   return (
//     <div>
//       <ul className="flex flex-col space-y-8">
//         <li>
//           <Link href="/">صفحه اصلی</Link>
//         </li>
//         <li>
//           <Link href="/profile">داشبورد</Link>
//         </li>
//         <li>
//           <Link href="/profile/me">اطلاعات کاربری</Link>
//         </li>
//         <li>
//           <Link href="/profile/payments">سفارشات </Link>
//         </li>
//         <li>
//           <button onClick={logoutHandler}>خروج از حساب کاربری</button>
//         </li>
//       </ul>
//     </div>
//   );
// }
// export default SideBar;
"use client";

import { logout } from "@/services/authServices";
import Link from "next/link";
import { FaHome, FaUser, FaListAlt, FaSignOutAlt, FaShoppingCart } from "react-icons/fa";

function SideBar() {
  const logoutHandler = async () => {
    await logout();
    document.location.href = "/";
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <ul className="flex flex-col space-y-6">
        <li>
          <Link href="/" className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300">
            <FaHome className="w-5 h-5 ml-2" />
            <span>صفحه اصلی</span>
          </Link>
        </li>
        <li>
          <Link href="/profile" className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300">
            <FaUser className="w-5 h-5 ml-2" />
            <span>داشبورد</span>
          </Link>
        </li>
        <li>
          <Link href="/profile/me" className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300">
            <FaUser className="w-5 h-5 ml-2" />
            <span>اطلاعات کاربری</span>
          </Link>
        </li>
        <li>
          <Link href="/profile/payments" className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300">
            <FaListAlt className="w-5 h-5 ml-2" />
            <span>سفارشات</span>
          </Link>
        </li>
        <li>
          <button onClick={logoutHandler} className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300">
            <FaSignOutAlt className="w-5 h-5 ml-2" />
            <span>خروج از حساب کاربری</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
