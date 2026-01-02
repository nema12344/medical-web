'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CompanyIntroSection() {
  const certifications = [
    { icon: Shield, text: 'WHO-GMP Compliance' },
    { icon: Award, text: 'ISO 13485-2016 Certified' },
    { icon: CheckCircle2, text: 'ISO 9001-2015 Certified' },
    { icon: Shield, text: 'MDR 2017 Approved' },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Disposable surgical-items.jpg"
                alt="Healthcare Professional in Sterile Environment"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              {/* Soft gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Pill Label */}
            {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-100">
              <span className="text-red-600 font-bold text-sm tracking-wide">
                LEADERS IN HEALTHCARE
              </span>
            </div> */}

            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Running the Future of{' '}
              <span className="text-red-600 font-black">
                Surgical Manufacturing
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                With over two decades of excellence in medical device manufacturing, 
                we have built an unparalleled reputation for quality and trust in the healthcare industry.
              </p>
              <p>
                From precision IV infusion sets to comprehensive surgical disposables, 
                we empower healthcare providers worldwide with innovative solutions that save lives.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-2 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                    <cert.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="font-semibold text-slate-700 text-sm">
                    {cert.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-2xl shadow-xl shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 group">
                Contact Sales
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}