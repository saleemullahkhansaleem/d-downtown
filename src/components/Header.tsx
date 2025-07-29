import { useState } from "react";
import { Menu, X, Phone, Sparkles } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/70 backdrop-blur-xl shadow-2xl fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-1.5 rounded-xl shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="text-xl font-black bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              D{" "}
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                DOWNTOWN
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-900 font-medium px-2 py-0.5 rounded hover:bg-blue-500/10 text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-900 font-medium px-2 py-0.5 rounded hover:bg-blue-500/10 text-sm"
            >
              About
            </a>
            <a
              href="#location"
              className="text-gray-700 hover:text-blue-900 font-medium px-2 py-0.5 rounded hover:bg-blue-500/10 text-sm"
            >
              Location
            </a>
            <a
              href="#units"
              className="text-gray-700 hover:text-blue-900 font-medium px-2 py-0.5 rounded hover:bg-blue-500/10 text-sm"
            >
              Units
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-blue-900 font-medium px-2 py-0.5 rounded hover:bg-blue-500/10 text-sm"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-900 font-medium px-2 py-0.5 rounded hover:bg-blue-500/10 text-sm"
            >
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-green-100 px-3 py-1.5 rounded-full border border-green-200">
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-green-800 font-bold text-xs">
                0313-055-2222
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100">
            <nav className="py-3 space-y-1">
              <a
                href="#home"
                className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 font-semibold rounded-lg mx-2 text-sm"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 font-semibold rounded-lg mx-2 text-sm"
              >
                About
              </a>
              <a
                href="#location"
                className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 font-semibold rounded-lg mx-2 text-sm"
              >
                Location
              </a>
              <a
                href="#units"
                className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 font-semibold rounded-lg mx-2 text-sm"
              >
                Units
              </a>
              <a
                href="#gallery"
                className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 font-semibold rounded-lg mx-2 text-sm"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 font-semibold rounded-lg mx-2 text-sm"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
