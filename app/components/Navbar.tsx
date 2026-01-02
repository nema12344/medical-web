'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  FiSearch,
  FiChevronDown,
  FiMenu,
  FiX,
  FiArrowRight,
  FiPhone,
  FiMail,
  FiFilter,
} from 'react-icons/fi';

type HomeSection = {
  id: string;
  title: string;
  description: string;
};

type FilterOption = {
  label: string;
  target: string;
  value: string;
  sectionId: string;
};

const productCategories = [
  {
    title: "Infusion Therapy",
    items: [
      "IV Infusion Set Economy",
      "IV Infusion Set Premium", 
      "IV Set Vented Premium",
      "Needle Free IV Infusion Set",
      "PVC/DEHP Free IV Administration Set",
      "Dial Flow IV Infusion Set",
      "Measured Volume Burette Set",
      "Extension Tube for Pressure Monitoring",
      "IV Cannula",
      "3 Way Stopcock",
      "Scalp Vein Set",
      "Customized IV Infusion Set"
    ]
  },
  {
    title: "Transfusion Therapy",
    items: [
      "Blood Transfusion Set"
    ]
  },
  {
    title: "Gastroenterology", 
    items: [
      "Infant Feeding Tube",
      "Ryles Tube",
      "Levin Tube",
      "Stomach Tube"
    ]
  },
  {
    title: "Urology & Nephrology",
    items: [
      "Urine Bag",
      "Urometer", 
      "Urinary Catheter",
      "Nelaton Catheter",
      "Foley Ballon Catheter",
      "Paediatric Urine Bag"
    ]
  },
  {
    title: "Anaesthesia & Respiratory",
    items: [
      "Oxygen Mask",
      "Nebulizer Mask",
      "Guedel Airways",
      "Nasal Cannula",
      "Suction Catheter",
      "Endotracheal Tubes",
      "3 Ball Spirometer",
      "Ventilator Circuit",
      "Bain Circuit",
      "Ambu Bag"
    ]
  },
  {
    title: "Other Medical Disposables",
    items: [
      "Karman Cannula",
      "Umbilical Cord Clamp",
      "Corrugated Drainage Sheet",
      "Examination Gloves",
      "Surgical Gloves",
      "Thoracic Catheter",
      "Infant Mucus Extractor",
      "Yankauer Suction Set",
      "Close Wound Suction unit"
    ]
  }
];

