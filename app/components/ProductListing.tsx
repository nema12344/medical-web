'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './ProductListing.module.css';

const ProductListing: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Digital Stethoscope',
      description: 'Manfacturer and Supplier of all types of Best Quality Sterile Needle Free IV Set/Infusion Set at an affordable cost.',
      image: '/api/placeholder/280/200',
      category: 'Diagnostic Equipment'
    },
    {
      id: 2,
      name: 'Blood Pressure Monitor',
      description: 'Manfacturer and Supplier of all types of Best Quality Sterile Needle Free IV Set/Infusion Set at an affordable cost.',
      image: '/api/placeholder/280/200',
      category: 'Monitoring Devices'
    },
    {
      id: 3,
      name: 'Pulse Oximeter',
      description: 'Manfacturer and Supplier of all types of Best Quality Sterile Needle Free IV Set/Infusion Set at an affordable cost.',
      image: '/api/placeholder/280/200',
      category: 'Vital Signs'
    },
    {
      id: 4,
      name: 'Thermometer',
      description: 'Manfacturer and Supplier of all types of Best Quality Sterile Needle Free IV Set/Infusion Set at an affordable cost.',
      image: '/api/placeholder/280/200',
      category: 'Temperature Monitoring'
    },
    {
      id: 5,
      name: 'ECG Machine',
      description: 'Manfacturer and Supplier of all types of Best Quality Sterile Needle Free IV Set/Infusion Set at an affordable cost.',
      image: '/api/placeholder/280/200',
      category: 'Cardiac Monitoring'
    },
    {
      id: 6,
      name: 'Nebulizer',
      description: 'Manfacturer and Supplier of all types of Best Quality Sterile Needle Free IV Set/Infusion Set at an affordable cost.',
      image: '/api/placeholder/280/200',
      category: 'Respiratory Care'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{backgroundColor: 'rgba(208, 37, 44, 0.1)', color: '#D0252C'}}>
            Featured Products
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{color: '#1A1A1A'}}>Medical Equipment</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Professional-grade medical devices for healthcare providers</p>
        </div>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
            type: 'bullets',
            dynamicBullets: false,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            }
          }}
          autoplay={{ 
            delay: 3000,
            disableOnInteraction: false
          }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className={`pb-12 ${styles.productSlider}`}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative overflow-hidden rounded-t-2xl bg-gray-100">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium" style={{color: '#D0252C', backgroundColor: 'rgba(208, 37, 44, 0.1)'}}>
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 transition-colors text-black">
                    {product.name}
                  </h3>
                  
                  <div className="">
                    <span className="text-lg font-bold text-gray-600">{product.description}</span>
                    <button className="bg-white border border-gray-300 rounded-lg h-12 w-80 px-6 flex items-center justify-between text-slate-900 group-hover:bg-[#D0252C] group-hover:text-white transition-all duration-300">
                      <span>View Details</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductListing;