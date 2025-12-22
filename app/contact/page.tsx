'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Map from '../components/Map';
import { FiMail, FiPhone, FiMapPin, FiClock, FiArrowRight, FiHelpCircle, FiPlus, FiMinus, FiUsers, FiAward, FiTruck, FiVoicemail } from 'react-icons/fi';
import { useState } from 'react';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of medical disposables do you manufacture?",
      answer: "We manufacture a comprehensive range including IV infusion sets, surgical disposables, blood collection systems, respiratory care equipment, and various medical devices. All products are FDA approved and ISO certified."
    },
    {
      question: "Do you offer custom manufacturing services?",
      answer: "Yes, we provide OEM and custom manufacturing services. Our experienced team can work with you to develop products that meet your specific requirements and regulatory standards."
    },
    {
      question: "What are your minimum order quantities?",
      answer: "Minimum order quantities vary by product type. For standard products, MOQs typically start at 1,000 units. For custom products, we can discuss flexible arrangements based on your needs."
    },
    {
      question: "How long does shipping take for international orders?",
      answer: "International shipping typically takes 7-14 business days depending on the destination. We work with reliable logistics partners to ensure safe and timely delivery of all orders."
    }
  ];

  const stats = [
    { icon: FiUsers, number: "500+", label: "Global Clients" },
    { icon: FiAward, number: "99.8%", label: "Quality Rate" },
    { icon: FiTruck, number: "40+", label: "Countries Served" }
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for inquiries, partnerships, or support. We're here to help you with all your medical disposable needs.
          </p>
        </div>
      </section>

      {/* Contact Section - Two Column Layout */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50/30">
        <div className="max-w-7xl mx-auto px-8">
          {/* Floating decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute bottom-40 right-20 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}} />
          </div>
          
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Company Info Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-3xl p-8 h-full relative overflow-hidden shadow-2xl">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-spin" style={{animationDuration: '20s'}} />
                    <div className="absolute top-20 right-20 w-16 h-16 border border-white rounded-lg rotate-45 animate-pulse" />
                    <div className="absolute bottom-20 left-20 w-12 h-12 bg-white rounded-full animate-bounce" style={{animationDelay: '1s'}} />
                    <div className="absolute bottom-10 right-10 w-8 h-8 border-2 border-white rounded-full animate-ping" style={{animationDelay: '2s'}} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative max-w-sm mx-auto z-10 text-white h-full flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-8">TNX Medical</h2>
                    
                    {/* Address */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Our Address</h3>
                      <p className="text-white/90 leading-relaxed">
                         Plot No ? 8, Asha Vihar, Colony, Rani Sati Nagar, Shyam Nagar (Jaipur), Jaipur, Jaipur,
                          Rajasthan, India, 302019
                      </p>
                    </div>
                    
                    {/* Our Products Button */}
                    <div className="mb-8">
                      <button className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm  rounded-full px-6 py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20">
                        <span className="font-medium">Our Products</span>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                          <FiArrowRight className="w-4 h-4" />
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  {/* Bottom Info */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <FiPhone className="w-5 h-5" />
                      <span className="text-white/90">+1 (555) 123-4567</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <FiMapPin className="w-5 h-5" />
                      <span className="text-white/90"> Jaipur, Rajasthan, 302019</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <FiMail className="w-5 h-5" />
                      <span className="text-white/90">tnxsurgical@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full" />
                    <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Have questions about our medical disposables? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                
                <form className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  
                  {/* Inquiry */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Inquiry</label>
                    <textarea 
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Please describe your inquiry or requirements..."
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="group relative w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/40 hover:scale-[1.02] overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}        
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to the most commonly asked questions about our products and services.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-white rounded-2xl border border-gray-100 hover:border-red-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-red-50/50 hover:to-transparent transition-all duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4 group-hover:text-red-700 transition-colors">{faq.question}</span>
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFaq === index 
                        ? 'bg-red-500 text-white rotate-180' 
                        : 'bg-gray-100 text-gray-400 group-hover:bg-red-50 group-hover:text-red-500'
                    }`}>
                      {openFaq === index ? (
                        <FiMinus className="w-4 h-4" />
                      ) : (
                        <FiPlus className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-red-300 mb-4 rounded-full" />
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Redesigned with Cards */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-red-900 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-4 h-full">
            {Array.from({length: 32}).map((_, i) => (
              <div key={i} className="border-l border-white/20 animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted Worldwide</h2>
            <p className="text-gray-300 text-lg">Numbers that speak for our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group relative">
                  {/* Card with neon effect */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:border-red-400/50 hover:shadow-2xl hover:shadow-red-500/20">
                    {/* Glowing icon */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/30">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 w-20 h-20 mx-auto bg-red-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    </div>
                    
                    {/* Animated counter */}
                    <div className="text-5xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium text-lg">{stat.label}</div>
                    
                    {/* Bottom accent line */}
                    <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-red-500 to-red-300 mx-auto mt-4 transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Map Section - Redesigned */}
      <section className="py-20 bg-white relative">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-red-200 rotate-45 animate-bounce" style={{animationDelay: '0s'}} />
          <div className="absolute top-40 right-20 w-6 h-6 border-2 border-red-300 rounded-full animate-spin" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-20 right-1/3 w-5 h-5 border border-red-200 rotate-12 animate-bounce" style={{animationDelay: '2s'}} />
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-500" />
              <FiMapPin className="w-6 h-6 text-red-500" />
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-500" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Facility</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Located in the heart of the medical district with easy access and parking.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Interactive Map Card */}
            <div className="lg:col-span-2">
              <Map address="Plot No 8, Asha Vihar, Colony, Rani Sati Nagar, Shyam Nagar (Jaipur), Jaipur, Jaipur, Rajasthan, India, 302019" />
            </div>
            
            {/* Location Cards */}
            <div className="space-y-6">
              {/* Facility Info Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-8 bg-gradient-to-b from-red-500 to-red-300 rounded-full" />
                  <h3 className="font-bold text-gray-900 text-lg">Facility Info</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: '🔒', text: '24/7 Security' },
                    { icon: '🚗', text: 'Free Parking' },
                    { icon: '♿', text: 'Wheelchair Access' },
                    { icon: '🚌', text: 'Public Transport' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}}>
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-gray-600 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Contact Card */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="font-bold text-lg mb-4">Quick Contact</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <FiPhone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiClock className="w-4 h-4" />
                    <span>Mon-Fri: 9AM-6PM</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg py-2 px-4 text-sm font-medium transition-all duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}