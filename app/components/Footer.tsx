export default function Footer(){
  return (
    <footer className="bg-slate-900 text-white pb-8 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News & Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Quality Assurance</a></li>
            </ul>
          </div>
          
          {/* Products Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">IV Infusion Sets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Surgical Disposables</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Medical Devices</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Diagnostic Equipment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Product Catalog</a></li>
            </ul>
          </div>
          
          {/* Other Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Customer Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
         <div className="lg:text-right text-left">
  {/* Phone */}
  <p className="text-3xl lg:text-4xl font-light text-white mb-2">
    +91 9067680104
  </p>

  {/* Email */}
  <p className="text-red-400 font-medium mb-6">
    Email: dispowellsurgicals@gmail.com
  </p>

  {/* Address */}
  <p className="text-gray-400 leading-relaxed mb-4">
    28, Yamuna Industrial Park, Vanch-Dhamatvan Road,
    Dhamatvan, Ahmedabad: 382435, Gujarat, India
  </p>

  {/* Get Directions */}
  <div className="flex lg:justify-end items-center gap-2 text-white font-medium cursor-pointer hover:text-red-400 transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
    <span>Get Directions</span>
  </div>
</div>

          
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} DispoPowell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
