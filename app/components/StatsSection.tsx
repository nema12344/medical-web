"use client";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { number: "500+", label: "Satisfied Clients", icon: "👥" },
    { number: "15+", label: "Years of Excellence", icon: "🏆" },
    { number: "10K+", label: "Products Delivered", icon: "📦" },
    { number: "50+", label: "Global Hospitals", icon: "🏥" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-medicalNavy via-medicalNavy/95 to-medicalNavy">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Healthcare Professionals Worldwide
          </h2>
          <p className="text-gray-200 text-lg">
            Our commitment to quality and innovation has earned the confidence of leading medical institutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-medicalRed/50 transition-all duration-300 hover:shadow-redGlow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-medicalRed/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-medicalRed mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-100 font-medium text-lg">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
