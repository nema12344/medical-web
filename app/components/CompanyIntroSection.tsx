'use client';
import { useState } from 'react';
import { CheckCircle2, Globe, Users, Award, Briefcase, ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- Reusable Interactive Card Component ---
const InteractiveStatCard = ({ states }: { states: { icon: any; title: string; desc: string; color: string }[] }) => {
  const [index, setIndex] = useState(0);

  const nextState = () => {
    setIndex((prev) => (prev + 1) % states.length);
  };

  const current = states[index];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-4 w-full flex flex-col justify-between h-32 relative overflow-hidden group">
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col h-full"
        >
          <div className="flex items-start justify-between mb-2">
            <div className={`p-2 rounded-lg ${current.color} bg-opacity-10 text-${current.color.replace('bg-', '')}`}>
              <current.icon className={`w-5 h-5 ${current.color.replace('bg-', 'text-')}`} />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-slate-900 leading-none mb-1">{current.title}</div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">{current.desc}</div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Interactive Arrow */}
      <button
        onClick={nextState}
        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors text-slate-400 hover:text-medical-red z-10"
        title="Next Stat"
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default function CompanyIntroSection() {
  const certifications = [
    'WHO-GMP Compliance',
    'ISO 13485-2016 Certified',
    'ISO 9001-2015 Certified',
    'MDR 2017 Approved'
  ];

  // Data for the interactive cards
  const statsData1 = [
    { icon: Globe, title: "50+", desc: "Countries Served", color: "bg-blue-500" },
    { icon: Users, title: "1000+", desc: "Global Distributors", color: "bg-indigo-500" }
  ];

  const statsData2 = [
    { icon: Award, title: "20+", desc: "Years Excellence", color: "bg-amber-500" },
    { icon: Briefcase, title: "100%", desc: "Commitment", color: "bg-orange-500" }
  ];

  const statsData3 = [
    { icon: Zap, title: "500+", desc: "Unique SKUs", color: "bg-red-500" },
    { icon: CheckCircle2, title: "Zero", desc: "Defect Rate Goal", color: "bg-emerald-500" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 z-0 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - Image with Overlay Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 lg:mb-0">
              <Image
                src="/images/DISPOSABLE-SURGICAL-ITEMS.png"
                alt="Medical Manufacturing Facility"
                width={600}
                height={500}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            {/* Overlaid Interactive Grid - Horizontal Layout on Desktop */}
            <div className="absolute -bottom-10 left-4 right-4 lg:left-8 lg:right-auto lg:w-[90%] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <InteractiveStatCard states={statsData1} />
              <InteractiveStatCard states={statsData2} />
              <InteractiveStatCard states={statsData3} />
            </div>
          </motion.div>

          {/* RIGHT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-medical-red flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>

            {/* Subtle Interactive Hint */}
            <div className="flex items-center gap-2 text-sm text-slate-400 italic">
              <div className="w-8 h-[1px] bg-slate-300"></div>
              <span>Click arrows on the stats to see more</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}