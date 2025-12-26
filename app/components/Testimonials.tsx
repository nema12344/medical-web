'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      img: '/images/team.jpg',
      text: "The quality of their surgical disposables has significantly improved our patient outcomes. Their commitment to excellence is evident in every product we receive.",
      name: "Dr. Sarah Johnson",
      role: "Chief Surgeon"
    },
    {
      id: 2,
      img: '/images/team1.jpg',
      text: "Outstanding reliability and precision in their IV infusion sets. We've been using their products for over 5 years with complete satisfaction.",
      name: "Dr. Rajesh Patel",
      role: "Medical Director"
    },
    {
      id: 3,
      img: '/images/team.jpg',
      text: "Their export quality and timely delivery have made them our preferred partner for medical supplies across our hospital network.",
      name: "Dr. Maria Santos",
      role: "Healthcare Administrator"
    },
    {
      id: 4,
      img: '/images/team1.jpg',
      text: "Exceptional quality control and innovative solutions that have transformed our healthcare delivery standards across multiple facilities.",
      name: "Dr. Ahmed Hassan",
      role: "Medical Chief"
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#0c2534' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">What Our Clients Say</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        </div>
        {/* Testimonials Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 3, spaceBetween: 15 }
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 mx-2 h-full flex flex-col">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={96}
                      height={96}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 text-center mb-6 leading-relaxed text-sm flex-grow">
                  "{testimonial.text}"
                </blockquote>

                {/* User Info */}
                <div className="text-center mt-auto">
                  <div className="font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding: 20px 0 60px 0;
        }
        
        .testimonials-swiper .swiper-pagination {
          bottom: 0;
        }
        
        .testimonials-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
        }
        
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #D0252C;
        }
      `}</style>
    </section>
  );
}