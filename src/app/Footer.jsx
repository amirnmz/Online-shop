"use client";


import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
function Footer(){
    return(
        <footer className="bg-gray-800 text-white py-10  w-full  bottom-0  ">
              <div className="mx-auto px-5 lg:px-20">
                <div className="flex flex-wrap justify-between">
                  {/* Contact Information */}
                  <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                    <h3 className="text-lg font-semibold mb-4">تماس با ما</h3>
                    <p>آدرس:شیراز</p>
                    <p>تلفن: 09215863527</p>
                    <p>ایمیل: amirnematzadeh80@gmail.com</p>
                  </div>

                  {/* Quick Links */}
                  <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                    <h3 className="text-lg font-semibold mb-4">لینک‌های مفید</h3>
                    <ul>
                      <li><Link href="/about" className="hover:underline">درباره ما</Link></li>
                      <li><Link href="/contact" className="hover:underline">تماس با ما</Link></li>
                      <li><Link href="/privacy" className="hover:underline">حریم خصوصی</Link></li>
                      <li><Link href="/terms" className="hover:underline">شرایط و قوانین</Link></li>
                    </ul>
                  </div>

                  {/* Social Media */}
                  <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                    <h3 className="text-lg font-semibold mb-4">شبکه‌های اجتماعی</h3>
                    <div className="flex space-x-4">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaFacebookF className="w-6 h-6" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaTwitter className="w-6 h-6" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaInstagram className="w-6 h-6" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaLinkedinIn className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-6 mt-6 text-center">
                  <p className="text-sm">© {new Date().getFullYear() }سید امیر نعمت زاده  </p>
                </div>
              </div>
            </footer>
    )
}

export default Footer;