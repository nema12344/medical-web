'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  FiSearch,
  FiDownload,
  FiChevronDown,
  FiMenu,
  FiX,
  FiArrowRight,
} from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-borderLight shadow-sm">
      <div className="max-w-8xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="TNX Surgical Logo" 
              width={140}
              height={50}
              className="object-contain"
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-8">

            <div className="flex items-center space-x-1 cursor-pointer text-textPrimary hover:text-accent transition">
              <span>Home</span>
              <FiChevronDown className="w-4 h-4" />
            </div>

            <div className="flex items-center space-x-1 cursor-pointer text-textPrimary hover:text-accent transition">
              <span>Company</span>
              <FiChevronDown className="w-4 h-4" />
            </div>

            <div className="flex items-center space-x-1 cursor-pointer text-textPrimary hover:text-accent transition">
              <span>Products</span>
              <FiChevronDown className="w-4 h-4" />
            </div>

            <a className="text-textPrimary hover:text-accent transition" href="#">
              Third Party/OEM
            </a>

            <div className="flex items-center space-x-1 cursor-pointer text-textPrimary hover:text-accent transition">
              <span>Services</span>
              <FiChevronDown className="w-4 h-4" />
            </div>

            <a className="text-textPrimary hover:text-accent transition" href="#">
              Contact Us
            </a>
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center space-x-4">

            {/* Search & Download Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              <FiSearch className="w-5 h-5 text-textPrimary cursor-pointer hover:text-accent transition" />
              <FiDownload className="w-5 h-5 text-textPrimary cursor-pointer hover:text-accent transition" />
            </div>

            {/* REQUEST QUOTE BUTTON */}
            <button className="bg-gradient-to-r from-accent-light to-accent text-white px-6 py-3 rounded-md flex items-center space-x-2 hover:shadow-redGlow transition-shadow">
              <span>Request A Quote</span>
              <FiArrowRight className="w-4 h-4" />
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden text-textPrimary"
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
          <div className="lg:hidden py-4 border-t border-borderLight">
            <div className="flex flex-col space-y-4 text-textPrimary">

              <div className="flex items-center space-x-1 hover:text-accent transition">
                <span>Home</span>
                <FiChevronDown className="w-4 h-4" />
              </div>

              <div className="flex items-center space-x-1 hover:text-accent transition">
                <span>Company</span>
                <FiChevronDown className="w-4 h-4" />
              </div>

              <div className="flex items-center space-x-1 hover:text-accent transition">
                <span>Products</span>
                <FiChevronDown className="w-4 h-4" />
              </div>

              <a className="hover:text-accent transition" href="#">
                Third Party/OEM
              </a>

              <div className="flex items-center space-x-1 hover:text-accent transition">
                <span>Services</span>
                <FiChevronDown className="w-4 h-4" />
              </div>

              <a className="hover:text-accent transition" href="#">
                Contact Us
              </a>

              <div className="flex items-center space-x-4 pt-4 border-t border-borderLight">
                <FiSearch className="w-5 h-5 text-textPrimary" />
                <FiDownload className="w-5 h-5 text-textPrimary" />
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
