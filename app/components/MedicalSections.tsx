"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

export default function MedicalSections() {
  return (
    <div className="bg-white">
       <motion.section initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-medicalNavy mb-4">Our Premium Medical Services</h2>
           <p className="text-textSecondary text-lg max-w-3xl mx-auto">Comprehensive, cutting-edge healthcare solutions designed for optimal patient outcomes and clinical excellence.</p>
         </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
            { title: "General Consultation", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"/></svg>
              )},
            { title: "Emergency Care", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6"/></svg>
              )},
            { title: "Diagnostic & Lab Services", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 2h6v4H9z"/></svg>
              )},
            { title: "Pharmacy Services", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7V3M8 7V3M3 11h18M7 21h10a2 2 0 002-2V11H5v8a2 2 0 002 2z"/></svg>
              )},
            { title: "Specialized Treatments & Surgery", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M12 9v6"/></svg>
              )},
            { title: "Preventive Health Checkups", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.285 6.708A9 9 0 1111.292 1.714"/></svg>
              )}
          ].map((s, idx) => (
            <article key={idx} className="group bg-white rounded-xl p-8 shadow-card hover:shadow-premium transition-all duration-300 border border-borderLight hover:border-medicalRed">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-4 rounded-lg bg-accent/10 text-medicalRed group-hover:bg-medicalRed group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-medicalNavy mb-3">{s.title}</h4>
              <p className="text-textSecondary leading-relaxed">{`Premium ${s.title.toLowerCase()} delivered by highly trained specialists with state-of-the-art technology.`}</p>
            </article>
          ))}
        </div>
      </motion.section>

      {/* PARALLAX BACKGROUND IMAGE SECTION */}
      <div className="relative w-full md:h-140 flex items-center justify-center overflow-hidden">
        {/* Fixed Background Image (Desktop only) */}
        <div className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/images/hero-bg-1.png')" }} />
        
        {/* Mobile Background (Scrolls normally) */}
        <div className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-bg-1.png')" }} />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Excellence in Medical Care
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed">
            Delivering world-class healthcare with compassion, precision, and innovation for every patient.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-medicalRed text-white font-semibold rounded-lg shadow-redGlow bg-red-700 transition-all duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      <motion.section initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-medicalNavy mb-4">Why Choose Us</h2>
          <p className="text-textSecondary text-lg max-w-3xl mx-auto">Trusted by leading healthcare institutions for excellence, reliability, and patient-centered care.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <article className="group flex flex-col items-start gap-4 bg-white rounded-xl shadow-card hover:shadow-premium p-7 border border-borderLight hover:border-medicalRed transition-all duration-300">
            <div className="p-3 rounded-lg bg-accent/10 text-medicalRed group-hover:bg-medicalRed group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12A8 8 0 1112 4a8 8 0 018 8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-medicalNavy text-lg">Experienced & Certified Doctors</h3>
              <p className="text-sm text-textSecondary mt-2">Board-certified specialists with decades of clinical experience and proven expertise.</p>
            </div>
          </article>

          <article className="group flex flex-col items-start gap-4 bg-white rounded-xl shadow-card hover:shadow-premium p-7 border border-borderLight hover:border-medicalRed transition-all duration-300">
            <div className="p-3 rounded-lg bg-accent/10 text-medicalRed group-hover:bg-medicalRed group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 012 2v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4a2 2 0 012-2h2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v3" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-medicalNavy text-lg">Advanced Medical Technology</h3>
              <p className="text-sm text-textSecondary mt-2">Latest diagnostic and treatment equipment ensuring precision and superior clinical outcomes.</p>
            </div>
          </article>

          <article className="group flex flex-col items-start gap-4 bg-white rounded-xl shadow-card hover:shadow-premium p-7 border border-borderLight hover:border-medicalRed transition-all duration-300">
            <div className="p-3 rounded-lg bg-accent/10 text-medicalRed group-hover:bg-medicalRed group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-medicalNavy text-lg">Patient-First Care & Safety</h3>
              <p className="text-sm text-textSecondary mt-2">Personalized treatment plans with stringent safety protocols and compassionate care delivery.</p>
            </div>
          </article>

          <article className="group flex flex-col items-start gap-4 bg-white rounded-xl shadow-card hover:shadow-premium p-7 border border-borderLight hover:border-medicalRed transition-all duration-300">
            <div className="p-3 rounded-lg bg-accent/10 text-medicalRed group-hover:bg-medicalRed group-hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414M6.05 17.95l-1.414 1.414M2 12h2M20 12h2M7.05 6.05L5.636 4.636M18.364 18.364l1.414 1.414" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-medicalNavy text-lg">24/7 Emergency Support</h3>
              <p className="text-sm text-textSecondary mt-2">Round-the-clock expert teams ensuring immediate response and critical care when needed most.</p>
            </div>
          </article>
        </div>
      </motion.section>

    </div>
  );
}

