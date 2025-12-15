'use client';
import { FiCheckCircle, FiZap } from 'react-icons/fi';

export default function CompanyIntroSection() {
  const certifications = [
    'WHO-GMP Compliance',
    'ISO 13485-2016 Certified',
    'ISO 9001-2015 Certified',
    'MDR 2017 Approved'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE - Image with Overlay Card */}
          <div className="relative animate-fade-in-left">
            <div className="relative">
              {/* Main Featured Image */}
              <img 
                src="/company-intro.jpg" 
                alt="Medical Manufacturing Facility"
                className="w-full h-96 lg:h-[500px] object-cover rounded-xl shadow-lg"
              />
              
              {/* Red Overlay Card */}
              <div className="absolute top-6 left-6 bg-white rounded-xl shadow-xl p-6 max-w-48">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full" style={{backgroundColor: '#D0252C'}}>
                    <FiZap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold" style={{color: '#1A1A1A'}}>1000+</div>
                    <div className="text-sm text-gray-600 font-medium">Plus Distributors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Content */}
          <div className="animate-fade-in-right">
            
            {/* Highlight Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{backgroundColor: 'rgba(208, 37, 44, 0.1)', color: '#D0252C'}}>
              India's Leading Surgical Disposable Manufacturer
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{color: '#1A1A1A'}}>
              We Are Pioneers In The World Of IV Infusion Set And Surgical Products Manufacturing!
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                With over two decades of excellence in medical device manufacturing, we have established ourselves as a trusted name in the healthcare industry. Our state-of-the-art facilities and cutting-edge technology ensure the highest quality standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From IV infusion sets to comprehensive surgical disposables, we serve healthcare providers worldwide with innovative solutions that prioritize patient safety and clinical effectiveness.
              </p>
            </div>

            {/* Certifications List */}
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FiCheckCircle className="w-5 h-5 flex-shrink-0" style={{color: '#D0252C'}} />
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
}