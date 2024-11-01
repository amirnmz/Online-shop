
// "use client";
// import CheckBox from "@/common/CheckBox";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import { useCallback, useState } from "react";

// function ProductsFilter({ categories }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const [selectedCategories, setSelectedCategories] = useState(
//     searchParams.get("category")?.split(",") || []
//   );

//   const createQueryString = useCallback(
//     (name, value) => {
//       const params = new URLSearchParams(searchParams);
//       params.set(name, value);
//       return params.toString();
//     },
//     [searchParams]
//   );

//   const categoryHandler = (e) => {
//     const value = e.target.value;
//     if (selectedCategories.includes(value)) {
//       const categories = selectedCategories.filter((c) => c !== value);
//       setSelectedCategories(categories);
//       router.push(pathname + "?" + createQueryString("category", categories));
//     } else {
//       setSelectedCategories([...selectedCategories, value]);
//       router.push(
//         pathname +
//           "?" +
//           createQueryString("category", [...selectedCategories, value])
//       );
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg mb-8 ml-8">
//       <p className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">
//         دسته بندی ها
//       </p>
//       <ul className="space-y-4">
//         {categories.map((category) => {
//           return (
//             <li key={category._id} className="flex items-center ">
//               <CheckBox
//                 id={category._id}
//                 value={category.englishTitle}
//                 name="product-type"
//                 label={category.title}
//                 onChange={categoryHandler}
//                 checked={selectedCategories.includes(category.englishTitle)}
//                 className="mr-3"
//               />
              
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default ProductsFilter;
"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

function ProductsFilter({ categories }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("category")?.split(",") || []
  );

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const categoryHandler = (e) => {
    const value = e.target.value;
    if (selectedCategories.includes(value)) {
      const categories = selectedCategories.filter((c) => c !== value);
      setSelectedCategories(categories);
      router.push(pathname + "?" + createQueryString("category", categories));
    } else {
      setSelectedCategories([...selectedCategories, value]);
      router.push(
        pathname +
          "?" +
          createQueryString("category", [...selectedCategories, value])
      );
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 ml-8 ">
      <p className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">
        دسته بندی ها
      </p>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category._id}
            value={category.englishTitle}
            onClick={categoryHandler}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedCategories.includes(category.englishTitle)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductsFilter;
