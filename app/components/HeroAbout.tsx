'use client';
import React from 'react';

const HeroAbout: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col bg-[#D0252C]">
      {/* Left Side - Green Gradient */}
        <div className="flex-1 bg-gradient-to-br from-[#D0252C] to-[#D0252C] p-12 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Advanced Medical Solutions for Healthcare Excellence
          </h1>
          
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Leading the industry with innovative surgical instruments and medical devices designed for optimal patient outcomes.
          </p>
          
          {/* Feature Checklist */}
          <div className="space-y-4 mb-10">
            {[
              'ISO 13485-2016 Certified Quality',
              'WHO-GMP Compliant Manufacturing',
              'CE Marking for European Compliance',
              '24/7 Technical Support & Training'
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg className="w-6 h-6 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Our Products
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - White Card */}
       <div className="flex-1 p-12 flex items-center justify-center">
        <div className="bg-white rounded-3xl p-10 max-w-xl w-full shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About Our Medical Excellence
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              With over two decades of experience in the medical device industry, we have established ourselves as a trusted partner for healthcare institutions worldwide. Our commitment to innovation and quality has made us a leading manufacturer and supplier of premium medical equipment.
            </p>
            
            <p>
              Our state-of-the-art manufacturing facilities are equipped with the latest technology and operated by highly skilled professionals who understand the critical nature of medical device production. Every product undergoes rigorous quality control processes to ensure it meets the highest international standards.
            </p>
            
          </div>
          
          <button className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold mt-8 hover:bg-gray-800 transition-colors">
            Learn More About Us
          </button>
        </div>
      </div>

    </section>
  );
};

export default HeroAbout;