// import { getOneProdcutBySlug, getProducts } from "@/services/productService";
// import AddToCart from "./AddToCart";
// import {
//   toPersianNumbers,
//   toPersianNumbersWithComma,
// } from "@/utils/toPersianNumbers";
// import Image from 'next/image';
// export const dynamic = "force-static"; // SSG or {cache : "force-cache"}
// export const dynamicParams = false;

// async function page({ params }) {
//   const { slug } = params;
//   const { product } = await getOneProdcutBySlug(slug);
//   return (
//     <div>
//       <h1 className="font-bold text-2xl mb-6">{product.title}</h1>
//       <p className="mb-6">{product.description}</p>
//       <p className="mb-6">
//         قیمت محصول :{" "}
//         <span className={`${product.discount ? "line-through" : "font-bold"}`}>
//           {toPersianNumbersWithComma(product.price)}
//         </span>
//       </p>
//       {!!product.discount && (
//         <div className="flex items-center gap-x-2 mb-6">
//           <p className="text-xl font-bold">
//             قیمت با تخفیف : {toPersianNumbersWithComma(product.offPrice)}
//           </p>
//           {/* <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
//             {toPersianNumbers(product.discount)} %
//           </div> */}
//         </div>
//       )}

//       <div>
//         <div className="max-w-4xl mx-auto p-4">
//           <div className="bg- shadow-lg rounded-lg overflow-hidden">
//             <div className="flex flex-col lg:flex-row items-start lg:items-center">
//               {/* بخش تصویر محصول */}
//               <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
//                 <Image
//                   src={product.imageLink} // مسیر تصویر محصول
//                   alt={product.name}
//                   width={500} // عرض تصویر
//                   height={500} // ارتفاع تصویر
//                   className="object-cover"
//                 />
//               </div>

//               {/* بخش جزئیات محصول */}
//               <div className="w-full lg:w-1/2 lg:pl-8 p-4">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-2">
//                   {product.title}
//                 </h1>


//                 {/* اطلاعات اضافی */}
//                 <div className="mb-4">
//                   <p className="text-lg font-medium text-gray-800">
//                     امتیاز: {product.rating} از 5
//                   </p>
//                   <p className="text-gray-600 mt-2">برند: {product.brand}</p>
//                   <p
//                     className={`text-gray-600 ${product.countInStock > 0
//                       ? "text-green-600"
//                       : "text-red-600"
//                       }`}
//                   >
//                     موجودی: {product.countInStock }
//                   </p>
//                 </div>

//                 <AddToCart product={product} />
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }
// export default page;

// export async function generateStaticParams() {
//   const { products } = await getProducts();

//   return products.map((product) => ({
//     slug: product.slug,
//   }));
// }
import { getOneProdcutBySlug, getProducts } from "@/services/productService";
import AddToCart from "./AddToCart";
import {
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import Image from 'next/image';

export const dynamic = "force-static"; // SSG or {cache : "force-cache"}
export const dynamicParams = false;

async function page({ params }) {
  const { slug } = params;
  const { product } = await getOneProdcutBySlug(slug);

  return (
    <div className="max-w-screen-lg mx-auto p-6 lg:p-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">{product.title}</h1>
      
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* بخش تصویر محصول */}
        <div className="w-full lg:w-1/2">
          <Image
            src={product.imageLink} // مسیر تصویر محصول
            alt={product.title}
            width={600}
            height={600}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* بخش جزئیات محصول */}
        <div className="w-full lg:w-1/2 p-6 lg:pl-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{product.title}</h2>
          
          <p className="text-lg font-medium text-gray-700 mb-4">{product.description}</p>
          
          <div className="mb-4">
            <p className="text-lg font-bold text-gray-900 mb-2">
              قیمت محصول:{" "}
              <span className={`${product.discount ? "line-through text-gray-500" : "font-bold text-red-600"}`}>
                {toPersianNumbersWithComma(product.price)}
              </span>
            </p>
            {!!product.discount && (
              <div className="flex items-center gap-x-2 mb-4">
                <p className="text-xl font-bold text-green-600">
                  قیمت با تخفیف: {toPersianNumbersWithComma(product.offPrice)}
                </p>
                <span className="bg-red-500 text-white text-sm font-medium px-2 py-0.5 rounded-md">
                  {product.discount}%
                </span>
              </div>
            )}
          </div>

          {/* اطلاعات اضافی */}
          <div className="mb-4">
            <p className="text-lg font-medium text-gray-800">
              امتیاز: {product.rating} از 5
            </p>
            <p className="text-gray-600 mt-2">برند: {product.brand}</p>
            <p className={`text-gray-600 mt-2 ${product.countInStock > 0 ? "text-green-600" : "text-red-600"}`}>
              موجودی: {product.countInStock} عدد
            </p>
          </div>

          {/* دکمه اضافه کردن به سبد خرید */}
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}

export default page;

export async function generateStaticParams() {
  const { products } = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}
