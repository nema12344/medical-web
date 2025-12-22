'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './ProductListing.module.css';
import Image from 'next/image';

const ProductListing: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'IV Infusion Set Premium',
      description: 'Manufacturer and Supplier of all types of Best Quality Sterile Needle Free IV Set/Infusion Set at an affordable cost.',
      image: '/images/Iv-Infusion-set-Premium.png',
      category: 'IV Equipment'
    },
    {
      id: 2,
      name: 'Surgical Disposables',
      description: 'High-quality surgical disposable items for safe and effective medical procedures.',
      image: '/images/Iv-Infusion-set-Premium.png',
      category: 'Surgical Items'
    },
    {
      id: 3,
      name: 'Medical Syringes',
      description: 'Sterile disposable syringes for various medical applications and treatments.',
      image: '/images/Iv-Infusion-set-Premium.png',
      category: 'Injection Equipment'
    },
    {
      id: 4,
      name: 'Blood Collection Set',
      description: 'Safe and reliable blood collection systems for diagnostic procedures.',
      image: '/images/Iv-Infusion-set-Premium.png',
      category: 'Diagnostic Equipment'
    },
    {
      id: 5,
      name: 'Catheter Systems',
      description: 'Advanced catheter solutions for various medical interventions.',
      image: '/images/Iv-Infusion-set-Premium.png',
      category: 'Medical Devices'
    },
    {
      id: 6,
      name: 'Oxygen Masks',
      description: 'High-quality oxygen delivery masks for respiratory support.',
      image: '/images/Iv-Infusion-set-Premium.png',
      category: 'Respiratory Care'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
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
                <div className="relative overflow-hidden rounded-t-4xl bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={500}
                    className="w-full h-80 object-contain"
                  />
                  {/* Website Logo Overlay */}
                  <div className="absolute top-9 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md">
                    <Image
                      src="/logo.png"
                      alt="DispoPowell Logo"
                      width={60}
                      height={20}
                      className="object-contain"
                    />
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
                  
                  <div className="mb-6 flex flex-col gap-4">
                    <span className="text-sm font-bold text-gray-600 line-clamp-2">{product.description}</span>
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