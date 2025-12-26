'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Activity, ShieldCheck, Globe } from 'lucide-react';
import Link from 'next/link';

export default function ModernHero() {
    return (
        <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-white">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-red-50 to-blue-50 blur-3xl opacity-60 animate-float" />
                <div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-slate-50 blur-3xl opacity-60 animate-float delay-100" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-medical-red text-sm font-semibold tracking-wide shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        ISO 13485:2016 Certified Manufacturer
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="max-w-4xl mx-auto text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8"
                >
                    Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-red to-red-600">Precision</span> in
                    <br className="hidden md:block" /> Medical Solutions
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed"
                >
                    Delivering state-of-the-art surgical instruments and medical devices designed for optimal patient outcomes and healthcare excellence.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Link href="/products">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-medical-red to-red-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-red-500/25 transition-all flex items-center justify-center gap-2 group"
                        >
                            Our Products
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center"
                        >
                            Contact Sales
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Stats / Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
                >
                    {[
                        {
                            icon: <Activity className="w-6 h-6 text-medical-red" />,
                            title: "Clinical Excellence",
                            text: "Trusted by top hospitals worldwide"
                        },
                        {
                            icon: <ShieldCheck className="w-6 h-6 text-medical-red" />,
                            title: "Certified Quality",
                            text: "CE & FDA approved products"
                        },
                        {
                            icon: <Globe className="w-6 h-6 text-medical-red" />,
                            title: "Global Reach",
                            text: "Exporting to 50+ countries"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="bg-white/60 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-sm text-center flex flex-col items-center gap-3 hover:shadow-md transition-all"
                        >
                            <div className="p-3 bg-red-50 rounded-full">{item.icon}</div>
                            <h3 className="font-bold text-slate-800">{item.title}</h3>
                            <p className="text-sm text-slate-500">{item.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Decorative gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>
    );
}
