
import shopimg from "../../../public/image/shop.jpg";
import { getCategories } from "@/services/categoryService";
import { getProducts } from "@/services/productService";
import Image from "next/image";
import Link from "next/link";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import Providers from "../Providers";
import Footer from "react-multi-date-picker/plugins/range_picker_footer";

export const metadata = {
  title: "Next Shop Panel",
  description: "Next.js Course Fronthooks Course",
};

export const dynamic = "force-dynamic"; // معادل {cache :"no-store"} یا SSR در صفحات

async function Home() {
  const [{ products }, { categories }] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  return (
   
      
        <Providers>
          
          
          <div className='w-full'>
            {/* Hero Section */}
            <section className="flex flex-col lg:flex-row w-full pt-10 pb-10 px-5 lg:px-20 bg-gray-100 gap-7">
              <div className="w-full lg:w-1/2 lg:pr-10 xl:max-w-screen-xl">
                <h1 className="text-3xl font-bold leading-snug tracking-tight text-red-500 lg:text-4xl xl:text-5xl xl:leading-tight">
                  بهترین محصولات با کیفیت بالا، با قیمت‌های استثنایی
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-gray-700 lg:text-xl xl:text-2xl">
                  از محصولات جدید ما بازدید کنید و تجربه خریدی آسان و سریع را با خدمات بی‌نظیر ما تجربه کنید.
                  هدف ما این است که شما با خرید از فروشگاه ما، تجربه‌ای لذت‌بخش و بدون دغدغه داشته باشید.
                </p>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center ">
                {/* تصویر فروشگاه */}
                <Image
                  src={shopimg}
                  width={600}
                  height={617}
                  className="object-cover rounded-lg shadow-2xl"
                  alt="Hero Illustration"
                  loading="eager"
                  placeholder="blur"
                />
              </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-10 px-5 lg:px-20">
              <h2 className="text-2xl font-bold text-center mb-8">محصولات ویژه</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.slice(0, 4).map((product) => (
                  <div key={product._id} className="bg-white rounded-lg shadow-lg p-5">
                    <Image
                      src={product.imageLink}
                      width={300}
                      height={300}
                      className="object-cover rounded-lg"
                      alt={product.title}
                    />
                    <h3 className="text-lg font-bold mt-4">{product.title}</h3>
                    <p className="text-gray-600 mt-2">
                      قیمت: {toPersianNumbersWithComma(product.price)}
                    </p>
                    <Link href={`/products/${product.slug}`}>
                      <button className="btn btn--primary mt-4 w-full">مشاهده جزئیات</button>
                    </Link>
                  </div>
                ))}
              </div>
            </section>


            {/* Footer */}
           
          </div>
        </Providers>
  )
    
}

export default Home;
