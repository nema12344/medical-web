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
  FiShield,
  FiAward,
  FiDroplet,
  FiHeart,
  FiActivity,
  FiUser,
  FiWind,
  FiPackage,
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Linkedin,
  Facebook,
  PhoneCall,
  ArrowUpRight,
  Award,
  Zap,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur',
  'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara'
];

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
  'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProductsMobileOpen, setIsProductsMobileOpen] = useState(false);
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [citySearch, setCitySearch] = useState('');
  const [stateSearch, setStateSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(citySearch.toLowerCase())
  );

  const filteredStates = states.filter(state =>
    state.toLowerCase().includes(stateSearch.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Is Scrolled logic (threshold 200px)
      setIsScrolled(currentScrollY > 200);

      // Visibility logic (Hide on 10px up scroll)
      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(true);
        } else if (lastScrollY - currentScrollY > 10) {
          // Scrolling up by more than 10px
          setIsVisible(false);
        }
      } else {
        // Always visible at the top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      setIsProductsMegaOpen(false); // Close mega menu on scroll
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    <div
      className={`fixed left-0 right-0 top-20 w-full bg-white shadow-2xl border border-slate-100 p-8 z-40 transform transition-all duration-500 ease-in-out ${isProductsMegaOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}
      style={{
        backgroundImage: 'url(/images/mega-img.png)',
        backgroundSize: 'auto',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
        {/* Column 1: First 3 categories */}
        <div className="space-y-6" style={{ backdropFilter: 'blur(10px)' }}>
          <div
            className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 transition-all duration-200 cursor-pointer"
            onClick={() => {
              setIsProductsMegaOpen(false);
              window.location.href = '/products';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to bottom right, #fef2f2, #fecaca)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f8fafc';
            }}
          >
            <FiDroplet className="w-12 h-12 text-slate-900 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{productCategories[0].title}</h3>
              <p className="text-sm text-slate-600">Complete range of IV infusion products for medical procedures</p>
            </div>
          </div>

          <div
            className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 transition-all duration-200 cursor-pointer"
            onClick={() => {
              setIsProductsMegaOpen(false);
              window.location.href = '/products';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to bottom right, #fef2f2, #fecaca)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f8fafc';
            }}
          >
            <FiUser className="w-8 h-8 text-slate-900 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{productCategories[3].title}</h3>
              <p className="text-sm text-slate-600">Urological and nephrology care products</p>
            </div>
          </div>

          <div
            className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 transition-all duration-200 cursor-pointer"
            onClick={() => {
              setIsProductsMegaOpen(false);
              window.location.href = '/products';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to bottom right, #fef2f2, #fecaca)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f8fafc';
            }}
          >
            <FiActivity className="w-8 h-8 text-slate-900 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{productCategories[2].title}</h3>
              <p className="text-sm text-slate-600">Feeding tubes and gastric care products</p>
            </div>
          </div>
        </div>

        {/* Column 2: Next 3 categories */}
        <div className="space-y-6" style={{ backdropFilter: 'blur(10px)' }}>
          <div
            className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 transition-all duration-200 cursor-pointer"
            onClick={() => {
              setIsProductsMegaOpen(false);
              window.location.href = '/products';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to bottom right, #fef2f2, #fecaca)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f8fafc';
            }}
          >
            <FiHeart className="w-8 h-8 text-slate-900 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{productCategories[1].title}</h3>
              <p className="text-sm text-slate-600">Safe and reliable blood transfusion equipment</p>
            </div>
          </div>

          <div
            className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 transition-all duration-200 cursor-pointer"
            onClick={() => {
              setIsProductsMegaOpen(false);
              window.location.href = '/products';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to bottom right, #fef2f2, #fecaca)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f8fafc';
            }}
          >
            <FiWind className="w-8 h-8 text-slate-900 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{productCategories[4].title}</h3>
              <p className="text-sm text-slate-600">Respiratory and anesthesia equipment</p>
            </div>
          </div>

          <div
            className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 transition-all duration-200 cursor-pointer"
            onClick={() => {
              setIsProductsMegaOpen(false);
              window.location.href = '/products';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to bottom right, #fef2f2, #fecaca)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f8fafc';
            }}
          >
            <FiPackage className="w-8 h-8 text-slate-900 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{productCategories[5].title}</h3>
              <p className="text-sm text-slate-600">Essential medical disposable products</p>
            </div>
          </div>
        </div>

        {/* Column 3: Image */}
        <div className="flex items-center justify-center h-full">
          <div className="w-full h-full rounded-xl flex items-center justify-center" style={{ backgroundColor: '#ffe2e240', backdropFilter: 'blur(10px)' }}>
            <div className="text-center">
              <FiAward className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-red-800 mb-2">Quality Products</h3>
              <p className="text-red-600">ISO Certified Medical Devices</p>
            </div>
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
        className={`${isScrolled
          ? 'fixed top-0 shadow-xl backdrop-blur-sm bg-white/95 translate-y-0 opacity-100'
          : 'relative shadow-lg bg-white'
          } ${!isVisible && isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          } left-0 right-0 z-50 transition-all duration-500 ease-in-out`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            {/* LOGO */}
            <div className="flex items-center px-0 md:px-4">
              <Image
                src="/logo.png"
                alt="Dispopwell Logo"
                width={140}
                height={40}
                priority
                className="h-8 w-auto sm:h-9 md:h-10 object-contain"
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
                {renderProductsMegaMenu()}
              </div>

              <Link href="/third-party-oem" className="relative group py-2">
                <span className="text-gray-700 hover:text-red-600 transition-colors font-medium">Third Party/OEM</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
              </Link>

              <Link href="/contact" className="relative group py-2">
                <span className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
            </div>

            {/* RIGHT SIDE BUTTONS */}
            <div className="flex items-center space-x-3">
              {/* Search Button - Mobile */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-gray-100 active:scale-95 transition"
              >
                <FiSearch className="w-5 h-5" />
              </button>

              {/* Search Button - Desktop */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 transition-colors"
              >
                <FiSearch className="w-5 h-5" />
              </button>

              {/* REQUEST QUOTE BUTTON */}
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r hidden md:inline-flex from-red-600 to-red-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
              >
                <span>Request Quote</span>
                <FiArrowRight className="w-4 h-4" />
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                className="lg:hidden p-2.5 rounded-xl bg-gray-100 active:scale-95 transition"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <>
          </>
        </div>

        {/* Search Dropdown */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="max-w-5xl mx-auto px-8 py-4">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search products, categories, or solutions..."
                    className="w-full h-14 px-6 border-2 border-red-200 rounded-xl focus:border-red-500 focus:outline-none text-lg"
                    autoFocus
                  />
                </div>
                <button className="hidden md:flex px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors items-center gap-2">
                  <FiSearch className="w-5 h-5" />
                  Search
                </button>
                <button className="md:hidden h-14 px-4 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors flex items-center justify-center">
                  <FiSearch className="w-5 h-5" />
                </button>
                <button onClick={() => setIsSearchOpen(false)} className="text-gray-600 hover:text-red-600 transition-colors">
                  <FiX className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Premium Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60]"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 left-0 w-80 h-screen bg-white shadow-2xl flex flex-col z-[70] overflow-hidden"
              style={{ borderTopRightRadius: '32px', borderBottomRightRadius: '32px' }}
            >
              {/* Sidebar Header */}
              <div className="px-6 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="block">
                  <Image
                src="/logo.png"
                alt="Dispopwell Logo"
                width={140}
                height={40}
                priority
                className="h-8 w-auto sm:h-9 md:h-10 object-contain"
              />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-600 transition-colors"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Navigation */}
              <div className="flex-1 overflow-y-auto py-8 px-4 custom-scrollbar">
                <div className="space-y-2">
                  {[
                    { name: 'Home', href: '/', icon: FiActivity },
                    { name: 'Company', href: '/about', icon: FiShield },
                    { name: 'Third Party/OEM', href: '/third-party-oem', icon: FiAward },
                    { name: 'Contact', href: '/contact', icon: FiPhone },
                  ].map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all ${pathname === item.href ? 'bg-red-50 text-red-600 shadow-sm' : 'text-slate-600 hover:bg-slate-50'
                          }`}
                      >
                        <item.icon className={`w-5 h-5 ${pathname === item.href ? 'text-red-600' : 'text-slate-400'}`} />
                        <span className="font-bold">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Products Dropdown Section */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.35 }}
                  >
                    <button
                      onClick={() => setIsProductsMobileOpen(!isProductsMobileOpen)}
                      className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all ${isProductsMobileOpen ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <FiPackage className={`w-5 h-5 ${isProductsMobileOpen ? 'text-red-400' : 'text-slate-400'}`} />
                        <span className="font-bold">Products</span>
                      </div>
                      <FiChevronDown className={`w-4 h-4 transition-transform duration-500 ${isProductsMobileOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isProductsMobileOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <div className="pl-4 space-y-1">
                        {productCategories.map((category, index) => (
                          <Link
                            key={index}
                            href="/products"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-red-500" />
                            {category.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

               
              </div>

              {/* Fixed Bottom Action */}
              <div className="p-6 bg-slate-50 flex items-center gap-3">
                <button
                  onClick={() => { setIsMenuOpen(false); setIsQuoteModalOpen(true); }}
                  className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-slate-900/10 active:scale-95 transition"
                >
                  Request Quote
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isQuoteModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] p-10 max-w-2xl w-full relative shadow-3xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>

              <div className="mb-10 text-center">
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Partner with TNX</h3>
                <p className="text-slate-500">Fill out your requirements for an instant factory quote.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Business Phone</label>
                    <input type="tel" placeholder="+91 0000 000 000" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Corporate Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="City"
                      value={selectedCity || citySearch}
                      onChange={(e) => {
                        setCitySearch(e.target.value);
                        setSelectedCity('');
                        setShowCityDropdown(true);
                      }}
                      onFocus={() => setShowCityDropdown(true)}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    />
                    {showCityDropdown && filteredCities.length > 0 && (
                      <div className="absolute top-full left-0 right-0 bg-white border border-slate-100 rounded-xl mt-1 max-h-40 overflow-y-auto z-10 shadow-lg">
                        {filteredCities.slice(0, 5).map((city) => (
                          <button
                            key={city}
                            type="button"
                            onClick={() => {
                              setSelectedCity(city);
                              setCitySearch('');
                              setShowCityDropdown(false);
                            }}
                            className="w-full text-left px-4 py-3 text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="State"
                      value={selectedState || stateSearch}
                      onChange={(e) => {
                        setStateSearch(e.target.value);
                        setSelectedState('');
                        setShowStateDropdown(true);
                      }}
                      onFocus={() => setShowStateDropdown(true)}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                    />
                    {showStateDropdown && filteredStates.length > 0 && (
                      <div className="absolute top-full left-0 right-0 bg-white border border-slate-100 rounded-xl mt-1 max-h-40 overflow-y-auto z-10 shadow-lg">
                        {filteredStates.slice(0, 5).map((state) => (
                          <button
                            key={state}
                            type="button"
                            onClick={() => {
                              setSelectedState(state);
                              setStateSearch('');
                              setShowStateDropdown(false);
                            }}
                            className="w-full text-left px-4 py-3 text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                          >
                            {state}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Project Details</label>
                  <textarea rows={4} placeholder="Describe your branding and volume requirements..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none" />
                </div>

                <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl shadow-slate-900/10">
                  Send Project Inquiry
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
