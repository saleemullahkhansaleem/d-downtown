import {
  Eye,
  Layers,
  Building2,
  MapPin,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Move,
  Smartphone,
  Monitor,
  Globe,
  Star,
  Phone,
  Download,
  Share2,
} from "lucide-react";
import { PageHero, CTASection, SEO } from "../components";

const ThreeDModel = () => {
  const modelFeatures = [
    {
      title: "Interactive Floor Plans",
      description:
        "Navigate through detailed 3D floor plans with interactive elements and real-time information.",
      icon: Layers,
      color: "from-blue-500 to-blue-600",
      features: [
        "360° Navigation",
        "Floor-by-Floor View",
        "Unit Details",
        "Interactive Elements",
      ],
    },
    {
      title: "Realistic Unit Views",
      description:
        "Experience commercial units in photorealistic 3D with accurate dimensions and layouts.",
      icon: Building2,
      color: "from-purple-500 to-purple-600",
      features: [
        "Photorealistic Rendering",
        "Accurate Dimensions",
        "Customizable Views",
        "Lighting Options",
      ],
    },
    {
      title: "Location Context",
      description:
        "See D-DOWNTOWN in its surrounding environment with detailed location and accessibility features.",
      icon: MapPin,
      color: "from-green-500 to-green-600",
      features: [
        "Surrounding Area",
        "Accessibility Features",
        "Transport Links",
        "Neighborhood Context",
      ],
    },
    {
      title: "Virtual Walkthrough",
      description:
        "Take a virtual tour through the entire development with guided navigation and information points.",
      icon: Eye,
      color: "from-amber-500 to-amber-600",
      features: [
        "Guided Tours",
        "Information Points",
        "Custom Routes",
        "Immersive Experience",
      ],
    },
  ];

  const technologyFeatures = [
    {
      title: "Web-Based Platform",
      description:
        "Access the 3D model directly from any web browser without downloads or installations.",
      icon: Globe,
      color: "from-blue-600 to-blue-700",
    },
    {
      title: "Mobile Optimized",
      description:
        "Fully responsive design that works seamlessly on smartphones and tablets.",
      icon: Smartphone,
      color: "from-green-600 to-green-700",
    },
    {
      title: "High Performance",
      description:
        "Optimized rendering engine ensures smooth performance across all devices.",
      icon: Monitor,
      color: "from-purple-600 to-purple-700",
    },
    {
      title: "Regular Updates",
      description:
        "3D model is regularly updated to reflect the latest construction progress and changes.",
      icon: Star,
      color: "from-amber-600 to-amber-700",
    },
  ];

  const upcomingFeatures = [
    {
      title: "VR Experience",
      description:
        "Immersive virtual reality experience for the ultimate property exploration.",
      icon: Eye,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "AR Integration",
      description:
        "Augmented reality features to overlay 3D models on real-world locations.",
      icon: Layers,
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Interactive Booking",
      description:
        "Direct booking and reservation system integrated within the 3D experience.",
      icon: Building2,
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Live Updates",
      description:
        "Real-time construction progress updates reflected in the 3D model.",
      icon: MapPin,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="3D Model - D-DOWNTOWN Commercial Development"
        description="Experience D-DOWNTOWN in immersive 3D. Explore every detail of our commercial spaces with interactive 3D models, virtual walkthroughs, and detailed floor plans."
        keywords="3D model, virtual tour, interactive floor plans, D-DOWNTOWN 3D, commercial space visualization, virtual walkthrough, 3D property view"
        url="/3d-model"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "VirtualLocation",
          name: "D-DOWNTOWN 3D Model",
          description:
            "Interactive 3D model of D-DOWNTOWN commercial development",
          url: "https://d-downtown.com/3d-model",
          virtualLocation: {
            "@type": "Place",
            name: "D-DOWNTOWN Commercial Development",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Rawalpindi",
              addressCountry: "Pakistan",
            },
          },
        }}
      />

      {/* Hero Section */}
      <PageHero
        icon={Eye}
        badgeText="Virtual Experience"
        title="3D Model of the"
        gradientText="Project Space"
        description="Experience D-DOWNTOWN in immersive 3D detail. Explore every corner of our commercial spaces with interactive models, virtual walkthroughs, and detailed visualizations."
        iconColor="text-blue-600"
      />

      {/* Coming Soon Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 px-4 py-2 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <Eye className="w-4 h-4 text-blue-300" />
              <span className="font-semibold text-blue-200 text-sm">
                Virtual Experience
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Interactive 3D Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our cutting-edge 3D model is currently in development. Experience
              D-DOWNTOWN like never before with immersive virtual tours,
              interactive floor plans, and photorealistic renderings.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-blue-800/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 shadow-xl mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl mb-8 shadow-lg border border-white/20">
                <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Coming Soon</h3>
                <p className="text-blue-100 text-lg mb-6">
                  Immerse yourself in D-DOWNTOWN's future with our interactive
                  3D experience
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">
                    Get Notified When Available
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                    View Sample Images
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modelFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-r ${feature.color} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-lg text-center">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center space-x-2 text-xs text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-amber-50/30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full mb-4">
              <Monitor className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-green-900 text-sm">
                Advanced Technology
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powered by Cutting-Edge Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our 3D model leverages the latest technology to provide an
              exceptional virtual experience that helps you make informed
              decisions about your commercial space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden text-center"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
                <div
                  className={`p-4 bg-gradient-to-r ${feature.color} rounded-xl text-white w-fit mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-amber-100/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-purple-600" />
              <span className="font-semibold text-purple-900 text-sm">
                Future Enhancements
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Exciting Features Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're constantly innovating to provide you with the most advanced
              virtual experience. Here's what's coming next to our 3D platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-blue-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-amber-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className={`p-4 bg-gradient-to-r ${feature.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-xl mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Coming Soon Badge */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                      <span className="text-amber-600 font-semibold text-sm">
                        Coming Soon
                      </span>
                    </div>
                    <Star className="w-4 h-4 text-amber-500" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Experience the Future</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              While our full 3D model is in development, explore our current
              visualizations and get a preview of what's to come.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-blue-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="font-bold mb-2">Download Brochure</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Get detailed information about D-DOWNTOWN
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold">
                  Download PDF
                </button>
              </div>

              <div className="text-center">
                <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-8 h-8 text-purple-300" />
                </div>
                <h3 className="font-bold mb-2">Share Experience</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Share D-DOWNTOWN with your team
                </p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-semibold">
                  Share Link
                </button>
              </div>

              <div className="text-center">
                <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-300" />
                </div>
                <h3 className="font-bold mb-2">Contact Sales</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Get personalized assistance
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-semibold">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Experience D-DOWNTOWN in 3D?"
        subtitle="Get Early Access"
        description="Be among the first to experience our interactive 3D model. Sign up for early access and get notified when our virtual experience goes live."
        badgeText="3D Experience"
        badgeIcon={Eye}
        primaryAction={{
          text: "Get Early Access",
          href: "/contact-us",
          icon: Eye,
        }}
        secondaryAction={{
          text: "Contact Sales",
          href: "/contact-us",
          icon: Phone,
        }}
        gradientColors={{
          from: "from-blue-900",
          via: "via-purple-900",
          to: "to-amber-900",
        }}
      />
    </div>
  );
};

export default ThreeDModel;
