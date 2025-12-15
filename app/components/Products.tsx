import ProductCard from './ProductCard';

export default function Products(){
  const products = [
    {
      title: 'IV Infusion Sets',
      description: 'Premium quality intravenous infusion sets designed for safe and efficient fluid delivery in clinical settings.',
      features: [
        'Sterile and pyrogen-free construction',
        'Precision flow control mechanisms',
        'Compatible with standard IV solutions',
        'Available in multiple configurations'
      ]
    },
    {
      title: 'Surgical Disposables',
      description: 'Comprehensive range of single-use surgical instruments and accessories for various medical procedures.',
      features: [
        'WHO-GMP compliant manufacturing',
        'Latex-free materials available',
        'Individually packaged and sterilized',
        'Cost-effective healthcare solutions'
      ]
    },
    {
      title: 'Medical Devices',
      description: 'Advanced medical equipment and diagnostic tools engineered for accuracy and reliability in healthcare environments.',
      features: [
        'ISO 13485-2016 certified quality',
        'CE marking for European compliance',
        'Comprehensive warranty coverage',
        'Technical support and training'
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{backgroundColor: 'rgba(208, 37, 44, 0.1)', color: '#D0252C'}}>
            Our Product Range
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{color: '#1A1A1A'}}>
            Medical Solutions for Every Healthcare Need
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive portfolio of medical products designed to meet the highest standards of quality and safety in healthcare delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              features={product.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
