import React from "react";
import {
  MapPin,
  Phone,
  Globe,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-3">
              D <span className="text-amber-500">DOWNTOWN</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 max-w-md text-sm">
              Rawalpindi's modern purpose-built commercial hub, featuring 10
              modern plazas designed for the future of retail and business
              excellence.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-2.5 rounded-full transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-pink-600 p-2.5 rounded-full transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-700 p-2.5 rounded-full transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#units"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Units
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Main Defence Road, Opposite Askari 14, Rawalpindi
                </p>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-500" />
                <p className="text-gray-300 text-sm">UAN: 0313-055-2222</p>
              </div>
              <div className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-amber-500" />
                <p className="text-gray-300 text-sm">www.d-downtown.com</p>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-500" />
                <p className="text-gray-300 text-sm">info@d-downtown.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              © 2024 D Downtown. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-xs"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-xs"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-xs"
              >
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
