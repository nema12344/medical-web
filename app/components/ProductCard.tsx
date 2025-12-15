import { FiCheck, FiArrowRight } from 'react-icons/fi';

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
}

export default function ProductCard({ title, description, features }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Title */}
      <h3 className="text-2xl font-bold mb-4" style={{color: '#1A1A1A'}}>
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {description}
      </p>
      
      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <FiCheck className="w-5 h-5 mt-0.5 flex-shrink-0" style={{color: '#D0252C'}} />
            <span className="text-gray-700 leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* CTA Button */}
      <button className="w-full px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity" style={{backgroundColor: '#D0252C', color: 'white'}}>
        <span>All Products</span>
        <FiArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}