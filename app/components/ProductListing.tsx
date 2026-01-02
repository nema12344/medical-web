'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    category: 'Others'
    
  },
  {
    id: 5,
    name: 'Catheter Systems',
    description: 'Advanced catheter solutions for various medical interventions.',
    image: '/images/doctor-monitoring-patient-s-pulse.jpg',
    category: 'Others'
  },
  {
    id: 6,
    name: 'Oxygen Masks',
    description: 'High-quality oxygen delivery masks for respiratory support.',
    image: '/images/mid-adult-man-breathing-through-mask-hyperbaric-oxygen-therapy-clinic.jpg',
    category: 'Others'
  }
];

const productCategories = ['all', ...Array.from(new Set(productItems.map((item) => item.category)))];

const ProductListing: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const handleFilter = (event: Event) => {
      const detail = (event as CustomEvent<{ target?: string; value?: string }>).detail;
      if (!detail || detail.target !== 'catalog') return;
      if (detail.value && productCategories.includes(detail.value)) {
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
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {productCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-red-50 hover:text-red-600 border border-slate-200'
              }`}
            >
              {category === 'all' ? 'All Products' : category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: ProductItem }> = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
      <div className="relative overflow-hidden rounded-t-2xl bg-white flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
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

      <div className="p-6 flex flex-col flex-grow">
        {/* <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-red-50 text-red-600 rounded-full">
            {product.category}
          </span>
        </div> */}

        <h3 className="text-xl font-semibold mb-2 text-slate-900 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-slate-600 mb-6 flex-grow line-clamp-2">
          {product.description}
        </p>

        <Link href={`/products/${product.id}`} className="w-full px-6 py-3 hover:bg-red-600 hover:text-white border border-red-100 bg-red-100 rounded-xl font-medium transition-colors duration-300 flex items-center justify-between gap-2 group">
          View Details
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProductListing;
