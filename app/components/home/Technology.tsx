'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Microscope, ShieldCheck, Truck, Globe } from 'lucide-react';
import clsx from 'clsx';

const features = [
    {
        id: 1,
        title: "Meticulous Sterility",
        description: "Our ISO-certified cleanrooms ensure that every product meets the highest standards of sterilization and hygiene.",
        icon: ShieldCheck
    },
    {
        id: 2,
        title: "Precision Engineering",
        description: "Using German-grade CNC technology to craft instruments with microscopic accuracy for delicate procedures.",
        icon: Microscope
    },
    {
        id: 3,
        title: "Global Logistics",
        description: "A robust supply chain network ensuring rapid delivery of critical medical supplies to over 50 countries.",
        icon: Globe
    }
];

export default function Technology() {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section className="bg-charcoal py-32 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Sticky Left Content */}
                <div className="h-fit lg:sticky lg:top-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Engineered for the <br />
                            <span className="text-medical-red">Modern Era.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-md">
                            We combine advanced robotics, material science, and rigorous testing to create products that redefine industry standards.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    onClick={() => setActiveFeature(index)}
                                    className={clsx(
                                        "p-6 rounded-xl border transition-all duration-300 cursor-pointer group hover:bg-white/[0.03]",
                                        activeFeature === index
                                            ? "border-medical-red bg-white/[0.05]"
                                            : "border-white/10"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <feature.icon className={clsx(
                                            "w-6 h-6 transition-colors",
                                            activeFeature === index ? "text-medical-red" : "text-gray-500 group-hover:text-gray-300"
                                        )} />
                                        <h3 className={clsx(
                                            "text-xl font-semibold transition-colors",
                                            activeFeature === index ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                                        )}>
                                            {feature.title}
                                        </h3>
                                    </div>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: activeFeature === index ? 'auto' : 0, opacity: activeFeature === index ? 1 : 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-400 mt-4 pl-10 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Dynamic Right Visual */}
                <div className="h-[600px] w-full relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{
                                opacity: activeFeature === index ? 1 : 0,
                                scale: activeFeature === index ? 1 : 0.95,
                                zIndex: activeFeature === index ? 10 : 1
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center p-12"
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                                {/* Abstract Representation */}
                                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
                                <div className={clsx(
                                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-[60px]",
                                    index === 0 ? "bg-blue-500/40" : index === 1 ? "bg-red-500/40" : "bg-emerald-500/40"
                                )} />

                                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                                    <feature.icon className="w-24 h-24 text-white/80 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
                                    <h4 className="text-2xl font-bold text-white">{feature.title}</h4>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
