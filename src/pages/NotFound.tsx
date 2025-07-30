import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search, MapPin, Building2 } from "lucide-react";
import Logo from "../components/Logo";

const NotFound = () => {
  const quickLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about-us", label: "About Us", icon: Building2 },
    { href: "/project-portfolio", label: "Portfolio", icon: MapPin },
    { href: "/contact-us", label: "Contact", icon: Search },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-amber-200/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-200/30 to-blue-200/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-amber-100/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <Logo
                size={50}
                className="h-12 text-blue-900 group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <div className="text-2xl font-black bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent leading-6">
                  D{"-"}
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                    DOWNTOWN
                  </span>
                </div>
                <p className="text-blue-900 font-semibold text-xs uppercase">
                  Future-Ready, Today
                </p>
              </div>
            </Link>
          </div>

          {/* 404 Content */}
          <div className="mb-12">
            {/* Large 404 Number */}
            <div className="relative mb-8">
              <h1 className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-blue-900 via-amber-500 to-blue-700 bg-clip-text text-transparent leading-none animate-fade-in-up">
                404
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-amber-500/10 to-blue-700/10 blur-3xl rounded-full animate-pulse"></div>
            </div>

            {/* Error Message */}
            <div className="mb-8 animate-fade-in-up delay-300">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Oops! Page Not Found
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                The page you're looking for seems to have wandered off to
                explore our
                <span className="font-semibold text-amber-600">
                  {" "}
                  D-DOWNTOWN{" "}
                </span>
                construction site. Don't worry, we'll help you find your way
                back!
              </p>
            </div>

            {/* Construction-themed illustration */}
            <div className="mb-12 animate-fade-in-up delay-500">
              <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-amber-100 to-blue-100 rounded-2xl border border-amber-200/50 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">
                      Under Construction
                    </p>
                    <p className="text-sm text-gray-600">
                      This page is being built with care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mb-12 animate-fade-in-up delay-700">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25 flex items-center justify-center space-x-3"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Go Home</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="group border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-blue-50 flex items-center justify-center space-x-3"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Go Back</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up delay-1000">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="group bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-amber-300 p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-amber-50 hover:to-blue-50"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {link.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 animate-fade-in-up delay-1200">
            <div className="bg-white/50 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 max-w-md mx-auto">
              <p className="text-gray-600 mb-3">
                Need help finding something specific?
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
              >
                <span>Contact our team</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
