"use client";
import { motion } from "framer-motion";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Premium Quality",
      description: "High-grade materials and precision manufacturing for superior performance",
      icon: "⭐",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cost Effective",
      description: "Competitive pricing without compromising on quality and standards",
      icon: "💰",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Expert Support",
      description: "24/7 customer support team ready to assist with any queries",
      icon: "🤝",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Fast Shipping",
      description: "Quick and reliable delivery to healthcare institutions worldwide",
      icon: "📦",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Certified Products",
      description: "All products meet international standards and certifications",
      icon: "✓",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Custom Solutions",
      description: "Tailored products and bulk orders to meet specific requirements",
      icon: "🔧",
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-medicalNavy mb-4">
            Why Partner With Us
          </h2>
          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            Discover the advantages of choosing us as your trusted medical product supplier
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-card hover:shadow-premium border border-borderLight transition-all duration-300 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-medicalNavy mb-3 group-hover:text-medicalRed transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-textSecondary leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Accent Line */}
                  <div className="mt-6 h-1 w-12 bg-medicalRed rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
