'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Users,
  Award,
  Briefcase,
  Zap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

/* ----------------------------------
   Reusable Interactive Stat Card
-----------------------------------*/
const InteractiveStatCard = ({
  states,
}: {
  states: { icon: any; title: string; desc: string; color: string }[];
}) => {
  const [index, setIndex] = useState(0);
  const current = states[index];

  return (
    <div className="relative bg-white rounded-xl border border-slate-100 shadow-md p-4 h-28 flex flex-col justify-between">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex justify-between items-start mb-2">
            <div
              className={`p-2 rounded-lg ${current.color} bg-opacity-10`}
            >
              <current.icon
                className={`w-5 h-5 ${current.color.replace(
                  'bg-',
                  'text-'
                )}`}
              />
            </div>

            <button
              onClick={() =>
                setIndex((prev) => (prev + 1) % states.length)
              }
              className="w-7 h-7 rounded-full bg-slate-50 hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 transition"
              title="Next stat"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div>
            <div className="text-xl font-bold text-slate-900 leading-none">
              {current.title}
            </div>
            <div className="text-xs uppercase tracking-wide text-slate-500">
              {current.desc}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* ----------------------------------
   Main Section
-----------------------------------*/
export default function CompanyIntroSection() {
  const certifications = [
    'WHO-GMP Compliance',
    'ISO 13485-2016 Certified',
    'ISO 9001-2015 Certified',
    'MDR 2017 Approved',
  ];

  const stats1 = [
    { icon: Globe, title: '50+', desc: 'Countries Served', color: 'bg-blue-500' },
    { icon: Users, title: '1000+', desc: 'Global Distributors', color: 'bg-indigo-500' },
  ];

  const stats2 = [
    { icon: Award, title: '20+', desc: 'Years Experience', color: 'bg-amber-500' },
    { icon: Briefcase, title: '100%', desc: 'Client Commitment', color: 'bg-orange-500' },
  ];

  const stats3 = [
    { icon: Zap, title: '500+', desc: 'Unique SKUs', color: 'bg-red-500' },
    { icon: CheckCircle2, title: 'Zero', desc: 'Defect Goal', color: 'bg-emerald-500' },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-h-[420px]">
              <Image
                src="/images/DISPOSABLE-SURGICAL-ITEMS.png"
                alt="Medical Manufacturing"
                width={600}
                height={420}
                priority
                className="w-full h-[420px] object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <InteractiveStatCard states={stats1} />
              <InteractiveStatCard states={stats2} />
              <InteractiveStatCard states={stats3} />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block mb-6 px-3 py-1 rounded-md bg-red-50 text-red-600 text-sm font-bold">
              LEADERS IN HEALTHCARE
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Running the Future of <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Surgical Manufacturing
              </span>
            </h2>

            <div className="space-y-5 text-slate-600 text-lg mb-8">
              <p>
                With over two decades of excellence in medical device manufacturing,
                we have built a reputation for quality and trust.
              </p>
              <p>
                From IV infusion sets to complete surgical disposables,
                we support healthcare providers worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {certifications.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition"
                >
                  <CheckCircle2 className="w-5 h-5 text-red-500" />
                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm italic text-slate-400">
              Click arrows on the stats to explore more
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
