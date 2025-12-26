'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ConversionCTA() {
    return (
        <section className="py-32 bg-obsidian relative overflow-hidden flex items-center justify-center">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-medical-red/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-medical-red/10 blur-[120px] rounded-full" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-8"
                >
                    Ready to elevate your <br /> standard of care?
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Join the network of top-tier healthcare providers who trust our precision instruments for their most critical procedures.
                    </p>

                    <Link href="/contact">
                        <button className="px-12 py-5 bg-white text-obsidian text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center gap-3 mx-auto">
                            Get Started Now <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
