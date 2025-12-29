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

const homeSections: HomeSection[] = [
  { id: 'hero', title: 'Hero', description: 'Top of the page with the primary hero story.' },
  { id: 'company', title: 'About', description: 'Company intro and credentials overview.' },
  { id: 'highlights', title: 'Highlights', description: 'Quick reasons to choose our solutions.' },
  { id: 'products', title: 'Products', description: 'Core product range overview.' },
  { id: 'services', title: 'Services', description: 'Clinical services and expertise areas.' },
  { id: 'process', title: 'Process', description: 'How we work with clients end-to-end.' },
  { id: 'partners', title: 'Partners', description: 'Why partners trust us globally.' },
  { id: 'features', title: 'Features', description: 'Innovation and value-driven features.' },
  { id: 'testimonials', title: 'Testimonials', description: 'Proof from real customer stories.' },
  { id: 'cta', title: 'Get Started', description: 'Conversion-focused call to action.' },
  { id: 'catalog', title: 'Product Gallery', description: 'Swipeable gallery of equipment.' },
  { id: 'about', title: 'About Spotlight', description: 'Deeper dive into our expertise.' },
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
  const [isHomeMegaOpen, setIsHomeMegaOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomeMobileOpen, setIsHomeMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsHomeMegaOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setIsHomeMegaOpen(false);
    setIsHomeMobileOpen(false);
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

  const renderHomeMegaMenu = () => (
    <div className="absolute left-0 top-full mt-4 w-[960px] max-w-[92vw] rounded-2xl bg-white shadow-2xl border border-slate-100 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {homeSections.map((section) => (
            <button
              key={section.id}
              onClick={() => navigateToSection(section.id)}
              className="w-full text-left p-4 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-slate-900 font-semibold">{section.title}</span>
                <FiArrowRight className="w-4 h-4 text-medical-red opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">{section.description}</p>
            </button>
          ))}
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Filters</p>
              <p className="text-sm text-slate-600">Tune what you see without reloading.</p>
            </div>
            <FiFilter className="w-5 h-5 text-medical-red" />
          </div>

          {filterGroups.map((group) => (
            <div key={group.title} className="bg-white border border-slate-200 rounded-xl p-3">
              <div className="text-sm font-semibold text-slate-900 mb-2">{group.title}</div>
              <div className="flex flex-wrap gap-2">
                {group.options.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleFilter(option)}
                    className="px-3 py-1.5 rounded-full text-sm bg-slate-100 text-slate-700 hover:bg-medical-red hover:text-white transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
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
              <div className="relative group">
                <button
                  onClick={() => setIsHomeMegaOpen((prev) => !prev)}
                  className="flex items-center space-x-2 cursor-pointer py-2 text-gray-700 hover:text-red-600 transition-colors font-medium"
                >
                  <span>Home</span>
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isHomeMegaOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
                {isHomeMegaOpen && renderHomeMegaMenu()}
              </div>

              <Link href="/about" className="relative group py-2">
                <span className="text-gray-700 hover:text-red-600 transition-colors font-medium">Company</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
              </Link>

              <Link href="/products" className="relative group py-2">
                <span className="text-gray-700 hover:text-red-600 transition-colors font-medium">Products</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
              </Link>

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
              <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 transition-colors">
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
                <div className="rounded-xl border border-gray-200">
                  <button
                    className="w-full flex items-center justify-between px-3 py-3 text-left text-gray-800 font-semibold"
                    onClick={() => setIsHomeMobileOpen((prev) => !prev)}
                  >
                    <span>Home</span>
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform ${isHomeMobileOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isHomeMobileOpen && (
                    <div className="px-3 pb-3 space-y-2">
                      {homeSections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => navigateToSection(section.id)}
                          className="w-full text-left px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm text-gray-700"
                        >
                          {section.title}
                        </button>
                      ))}
                      <div className="pt-2 border-t border-gray-200 mt-2">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Filters</p>
                        <div className="flex flex-wrap gap-2">
                          {[...filterGroups.flatMap((group) => group.options)].slice(0, 6).map((option) => (
                            <button
                              key={option.label}
                              onClick={() => handleFilter(option)}
                              className="px-3 py-1.5 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-medical-red hover:text-white transition-colors"
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                >
                  Company
                </Link>
                <Link
                  href="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-red-600 transition-colors font-medium py-2"
                >
                  Products
                </Link>
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
      </nav>
    </>
  );
}
