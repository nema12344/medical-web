'use client';
import { FiPhone, FiMail, FiClock, FiChevronDown } from 'react-icons/fi';

export default function TopBar() {
  return (
    <>
     {/* Top Bar */}
         <div className="bg-slate-900 text-white py-2 hidden lg:block">
           <div className="max-w-8xl mx-auto px-8 flex justify-between items-center text-sm">
             <div className="flex items-center space-x-6">
               <div className="flex items-center space-x-2">
                 <FiPhone className="w-4 h-4" />
                 <span>+1 (555) 123-4567</span>
               </div>
               <div className="flex items-center space-x-2">
                 <FiMail className="w-4 h-4" />
                 <span>info@dispopwell.com</span>
               </div>
             </div>
             <div className="text-gray-300">
               ISO 13485-2016 Certified | WHO-GMP Compliant
             </div>
           </div>
         </div>
    </>   
  );
}
