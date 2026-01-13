'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Grid,
  List,
  Search,
  Filter,
  ChevronRight,
  Headset,
  Clock,
  ShieldCheck,
  Package,
  Activity,
  Droplet,
  Users,
  Wind
} from 'lucide-react';

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

const categories = [
  { name: 'All Products', icon: Package },
  { name: 'Infusion Therapy', icon: Droplet },
  { name: 'Transfusion Therapy', icon: Activity },
  { name: 'Gastroenterology', icon: Activity },
  { name: 'Urology & Nephrology', icon: Users },
  { name: 'Anaesthesia & Respiratory', icon: Wind },
  { name: 'Other Medical Disposables', icon: ShieldCheck }
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
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-24 space-y-6">
        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 px-2">Navigation</h3>
          <div className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group ${selectedCategory === cat.name
                    ? 'bg-red-600 text-white shadow-lg shadow-red-100'
                    : 'text-slate-600 hover:bg-slate-50'
                  }`}
              >
                <div className="flex items-center gap-3">
                  <cat.icon className={`w-5 h-5 ${selectedCategory === cat.name ? 'text-white' : 'text-slate-400 group-hover:text-red-500'}`} />
                  <span className="font-bold text-sm tracking-tight">{cat.name}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${selectedCategory === cat.name ? 'opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Contact Widget */}
        <div className="bg-slate-900 rounded-[2rem] p-6 text-white overflow-hidden relative group">
          <div className="relative z-10">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center mb-4">
              <Headset className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base mb-2 tracking-tight">Expert Assistance</h4>
            <p className="text-slate-400 text-xs mb-4 leading-relaxed">Not sure what you need? Talk to our medical consultants.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              Get Guidance
            </Link>
          </div>
          <Activity className="absolute -bottom-4 -right-4 w-24 h-24 text-slate-800 rotate-12 group-hover:scale-110 transition-transform" />
        </div>
      </aside>

      {/* Mobile Filter Button */}
      <div className="lg:hidden w-full mb-6">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 py-4 rounded-2xl font-bold text-slate-700 shadow-sm"
        >
          <Filter className="w-5 h-5 text-red-600" />
          Browse Categories
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full space-y-8">
        {/* Controls Bar */}
        <div className="bg-white rounded-[2rem] p-4 lg:p-4 border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-red-600 transition-colors" />
            <input
              type="text"
              placeholder="Search in catalogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-500/10 outline-none text-slate-900 font-medium placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-3 p-1.5 bg-slate-50 rounded-2xl">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-red-600' : 'text-slate-400 hover:text-slate-600'
                }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-red-600' : 'text-slate-400 hover:text-slate-600'
                }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={`grid gap-6 ${viewMode === 'grid'
            ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
            : 'grid-cols-1'
          }`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} viewMode={viewMode} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-[2.5rem] border border-slate-100 p-20 text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-slate-200" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No matches found</h3>
            <p className="text-slate-500 max-w-xs mx-auto">Try broadening your search term or select another category from the sidebar.</p>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="lg:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[90]"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed bottom-0 left-0 right-0 h-[70vh] bg-white z-[100] rounded-t-[3rem] p-8 overflow-y-auto"
            >
              <div className="w-12 h-1.5 bg-slate-100 rounded-full mx-auto mb-8" />
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Select Category</h3>
              <div className="grid grid-cols-1 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => { setSelectedCategory(cat.name); setIsMobileFilterOpen(false); }}
                    className={`flex items-center gap-4 px-6 py-5 rounded-2xl transition-all ${selectedCategory === cat.name ? 'bg-red-600 text-white' : 'bg-slate-50 text-slate-700'
                      }`}
                  >
                    <cat.icon className="w-6 h-6" />
                    <span className="font-bold">{cat.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductCard({ product, viewMode }: { product: Product; viewMode: 'grid' | 'list' }) {
  if (viewMode === 'list') {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="group bg-white rounded-[2rem] border border-slate-100 p-4 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-48 aspect-square bg-slate-50 rounded-2xl overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex-1 py-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-wider">{product.category}</span>
              <Clock className="w-3 h-3 text-slate-300" />
              <span className="text-[10px] font-bold text-slate-400">Ship in 14d</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors tracking-tight">{product.name}</h3>
            <p className="text-slate-500 text-sm mb-6 max-w-xl leading-relaxed">{product.description}</p>
            <Link
              href={`/products/${product.id}`}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-black transition-all"
            >
              Product Details <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-white shadow-sm text-slate-900 rounded-full text-[10px] font-black uppercase tracking-wider">{product.category}</span>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-1 group-hover:text-red-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
            {product.description}
          </p>
        </div>

        <Link
          href={`/products/${product.id}`}
          className="w-full bg-slate-50 text-slate-900 py-4 rounded-2xl font-bold text-sm text-center group-hover:bg-red-600 group-hover:text-white transition-all duration-300"
        >
          View Technical Specs
        </Link>
      </div>
    </motion.div>
  );
}