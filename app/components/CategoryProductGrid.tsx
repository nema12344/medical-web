'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiGrid, FiList, FiSearch, FiFilter } from 'react-icons/fi';

// Import product images
import ivInfusionSet from '/public/images/iv-infusion-set.png';
import ivInfusionPremium from '/public/images/Iv-Infusion-set-Premium.png';
import disposableSurgical from '/public/images/DISPOSABLE-SURGICAL-ITEMS.png';
import medicalEquipment from '/public/images/medical-equipment.jpg';
import surgicalItems from '/public/images/Disposable surgical-items.jpg';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price?: string;
  description: string;
}

interface CategoryProductGridProps {
  products: Product[];
  showSearch?: boolean;
  showViewToggle?: boolean;
  itemsPerPage?: number;
}

const productCategories = [
  'All Products',
  'Infusion Therapy',
  'Transfusion Therapy', 
  'Gastroenterology',
  'Urology & Nephrology',
  'Anaesthesia & Respiratory',
  'Other Medical Disposables'
];

export default function CategoryProductGrid({ 
  products, 
  showSearch = true, 
  showViewToggle = true,
  itemsPerPage = 12 
}: CategoryProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const groupedProducts = productCategories.reduce((acc, category) => {
    if (category === 'All Products') return acc;
    
    const categoryProducts = filteredProducts.filter(product => 
      product.category === category
    );
    
    if (categoryProducts.length > 0) {
      acc[category] = categoryProducts;
    }
    
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <div className="w-full">
      {/* Header Controls */}
      <div className="mb-8 space-y-4">
        {/* Search and View Toggle */}
        {(showSearch || showViewToggle) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            {showSearch && (
              <div className="relative flex-1 max-w-md">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            )}
            
            {showViewToggle && (
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-red-600' : 'text-gray-600'
                  }`}
                >
                  <FiGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm text-red-600' : 'text-gray-600'
                  }`}
                >
                  <FiList className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {productCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Display */}
      {selectedCategory === 'All Products' ? (
        // Category-wise grouped display
        <div className="space-y-12">
          {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
            <div key={category}>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm text-gray-500">{categoryProducts.length} products</span>
              </div>
              
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1'
              }`}>
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Single category display
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{selectedCategory}</h2>
            <span className="text-sm text-gray-500">{filteredProducts.length} products</span>
          </div>
          
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiFilter className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}

// Product Card Component
function ProductCard({ product, viewMode }: { product: Product; viewMode: 'grid' | 'list' }) {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
        <div className="flex gap-6">
          <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{product.description}</p>
            <div className="flex items-center justify-between">
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-out overflow-hidden hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image 
          src={product.image} 
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
        
        {/* View Details Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Link 
            href={`/products/${product.id}`}
            className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold shadow-lg transform translate-y-8 opacity-0 scale-90 group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out hover:bg-red-50 hover:text-red-600"
          >
            View Details
          </Link>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
}