'use client';
import { useState } from 'react';
import { FiSearch, FiDownload, FiChevronDown, FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">LOGO</div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-green-500">
              <span>Home</span>
              <FiChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-green-500">
              <span>Company</span>
              <FiChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-green-500">
              <span>Products</span>
              <FiChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="hover:text-green-500">Third Party/OEM</a>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-green-500">
              <span>Services</span>
              <FiChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="hover:text-green-500">Contact Us</a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-3">
              <FiSearch className="w-5 h-5 text-[#1e293b] cursor-pointer hover:text-green-500" />
              <FiDownload className="w-5 h-5 text-[#1e293b] cursor-pointer hover:text-green-500" />
            </div>
            
            <button className="bg-gradient-to-r from-[#13C56B] to-[#0FAE52] text-white px-6 py-2 rounded-md flex items-center space-x-2 hover:shadow-lg transition-shadow">
              <span>Request A Quote</span>
              <FiArrowRight className="w-4 h-4" />
            </button>

            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-1">
                <span>Home</span>
                <FiChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1">
                <span>Company</span>
                <FiChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1">
                <span>Products</span>
                <FiChevronDown className="w-4 h-4" />
              </div>
              <a href="#">Third Party/OEM</a>
              <div className="flex items-center space-x-1">
                <span>Services</span>
                <FiChevronDown className="w-4 h-4" />
              </div>
              <a href="#">Contact Us</a>
              <div className="flex items-center space-x-4 pt-4 border-t">
                <FiSearch className="w-5 h-5" />
                <FiDownload className="w-5 h-5" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}