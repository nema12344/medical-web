'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, Grid, List, ChevronDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'IV Infusion Set Premium',
    category: 'IV Equipment',
    price: '$25.99',
    image: '/images/Iv-Infusion-set-Premium.png',
    description: 'High-quality sterile IV infusion set for medical procedures',
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: 'Surgical Disposables Kit',
    category: 'Surgical Items',
    price: '$45.50',
    image: '/images/DISPOSABLE-SURGICAL-ITEMS.png',
    description: 'Complete surgical disposables for safe medical procedures',
    inStock: true,
    featured: false
  },
  {
    id: 3,
    name: 'Medical Syringes Set',
    category: 'Injection Equipment',
    price: '$18.75',
    image: '/images/coronavirus-arrangement-with-vaccine-bottle-syringe.jpg',
    description: 'Sterile disposable syringes for various medical applications',
    inStock: false,
    featured: true
  },
  {
    id: 4,
    name: 'Blood Collection System',
    category: 'Diagnostic Equipment',
    price: '$32.00',
    image: '/images/coronavirus-arrangement-with-blood-samples-vaccine.jpg',
    description: 'Safe blood collection systems for diagnostic procedures',
    inStock: true,
    featured: false
  }
];

const categories = ['All', 'IV Equipment', 'Surgical Items', 'Injection Equipment', 'Diagnostic Equipment'];

export default function ProductListingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 h-[50vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Medical Products</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Professional-grade medical equipment and supplies for healthcare excellence</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Controls */}
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>

            <div className="flex items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.featured && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-900">
                    {product.price}
                  </span>
                  
                  <Link href={`/products/${product.id}`}>
                    <button
                      disabled={!product.inStock}
                      className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                        product.inStock
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? 'View Details' : 'Out of Stock'}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}