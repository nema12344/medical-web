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
  ChevronRight,
  Globe,
  ShieldCheck,
  Star,
  Users,
  Search
} from 'lucide-react';

const productCategories = [
  {
    title: "Infusion Therapy",
    icon: FiDroplet,
    description: "Advanced venous access solutions",
    items: ["IV Infusion Set", "Burette Set", "IV Cannula", "3 Way Stopcock"]
  },
  {
    title: "Urology & Nephrology",
    icon: FiUser,
    description: "Critical care drainage systems",
    items: ["Urine Bag", "Urometer", "Foley Catheter", "Nelaton Catheter"]
  },
  {
    title: "Respiratory Care",
    icon: FiWind,
    description: "Precision oxygen delivery",
    items: ["Oxygen Mask", "Nebulizer", "Bain Circuit", "ET Tubes"]
  },
  {
    title: "Gastroenterology",
    icon: FiActivity,
    description: "Enteral nutrition & feeding",
    items: ["Ryles Tube", "Feeding Tube", "Stomach Tube", "Levin Tube"]
  }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsMegaOpen, setIsProductsMegaOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProductsMobileOpen, setIsProductsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 100);

      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(true);
        } else if (lastScrollY - currentScrollY > 10) {
          setIsVisible(false);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
      if (currentScrollY > 100) setIsProductsMegaOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Desktop Mega Menu Component
  const renderMegaMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="absolute top-full left-0 right-0 mx-auto max-w-7xl mt-4 z-50"
      onMouseLeave={() => setIsProductsMegaOpen(false)}
    >
      <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden flex h-[500px]">
        {/* Left: Category List (1/3) */}
        <div className="w-[30%] bg-slate-50/50 p-10 border-r border-slate-100 flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Our Expertise</h3>
            {productCategories.map((cat, idx) => (
              <Link
                key={idx}
                href="/products"
                className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <cat.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{cat.title}</h4>
                  <p className="text-[10px] text-slate-400 group-hover:text-slate-500">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/products" className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-wider group mt-4">
            Browse All Catalog <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Center: Featured Content (1/3) */}
        <div className="w-[40%] p-10 flex flex-col">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Featured Innovation</h3>
          <div className="relative flex-1 rounded-3xl overflow-hidden group cursor-pointer bg-slate-900 text-white">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <img
              src="/images/DISPOSABLE-SURGICAL-ITEMS.png"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              alt="Featured"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <span className="px-2 py-0.5 bg-red-600 rounded-full text-[8px] font-black uppercase tracking-widest mb-3 inline-block">New Release</span>
              <h4 className="text-xl font-bold mb-2">Advanced Surgical Hub</h4>
              <p className="text-xs text-slate-300 line-clamp-2 mb-4 italic">"Transforming precision surgery with biocompatible disposables designed for zero-infection protocols."</p>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-tighter">
                Explore Tech Details <ChevronRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quick Links & Trust (1/3) */}
        <div className="w-[30%] p-10 bg-slate-50/50 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Industry Solutions</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: 'Hospital Procurement', icon: Globe },
                { label: 'OEM Manufacturing', icon: Zap },
                { label: 'Global Exports', icon: Award }
              ].map((item, idx) => (
                <Link key={idx} href="#" className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl hover:border-red-500/20 group transition-all">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-red-600">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />)}
              </div>
              <span className="text-[10px] font-bold text-slate-500">Trusted by 500+ Hubs</span>
            </div>
            <div className="flex items-center gap-1 text-amber-500 mb-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
            <p className="text-[10px] text-slate-400">Excellence in Precision Manufacturing</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isScrolled
          ? 'top-4 px-4 translate-y-0 opacity-100'
          : 'top-0 px-0 translate-y-0 opacity-100'
          } ${!isVisible && isScrolled ? '-translate-y-32 opacity-0' : ''}`}
      >
        <div className={`max-w-7xl mx-auto transition-all duration-500 ${isScrolled
          ? 'bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-white/20 px-8 py-3'
          : 'bg-white shadow-lg lg:rounded-b-[2rem] px-10 py-5'
          }`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={40}
                className={`transition-all duration-500 ${isScrolled ? 'h-7 w-auto' : 'h-10 w-auto'}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About Us</NavLink>

              <div
                className="relative"
                onMouseEnter={() => setIsProductsMegaOpen(true)}
              >
                <button className={`flex items-center gap-1.5 font-bold text-sm tracking-tight transition-all py-2 hover:text-red-600 ${isProductsMegaOpen ? 'text-red-600' : 'text-slate-900/80'}`}>
                  Products
                  <FiChevronDown className={`w-4 h-4 transition-transform duration-500 ${isProductsMegaOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <NavLink href="/third-party-oem">OEM Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-all"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-red-600 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300"
              >
                Get Quote <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-900"
                onClick={() => setIsMenuOpen(true)}
              >
                <FiMenu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu Shadow Overlay */}
        <AnimatePresence>
          {isProductsMegaOpen && renderMegaMenu()}
        </AnimatePresence>
      </nav>

      {/* Full Screen Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-2xl flex flex-col p-8 md:p-20"
          >
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-10 right-10 w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-all"
            >
              <FiX className="w-6 h-6" />
            </button>

            <div className="max-w-4xl mx-auto w-full pt-20">
              <div className="relative group">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-slate-300 group-focus-within:text-red-600 transition-colors" />
                <input
                  autoFocus
                  placeholder="Search for premium medical disposables..."
                  className="w-full bg-transparent border-b-2 border-slate-100 pb-6 pl-14 text-3xl md:text-5xl font-black text-slate-900 placeholder:text-slate-200 focus:border-red-600 outline-none transition-all"
                />
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Popular Searches</h4>
                  <div className="flex flex-wrap gap-3">
                    {['IV Cannula', 'Urine Bag', 'Oxygen Mask Set', 'Hemodialysis', 'Butterfly Needle'].map((tag, i) => (
                      <button key={i} className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Top Categories</h4>
                  <div className="space-y-4">
                    {productCategories.slice(0, 3).map((cat, i) => (
                      <Link key={i} href="/products" className="flex items-center justify-between group">
                        <span className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">{cat.title}</span>
                        <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-red-600 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer (existing but refined) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed bottom-0 right-0 top-0 w-full max-w-xs bg-white z-[100] shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                <Image src="/logo.png" alt="Logo" width={120} height={30} className="h-6 w-auto" />
                <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-all hover:bg-slate-100">
                  <FiX className="w-5 h-5 text-slate-900" />
                </button>
              </div>

              <div className="flex-1 p-8 overflow-y-auto space-y-2">
                <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
                <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>Company</MobileNavLink>

                <div className="py-2">
                  <button
                    onClick={() => setIsProductsMobileOpen(!isProductsMobileOpen)}
                    className="w-full flex items-center justify-between py-4 text-slate-900 font-bold text-lg"
                  >
                    <span>Products</span>
                    <FiChevronDown className={`w-5 h-5 transition-transform duration-500 ${isProductsMobileOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isProductsMobileOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50 rounded-2xl px-4"
                      >
                        {productCategories.map((cat, i) => (
                          <Link
                            key={i}
                            href="/products"
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-4 text-slate-600 font-medium border-b border-slate-200 last:border-0"
                          >
                            {cat.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <MobileNavLink href="/third-party-oem" onClick={() => setIsMenuOpen(false)}>OEM Partners</MobileNavLink>
                <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</MobileNavLink>
              </div>

              <div className="p-8 bg-slate-50 border-t border-slate-100">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="w-full bg-red-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-red-200 flex items-center justify-center gap-2"
                >
                  Send Inquiry <FiArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
            >
              <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto">
                {/* Left Side: Info */}
                <div className="lg:w-1/3 bg-slate-900 p-8 text-white flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-red-600 flex items-center justify-center mb-6">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 tracking-tight">Request a Quote</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Expert medical solutions tailored to your surgical needs worldwide.
                    </p>
                  </div>

                  <div className="space-y-6 mt-10">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <PhoneCall className="w-4 h-4 text-red-500" />
                      </div>
                      <div className="text-xs">
                        <p className="text-slate-500 uppercase font-black tracking-widest">Call Us</p>
                        <p className="font-bold">+91 95493 05655</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-red-500" />
                      </div>
                      <div className="text-xs">
                        <p className="text-slate-500 uppercase font-black tracking-widest">Global HQ</p>
                        <p className="font-bold">Jaipur, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="lg:w-2/3 p-8 bg-white">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Inquiry Form</h4>
                    <button
                      onClick={() => setIsQuoteModalOpen(false)}
                      className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-50 transition-all shadow-sm"
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                  </div>

                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Full Name</label>
                        <input
                          type="text"
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-red-600/20 focus:bg-white transition-all text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Email Address</label>
                        <input
                          type="email"
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-red-600/20 focus:bg-white transition-all text-sm"
                          placeholder="john@hospital.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-red-600/20 focus:bg-white transition-all text-sm"
                        placeholder="+91 00000 00000"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Your Message</label>
                      <textarea
                        rows={4}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:border-red-600/20 focus:bg-white transition-all text-sm resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <button className="w-full bg-red-600 text-white py-4 rounded-xl font-black uppercase tracking-widest shadow-xl shadow-red-200 hover:bg-red-700 hover:shadow-red-300 transition-all flex items-center justify-center gap-2 mt-4 text-xs">
                      Submit Request <FiArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-4 italic">
                      "Excellence in every disposable, precision in every heartbeat."
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative py-2 font-bold text-sm tracking-tight transition-all duration-300 group ${isActive ? 'text-red-600' : 'text-slate-900/80 hover:text-red-600'
        }`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 h-[2px] bg-red-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-5 text-2xl font-black text-slate-900 border-b border-slate-50 last:border-0 hover:text-red-600 transition-colors"
    >
      {children}
    </Link>
  );
}
