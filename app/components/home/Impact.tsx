'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function StatItem({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="text-center group p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
            <div className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 mb-4">
                {value}{suffix}
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
        </div>
    );
}

export default function Impact() {
    return (
        <section className="bg-obsidian border-t border-white/5 py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-medical-red text-sm font-bold tracking-widest uppercase">Global Impact</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Trusted by Healthcare Leaders</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatItem value={50} suffix="+" label="Countries Exported" />
                    <StatItem value={10} suffix="k+" label="Partner Hospitals" />
                    <StatItem value={99} suffix=".9%" label="Quality Success Rate" />
                    <StatItem value={24} suffix="/7" label="Support Availability" />
                </div>
            </div>
        </section>
    );
}
