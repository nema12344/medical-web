"use client";
import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, Globe } from "lucide-react";

export default function QualitySection() {
  const certificationInfo = [
    {
      title: "ISO 13485:2016",
      description: "Medical Devices Quality Management System",
      icon: Shield
    },
    {
      title: "FDA Approved",
      description: "US Food and Drug Administration Certified",
      icon: Award
    },
    {
      title: "CE Marking",
      description: "European Conformity Standards",
      icon: CheckCircle
    },
    {
      title: "WHO-GMP",
      description: "World Health Organization Good Manufacturing Practice",
      icon: Globe
    }
  ];

  const certificates = [
    {
      title: "ISO 13485:2016",
      image: "/certificate/FINAL-TNX SURGICAL(CE)_page-0001.jpg"
    },
    {
      title: "FDA Approved",
      image: "/certificate/FINAL-TNX SURGICAL(GMP)_page-0001.jpg"
    },
    {
      title: "CE Marking",
      image: "/certificate/FINAL-TNX SURGICAL(QMS)_page-0001.jpg"
    },
    {
      title: "WHO-GMP",
      image: "/certificate/FINAL-TNX SURGICAL(13485)_page-0001.jpg"
    }
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

        {/* Certification Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certificationInfo.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
                <cert.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {cert.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certificate Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-[300px] overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
