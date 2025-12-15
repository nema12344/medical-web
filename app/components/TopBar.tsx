'use client';
import { FiPhone, FiMail, FiClock, FiChevronDown } from 'react-icons/fi';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div style={{backgroundColor: '#1A1A1A'}} className="text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

        {/* LEFT SIDE */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FiPhone className="w-4 h-4" style={{color: '#D0252C'}} />
            <span>+1 234 567 8900</span>
          </div>

          <div className="flex items-center space-x-2">
            <FiMail className="w-4 h-4" style={{color: '#D0252C'}} />
            <span>info@company.com</span>
          </div>

          <div className="flex items-center space-x-2">
            <FiClock className="w-4 h-4" style={{color: '#D0252C'}} />
            <span>Mon–Fri 9:00–18:00</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-6">

          {/* SOCIAL ICONS */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{backgroundColor: '#D0252C'}}>
              <FaFacebookF className="w-4 h-4 text-white" />
            </div>
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{backgroundColor: '#D0252C'}}>
              <FiMail className="w-4 h-4 text-white" />
            </div>
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{backgroundColor: '#D0252C'}}>
              <FaYoutube className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* TOP LINKS */}
          <div className="flex items-center space-x-4 text-white">
            <a href="#" className="hover:opacity-80">Become Distributor</a>
            <a href="#" className="hover:opacity-80">Careers</a>
            <a href="#" className="hover:opacity-80">FAQs</a>
          </div>

          {/* LANGUAGE DROPDOWN */}
          {/* <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-lg">🇺🇸</span>
            <span>EN</span>
            <FiChevronDown className="w-4 h-4 text-white" />
          </div> */}
        </div>

      </div>
    </div>
  );
}
