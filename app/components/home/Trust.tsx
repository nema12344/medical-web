'use client';

import { motion } from 'framer-motion';

const logos = [
    "NHS", "Cleveland Clinic", "Johns Hopkins", "Mayo Clinic", "Apollo Hospitals", "Charité", "Fortis"
];

// Duplicate for marquee
const marqueeLogos = [...logos, ...logos, ...logos];

export default function Trust() {
    return (
        <section className="py-20 bg-obsidian border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Trusted by Industry Giants</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex gap-16 py-4 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: 'loop'
                    }}
                >
                    {marqueeLogos.map((logo, i) => (
                        <div key={i} className="text-2xl font-bold text-gray-700 uppercase tracking-tight hover:text-white transition-colors cursor-default">
                            {logo}
                        </div>
                    ))}
                </motion.div>

                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10" />
            </div>
        </section>
    );
}
