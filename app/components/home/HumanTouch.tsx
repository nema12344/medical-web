'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HumanTouch() {
    return (
        <section className="py-32 bg-charcoal relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl overflow-hidden h-[600px]"
                >
                    <Image
                        src="/images/hero-bg-2.png"
                        alt="Doctor caring for patient"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />

                    <div className="absolute bottom-10 left-10 right-10">
                        <p className="text-2xl font-serif text-white italic">"Behind every instrument is a life we help protect."</p>
                    </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Compassion is our <br />
                        <span className="text-medical-red">Ultimate Metric.</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                        We understand that precision technology means nothing without the human touch. That's why we design our products not just for efficiency, but for the comfort and safety of both the patient and the provider.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Every curve, every grip, every material is chosen with empathy—understanding the high-stakes environment in which our tools are used.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
