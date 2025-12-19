'use client';
import { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "The quality of their surgical disposables has significantly improved our patient outcomes. Their commitment to excellence is evident in every product we receive.",
      name: "Dr. Sarah Johnson",
      country: "United States"
    },
    {
      id: 2,
      text: "Outstanding reliability and precision in their IV infusion sets. We've been using their products for over 5 years with complete satisfaction.",
      name: "Dr. Rajesh Patel",
      country: "India"
    },
    {
      id: 3,
      text: "Their export quality and timely delivery have made them our preferred partner for medical supplies across our hospital network.",
      name: "Dr. Maria Santos",
      country: "Brazil"
    },
    {
      id: 4,
      text: "Exceptional customer service and product quality. Their medical devices meet all international standards and exceed our expectations.",
      name: "Dr. Ahmed Hassan",
      country: "UAE"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const next = (currentIndex + 1) % testimonials.length;
    return [testimonials[currentIndex], testimonials[next]];
  };

  const [active, preview] = getVisibleTestimonials();

  return (
    <section className="py-24 px-12" style={{backgroundColor: '#0c2534'}}>
      <div className="max-w-7xl mx-auto">
        
        {/* Testimonials Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{transform: `translateX(-${currentIndex * 100}%)`}}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 flex items-center gap-16">
                
                {/* Active Testimonial */}
                <div className="flex-1">
                  <div className="flex items-start gap-8">
                    {/* Circular Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full border-4 flex items-center justify-center" style={{borderColor: '#D0252C'}}>
                        <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-white font-bold text-xl" style={{borderColor: '#D0252C'}}>
                          {testimonial.id}
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial Content */}
                    <div className="flex-1">
                      <blockquote className="text-2xl lg:text-3xl font-light italic text-white leading-relaxed mb-8">
                        "{testimonial.text}"
                      </blockquote>
                      <div>
                        <div className="text-lg font-bold text-white mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-md text-gray-400">
                          {testimonial.country}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preview Testimonial (Next) */}
                <div className="flex-1 opacity-40">
                  {testimonials[(index + 1) % testimonials.length] && (
                    <div className="flex items-start gap-8">
                      {/* Circular Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full border-4 flex items-center justify-center" style={{borderColor: '#D0252C'}}>
                          <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-white font-bold text-lg" style={{borderColor: '#D0252C'}}>
                            {testimonials[(index + 1) % testimonials.length].id}
                          </div>
                        </div>
                      </div>
                      
                      {/* Testimonial Content */}
                      <div className="flex-1">
                        <blockquote className="text-xl lg:text-2xl font-light italic text-white leading-relaxed mb-8">
                          "{testimonials[(index + 1) % testimonials.length].text}"
                        </blockquote>
                        <div>
                          <div className="text-xl font-bold text-white mb-1">
                            {testimonials[(index + 1) % testimonials.length].name}
                          </div>
                          <div className="text-lg text-gray-400">
                            {testimonials[(index + 1) % testimonials.length].country}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Arrow Button */}
                <button 
                  onClick={nextSlide}
                  className="flex-shrink-0 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <FiChevronRight className="w-6 h-6 text-white" />
                </button>

              </div>
            ))}
          </div>
        </div>



        {/* Progress Indicator */}
        <div className="flex justify-center mt-16">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-12 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-red-500' : 'bg-gray-600'
                }`}
                style={{backgroundColor: index === currentIndex ? '#D0252C' : '#374151'}}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}