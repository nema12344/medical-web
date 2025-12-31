'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const slides = [
    {
        badge: "#1 Oncology Medical",
        title: "Discover a Wealth of Resources",
        subtitle: "Comprehensive healthcare support and patient care solutions designed to empower both medical professionals and patients on their journey to recovery.",
        image: "/images/hero-bg-2.png",
        bgGradient: "from-pink-50 via-rose-50 to-pink-100"
    },
    {
        badge: "#1 Cardiology Care",
        title: "Advanced Heart Care Solutions",
        subtitle: "Leading cardiovascular treatments and innovative cardiac care technologies that save lives and improve patient outcomes worldwide.",
        image: "/images/many-kind-medical-equipment-manage-surgeon-start-operations-operating-room.jpg",
        bgGradient: "from-blue-50 via-cyan-50 to-blue-100"
    },
    {
        badge: "#1 Surgical Excellence",
        title: "Precision Surgical Innovation",
        subtitle: "State-of-the-art surgical instruments and minimally invasive procedures that ensure optimal patient safety and recovery.",
        image: "/images/medical-equipment.jpg",
        bgGradient: "from-emerald-50 via-teal-50 to-emerald-100"
    }
];

export default function ModernHero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
    };

    const stopAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        if (isPlaying) {
            startAutoPlay();
        } else {
            stopAutoPlay();
        }
        return () => stopAutoPlay();
    }, [isPlaying]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section 
            className="relative w-full min-h-screen overflow-hidden"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full"
                >
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
                        style={{
                            backgroundImage: `url(${slides[currentSlide].image})`
                        }}
                    />
                    
                    {/* Light Overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                    
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Transparent Card Container */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl"
                            >

                                {/* Main Headline */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-8"
                                >
                                    {slides[currentSlide].title}
                                </motion.h1>

                                {/* Supporting Paragraph */}
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                    className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium mb-10"
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.p>

                                {/* Single CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                >
                                    <Link href="/learn-more">
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center gap-3 group mx-auto"
                                        >
                                            Explore Our Solutions
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-500 rounded-full ${
                            index === currentSlide 
                                ? 'bg-white w-12 h-3' 
                                : 'bg-white/40 hover:bg-white/60 w-3 h-3'
                        }`}
                    />
                ))}
            </div>

            {/* Auto-play Indicator */}
            <div className="absolute top-6 right-6 z-20">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                }`} />
            </div>
        </section>
    );
}