'use client';

import { useState } from 'react';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Award,
  Truck,
  Users,
  FileText,
  PhoneCall,
  X,
  Zap,
  Settings,
  Layers,
  Globe,
  Clock,
  ChevronRight,
  ClipboardList
} from 'lucide-react';

export default function ThirdPartyOEMPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const services = [
    {
      title: "Third Party Contract Manufacturing",
      description: "Scale your business with our world-class production lines, optimized for high-volume surgical disposables.",
      icon: Layers
    },
    {
      title: "OEM / Private Labeling",
      description: "Complete brand integration where our quality becomes your reputation. Every detail tailored to your specifications.",
      icon: Settings
    },
    {
      title: "Advanced Branding Support",
      description: "From structural packaging to aesthetic design, we ensure your brand stands out in the medical market.",
      icon: Zap
    },
    {
      title: "Regulatory Compliance",
      description: "Stay ahead of standards with our expert guidance on labeling, documentation, and international certifications.",
      icon: ShieldCheck
    }
  ];

  const processSteps = [
    { title: "Consultation", desc: "Define your product vision and specific market requirements." },
    { title: "Design & Proto", desc: "Structural packaging and brand integration development." },
    { title: "Precision Mfg", desc: "Batch production in our certified clean-room facilities." },
    { title: "Global Delivery", desc: "Systematic sterilization and logistical excellence." }
  ];

  const products = [
    "IV Infusion Sets", "Blood Transfusion Sets", "Scalp Vein Sets",
    "Urine Bags", "IV Cannulas", "Oxygen Masks", "Nebulizer Masks",
    "Disposable Syringes", "Surgical Gloves", "Protective Gear"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-red-100 selection:text-red-700">

      <main>
        {/* Dynamic Hero Section */}
        <section className="relative pt-40 pb-32 overflow-hidden bg-[#0A0F1D]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-red-500 to-transparent" />
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff11 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold tracking-widest uppercase mb-8">
                <Globe className="w-4 h-4 animate-pulse" />
                Global Manufacturing Hub
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                Your Brand. <span className="text-red-600">Our Precision.</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                Empowering healthcare brands worldwide with state-of-the-art contract manufacturing for premium medical disposables.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-red-600/20 hover:-translate-y-1 flex items-center gap-2"
                >
                  Start Partnership <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4 text-slate-400 font-medium">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0F1D] bg-slate-800 flex items-center justify-center text-[10px] font-bold">L{i}</div>)}
                  </div>
                  <span>Trusted by 50+ Global Brands</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Strategy */}
        <section className="py-24 -mt-16 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -10 }}
                className="lg:col-span-2 bg-white rounded-[2.5rem] p-12 shadow-xl shadow-blue-900/5 border border-slate-100 flex flex-col md:flex-row gap-12 items-center"
              >
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                    Scale Without <br /> <span className="text-red-600">Infrastructure Costs</span>
                  </h2>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Transform your medical distribution business by leveraging our multi-million dollar manufacturing facility. We handle the complexity; you build the brand.
                  </p>
                  <div className="space-y-4">
                    {['Medical Distributors', 'Healthcare Startups', 'Hospital Chains'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 font-semibold text-slate-700">
                        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                          <Check className="w-4 h-4" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/2 bg-slate-50 rounded-3xl p-8 border border-slate-200/50">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold">99%</div>
                      <div className="text-sm">
                        <div className="font-bold text-slate-900">Quality Assurance</div>
                        <div className="text-slate-500 text-xs">Zero Batch Failures in 2025</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                      <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 font-bold">14d</div>
                      <div className="text-sm">
                        <div className="font-bold text-slate-900">Lead Time</div>
                        <div className="text-slate-500 text-xs">Fastest in the Industry</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="bg-red-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-red-600/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <Award className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Expertise Hub</h3>
                <p className="text-red-100 mb-8 leading-relaxed">
                  Access our internal R&D team and regulatory experts who ensure every product complies with ISO 13485 and Global Standards.
                </p>
                <button className="flex items-center gap-2 font-bold text-white hover:gap-4 transition-all">
                  Download Capability Deck <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-4 block">STREAMLINED WORKFLOW</span>
              <h2 className="text-4xl font-bold text-slate-900">How We Launch Your Brand</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-100 hidden md:block" />
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  onMouseEnter={() => setActiveStep(i)}
                  className={`relative z-10 p-8 rounded-3xl border transition-all duration-300 ${activeStep === i ? 'bg-white border-red-500 shadow-xl' : 'bg-slate-50 border-transparent'}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold mb-6 transition-colors ${activeStep === i ? 'bg-red-600 text-white' : 'bg-white text-slate-400'}`}>
                    0{i + 1}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services High-Tech Grid */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
                  Full-Spectrum <br /> <span className="text-red-600">OEM Architecture</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-12">
                  Our manufacturing stack is designed for flexibility. Whether you need niche customizations or high-volume standard units, we integrate seamlessly with your supply chain.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {services.map((s, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                      <s.icon className="w-8 h-8 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="text-white font-bold mb-2">{s.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{s.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full" />
                <div className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-[3rem] p-1 border border-white/10 shadow-3xl overflow-hidden aspect-square">
                  <div className="w-full h-full bg-[#0A0F1D] rounded-[2.8rem] flex items-center justify-center p-12 text-center text-white">
                    <div>
                      <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-red-600/40">
                        <Layers className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Integrated Quality</h3>
                      <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                        Certified Clean Rooms (Class 10,000) and ISO-standardized sterilization protocols ensure every product with your name on it is flawless.
                      </p>
                      <div className="flex justify-center gap-4">
                        <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase">WHO-GMP</div>
                        <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase">CE MARK</div>
                        <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase">ISO 13485</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Marquee/List */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {products.map((p, i) => (
                <div key={i} className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 font-bold hover:bg-white hover:border-red-500 hover:text-red-600 transition-all cursor-default flex items-center gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-red-500 group-hover:scale-150 transition-transform" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents / Checklist */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-[3rem] p-12 shadow-2xl shadow-blue-900/5 border border-slate-100">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ClipboardList className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Onboarding Checklist</h3>
                <p className="text-slate-500">Essential documentation required to initiate your manufacturing line.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Approved Brand Name & Logo",
                  "Valid Possession of Drug License",
                  "Company / Firm GST Registration",
                  "Trade Mark Certificate Copy"
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-red-50 transition-colors group">
                    <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center text-slate-300 group-hover:text-red-500 shadow-sm transition-colors">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* High-Impact CTA */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-red-600" />
          <div className="absolute inset-0 bg-[#0A0F1D] translate-y-full rounded-t-[10rem]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build Your <br /> <span className="opacity-80 underline decoration-red-300">Own Medical Brand?</span></h2>
            <p className="text-xl text-red-50 max-w-2xl mx-auto mb-12 opacity-80">
              Contact our partnership leads for a customized capability assessment and direct factory pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+919950241240" className="px-10 py-5 bg-white text-red-600 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all flex items-center gap-3">
                <PhoneCall className="w-6 h-6" /> +91 9950241240
              </a>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-10 py-5 bg-red-800 text-white rounded-2xl font-bold text-xl hover:bg-black transition-all flex items-center gap-3"
              >
                Get Custom Pricing <FileText className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modernized Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] p-10 max-w-2xl w-full relative shadow-3xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-10 text-center">
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Partner with TNX</h3>
                <p className="text-slate-500">Fill out your requirements for an instant factory quote.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Business Phone</label>
                    <input type="tel" placeholder="+91 0000 000 000" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Corporate Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Primary Product Focus</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all appearance-none cursor-pointer">
                    <option>IV Infusion Sets</option>
                    <option>Disposable Syringes</option>
                    <option>Surgical Disposables</option>
                    <option>Custom ODM Project</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Project Details</label>
                  <textarea rows={4} placeholder="Describe your branding and volume requirements..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none" />
                </div>

                <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl shadow-slate-900/10">
                  Send Project Inquiry
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}