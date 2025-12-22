'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import {
  FiSearch,
  FiDownload,
  FiChevronDown,
  FiMenu,
  FiX,
  FiArrowRight,
  FiPhone,
  FiMail,
} from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl backdrop-blur-sm bg-white/95' : ''}`}>
        <div className="max-w-8xl mx-auto px-12">
          <div className="flex justify-between items-center h-20">

            {/* LOGO */}
            <div className="flex items-center">
             <Image
                src="/logo.png"
                alt="Dispopwell Logo"
                width={110}
                height={10}
                className="object-contain"
              />
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="relative group py-2">
                <span className="text-gray-700 hover:text-red-600 transition-colors font-medium">Home</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
              </Link>

              <div className="relative group"
                    onMouseEnter={() => setActiveDropdown('company')}
                    onMouseLeave={() => setActiveDropdown(null)}>
               <Link href="/about" className="flex items-center space-x-1 cursor-pointer py-2">
                  <span className="text-gray-700 hover:text-red-600 transition-colors font-medium">Company</span>
                <div className="absolute  bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
                  </Link>
              </div>

              <div className="relative group"
                   onMouseEnter={() => setActiveDropdown('products')}
                   onMouseLeave={() => setActiveDropdown(null)}>
                <Link href="/products" className="flex items-center space-x-1 cursor-pointer py-2">
                  <span className="text-gray-700 hover:text-red-600 transition-colors font-medium">Products</span>
               <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
                  </Link>
              </div>

              <Link href="#" className="relative group py-2">
                <span className="text-gray-700 hover:text-red-600 transition-colors font-medium">Third Party/OEM</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
              </Link>


              <Link href="/contact" className="relative group py-2">
                <span className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
            </div>

            {/* RIGHT SIDE BUTTONS */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 transition-colors">
                <FiSearch className="w-5 h-5" />
              </button>

              {/* REQUEST QUOTE BUTTON */}
              <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                <span>Request Quote</span>
                <FiArrowRight className="w-4 h-4" />
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                className="lg:hidden p-2 rounded-lg bg-gray-100 text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-200 bg-white">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">Home</Link>
                <Link href="/about" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">Company</Link>
                <Link href="/products" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">Products</Link>
                <Link href="#" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">Third Party/OEM</Link>
                <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2">Contact</Link>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <FiPhone className="w-4 h-4" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FiMail className="w-4 h-4" />
                    <span className="text-sm">info@dispopwell.com</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
