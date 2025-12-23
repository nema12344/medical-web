import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductListing from '../components/ProductListing';
import { FiCheck, FiShield, FiTruck, FiDroplet, FiScissors, FiHeart, FiWind } from 'react-icons/fi';

export default function ProductsPage() {
  const categories = [
    {
      title: "IV Infusion Sets",
      description: "Premium quality sterile IV sets for safe fluid administration",
      features: ["Sterile packaging", "Needle-free design", "Flow control"],
      icon: FiDroplet,
      gradient: "from-red-400 to-red-600",
      bgPattern: "bg-gradient-to-br from-red-50 to-red-100"
    },
    {
      title: "Surgical Disposables",
      description: "Complete range of surgical instruments and disposables",
      features: ["Single-use design", "Medical grade materials", "ISO certified"],
      icon: FiScissors,
      gradient: "from-red-500 to-red-700",
      bgPattern: "bg-gradient-to-br from-red-50 to-red-100"
    },
    {
      title: "Blood Collection",
      description: "Safe and reliable blood collection systems",
      features: ["Vacuum technology", "Safety mechanisms", "Multiple sizes"],
      icon: FiHeart,
      gradient: "from-red-600 to-red-800",
      bgPattern: "bg-gradient-to-br from-red-50 to-red-100"
    },
    {
      title: "Respiratory Care",
      description: "Oxygen masks and respiratory support equipment",
      features: ["Comfortable fit", "Clear visibility", "Adjustable straps"],
      icon: FiWind,
      gradient: "from-red-500 to-red-600",
      bgPattern: "bg-gradient-to-br from-red-50 to-red-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive range of medical disposables designed for safety, reliability, and superior performance in healthcare settings.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Medical Device Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of FDA-approved medical disposables engineered for precision, safety, and reliability in clinical environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-red-200 hover:shadow-lg transition-all duration-300">
                  <div className="lg:flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 mb-4 lg:mb-0 ">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-sm">
                        <Icon className="w-8 h-8   text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {category.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2">
                        {category.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Learn More Link */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                          <span>View Products</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Listing Component */}
      <ProductListing />

      {/* Quality Assurance */}
      <section className="lg:py-20 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Regulatory Compliance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our manufacturing processes adhere to the highest international standards, ensuring product safety and regulatory compliance across global markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6">
                <FiShield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ISO 13485 Certified</h3>
              <p className="text-gray-600 leading-relaxed">Medical device quality management system certification ensuring consistent product quality and regulatory compliance.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6">
                <FiCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">FDA Approved</h3>
              <p className="text-gray-600 leading-relaxed">Rigorous testing protocols and validation processes ensure all products meet FDA safety and efficacy requirements.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-6">
                <FiTruck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Distribution</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive supply chain management with temperature-controlled logistics ensuring product integrity worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}