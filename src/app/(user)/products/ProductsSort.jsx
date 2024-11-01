
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const sortOptions = [
  {
    id: 1,
    value: "latest",
    label: "جدید ترین",
  },
  {
    id: 2,
    value: "earliest",
    label: "قدیمی ترین",
  },
  {
    id: 3,
    value: "popular",
    label: "محبوب ترین",
  },
];

function ProductsSort() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sort, setSort] = useState("");

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const sortHandler = (value) => {
    setSort(value);
    router.push(pathname + "?" + createQueryString("sort", value));
  };

  useEffect(() => {
    setSort(searchParams.get("sort") || "");
  }, [searchParams]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg ml-8">
      <p className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">مرتب سازی</p>
      <div className="flex flex-wrap gap-4">
        {sortOptions.map((item) => (
          <button
            key={item.id}
            value={item.value}
            onClick={() => sortHandler(item.value)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              sort === item.value
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductsSort;
