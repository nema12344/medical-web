'use client';
import { FiPhone, FiMail, FiClock, FiChevronDown } from 'react-icons/fi';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="bg-[#243A49] text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FiPhone className="w-4 h-4" />
            <span>+1 234 567 8900</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiMail className="w-4 h-4" />
            <span>info@company.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiClock className="w-4 h-4" />
            <span>Mon-Fri 9:00-18:00</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <FaFacebookF className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <FiMail className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <FaYoutube className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-white">
            <a href="#" className="hover:text-green-400">Become Distributor</a>
            <a href="#" className="hover:text-green-400">Careers</a>
            <a href="#" className="hover:text-green-400">FAQs</a>
          </div>
          
          <div className="flex items-center space-x-1">
            <span className="text-lg">🇺🇸</span>
            <span>EN</span>
            <FiChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}