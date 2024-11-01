// import vazirFont from "@/constants/localFonts";
// import "../globals.css";
// import Header from "../Header";
// import { Toaster } from "react-hot-toast";
// import Providers from "../Providers";
// import Footer from "../Footer";

// export const metadata = {
//   title: "Next Shop Panel",
//   description: "Next.js Course Fronthooks Course",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="fa" dir="rtl">
//       <body
//         suppressHydrationWarning={true}
//         className={`${vazirFont.variable} font-sans`}
//       >
//         <Providers>
//           <Toaster />
//           <Header />
          
//           <div className="container xl:max-w-screen-xl">{children}</div>
//           <Footer/>
          
//         </Providers>
//       </body>
//     </html>
//   );
// }

import vazirFont from "@/constants/localFonts";
import "../globals.css";
import Header from "../Header";
import { Toaster } from "react-hot-toast";
import Providers from "../Providers";
import Footer from "../Footer";

export const metadata = {
  title: "Next Shop Panel",
  description: "Next.js Course Fronthooks Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans flex flex-col min-h-screen`}
      >
        <Providers>
          <Toaster />
          <Header />
          <main className="flex-grow container xl:max-w-screen-xl mx-auto">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
