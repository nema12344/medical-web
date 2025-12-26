'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function CinematicHero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-obsidian text-white">
            {/* Background Ambience */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-900/20 blur-[120px] mix-blend-screen"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-medical-red/10 blur-[120px] mix-blend-screen"
            />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-medical-red animate-pulse" />
                        <span className="text-xs font-medium tracking-widest uppercase text-gray-300">The Future of Surgery</span>
                    </motion.div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">Precision.</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">Innovation.</span>
                        <span className="block text-medical-red drop-shadow-[0_0_50px_rgba(208,37,44,0.4)]">Excellence.</span>
                    </h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="max-w-xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed font-light"
                    >
                        From advanced surgical disposables to next-gen medical devices.
                        We engineer the tools that save lives, trusted by 10,000+ top hospitals.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="/products" className="group relative px-8 py-4 bg-white text-obsidian rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Products <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <Link href="/contact" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 backdrop-blur-sm text-white font-medium transition-all hover:border-white/50">
                            Technical Specs
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span>
                <ArrowDown className="w-4 h-4 text-gray-500" />
            </motion.div>
        </div>
    );
}
