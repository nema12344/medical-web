'use client';

import { motion } from 'framer-motion';
import { Shield, Cog, Headphones, Truck } from 'lucide-react';

const highlights = [
    {
        title: 'Global Standards',
        description: 'Our facilities and products adhere to strict ISO 13485:2016 and WHO-GMP guidelines, ensuring world-class safety and reliability for every procedure.',
        icon: Shield
    },
    {
        title: 'Advanced Manufacturing',
        description: 'Equipped with state-of-the-art German moulding technology and automated assembly lines to deliver precision-engineered medical disposables.',
        icon: Cog
    },
    {
        title: '24/7 Expert Support',
        description: 'Our dedicated team of medical product specialists is available round-the-clock to assist hospitals and distributors with technical queries.',
        icon: Headphones
    },
    {
        title: 'Rapid Global Delivery',
        description: 'With a robust logistics network spanning over 50 countries, we guarantee timely delivery of critical medical supplies without compromise.',
        icon: Truck
    }
];

export default function HighlightsMUI() {
    return (
        <section className="py-20 bg-red-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-600 font-bold text-sm tracking-wide mb-4">
                        WHY CHOOSE TNX SURGICAL
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                        Excellence in Every Detail
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        We combine cutting-edge technology with unwavering commitment to quality to serve the global healthcare community.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="group"
                        >
                            <div className="flex items-start gap-6 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all duration-300">
                                {/* Icon Container */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                                        <item.icon className="w-8 h-8 text-red-600" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}