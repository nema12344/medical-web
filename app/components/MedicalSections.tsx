"use client";
import React, { useEffect, useMemo, useState } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { Stethoscope, Ambulance, Microscope, Pill, Activity, HeartPulse } from 'lucide-react';

const servicesData = [
  {
    title: "General Consultation",
    icon: <Stethoscope className="w-8 h-8" />,
    desc: "Expert medical advice from certified professionals.",
    category: "general"
  },
  {
    title: "Emergency Care",
    icon: <Ambulance className="w-8 h-8" />,
    desc: "24/7 rapid response for critical medical situations.",
    category: "emergency"
  },
  {
    title: "Diagnostic Services",
    icon: <Microscope className="w-8 h-8" />,
    desc: "Advanced lab testing and precise diagnostics.",
    category: "diagnostics"
  },
  {
    title: "Pharmacy Services",
    icon: <Pill className="w-8 h-8" />,
    desc: "Fully stocked pharmacy with prescription management.",
    category: "pharmacy"
  },
  {
    title: "Specialized Surgery",
    icon: <Activity className="w-8 h-8" />,
    desc: "State-of-the-art operating theatres and surgeons.",
    category: "surgery"
  },
  {
    title: "Preventive Checkups",
    icon: <HeartPulse className="w-8 h-8" />,
    desc: "Comprehensive health screening packages.",
    category: "preventive"
  }
];

export default function MedicalSections() {

  const [activeFilter, setActiveFilter] = useState<string>('all');

  useEffect(() => {
    const handleFilter = (event: Event) => {
      const detail = (event as CustomEvent<{ target?: string; value?: string }>).detail;
      if (!detail || detail.target !== 'services') return;
      setActiveFilter(detail.value && detail.value !== 'all' ? detail.value : 'all');
    };

    window.addEventListener('home-section-filter', handleFilter as EventListener);
    return () => window.removeEventListener('home-section-filter', handleFilter as EventListener);
  }, []);

  const visibleServices = useMemo(() => {
    if (activeFilter === 'all') return servicesData;
    return servicesData.filter((service) => service.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-slate-50 relative overflow-hidden scroll-mt-32">
      {/* Decorative Blob */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent" />

      <section className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-medical-red font-bold tracking-wider uppercase text-sm mb-3 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Premium Medical Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg max-w-3xl mx-auto"
          >
            Comprehensive, cutting-edge healthcare solutions designed for optimal patient outcomes and clinical excellence.
          </motion.p>
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200">
            <span className="text-sm text-slate-500">Active filter:</span>
            <span className="text-sm font-semibold text-slate-800">
              {activeFilter === 'all' ? 'All service lines' : activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleServices.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-red-50 text-medical-red group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-medical-red transition-colors">
                {s.title}
              </h4>
              <p className="text-slate-500 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PARALLAX Highlight Section */}
      <div className="relative w-full py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg-1.png')] bg-cover bg-center opacity-30 mix-blend-overlay" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight"
          >
            "Excellence in Medical Care with compassion, precision, and innovation."
          </motion.h2>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-medical-red font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us Today
            </motion.button>
          </Link>
        </div>
      </div>

    </div>
  );
}
