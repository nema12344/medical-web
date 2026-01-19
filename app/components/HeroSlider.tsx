'use client';

import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Shield, Award } from 'lucide-react';

const slides = [
  {
    id: 1,
    bgImage: '/images/hero-bg-1.png',
    title: 'Precision-Engineered\nSurgical Solutions',
    subtitle: 'Setting the Standard for Medical Excellence',
    description: 'Leading the global industry with innovative medical disposables designed for optimal patient outcomes and clinical precision.',
    features: ['ISO 13485 Certified', '99.9% Purity Standards', 'Global Distribution']
  },
  {
    id: 2,
    bgImage: '/images/hero-bg-2.png',
    title: 'Transforming Care\nThrough Innovation',
    subtitle: 'Advanced Disposables for Modern Surgery',
    description: 'State-of-the-art medical devices engineered with uncompromising quality and reliability for healthcare professionals worldwide.',
    features: ['Direct Manufacturing', 'Custom OEM Solutions', 'Fast Global Shipping']
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen min-h-[700px] w-full bg-slate-900 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
          />

          {/* Gradient Overlay - Centered Focus */}
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60" />

          {/* Content Container */}
          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center justify-center">
            <div className="text-center w-full max-w-4xl flex flex-col items-center">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 font-bold text-xs uppercase tracking-widest mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                {slides[currentSlide].subtitle}
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-8 whitespace-pre-line"
              >
                {slides[currentSlide].title.split('\n').map((line, i) => (
                  <span key={i} className="block last:text-red-600">
                    {line}
                  </span>
                ))}
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-12 max-w-2xl opacity-80"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <button className="group relative px-10 py-5 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_-10px_rgba(220,38,38,0.4)]">
                  <span className="relative z-10 flex items-center gap-3">
                    View Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
                  Technical Specifications
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Centered Navigation Controls */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-8 bg-black/20 backdrop-blur-2xl px-8 py-4 rounded-full border border-white/10">
        <button onClick={prevSlide} className="text-white/60 hover:text-white transition-all scale-125"><FiChevronLeft className="w-6 h-6" /></button>
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIsAutoPlaying(false); setCurrentSlide(i); }}
              className={`h-1.5 rounded-full transition-all duration-700 ${currentSlide === i ? 'w-10 bg-red-600' : 'w-2 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="text-white/60 hover:text-white transition-all scale-125"><FiChevronRight className="w-6 h-6" /></button>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent opacity-30" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-500/50 to-transparent opacity-30" />
    </div>
  );
}
