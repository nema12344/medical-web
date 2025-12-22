'use client';
import { FiArrowRight, FiGlobe, FiTrendingUp, FiUsers, FiAward } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function ExportSection() {
  const [activeMarker, setActiveMarker] = useState(0);
  const [countUp, setCountUp] = useState({ countries: 0, partners: 0, years: 0, quality: 0 });

  const stats = [
    { number: 40, suffix: "+", title: "Countries Served", icon: FiGlobe, color: "from-red-400 to-red-600" },
    { number: 200, suffix: "+", title: "Export Partners", icon: FiUsers, color: "from-red-500 to-red-700" },
    { number: 15, suffix: "+", title: "Years Experience", icon: FiTrendingUp, color: "from-red-400 to-red-600" },
    { number: 99.8, suffix: "%", title: "Quality Rate", icon: FiAward, color: "from-red-500 to-red-700" }
  ];

  const markers = [
    { id: 0, x: "25%", y: "30%", region: "North America", clients: "45+" },
    { id: 1, x: "30%", y: "65%", region: "South America", clients: "28+" },
    { id: 2, x: "50%", y: "25%", region: "Europe", clients: "67+" },
    { id: 3, x: "55%", y: "55%", region: "Africa", clients: "32+" },
    { id: 4, x: "75%", y: "35%", region: "Asia Pacific", clients: "89+" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMarker((prev) => (prev + 1) % markers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountUp({
        countries: 40,
        partners: 200,
        years: 15,
        quality: 99.8
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dark Background with Red Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800" />
      
      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header with Morphing Text */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-4xl flex space-x-2 justify-center font-black mb-8 leading-tight">
            <span className="block text-white">Connecting</span>
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-pulse">
              Healthcare
            </span>
            <span className="block text-white">Worldwide</span>
          </h2>
        </div>

        {/* Animated Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Animated Number */}
                <div className={`text-4xl lg:text-5xl font-black mb-3 text-center bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {Object.values(countUp)[index]}{stat.suffix}
                </div>
                
                <h3 className="text-lg font-semibold text-white text-center mb-2">
                  {stat.title}
                </h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                    style={{ width: countUp ? '100%' : '0%', transitionDelay: `${index * 0.3}s` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA with Magnetic Effect */}
        <div className="text-center mt-20">
          <button className="group relative px-12 py-5 rounded-2xl bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
            <span className="relative z-10 flex items-center gap-3">
              Explore Global Network
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}