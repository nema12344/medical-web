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

      {/* Mobile Sidebar - Outside Navbar */}
      <div className={`lg:hidden fixed inset-0 bg-black/50 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} style={{ zIndex: 60 }} />
      <div className={`lg:hidden fixed top-0 left-0 w-72 h-screen bg-white shadow-xl flex flex-col transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ zIndex: 70, borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
        {/* Fixed Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white" style={{ borderTopRightRadius: '20px' }}>
          <Image src="/logo.png" alt="Logo" width={120} height={40} className="h-8 w-auto sm:h-9 md:h-10 object-contain" />
          <button onClick={() => setIsMenuOpen(false)} className="p-2 pe-0 ms-auto text-gray-600">
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto  py-2">
          <div className="space-y-2">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
              Home
            </Link>

            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
              Company
            </Link>

            <div>
              <button onClick={() => setIsProductsMobileOpen(!isProductsMobileOpen)} className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                <span>Products</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${isProductsMobileOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isProductsMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 mt-2 space-y-1">
                  {productCategories.map((category, index) => (
                    <Link key={index} href="/products" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-800 bg-gray-50 hover:bg-gray-100 rounded transition-colors">
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/third-party-oem" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
              Third Party/OEM
            </Link>

            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Fixed Footer Buttons */}
        <div className="px-4 py-3 border-t border-gray-200 bg-white flex gap-3" style={{ borderBottomRightRadius: '20px' }}>
          <button onClick={() => setIsQuoteModalOpen(true)} className="flex-1 bg-red-600 text-white px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
            Request Quote
          </button>
          <button onClick={() => setIsMenuOpen(false)} className="flex-1 bg-blue-600 text-white px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Enquire Now
          </button>
        </div>
      </div>

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-3xl p-8 pt-6 max-w-xl w-full relative">
            <button
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-7 right-8 text-gray-400 hover:text-white"
            >
              <FiX className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-2">Request Quote</h3>
            <div className="flex items-center gap-3 mb-6">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="text-white/90 text-sm">+91 9950241240</span>
            </div>

            <form className="space-y-4">
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                />
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
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                  />
                  {showCityDropdown && filteredCities.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-slate-600 border border-slate-500 rounded-lg mt-1 max-h-40 overflow-y-auto z-10">
                      {filteredCities.slice(0, 5).map((city) => (
                        <button
                          key={city}
                          type="button"
                          onClick={() => {
                            setSelectedCity(city);
                            setCitySearch('');
                            setShowCityDropdown(false);
                          }}
                          className="w-full text-left px-4 py-2 text-white hover:bg-slate-500 transition-colors"
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
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                  />
                  {showStateDropdown && filteredStates.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-slate-600 border border-slate-500 rounded-lg mt-1 max-h-40 overflow-y-auto z-10">
                      {filteredStates.slice(0, 5).map((state) => (
                        <button
                          key={state}
                          type="button"
                          onClick={() => {
                            setSelectedState(state);
                            setStateSearch('');
                            setShowStateDropdown(false);
                          }}
                          className="w-full text-left px-4 py-2 text-white hover:bg-slate-500 transition-colors"
                        >
                          {state}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Product Requirements"
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
