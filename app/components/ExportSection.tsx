'use client';
import { FiArrowRight } from 'react-icons/fi';

export default function ExportSection() {
  const stats = [
    {
      number: "40+",
      title: "Countries Served",
      description: "Global reach across multiple continents with established distribution networks"
    },
    {
      number: "200+",
      title: "Export Partners",
      description: "Trusted relationships with healthcare distributors and medical institutions worldwide"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-12">
        
        {/* Top Two-Column Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{backgroundColor: 'rgba(208, 37, 44, 0.1)', color: '#D0252C'}}>
              Global Export Excellence
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{color: '#1A1A1A'}}>
              Delivering Quality<br />
              Medical Solutions<br />
              Across the Globe
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our commitment to excellence extends beyond borders. With a robust export infrastructure and international quality certifications, we serve healthcare providers worldwide, ensuring that our premium medical products reach those who need them most, regardless of geographical boundaries.
            </p>
            <button className="self-start px-8 py-4 rounded-lg font-bold text-white flex items-center gap-2 hover:opacity-90 transition-opacity" style={{backgroundColor: '#D0252C'}}>
              <span>Explore Export Markets</span>
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* World Map Section with Stats */}
        <div className="relative">
          
          {/* World Map Background */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden" style={{backgroundColor: '#f8fafc'}}>
            {/* Map placeholder - replace with actual world map image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20">
                <path d="M150,200 Q200,150 300,180 T500,200 T700,180 Q800,150 850,200" stroke="#D0252C" strokeWidth="2" fill="none"/>
                <path d="M100,300 Q200,250 400,280 T700,300 T900,280" stroke="#D0252C" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            
            {/* Pulsating Markers */}
            <div className="absolute top-1/3 left-1/4">
              <div className="w-4 h-4 rounded-full animate-pulse" style={{backgroundColor: '#D0252C'}}></div>
              <div className="absolute inset-0 w-4 h-4 rounded-full animate-ping" style={{backgroundColor: 'rgba(208, 37, 44, 0.3)'}}></div>
            </div>
            <div className="absolute top-1/2 left-1/2">
              <div className="w-4 h-4 rounded-full animate-pulse" style={{backgroundColor: '#D0252C'}}></div>
              <div className="absolute inset-0 w-4 h-4 rounded-full animate-ping" style={{backgroundColor: 'rgba(208, 37, 44, 0.3)'}}></div>
            </div>
            <div className="absolute top-2/5 right-1/4">
              <div className="w-4 h-4 rounded-full animate-pulse" style={{backgroundColor: '#D0252C'}}></div>
              <div className="absolute inset-0 w-4 h-4 rounded-full animate-ping" style={{backgroundColor: 'rgba(208, 37, 44, 0.3)'}}></div>
            </div>
            <div className="absolute bottom-1/3 left-1/3">
              <div className="w-4 h-4 rounded-full animate-pulse" style={{backgroundColor: '#D0252C'}}></div>
              <div className="absolute inset-0 w-4 h-4 rounded-full animate-ping" style={{backgroundColor: 'rgba(208, 37, 44, 0.3)'}}></div>
            </div>
            <div className="absolute top-1/4 right-1/3">
              <div className="w-4 h-4 rounded-full animate-pulse" style={{backgroundColor: '#D0252C'}}></div>
              <div className="absolute inset-0 w-4 h-4 rounded-full animate-ping" style={{backgroundColor: 'rgba(208, 37, 44, 0.3)'}}></div>
            </div>
          </div>

          {/* Right-side Floating Stats */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-8 max-w-sm">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2" style={{color: '#D0252C'}}>
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-bold italic mb-3" style={{color: '#1A1A1A'}}>
                    {stat.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
                {index < stats.length - 1 && (
                  <hr className="my-6 border-gray-200" />
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}