const filterGroups: { title: string; options: FilterOption[] }[] = [
  {
    title: 'Products & Catalog',
    options: [
      { label: 'All Products', target: 'products', value: 'all', sectionId: 'products' },
      { label: 'IV Equipment', target: 'products', value: 'IV Equipment', sectionId: 'products' },
      { label: 'Surgical Disposables', target: 'products', value: 'Surgical Disposables', sectionId: 'products' },
      { label: 'Medical Devices', target: 'products', value: 'Medical Devices', sectionId: 'products' },
      { label: 'Respiratory Care', target: 'catalog', value: 'Respiratory Care', sectionId: 'catalog' },
      { label: 'Diagnostic Equipment', target: 'catalog', value: 'Diagnostic Equipment', sectionId: 'catalog' },
    ],
  },
  {
    title: 'Services',
    options: [
      { label: 'All Services', target: 'services', value: 'all', sectionId: 'services' },
      { label: 'Emergency Care', target: 'services', value: 'emergency', sectionId: 'services' },
      { label: 'Diagnostics', target: 'services', value: 'diagnostics', sectionId: 'services' },
      { label: 'Surgery', target: 'services', value: 'surgery', sectionId: 'services' },
      { label: 'Preventive', target: 'services', value: 'preventive', sectionId: 'services' },
    ],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsMegaOpen, setIsProductsMegaOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsMobileOpen, setIsProductsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setIsProductsMegaOpen(false); // Close mega menu on scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsProductsMegaOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setIsProductsMegaOpen(false);
    setIsProductsMobileOpen(false);
    setIsMenuOpen(false);

    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFilter = (option: FilterOption) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('home-section-filter', {
          detail: {
            target: option.target,
            value: option.value,
            sectionId: option.sectionId,
          },
        })
      );
    }

    navigateToSection(option.sectionId);
  };

  const renderProductsMegaMenu = () => (
    <div className="fixed left-0 right-0 top-20 w-full bg-white shadow-2xl border border-slate-100 p-5 z-40">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Column 1: Infusion Therapy (Part 1) */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{productCategories[0].title}</h3>
            <div className="space-y-2">
              {productCategories[0].items.slice(0, 7).map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 bg-slate-50 hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Column 2: Infusion Therapy (Part 2) + Transfusion */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3 opacity-0">.</h3>
            <div className="space-y-2 mb-4">
              {productCategories[0].items.slice(7).map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 bg-slate-50 hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{productCategories[1].title}</h3>
            <div className="space-y-2">
              {productCategories[1].items.map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 bg-slate-50 hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Gastroenterology + Urology */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{productCategories[2].title}</h3>
            <div className="space-y-2 mb-4">
              {productCategories[2].items.map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 bg-slate-50 hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{productCategories[3].title}</h3>
            <div className="space-y-2">
              {productCategories[3].items.slice(0, 3).map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 bg-slate-50 hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Urology (Part 2) + Anaesthesia (Part 1) */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3 opacity-0">.</h3>
            <div className="space-y-2 mb-4">
              {productCategories[3].items.slice(3).map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 bg-slate-50 hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{productCategories[4].title}</h3>
            <div className="space-y-2">
              {productCategories[4].items.slice(0, 4).map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 bg-slate-50 hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Column 5: Anaesthesia (Part 2) + Other Medical Disposables */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3 opacity-0">.</h3>
            <div className="space-y-2 mb-4">
              {productCategories[4].items.slice(4).map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 bg-slate-50 hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{productCategories[5].title}</h3>
            <div className="space-y-2">
              {productCategories[5].items.slice(0, 4).map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-700 bg-slate-50 hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
    </div>
  );

  return (
    <>
      {/* Main Navbar */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-xl backdrop-blur-sm bg-white/95' : ''
        }`}
      >
        <div className="max-w-8xl mx-auto lg:px-15 px-8">
          <div className="flex justify-between items-center h-20">
            {/* LOGO */}
            <div className="flex items-center px-4">
              <Image
                src="/logo.png"
                alt="Dispopwell Logo"
                width={110}
                height={10}
                className="object-contain"
              />
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="relative group py-2">
                <span className="text-gray-700 hover:text-red-600 transition-colors font-medium">Home</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
              </Link>

              <Link href="/about" className="relative group py-2">
                <span className="text-gray-700 hover:text-red-600 transition-colors font-medium">Company</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
              </Link>

              <div className="relative group">
                <button
                  onClick={() => setIsProductsMegaOpen((prev) => !prev)}
                  className="flex items-center space-x-2 cursor-pointer py-2 text-gray-700 hover:text-red-600 transition-colors font-medium"
                >
                  <span>Products</span>
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isProductsMegaOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
                {isProductsMegaOpen && renderProductsMegaMenu()}
              </div>

              <Link href="#" className="relative group py-2">
                <span className="text-gray-700 hover:text-red-600 transition-colors font-medium">Third Party/OEM</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
              </Link>

              <Link href="/contact" className="relative group py-2">
                <span className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
            </div>

            {/* RIGHT SIDE BUTTONS */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 transition-colors"
              >
                <FiSearch className="w-5 h-5" />
              </button>

              {/* REQUEST QUOTE BUTTON */}
              <button className="bg-gradient-to-r hidden md:inline-flex from-red-600 to-red-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                <span>Request Quote</span>
                <FiArrowRight className="w-4 h-4" />
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                className="lg:hidden p-2 rounded-lg bg-gray-100 text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-200 bg-white">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                >
                  Company
                </Link>

                <div className="rounded-xl border border-gray-200">
                  <button
                    className="w-full flex items-center justify-between px-3 py-3 text-left text-gray-800 font-semibold"
                    onClick={() => setIsProductsMobileOpen((prev) => !prev)}
                  >
                    <span>Products</span>
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform ${isProductsMobileOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isProductsMobileOpen && (
                    <div className="px-3 pb-3 space-y-2">
                      {productCategories.map((category, index) => (
                        <div key={index} className="mb-3">
                          <div className="text-sm font-semibold text-gray-800 mb-2">{category.title}</div>
                          {category.items.slice(0, 3).map((item, idx) => (
                            <button
                              key={idx}
                              className="w-full text-left px-3 py-2 rounded-lg bg-gray-50 hover:bg-red-600 hover:text-white text-sm text-gray-700 transition-colors mb-1"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                >
                  Third Party/OEM
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                >
                  Contact
                </Link>
                <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium">
                  <span>Request Quote</span>
                  <FiArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <FiPhone className="w-4 h-4" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FiMail className="w-4 h-4" />
                    <span className="text-sm">info@dispopwell.com</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Dropdown */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="max-w-5xl mx-auto px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search products, categories, or solutions..."
                    className="w-full px-6 py-4 border-2 border-red-200 rounded-xl focus:border-red-500 focus:outline-none text-lg"
                    autoFocus
                  />
                </div>
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors flex items-center gap-2">
                  <FiSearch className="w-5 h-5" />
                  Search
                </button>
                <button onClick={() => setIsSearchOpen(false)} className="text-gray-600 hover:text-red-600 transition-colors">
                  <FiX className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
