import { FiArrowRight } from 'react-icons/fi';
import AboutSection from './AboutSection';

export default function Features(){
  return (
    <section className="py-20" style={{backgroundColor: '#142633'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div>
            {/* Green Label */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{backgroundColor: 'rgba(208, 37, 44, 0.1)', color: '#D0252C'}}>
              World Class Quality Surgical Products!
            </div>
            
            {/* Big Bold Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Providing Value To Our Clients Through Ongoing Product & Innovation In Surgical Disposables.
            </h2>
          </div>

          {/* Right Column */}
          <div>
            {/* Description Paragraphs */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                We are committed to delivering exceptional surgical disposables that meet the highest industry standards. Our innovative approach ensures that healthcare professionals have access to reliable, safe, and effective medical products.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through continuous research and development, we maintain our position as a trusted partner in the healthcare industry, providing solutions that enhance patient care and surgical outcomes worldwide.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity" style={{backgroundColor: '#D0252C'}}>
                <span>Tnx Surgical</span>
                <FiArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-xl text-white font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-colors">
                Explore Products
              </button>
            </div>
          </div>

        </div>
      </div>
      <AboutSection />      
    </section>
  )
}