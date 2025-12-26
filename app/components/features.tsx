'use client';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section className="relative py-24 bg-[#0c2534] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[#D0252C] rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-[#D0252C]" />
              <span>World Class Quality Surgical Products</span>
            </div>

            {/* Big Bold Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-6">
              Providing Value Through <span className="text-[#D0252C]">Innovation</span> & Excellence.
            </h2>

            <div className="w-20 h-1.5 bg-gradient-to-r from-[#D0252C] to-red-800 rounded-full mb-8" />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-xl"
          >
            {/* Description Paragraphs */}
            <div className="space-y-6 mb-8 text-gray-300 text-lg leading-relaxed">
              <p>
                We are committed to delivering exceptional surgical disposables that meet the highest industry standards. Our innovative approach ensures that healthcare professionals have access to reliable, safe, and effective medical products.
              </p>
              <p>
                Through continuous research and development, we maintain our position as a trusted partner in the healthcare industry, providing solutions that enhance patient care.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#D0252C] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-red-700 hover:shadow-lg hover:shadow-red-900/40 transition-all">
                  <span>Discover Tnx Surgical</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/products">
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold border border-white/20 hover:bg-white/10 hover:border-white transition-all">
                  Explore Products
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}