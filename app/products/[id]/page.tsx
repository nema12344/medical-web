'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  MessageCircle,
  Download,
  Shield,
  Clock,
  CheckCircle2,
  Info,
  CheckCircle,
  Check,
  Truck,
  Award,
  FileText,
  Settings,
  Zap
} from 'lucide-react';
import Footer from '../../components/Footer';

const productData = {
  '1': {
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
  },
  '2': {
    id: 2,
    name: 'Surgical Disposables Kit',
    category: 'Surgical Items',
    shortDescription: 'Comprehensive kit of high-quality sterile disposable items for surgical procedures, ensuring maximum safety and hygiene.',
    images: [
      '/images/DISPOSABLE-SURGICAL-ITEMS.png',
      '/images/Iv-Infusion-set-Premium.png',
      '/images/coronavirus-arrangement-with-blood-samples-vaccine.jpg'
    ],
    specifications: [
      { icon: Shield, label: 'Material', value: 'Sterile Fabrics' },
      { icon: Award, label: 'Quality', value: 'ISO 13485' },
      { icon: CheckCircle, label: 'Type', value: 'Complete Surgical Set' }
    ]
  },
  '3': {
    id: 3,
    name: 'Medical Syringes Set',
    category: 'Injection Equipment',
    shortDescription: 'Precision-engineered sterile disposable syringes for accurate medication delivery and various medical applications.',
    images: [
      '/images/coronavirus-arrangement-with-vaccine-bottle-syringe.jpg',
      '/images/Iv-Infusion-set-Premium.png'
    ],
    specifications: [
      { icon: Shield, label: 'Material', value: 'Polypropylene' },
      { icon: Award, label: 'Standard', value: 'Hospital Grade' }
    ]
  },
  '4': {
    id: 4,
    name: 'Blood Collection System',
    category: 'Diagnostic Equipment',
    shortDescription: 'Safe and reliable blood collection systems designed for diagnostic accuracy and patient comfort.',
    images: [
      '/images/coronavirus-arrangement-with-blood-samples-vaccine.jpg',
      '/images/medical-equipment.jpg'
    ],
    specifications: [
      { icon: Shield, label: 'Safety', value: 'Vacuum Sealed' },
      { icon: Award, label: 'Use', value: 'Diagnostic' }
    ]
  },
  '5': {
    id: 5,
    name: 'Surgical Disposables Kit',
    category: 'Other Medical Disposables',
    shortDescription: 'High-quality surgical disposables kit for general medical use with sterile packaging.',
    images: [
      '/images/Disposable surgical-items.jpg',
      '/images/DISPOSABLE-SURGICAL-ITEMS.png'
    ],
    specifications: [
      { icon: Shield, label: 'Material', value: 'Medical Grade' },
      { icon: Award, label: 'Sterility', value: 'ETO Sterilized' }
    ]
  },
  '6': {
    id: 6,
    name: 'Oxygen Therapy Equipment',
    category: 'Anaesthesia & Respiratory',
    shortDescription: 'Advanced oxygen therapy equipment for respiratory support and clinical hyperbaric treatments.',
    images: [
      '/images/mid-adult-man-breathing-through-mask-hyperbaric-oxygen-therapy-clinic.jpg',
      '/images/medical-equipment.jpg'
    ],
    specifications: [
      { icon: Shield, label: 'Application', value: 'Respiratory Care' },
      { icon: Award, label: 'Technology', value: 'High-flow System' }
    ]
  },
  '7': {
    id: 7,
    name: 'Blood Sample Collection Kit',
    category: 'Transfusion Therapy',
    shortDescription: 'Sterile blood collection kit with vacuum tubes and safety needles for laboratory testing.',
    images: [
      '/images/coronavirus-arrangement-with-blood-samples-vaccine.jpg'
    ],
    specifications: [
      { icon: Shield, label: 'Components', value: 'Full Kit' },
      { icon: Award, label: 'Safety', value: 'Needle Protection' }
    ]
  },
  '8': {
    id: 8,
    name: 'Vaccine Administration Set',
    category: 'Infusion Therapy',
    shortDescription: 'Complete vaccine administration set with high-precision syringes and safety needles.',
    images: [
      '/images/coronavirus-arrangement-with-vaccine-bottle-syringe.jpg'
    ],
    specifications: [
      { icon: Shield, label: 'Accuracy', value: 'High Precision' },
      { icon: Award, label: 'Type', value: 'Safe Injection' }
    ]
  },
  '9': {
    id: 9,
    name: 'Patient Monitoring System',
    category: 'Anaesthesia & Respiratory',
    shortDescription: 'Advanced patient monitoring system for vital signs and continuous physiological tracking.',
    images: [
      '/images/doctor-monitoring-patient-s-pulse.jpg'
    ],
    specifications: [
      { icon: Shield, label: 'Monitoring', value: 'Vital Signs' },
      { icon: Award, label: 'Reliability', value: '24/7 Monitoring' }
    ]
  },
  '10': {
    id: 10,
    name: 'Operating Room Equipment',
    category: 'Other Medical Disposables',
    shortDescription: 'Comprehensive equipment set for operating rooms ensuring surgical efficiency and hygiene.',
    images: [
      '/images/many-kind-medical-equipment-manage-surgeon-start-operations-operating-room.jpg'
    ],
    specifications: [
      { icon: Shield, label: 'Environment', value: 'Operating Room' },
      { icon: Award, label: 'Hygiene', value: 'Surgical Standard' }
    ]
  }
};

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = productData[id as keyof typeof productData];
  const relatedProducts = [];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12 font-sans overflow-x-hidden">


      <main className="flex-1 pb-24 md:pb-0">
        {/* Breadcrumb Navigation - Refined */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <nav className="text-sm font-medium flex items-center gap-2 overflow-x-auto">
              <span className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap">Home</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap">Products</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors whitespace-nowrap">{product.category}</span>
              <span className="text-gray-300">/</span>
              <span className="text-blue-600 font-semibold whitespace-nowrap">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Main Product Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">

            {/* Left Side - Gallery (Span 7 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative group overflow-hidden">
                <div className="flex items-start gap-2 justify-between">
                  <div className="flex flex-col items-start gap-2 text-blue-600 text-sm font-bold uppercase tracking-wide">
                    <div className="space-y-4">

                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        {product.name}
                      </h1>

                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        {product.category}</div>
                    </div>
                  </div>
                  <div className=" bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg mt-2">
                    Premium Quality
                  </div>
                </div>
                <div className="relative aspect-square md:aspect-[4/3] w-full flex items-center justify-center bg-gray-50/50 rounded-2xl">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    width={800}
                    height={600}
                    className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500 ease-out"
                    priority
                  />
                </div>
                {/* Header */}


                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.shortDescription}
                </p>
              </div>

              {/* Thumbnails */}
              {/* <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === index
                      ? 'border-blue-600 ring-2 ring-blue-100 ring-offset-2'
                      : 'border-transparent hover:border-gray-300 bg-white'
                      }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover p-2"
                    />
                  </button>
                ))}
              </div> */}

              {/* Medical Specifications Grid - Moved here for better flow on mobile, but keep structure */}
              <div className="mt-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-blue-600" />
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-sm text-gray-500 mb-1">Material Composition</div>
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-500" />
                      Medical-grade PVC
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-sm text-gray-500 mb-1">Sterilization Method</div>
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500" />
                      ETO Gas Sterilized
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-sm text-gray-500 mb-1">Compliance Standards</div>
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-500" />
                      ISO 13485, CE Mark
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-sm text-gray-500 mb-1">Packaging Format</div>
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      Sterile Peel Pouch
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Product Info (Span 5 cols) */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100/50 backdrop-blur-sm">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-100">
                      <Check className="w-4 h-4" /> In Stock
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100">
                      <Award className="w-4 h-4" /> ISO Certified
                    </span>
                  </div>



                  {/* Key Features List */}
                  <div className="space-y-3 mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    {product.specifications.map((spec, index) => {
                      const IconComponent = spec.icon;
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-600">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm">{spec.label}: <span className="text-gray-900">{spec.value}</span></span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Actions */}
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4.5 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 transform hover:-translate-y-0.5 flex items-center justify-center gap-3">
                      <FileText className="w-5 h-5" />
                      Request Price Quote
                    </button>

                    <div className="grid grid-cols-2 gap-4">
                      <button className="bg-white border border-gray-200 hover:border-green-500 hover:bg-green-50/50 text-gray-700 hover:text-green-700 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                        <MessageCircle className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                        WhatsApp
                      </button>
                      <button className="bg-white border border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 text-gray-700 hover:text-blue-700 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                        <Download className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                        Brochure
                      </button>
                    </div>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center gap-6 text-gray-400 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex flex-col items-center gap-1">
                      <Shield className="w-6 h-6" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Secure</span>
                    </div>
                    <div className="w-px h-8 bg-gray-100"></div>
                    <div className="flex flex-col items-center gap-1">
                      <Clock className="w-6 h-6" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Fast Support</span>
                    </div>
                    <div className="w-px h-8 bg-gray-100"></div>
                    <div className="flex flex-col items-center gap-1">
                      <Award className="w-6 h-6" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Certified</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Improved Related Products Section */}
        <div className="bg-white border-t border-gray-100 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-50/50 -skew-y-3 transform origin-top-right"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Frequently Bought Together</h2>
                <p className="text-gray-500">Complementary medical equipment for your facility</p>
              </div>
              <button className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                View All Products <div className="w-6 h-0.5 bg-blue-600"></div>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Product Card 1 */}
              <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="relative aspect-[4/3] mb-4 bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src="/images/DISPOSABLE-SURGICAL-ITEMS.png"
                    alt="Surgical Disposables"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-blue-600 p-2 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">Surgical Disposables</h3>
                <p className="text-sm text-gray-500 line-clamp-2">Complete sterile surgical kit for various medical procedures</p>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="relative aspect-[4/3] mb-4 bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src="/images/coronavirus-arrangement-with-vaccine-bottle-syringe.jpg"
                    alt="Medical Syringes"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-blue-600 p-2 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">Precision Syringes</h3>
                <p className="text-sm text-gray-500 line-clamp-2">High-precision syringes for accurate medication delivery</p>
              </div>

              {/* Product Card 3 */}
              <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="relative aspect-[4/3] mb-4 bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src="/images/coronavirus-arrangement-with-blood-samples-vaccine.jpg"
                    alt="Blood Collection"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-blue-600 p-2 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">Blood Collection</h3>
                <p className="text-sm text-gray-500 line-clamp-2">Safe and reliable blood sampling/collection equipment</p>
              </div>

              {/* Product Card 4 */}
              <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
                <div className="relative aspect-[4/3] mb-4 bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src="/images/doctor-monitoring-patient-s-pulse.jpg"
                    alt="Catheter Systems"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-blue-600 p-2 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">Catheter Systems</h3>
                <p className="text-sm text-gray-500 line-clamp-2">Advanced catheter solutions for medical interventions</p>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />

      {/* Floating Action Button (Mobile Only) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center transition-transform active:scale-95">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

// Helper icon for related products
function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
}
