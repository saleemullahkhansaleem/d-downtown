import {
  MapPin,
  Phone,
  Globe,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Logo, MrCard } from "../common";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {/* Company Info */}
          <div className="">
            <div className="mb-3 flex items-end space-x-2">
              <Logo color="#ffffff" className="h-12 w-auto" />
              <div>
                <p className="text-2xl font-bold leading-tight">
                  D-
                  <span className="text-amber-500">DOWNTOWN</span>
                </p>
                <p className="uppercase text-xs">Future-Ready, Today</p>
              </div>
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
          <div className="">
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <ul className="space-y-0.5">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/project-portfolio"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/investment-models"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Investment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/payment-pricing"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/commercial-services"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Services
                  </Link>
                </li>
              </ul>
              <ul className="space-y-0.5">
                <li>
                  <Link
                    to="/location-connectivity"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Location
                  </Link>
                </li>
                <li>
                  <Link
                    to="/our-team"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/drone-shoots"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Drone Shoots
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="">
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
              © 2025 D-DOWNTOWN. All rights reserved.
            </p>{" "}
            {/* Developer Credit */}
            <div className="text-gray-400">
              <MrCard />
            </div>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors text-xs"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-white transition-colors text-xs"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
