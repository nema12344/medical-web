'use client';
import { CheckCircle2, Zap } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CompanyIntroSection() {
  const certifications = [
    'WHO-GMP Compliance',
    'ISO 13485-2016 Certified',
    'ISO 9001-2015 Certified',
    'MDR 2017 Approved'
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 z-0 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - Image with Overlay Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/DISPOSABLE-SURGICAL-ITEMS.png"
                alt="Medical Manufacturing Facility"
                width={600}
                height={500}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:top-10 md:left-10 md:right-auto md:bottom-auto bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-6 flex gap-4 items-center border border-slate-100 max-w-xs z-20"
            >
              <div className="p-4 rounded-xl bg-red-50 text-medical-red">
                <Zap className="w-6 h-6 fill-current" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-slate-900">1000+</div>
                <div className="text-sm text-slate-500 font-medium">Global Distributors</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Highlight Badge */}
            <span className="inline-block py-1 px-3 rounded-md bg-red-50 text-medical-red text-sm font-bold tracking-wide mb-6">
              LEADERS IN HEALTHCARE
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Running the Future of <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-red to-red-600">Surgical Manufacturing</span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-8">
              <p>
                With over two decades of excellence in medical device manufacturing, we have established ourselves as a trusted name. Our state-of-the-art facilities ensure the highest quality standards.
              </p>
              <p>
                From IV infusion sets to comprehensive surgical disposables, we serve healthcare providers worldwide with innovative solutions.
              </p>
            </div>

            {/* Certifications List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-medical-red flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}