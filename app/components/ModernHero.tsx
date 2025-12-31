'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
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
    const [direction, setDirection] = useState(1);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
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

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0
        })
    };

    return (
        <section 
            className="relative w-full min-h-screen overflow-hidden"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
        >
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 }
                    }}
                    className="absolute inset-0 w-full"
                >
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${slides[currentSlide].image})`
                        }}
                    />
                    
                    {/* Light Overlay */}
                    <div className="absolute inset-0 bg-white/30" />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgGradient} opacity-20`} />
                    
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-8"
                            >
                                {/* Badge */}
                               

                                {/* Main Headline */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-slate-900 leading-[1.1]"
                                >
                                    {slides[currentSlide].title}
                                </motion.h1>

                                {/* Supporting Paragraph */}
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                    className="text-xl sm:text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium"
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.p>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="flex flex-col sm:flex-row gap-6 justify-center"
                                >
                                    <Link href="/learn-more">
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-10 py-5 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/40 transition-all flex items-center justify-center gap-3 group"
                                        >
                                            Learn More
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </Link>
                                    <Link href="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 shadow-xl transition-all flex items-center justify-center gap-3 group"
                                        >
                                            Contact Us
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
         

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                            index === currentSlide 
                                ? 'bg-pink-500 w-10 h-3' 
                                : 'bg-white/60 hover:bg-white/80 w-3 h-3'
                        }`}
                    />
                ))}
            </div>

            {/* Auto-play Indicator */}
            <div className="absolute top-6 right-6 z-20">
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                }`} />
            </div>
        </section>
    );
}