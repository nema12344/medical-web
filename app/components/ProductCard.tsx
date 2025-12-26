'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
}

export default function ProductCard({ title, description, features }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-5px_rgba(208,37,44,0.1)] transition-all duration-300 border border-slate-100 flex flex-col h-full"
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
      </div>

      <div className="mt-auto space-y-3">
        {features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-start gap-3 text-sm text-slate-600 group">
            <div className="mt-0.5 p-1 rounded-full bg-slate-50 text-medical-red group-hover:bg-red-50 transition-colors">
              <Check className="w-3 h-3" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100">
        <button className="w-full py-3 rounded-lg text-medical-red font-semibold text-sm hover:bg-red-50 transition-colors flex items-center justify-center gap-2 group">
          View Details
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </motion.div>
  );
}