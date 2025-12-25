"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Sterile Surgical Gloves",
      category: "Protective Gear",
      price: "Premium Quality",
      image: "🧤",
      description: "Latex-free, hypoallergenic surgical gloves",
      features: ["Powder-free", "Non-sterile option", "High sensitivity"],
    },
    {
      id: 2,
      name: "IV Infusion Set",
      category: "Infusion Systems",
      price: "Medical Grade",
      image: "💉",
      description: "Sterilized IV infusion sets with safety features",
      features: ["Sterile & single-use", "ISO certified", "Multiple sizes"],
    },
    {
      id: 3,
      name: "Disposable Syringes",
      category: "Injection Systems",
      price: "Hospital Standard",
      image: "🔬",
      description: "Precision-engineered disposable syringes",
      features: ["Sterile packaging", "Accurate measurements", "Safety caps"],
    },
    {
      id: 4,
      name: "Face Masks & Shields",
      category: "PPE",
      price: "Clinical Grade",
      image: "😷",
      description: "Multi-layer protection face masks and shields",
      features: ["3-ply filtration", "Breathable material", "Comfortable fit"],
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-medicalNavy mb-4 accent-underline">
            Featured Products
          </h2>
          <p className="text-textSecondary text-lg">
            Our most trusted and popular medical solutions
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-white rounded-xl border border-borderLight hover:border-medicalRed overflow-hidden transition-all duration-300 hover:shadow-premium hover-scale hover-glow"
            >
              {/* Product Icon/Image Area */}
              <div className="h-24 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300 anim-float-fast">
                {product.image}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block text-xs font-semibold text-medicalRed bg-red-50 px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-medicalNavy mb-2 group-hover:text-medicalRed transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-textSecondary mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6 pb-6 border-b border-borderLight">
                  {product.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-2 text-xs text-textSecondary">
                      <span className="text-medicalRed font-bold mt-0.5">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price/Status */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-medicalRed">
                    {product.price}
                  </span>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="text-medicalRed hover:text-medicalNavy font-semibold text-sm transition-colors duration-300"
                  >
                    Inquire →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-medicalRed text-medicalRed font-semibold rounded-lg hover:bg-medicalRed hover:text-white transition-all duration-300"
            >
              View All Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
