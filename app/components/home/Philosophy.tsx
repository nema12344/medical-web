'use client';

import { motion } from 'framer-motion';

export default function Philosophy() {
    return (
        <div className="bg-obsidian py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                            We don't just supply tools. <br />
                            <span className="text-gray-500">We engineer confidence.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <p className="text-xl text-gray-400 leading-relaxed mb-6 font-light">
                            In the operating room, there is no margin for error. Every instrument must be an extension of the surgeon's hand.
                            Our philosophy is built on absolute precision, unyielding safety standards, and a relentless pursuit of perfection.
                        </p>
                        <div className="w-full h-[1px] bg-gradient-to-r from-medical-red to-transparent" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
