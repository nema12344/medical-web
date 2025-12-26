"use client";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Schedule a free consultation with our experts to discuss your needs and requirements.",
      icon: "📋",
    },
    {
      number: "02",
      title: "Product Selection",
      description: "Browse our extensive catalog and select the products that best fit your requirements.",
      icon: "🔍",
    },
    {
      number: "03",
      title: "Quality Assurance",
      description: "Every product undergoes rigorous testing and quality control before dispatch.",
      icon: "✓",
    },
    {
      number: "04",
      title: "Fast Delivery",
      description: "Enjoy reliable and timely delivery with complete tracking and support.",
      icon: "🚚",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-medicalNavy mb-4">
            Simple Process, Outstanding Results
          </h2>
          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            We've streamlined our process to make it easy for you to access premium medical products
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-medicalRed via-medicalRed/50 to-medicalNavy" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Card */}
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-card hover:shadow-premium border border-borderLight transition-all duration-300 h-full">
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-medicalRed text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-6 mt-2">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-medicalNavy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-textSecondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (visible on desktop between cards) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-4 transform -translate-y-1/2 z-20">
                    <div className="text-3xl text-medicalRed font-bold">→</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
