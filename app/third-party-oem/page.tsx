'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiCheck, FiArrowRight, FiShield, FiAward, FiTruck, FiUsers, FiFileText, FiPhone, FiX } from 'react-icons/fi';

export default function ThirdPartyOEMPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [citySearch, setCitySearch] = useState('');
  const [stateSearch, setStateSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur',
    'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara'
  ];

  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
    'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
    'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const filteredCities = cities.filter(city => 
    city.toLowerCase().includes(citySearch.toLowerCase())
  );
  
  const filteredStates = states.filter(state => 
    state.toLowerCase().includes(stateSearch.toLowerCase())
  );
  const services = [
    {
      title: "Third Party Contract Manufacturing",
      description: "High-quality medical product manufacturing under your brand name"
    },
    {
      title: "OEM / Private Label Manufacturing",
      description: "Customized products with your brand name and logo"
    },
    {
      title: "Custom Packaging and Branding",
      description: "Attractive and professional packaging design services"
    },
    {
      title: "Label Design Support",
      description: "Label design assistance with regulatory compliance"
    }
  ];

  const products = [
    "IV Infusion Sets", "Blood Transfusion Sets", "Scalp Vein Sets",
    "Urine Bags", "IV Cannulas", "Oxygen Masks", "Nebulizer Masks",
    "Disposable Syringes", "Surgical Gloves", "Other Disposable Medical Products"
  ];

  const whyChooseUs = [
    { icon: FiUsers, title: "Trusted & Experienced Team", desc: "15+ years of medical industry experience" },
    { icon: FiAward, title: "High Quality Products", desc: "Manufactured according to international standards" },
    { icon: FiTruck, title: "Timely Supply", desc: "Guaranteed delivery on scheduled time" },
    { icon: FiShield, title: "Brand Confidentiality", desc: "Complete protection of your brand information" }
  ];

  const documents = [
    "Brand Name & Logo", "Drug License", "GST Certificate", "Company / Firm Information"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Third Party / OEM Manufacturing
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            At TNX Surgical, we provide reliable third-party contract manufacturing and OEM branding services for disposable surgical and medical products.
          </p>
        </div>
      </section>

      {/* What is Third Party/OEM Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What is Third Party / OEM Manufacturing?</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Third-party manufacturing is a business arrangement where we manufacture high-quality medical products under your brand name. This service is ideal for companies that want to build their brand but don't want to invest in manufacturing infrastructure.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who can benefit:</h3>
              <ul className="space-y-3">
                {[
                  "Medical Distributors",
                  "Healthcare Startups",
                  "Pharmaceutical Companies",
                  "Medical Equipment Traders",
                  "Hospital Chains"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <FiCheck className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiAward className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Brand, Our Quality</h3>
                <p className="text-gray-600">
                  We manufacture the highest quality medical products while maintaining your brand identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">TNX Surgical Third Party / OEM Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-red-50/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Range</h2>
            <p className="text-lg text-gray-600">We provide third-party manufacturing services for the following medical products:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <a key={index} href="/products" className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:bg-[#fff5f5] hover:border-red-200 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <span className="font-medium text-gray-900">{product}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Manufacturing & Quality Standards</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Modern Manufacturing Unit", desc: "State-of-the-art machinery and technology" },
              { title: "Sterilization Process", desc: "ETO and Gamma sterilization" },
              { title: "Quality Control", desc: "Quality inspection at every stage" },
              { title: "Certifications", desc: "ISO, WHO-GMP, CE standards" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiShield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose TNX Surgical?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Required Documents</h2>
            <p className="text-lg text-gray-600">The following documents are required to start third-party manufacturing:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 border border-red-100 text-center">
                <FiFileText className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <span className="font-medium text-gray-900">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Contact Us for Third Party / OEM Manufacturing
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Connect with us today to grow your medical business
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919950241240" className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <FiPhone className="w-5 h-5" />
              +91 9950241240
            </a>
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-red-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-900 transition-colors flex items-center justify-center gap-2"
            >
              Request Quote
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-3xl p-8 pt-6 max-w-xl w-full relative">
            <button 
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-7 right-8 text-gray-400 hover:text-white"
            >
              <FiX className="w-5 h-5" />
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-2">Request Quote</h3>
            <div className="flex items-center gap-3 mb-6">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="text-white/90 text-sm">+91 9950241240</span>
            </div>
            
            <form className="space-y-4">
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                />
            
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="City"
                    value={selectedCity || citySearch}
                    onChange={(e) => {
                      setCitySearch(e.target.value);
                      setSelectedCity('');
                      setShowCityDropdown(true);
                    }}
                    onFocus={() => setShowCityDropdown(true)}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                  />
                  {showCityDropdown && filteredCities.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-slate-600 border border-slate-500 rounded-lg mt-1 max-h-40 overflow-y-auto z-10">
                      {filteredCities.slice(0, 5).map((city) => (
                        <button
                          key={city}
                          type="button"
                          onClick={() => {
                            setSelectedCity(city);
                            setCitySearch('');
                            setShowCityDropdown(false);
                          }}
                          className="w-full text-left px-4 py-2 text-white hover:bg-slate-500 transition-colors"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="State"
                    value={selectedState || stateSearch}
                    onChange={(e) => {
                      setStateSearch(e.target.value);
                      setSelectedState('');
                      setShowStateDropdown(true);
                    }}
                    onFocus={() => setShowStateDropdown(true)}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                  />
                  {showStateDropdown && filteredStates.length > 0 && (
                    <div className="absolute top-full left-0 right-0 bg-slate-600 border border-slate-500 rounded-lg mt-1 max-h-40 overflow-y-auto z-10">
                      {filteredStates.slice(0, 5).map((state) => (
                        <button
                          key={state}
                          type="button"
                          onClick={() => {
                            setSelectedState(state);
                            setStateSearch('');
                            setShowStateDropdown(false);
                          }}
                          className="w-full text-left px-4 py-2 text-white hover:bg-slate-500 transition-colors"
                        >
                          {state}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
             </div>
              
              <div>
                <textarea 
                  placeholder="Product Requirements"
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}