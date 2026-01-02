'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Download, FileText, Shield, Award, CheckCircle, Check, MessageCircle, Phone, Settings, Clock, Zap } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const product = {
  id: 1,
  name: 'IV Infusion Set Premium',
  category: 'IV Equipment',
  shortDescription: 'Professional-grade sterile IV infusion set engineered for precision flow control and optimal patient safety in clinical environments.',
  images: [
    '/images/Iv-Infusion-set-Premium.png',
    '/images/DISPOSABLE-SURGICAL-ITEMS.png',
    '/images/coronavirus-arrangement-with-vaccine-bottle-syringe.jpg',
    '/images/coronavirus-arrangement-with-blood-samples-vaccine.jpg'
  ],
  specifications: [
    { icon: Shield, label: 'Material', value: 'Medical-grade PVC, DEHP-free' },
    { icon: Award, label: 'Sterilization', value: 'ETO Gas Sterilized' },
    { icon: CheckCircle, label: 'Tube Length', value: '150cm ± 5cm' },
    { icon: Shield, label: 'Drop Factor', value: '20 drops/ml ± 10%' }
  ]
};

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pb-24 md:pb-0">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="text-sm font-medium">
            <span className="text-gray-500 hover:text-gray-700 cursor-pointer">Home</span>
            <span className="text-gray-400 mx-2">&gt;</span>
            <span className="text-gray-500 hover:text-gray-700 cursor-pointer">Products</span>
            <span className="text-gray-400 mx-2">&gt;</span>
            <span className="text-gray-500 hover:text-gray-700 cursor-pointer">{product.category}</span>
            <span className="text-gray-400 mx-2">&gt;</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Premium Product Detail Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Side - Product Image Gallery */}
            <div className="space-y-6">
              {/* Main Product Image */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={600}
                  height={500}
                  className="w-full h-96 object-contain"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-blue-500 shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Product Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="space-y-6">
                  {/* Product Name */}
                  <h1 className="text-4xl font-bold text-gray-900">
                    {product.name}
                  </h1>
                  
                  {/* Medical Description */}
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {product.shortDescription}
                  </p>
                  
                  {/* Key Specifications with Icons */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Key Specifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.specifications.map((spec, index) => {
                        const IconComponent = spec.icon;
                        return (
                          <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{spec.label}</div>
                              <div className="text-sm text-gray-600">{spec.value}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="space-y-4">
                    {/* Primary CTA */}
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3">
                      <FileText className="w-5 h-5" />
                      Send Product Enquiry
                    </button>
                    
                    {/* Secondary CTAs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Enquiry
                      </button>
                      <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medical Product Specifications Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Medical Product Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Material Specification */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Material</h4>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Composition</div>
                <div className="font-medium text-gray-900">Medical-grade PVC</div>
                <div className="text-sm text-gray-600">DEHP-free, Latex-free</div>
              </div>
            </div>

            {/* Usage Specification */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Usage</h4>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Application</div>
                <div className="font-medium text-gray-900">Single-use disposable</div>
                <div className="text-sm text-gray-600">IV fluid administration</div>
              </div>
            </div>

            {/* Sterilization Specification */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Sterilization</h4>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Method</div>
                <div className="font-medium text-gray-900">ETO Gas Sterilization</div>
                <div className="text-sm text-gray-600">Pyrogen-free</div>
              </div>
            </div>

            {/* Warranty Specification */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Warranty</h4>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Shelf Life</div>
                <div className="font-medium text-gray-900">5 Years</div>
                <div className="text-sm text-gray-600">From manufacturing date</div>
              </div>
            </div>

            {/* Compliance Specification */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Compliance</h4>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Standards</div>
                <div className="font-medium text-gray-900">ISO 13485, CE Mark</div>
                <div className="text-sm text-gray-600">FDA 510(k) cleared</div>
              </div>
            </div>

            {/* Packaging Specification */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Packaging</h4>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">Format</div>
                <div className="font-medium text-gray-900">Sterile peel pouch</div>
                <div className="text-sm text-gray-600">50 units per box</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Related Medical Equipment</h2>
            <p className="text-lg text-gray-600">Explore our comprehensive range of medical devices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/DISPOSABLE-SURGICAL-ITEMS.png"
                  alt="Surgical Disposables"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Surgical Disposables Kit
                </h3>
                <p className="text-gray-600">
                  Complete sterile surgical kit for various medical procedures
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/coronavirus-arrangement-with-vaccine-bottle-syringe.jpg"
                  alt="Medical Syringes"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Medical Syringes Set
                </h3>
                <p className="text-gray-600">
                  Precision syringes for accurate medication delivery
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/coronavirus-arrangement-with-blood-samples-vaccine.jpg"
                  alt="Blood Collection"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Blood Collection System
                </h3>
                <p className="text-gray-600">
                  Safe and reliable blood sampling equipment
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/doctor-monitoring-patient-s-pulse.jpg"
                  alt="Catheter Systems"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300 flex items-center justify-center">
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Catheter Systems
                </h3>
                <p className="text-gray-600">
                  Advanced catheter solutions for medical interventions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 rounded-2xl font-semibold text-lg transition-colors duration-300">
            Check All Products
          </button>
        </div>
      </div>
      </main>

      <Footer />

      {/* Sticky Enquiry CTA */}
      {/* Mobile Bottom Fixed Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50 md:hidden">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition-colors duration-300">
          Enquire Now
        </button>
      </div>

      {/* Desktop Inline CTA */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl transition-colors duration-300 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition-colors duration-300 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </button>
            <div className="text-sm text-gray-600">
              <div className="font-semibold text-gray-900">Need Help?</div>
              <div>Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
