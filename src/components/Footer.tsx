
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-2">L</div>
            <span className="text-white font-bold text-xl">LOVABLE</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Lovable.dev. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
