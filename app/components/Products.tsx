'use client';

import { useEffect, useMemo, useState } from 'react';
import ProductCard from './ProductCard';

type Product = {
  title: string;
  description: string;
  features: string[];
  category: string;
};

const productData: Product[] = [
    {
      title: 'IV Infusion Sets',
      description: 'Premium quality intravenous infusion sets designed for safe and efficient fluid delivery in clinical settings.',
      features: [
        'Sterile and pyrogen-free construction',
        'Precision flow control mechanisms',
        'Compatible with standard IV solutions',
        'Available in multiple configurations'
      ],
      category: 'IV Equipment'
    },
    {
      title: 'Surgical Disposables',
      description: 'Comprehensive range of single-use surgical instruments and accessories for various medical procedures.',
      features: [
        'WHO-GMP compliant manufacturing',
        'Latex-free materials available',
        'Individually packaged and sterilized',
        'Cost-effective healthcare solutions'
      ],
      category: 'Surgical Disposables'
    },
    {
      title: 'Medical Devices',
      description: 'Advanced medical equipment and diagnostic tools engineered for accuracy and reliability in healthcare environments.',
      features: [
        'ISO 13485-2016 certified quality',
        'CE marking for European compliance',
        'Comprehensive warranty coverage',
        'Technical support and training'
      ],
      category: 'Medical Devices'
    }
  ];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const handleFilter = (event: Event) => {
      const detail = (event as CustomEvent<{ target?: string; value?: string }>).detail;
      if (!detail || detail.target !== 'products') return;
      setActiveCategory(detail.value && detail.value !== 'all' ? detail.value : 'all');
    };

    window.addEventListener('home-section-filter', handleFilter as EventListener);
    return () => window.removeEventListener('home-section-filter', handleFilter as EventListener);
  }, []);

  const products = useMemo(() => {
    if (activeCategory === 'all') return productData;
    return productData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-medical-red text-sm font-bold tracking-wide mb-6">
            OUR PRODUCT RANGE
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Medical Solutions for <br /> <span className="text-medical-navy">Every Healthcare Need</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive portfolio of medical products designed to meet the highest standards of quality and safety in healthcare delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              features={product.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
