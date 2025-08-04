import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Building2,
  FileText,
  HelpCircle,
  Camera,
  Info,
  Building,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "../common";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Home", icon: null },
    {
      label: "About",
      icon: Info,
      items: [
        { href: "/about-us", label: "About Us" },
        { href: "/our-team", label: "Our Team" },
      ],
    },
    {
      label: "Portfolio",
      icon: Building2,
      items: [
        { href: "/unit-types", label: "Unit Types" },
        { href: "/amenities", label: "Amenities" },
        { href: "/property-layout", label: "Property Layout" },
        { href: "/3d-model", label: "3D Model" },
      ],
    },
    {
      label: "Investment",
      icon: FileText,
      items: [
        { href: "/investment-models", label: "Investment Models" },
        { href: "/payment-pricing", label: "Payment & Pricing" },
      ],
    },
    {
      label: "Services",
      icon: Building,
      items: [
        { href: "/commercial-services", label: "Commercial Services" },
        { href: "/location-connectivity", label: "Location & Connectivity" },
      ],
    },
    { href: "/faqs", label: "FAQs", icon: HelpCircle },
    { href: "/contact-us", label: "Contact", icon: null },
    {
      label: "Media",
      icon: Camera,
      items: [
        { href: "/drone-shoots", label: "Drone Shoots & Visuals" },
        { href: "/blog", label: "Blog Posts" },
      ],
    },
  ];

  const closeDropdowns = () => {
    // This function is kept for mobile menu and logo click
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling on body
      document.body.style.overflow = "hidden";
      // Prevent iOS Safari from bouncing
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white/70 backdrop-blur-xl shadow-2xl fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={closeDropdowns}
          >
            <Logo size={40} className="h-10 text-blue-900" />

            <div className="">
              <div className="text-lg font-black bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent leading-5 text-nowrap">
                D{"-"}
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  DOWNTOWN
                </span>
              </div>
              <p className="text-blue-900 font-semibold text-[10px] leading-3 uppercase">
                Future-Ready, Today
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => {
              if (item.href) {
                // Single page link
                return (
                  <Link
                    key={index}
                    to={item.href}
                    className="text-gray-700 hover:text-blue-900 font-medium px-3 py-1.5 rounded hover:bg-blue-500/10 text-sm transition-all duration-300 flex items-center space-x-1"
                    onClick={closeDropdowns}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </Link>
                );
              } else {
                // Dropdown menu
                return (
                  <div key={index} className="relative group">
                    <button className="text-gray-700 hover:text-blue-900 font-medium px-3 py-1.5 rounded hover:bg-blue-500/10 text-sm transition-all duration-300 flex items-center space-x-1">
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100">
                      <div className="mt-1 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100 py-2">
                        {item.items?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 text-sm font-medium"
                            onClick={closeDropdowns}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-4">
            <a
              href="tel:0313-055-2222"
              className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-green-100 px-3 py-1.5 rounded-full border border-green-200 hover:from-green-100 hover:to-green-200 transition-all duration-300 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-green-800 font-bold text-xs">
                0313-055-2222
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
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
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 max-h-[calc(100vh-56px)] overflow-y-auto">
            <nav className="py-3 space-y-1">
              {navigationItems.map((item, index) => {
                if (item.href) {
                  // Single page link
                  return (
                    <Link
                      key={index}
                      to={item.href}
                      className="px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 font-semibold rounded-lg mx-2 text-sm flex items-center space-x-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.label}</span>
                    </Link>
                  );
                } else {
                  // Dropdown section
                  return (
                    <div key={index}>
                      <div className="px-4 py-2.5 text-gray-500 font-semibold text-xs uppercase tracking-wider flex items-center space-x-2">
                        {item.icon && <item.icon className="w-4 h-4" />}
                        <span>{item.label}</span>
                      </div>
                      {item.items?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.href}
                          className="block px-8 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 font-medium rounded-lg mx-2 text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  );
                }
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
