'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryProductGrid from '../components/CategoryProductGrid';

// Sample product data with actual images
const sampleProducts = [
  {
    id: '1',
    name: 'IV Infusion Set Economy',
    category: 'Infusion Therapy',
    image: '/images/iv-infusion-set.png',
    price: '$12.99',
    description: 'High-quality disposable IV infusion set for general medical use with precision flow control.'
  },
  {
    id: '2', 
    name: 'IV Infusion Set Premium',
    category: 'Infusion Therapy',
    image: '/images/Iv-Infusion-set-Premium.png',
    price: '$18.99',
    description: 'Premium IV infusion set with enhanced safety features and sterile packaging.'
  },
  {
    id: '3',
    name: 'Disposable Surgical Items',
    category: 'Other Medical Disposables',
    image: '/images/DISPOSABLE-SURGICAL-ITEMS.png',
    price: '$25.99',
    description: 'Complete set of sterile disposable surgical instruments for various medical procedures.'
  },
  {
    id: '4',
    name: 'Medical Equipment Set',
    category: 'Anaesthesia & Respiratory',
    image: '/images/medical-equipment.jpg',
    price: '$45.99',
    description: 'Professional medical equipment set for respiratory care and patient monitoring.'
  },
  {
    id: '5',
    name: 'Surgical Disposables Kit',
    category: 'Other Medical Disposables',
    image: '/images/Disposable surgical-items.jpg',
    price: '$32.99',
    description: 'Comprehensive surgical disposables kit with all essential items for medical procedures.'
  },
  {
    id: '6',
    name: 'Oxygen Therapy Equipment',
    category: 'Anaesthesia & Respiratory',
    image: '/images/mid-adult-man-breathing-through-mask-hyperbaric-oxygen-therapy-clinic.jpg',
    price: '$89.99',
    description: 'Advanced oxygen therapy equipment for hyperbaric treatment and respiratory support.'
  },
  {
    id: '7',
    name: 'Blood Sample Collection Kit',
    category: 'Transfusion Therapy',
    image: '/images/coronavirus-arrangement-with-blood-samples-vaccine.jpg',
    price: '$15.99',
    description: 'Sterile blood collection kit with vacuum tubes and safety needles for laboratory testing.'
  },
  {
    id: '8',
    name: 'Vaccine Administration Set',
    category: 'Infusion Therapy',
    image: '/images/coronavirus-arrangement-with-vaccine-bottle-syringe.jpg',
    price: '$9.99',
    description: 'Complete vaccine administration set with syringes and safety protocols.'
  },
  {
    id: '9',
    name: 'Patient Monitoring System',
    category: 'Anaesthesia & Respiratory',
    image: '/images/doctor-monitoring-patient-s-pulse.jpg',
    price: '$199.99',
    description: 'Advanced patient monitoring system for vital signs and pulse tracking.'
  },
  {
    id: '10',
    name: 'Operating Room Equipment',
    category: 'Other Medical Disposables',
    image: '/images/many-kind-medical-equipment-manage-surgeon-start-operations-operating-room.jpg',
    price: '$299.99',
    description: 'Complete operating room equipment set for surgical procedures and patient care.'
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Comprehensive range of medical disposables designed for healthcare excellence
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <CategoryProductGrid 
            products={sampleProducts}
            showSearch={true}
            showViewToggle={true}
            itemsPerPage={12}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}