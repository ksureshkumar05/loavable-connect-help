
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white font-bold mr-2">L</div>
          <span className="text-blue-500 font-bold text-xl">LOVABLE</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-blue-500 font-medium">HOME</Link>
          <Link to="/support" className="text-gray-500 hover:text-blue-500 transition-colors font-medium">SUPPORT</Link>
          <Link to="/appointments" className="text-gray-500 hover:text-blue-500 transition-colors font-medium">APPOINTMENTS</Link>
          <Link to="/features" className="text-gray-500 hover:text-blue-500 transition-colors font-medium">FEATURES</Link>
          <Link to="/about" className="text-gray-500 hover:text-blue-500 transition-colors font-medium">ABOUT</Link>
          <Link to="/contact" className="text-gray-500 hover:text-blue-500 transition-colors font-medium">CONTACT US</Link>
        </div>
        
        <Button variant="default" className="hidden md:block bg-blue-500 hover:bg-blue-600">
          LOGIN
        </Button>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-6 bg-white">
          <div className="flex flex-col space-y-3">
            <Link to="/" className="text-blue-500 font-medium">HOME</Link>
            <Link to="/support" className="text-gray-500 hover:text-blue-500 transition-colors font-medium">SUPPORT</Link>
            <Link to="/appointments" className="text-gray-500 hover:text-blue-500 transition-colors font-medium">APPOINTMENTS</Link>
            <Link to="/features" className="text-gray-500 hover:text-blue-500 transition-colors font-medium">FEATURES</Link>
            <Link to="/about" className="text-gray-500 hover:text-blue-500 transition-colors font-medium">ABOUT</Link>
            <Link to="/contact" className="text-gray-500 hover:text-blue-500 transition-colors font-medium">CONTACT US</Link>
            <Button variant="default" className="w-full bg-blue-500 hover:bg-blue-600 mt-2">
              LOGIN
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
