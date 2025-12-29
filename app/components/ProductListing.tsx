'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './ProductListing.module.css';
import Image from 'next/image';

type ProductItem = {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
};

const productItems: ProductItem[] = [
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
    image: '/images/DISPOSABLE-SURGICAL-ITEMS.png',
    category: 'Surgical Items'
  },
  {
    id: 3,
    name: 'Medical Syringes',
    description: 'Sterile disposable syringes for various medical applications and treatments.',
    image: '/images/coronavirus-arrangement-with-vaccine-bottle-syringe.jpg',
    category: 'Injection Equipment'
  },
  {
    id: 4,
    name: 'Blood Collection Set',
    description: 'Safe and reliable blood collection systems for diagnostic procedures.',
    image: '/images/coronavirus-arrangement-with-blood-samples-vaccine.jpg',
    category: 'Diagnostic Equipment'
  },
  {
    id: 5,
    name: 'Catheter Systems',
    description: 'Advanced catheter solutions for various medical interventions.',
    image: '/images/doctor-monitoring-patient-s-pulse.jpg',
    category: 'Medical Devices'
  },
  {
    id: 6,
    name: 'Oxygen Masks',
    description: 'High-quality oxygen delivery masks for respiratory support.',
    image: '/images/mid-adult-man-breathing-through-mask-hyperbaric-oxygen-therapy-clinic.jpg',
    category: 'Respiratory Care'
  }
];

const productCategories = new Set(productItems.map((item) => item.category));

const ProductListing: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const handleFilter = (event: Event) => {
      const detail = (event as CustomEvent<{ target?: string; value?: string }>).detail;
      if (!detail || detail.target !== 'catalog') return;
      if (detail.value && productCategories.has(detail.value)) {
        setActiveCategory(detail.value);
        return;
      }
      setActiveCategory('all');
    };

    window.addEventListener('home-section-filter', handleFilter as EventListener);
    return () => window.removeEventListener('home-section-filter', handleFilter as EventListener);
  }, []);

  const products = useMemo(() => {
    if (activeCategory === 'all') return productItems;
    return productItems.filter((product) => product.category === activeCategory);
  }, [activeCategory]);


  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#1A1A1A' }}>Medical Equipment</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Professional-grade medical devices for healthcare providers</p>
          <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200">
            <span className="text-sm text-slate-500">Active filter:</span>
            <span className="text-sm font-semibold text-slate-800">
              {activeCategory === 'all' ? 'All categories' : activeCategory}
            </span>
          </div>
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
            <SwiperSlide key={product.id} className="flex">
              <ProductSlide product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const ProductSlide: React.FC<{ product: ProductItem }> = ({ product }) => {
  const { isActive } = useSwiperSlide();
  const inactiveButton =
    'bg-[#fff7f7] border border-[#f0dede] text-slate-900 shadow-[0_1px_0_rgba(0,0,0,0.03)]';
  const activeButton =
    'bg-[#D0252C] border border-transparent text-white shadow-[0_10px_30px_-10px_rgba(208,37,44,0.45)]';

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group h-full flex flex-col w-full h-[560px] min-h-[560px] max-h-[560px] md:h-[600px] md:min-h-[600px] md:max-h-[600px] lg:h-[620px] lg:min-h-[620px] lg:max-h-[620px]">
      <div className="relative overflow-hidden rounded-t-2xl bg-white flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={500}
          className="w-full h-64 md:h-72 lg:h-80 object-cover object-center"
        />
        {/* Website Logo Overlay */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md">
          <Image
            src="/logo.png"
            alt="Tnx Surgical Logo"
            width={60}
            height={20}
            className="object-contain"
          />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow overflow-hidden">
        <div className="mb-3">
          <span
            className="inline-block px-3 py-1 text-xs font-medium"
            style={{ color: '#D0252C', backgroundColor: 'rgba(208, 37, 44, 0.1)' }}
          >
            {product.category}
          </span>
        </div>

        <h3 className={`text-xl font-semibold mb-2 transition-colors text-black ${styles.titleClamp}`}>
          {product.name}
        </h3>

        <div className="mb-6 flex flex-col gap-4 flex-grow overflow-hidden">
          <span className={`text-sm font-bold text-gray-600 block ${styles.descriptionClamp}`}>
            {product.description}
          </span>
          <div className="mt-auto">
            <button
              className={`rounded-lg h-12 w-full max-w-[280px] mx-auto px-6 flex items-center justify-center gap-2 transition-all duration-300 ${isActive ? activeButton : inactiveButton} hover:translate-y-[-1px]`}
            >
              <svg
                className="w-5 h-5 invisible shrink-0"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className={`${isActive ? '' : 'text-slate-800'} text-center`}>View Details</span>
              <svg
                className="w-5 h-5 transform transition-transform duration-300 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
