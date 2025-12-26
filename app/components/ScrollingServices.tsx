'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
    Factory, Globe, Info, Award, ArrowRight, ShieldCheck, Truck,
    Stethoscope, Microscope, Syringe, Tag, Leaf
} from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: 1,
        title: 'Quality Parameters',
        description: 'Stringent quality control measures ensuring the highest standards in medical device manufacturing.',
        icon: Award,
        link: '#'
    },
    {
        id: 2,
        title: 'Contract MFG.',
        description: 'Comprehensive contract manufacturing services tailored to meet specific client requirements.',
        icon: Factory,
        link: '#'
    },
    {
        id: 3,
        title: 'Export Unit',
        description: 'Global distribution network serving healthcare providers across international markets.',
        icon: Globe,
        link: '#'
    },
    {
        id: 4,
        title: 'About Company',
        description: 'Leading manufacturer with decades of experience in surgical disposables and medical devices.',
        icon: Info,
        link: '#'
    },
    {
        id: 5,
        title: 'Regulatory Support',
        description: 'Full assistance with FDA, CE, and ISO documentations for international product registration.',
        icon: ShieldCheck,
        link: '#'
    },
    {
        id: 6,
        title: 'Custom Logistics',
        description: 'Specialized cold-chain and secure logistics solutions for sensitive medical equipment.',
        icon: Truck,
        link: '#'
    },
    {
        id: 7,
        title: 'Clinical Training',
        description: 'On-site workshops and digital materials to train staff on the proper usage of our devices.',
        icon: Stethoscope,
        link: '#'
    },
    {
        id: 8,
        title: 'R&D Innovation',
        description: 'Continuous innovation in material science and product design to improve patient outcomes.',
        icon: Microscope,
        link: '#'
    },
    {
        id: 9,
        title: 'Sterilization Services',
        description: 'In-house ETO and Gamma sterilization facilities ensuring 100% sterile and safe products.',
        icon: Syringe,
        link: '#'
    },
    {
        id: 10,
        title: 'Private Labeling',
        description: 'End-to-end OEM/ODM solutions allowing brands to launch premium medical products.',
        icon: Tag,
        link: '#'
    },
    {
        id: 11,
        title: 'Sustainable Tech',
        description: 'Eco-friendly manufacturing processes committed to reducing carbon footprint in healthcare.',
        icon: Leaf,
        link: '#'
    }
];

export default function ScrollingServices() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden relative group/section">
            <div className="max-w-[1400px] mx-auto px-6">
                <Swiper
                    modules={[Pagination, Autoplay, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1.2}
                    centeredSlides={false}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    navigation={true}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    breakpoints={{
                        640: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3.5 },
                        1280: { slidesPerView: 4 }
                    }}
                    className="pb-16 service-swiper !overflow-visible"
                >
                    {services.map((item) => (
                        <SwiperSlide key={item.id} className="h-full pt-4 pb-4">
                            <div className="bg-white rounded-3xl p-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(208,37,44,0.15)] transition-all duration-300 flex flex-col items-center text-center h-[450px] border border-gray-100 group relative top-0 hover:-top-2">

                                {/* Icon Circle */}
                                <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 group-hover:bg-red-100">
                                    <item.icon className="w-8 h-8 text-[#D0252C]" strokeWidth={1.5} />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading group-hover:text-[#D0252C] transition-colors">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed mb-8 max-w-xs mx-auto text-sm">
                                    {item.description}
                                </p>

                                {/* Arrow Button */}
                                <div className="mt-auto">
                                    <Link href={item.link} onClick={(e) => { if (item.link === '#') e.preventDefault() }}>
                                        <button className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-[#D0252C] transition-colors duration-300 shadow-lg cursor-pointer">
                                            <ArrowRight className="w-6 h-6" />
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
        .service-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .service-swiper .swiper-pagination-bullet-active {
          background: #D0252C;
          width: 24px;
          border-radius: 4px;
        }
        
        /* Custom Navigation Arrows */
        .service-swiper .swiper-button-next,
        .service-swiper .swiper-button-prev {
          color: #1a1a1a;
          background: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        
        .service-swiper .swiper-button-next:after,
        .service-swiper .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        .service-swiper .swiper-button-next:hover,
        .service-swiper .swiper-button-prev:hover {
          background: #D0252C;
          color: white;
        }

        .service-swiper .swiper-button-disabled {
          opacity: 0;
        }
      `}</style>
        </section>
    );
}
