"use client";
import { motion } from "framer-motion";

export default function QualitySection() {
  const certifications = [
    {
      title: "ISO 13485",
      description: "Medical Devices Quality Management System",
      icon: "✓",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
    },
    {
      title: "FDA Approved",
      description: "US Food and Drug Administration Certified",
      icon: "✓",
      color: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-600",
    },
    {
      title: "CE Marked",
      description: "European Conformity Standards",
      icon: "✓",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
    },
    {
      title: "WHO Guidelines",
      description: "World Health Organization Compliant",
      icon: "✓",
      color: "bg-red-50",
      borderColor: "border-medicalRed/20",
      textColor: "text-medicalRed",
    },
  ];

  const features = [
    "Sterilization & Safety Testing",
    "Quality Control Standards",
    "Regular Audits & Compliance",
    "Environmental Responsibility",
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-medicalNavy mb-4">
            Certifications & Quality Assurance
          </h2>
          <p className="text-textSecondary text-lg max-w-3xl mx-auto">
            Our products meet the highest international standards and certifications, ensuring safety and reliability
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${cert.color} border-2 ${cert.borderColor} rounded-xl p-8 text-center hover:shadow-premium transition-all duration-300`}
            >
              <div className={`text-5xl font-bold ${cert.textColor} mb-4`}>
                {cert.icon}
              </div>
              <h3 className={`text-xl font-bold ${cert.textColor} mb-2`}>
                {cert.title}
              </h3>
              <p className="text-textSecondary text-sm font-medium">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quality Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-premium p-10 border border-borderLight"
        >
          <h3 className="text-2xl font-bold text-medicalNavy mb-8 text-center">
            Our Quality Promise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-medicalRed/10 flex items-center justify-center">
                  <span className="text-medicalRed font-bold">✓</span>
                </div>
                <p className="text-lg font-medium text-medicalNavy">{feature}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
