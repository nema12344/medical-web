'use client';

import Link from 'next/link';
import {
  PhoneCall,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  Globe,
  Award,
  Zap
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-10 pb-5 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-red-600/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-10">

          {/* Brand Identity Section */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <h2 className="text-3xl font-black text-white tracking-tighter flex items-center gap-2">
                  TNX <span className="text-red-500">SURGICAL</span>
                </h2>
              </Link>
              <p className="text-slate-500 leading-relaxed max-w-sm">
                Leading the global medical industry with precision-engineered surgical disposables and innovative healthcare solutions since 2010.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>

            {/* Micro Trust Pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3 text-red-500" /> ISO Certified
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                <Globe className="w-3 h-3 text-blue-500" /> Export Ready
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Products', 'Third-Party OEM', 'About Us', 'Contact'].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center gap-2 hover:text-red-500 transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-800 group-hover:text-red-500 transition-colors" />
                    <span className="text-sm font-medium">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Core Areas</h3>
            <ul className="space-y-4">
              {[
                'IV Infusion',
                'Blood Transfusion',
                'Gastroenterology',
                'Urology',
                'Anesthesia',
                'OEM Services'
              ].map((area, i) => (
                <li key={i}>
                  <Link href="/products" className="flex items-center gap-2 hover:text-white transition-colors group">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors" />
                    <span className="text-sm font-medium">{area}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Hub Column */}
          <div className="lg:col-span-4 lg:bg-white/5 lg:backdrop-blur-sm lg:p-8 lg:rounded-3xl lg:border lg:border-white/10">
            <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Direct Contact</h3>
            <div className="space-y-6">
              <a href="tel:+919950241240" className="block group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-1">Call Our Expert</div>
                    <div className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">+91 9950241240</div>
                  </div>
                </div>
              </a>

              <a href="mailto:Tnxsuurgicals@gmail.com" className="block group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-1">Electronic Mail</div>
                    <div className="text-lg font-bold text-white group-hover:text-blue-500 transition-colors truncate max-w-[200px] lg:max-w-none">Tnxsuurgicals@gmail.com</div>
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter mb-1">Headquarters</div>
                  <div className="text-sm leading-relaxed text-slate-300">
                    Shiv Vatika, Plot 1 & 2, Mansarovar,<br />
                    Jaipur, Rajasthan 302020
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Information Bar */}
        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>

          <p className="text-xs text-slate-600 flex items-center gap-2">
            © {currentYear} <span className="text-slate-400">Developed by
              <span className="hidden md:inline"> • </span>
              codinwalk.com</span>
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all duration-500 group"
          >
            <ArrowUpRight className="w-5 h-5 -rotate-45" />
          </button>
        </div>
      </div>
    </footer>
  );
}
