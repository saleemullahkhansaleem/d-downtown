import {
  Zap,
  Droplets,
  Shield,
  Car,
  Building2,
  Wifi,
  Snowflake,
  Users,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Phone,
  Eye,
} from "lucide-react";
import { PageHero, CTASection, SEO } from "../components";

const Amenities = () => {
  const amenities = [
    {
      title: "Underground Electricity/ Water/ Sewerage",
      description:
        "All units are connected to underground electricity, water, and sewerage systems for a cleaner, safer, and more organized setup. This modern infrastructure ensures reliable utilities without unsightly overhead lines.",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
      features: [
        "24/7 Power Supply",
        "Clean Water System",
        "Modern Sewerage",
        "Underground Cabling",
      ],
      benefits: [
        "Enhanced Safety",
        "Aesthetic Appeal",
        "Reliable Service",
        "Low Maintenance",
      ],
    },
    {
      title: "Centralized Heating and Cooling",
      description:
        "A fully integrated heating and cooling system ensures comfortable temperatures throughout the year in all commercial spaces. Climate control is managed centrally for optimal efficiency and comfort.",
      icon: Droplets,
      color: "from-cyan-500 to-cyan-600",
      features: [
        "HVAC System",
        "Temperature Control",
        "Energy Efficient",
        "Centralized Management",
      ],
      benefits: [
        "Year-round Comfort",
        "Cost Savings",
        "Environmental Friendly",
        "Consistent Climate",
      ],
    },
    {
      title: "Elevator Access",
      description:
        "Each commercial plaza is equipped with 2 high-quality elevators, located on either end, providing smooth and convenient access to all floors for both customers and business owners.",
      icon: Building2,
      color: "from-purple-500 to-purple-600",
      features: [
        "Dual Elevators",
        "High Capacity",
        "Modern Technology",
        "Accessibility Compliant",
      ],
      benefits: [
        "Easy Access",
        "Time Saving",
        "Customer Convenience",
        "Universal Design",
      ],
    },
    {
      title: "Waste Management",
      description:
        "A dedicated garbage disposal system helps maintain cleanliness and hygiene throughout the premises. Professional waste management ensures a clean and healthy environment for all.",
      icon: Shield,
      color: "from-green-500 to-green-600",
      features: [
        "Dedicated Disposal",
        "Regular Collection",
        "Recycling Options",
        "Hygiene Standards",
      ],
      benefits: [
        "Clean Environment",
        "Health Safety",
        "Professional Image",
        "Sustainability",
      ],
    },
    {
      title: "Front-Facing Parking",
      description:
        "Convenient parking is available right in front of the plazas, making access easy for customers and employees. Ample parking space ensures hassle-free visits for everyone.",
      icon: Car,
      color: "from-amber-500 to-amber-600",
      features: [
        "Front Access",
        "Ample Space",
        "Security Monitored",
        "Easy Entry/Exit",
      ],
      benefits: [
        "Customer Convenience",
        "Employee Access",
        "Security",
        "Business Growth",
      ],
    },
    {
      title: "24/7 Security",
      description:
        "Round-the-clock security with surveillance cameras and trained on-site staff ensures a safe and secure environment for everyone. Comprehensive security measures protect your business and customers.",
      icon: Shield,
      color: "from-red-500 to-red-600",
      features: [
        "24/7 Monitoring",
        "CCTV Cameras",
        "Trained Staff",
        "Emergency Response",
      ],
      benefits: [
        "Peace of Mind",
        "Asset Protection",
        "Customer Safety",
        "Business Continuity",
      ],
    },
    {
      title: "High-Speed Internet",
      description:
        "Fiber-optic internet connectivity ensures fast and reliable internet access for all businesses. Stay connected with high-speed broadband for seamless operations.",
      icon: Wifi,
      color: "from-indigo-500 to-indigo-600",
      features: [
        "Fiber Optic",
        "High Speed",
        "Reliable Connection",
        "Business Grade",
      ],
      benefits: [
        "Fast Connectivity",
        "Reliable Service",
        "Business Efficiency",
        "Digital Ready",
      ],
    },
    {
      title: "Climate Control Systems",
      description:
        "Advanced climate control systems maintain optimal temperature and humidity levels throughout the year, ensuring comfort for customers and optimal conditions for businesses.",
      icon: Snowflake,
      color: "from-teal-500 to-teal-600",
      features: [
        "Temperature Control",
        "Humidity Management",
        "Energy Efficient",
        "Smart Controls",
      ],
      benefits: [
        "Optimal Comfort",
        "Energy Savings",
        "Product Protection",
        "Customer Satisfaction",
      ],
    },
  ];

  const additionalFeatures = [
    {
      title: "Professional Management",
      description:
        "Dedicated property management team ensures smooth operations and maintenance of all facilities.",
      icon: Users,
      color: "from-blue-600 to-blue-700",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock support system for any maintenance or emergency requirements.",
      icon: Clock,
      color: "from-green-600 to-green-700",
    },
    {
      title: "Quality Assurance",
      description:
        "Regular quality checks and maintenance ensure all amenities function at optimal levels.",
      icon: CheckCircle,
      color: "from-purple-600 to-purple-700",
    },
    {
      title: "Premium Standards",
      description:
        "All amenities meet international standards for quality, safety, and efficiency.",
      icon: Star,
      color: "from-amber-600 to-amber-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Amenities - D-DOWNTOWN Commercial Development"
        description="Discover world-class amenities at D-DOWNTOWN. From modern infrastructure to 24/7 security, explore the premium facilities that make our commercial spaces exceptional."
        keywords="commercial amenities, modern facilities, business infrastructure, D-DOWNTOWN amenities, commercial hub facilities, business center amenities"
        url="/amenities"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "D-DOWNTOWN Amenities",
          description: "World-class amenities available at D-DOWNTOWN",
          url: "https://d-downtown.com/amenities",
          itemListElement: amenities.map((amenity, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: amenity.title,
              description: amenity.description,
            },
          })),
        }}
      />

      {/* Hero Section */}
      <PageHero
        icon={Zap}
        badgeText="Premium Facilities"
        title="World-Class"
        gradientText="Amenities"
        description="Experience exceptional amenities designed to support your business success. From modern infrastructure to comprehensive security, D-DOWNTOWN provides everything your business needs to thrive."
        iconColor="text-blue-600"
      />

      {/* Amenities Grid */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-amber-100/20"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-amber-100 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-blue-900 text-sm">
                Premium Facilities
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything Your Business Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              D-DOWNTOWN offers a comprehensive range of modern amenities
              designed to enhance your business operations and provide an
              exceptional experience for your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-blue-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-amber-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`p-4 bg-gradient-to-r ${amenity.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <amenity.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-xl mb-3">
                        {amenity.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {amenity.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Key Features</span>
                      </h4>
                      <div className="space-y-2">
                        {amenity.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span>Benefits</span>
                      </h4>
                      <div className="space-y-2">
                        {amenity.benefits.map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <Star className="w-4 h-4 text-amber-500" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-600 font-semibold text-sm">
                        Available & Operational
                      </span>
                    </div>
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-amber-50/30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-green-900 text-sm">
                Additional Benefits
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Beyond Basic Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              D-DOWNTOWN goes beyond standard facilities to provide exceptional
              service and support that ensures your business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
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

      {/* CTA Section */}
      <CTASection
        title="Experience Premium Amenities?"
        subtitle="Visit D-DOWNTOWN Today"
        description="See our world-class amenities in person. Schedule a visit to experience the premium facilities that make D-DOWNTOWN the perfect choice for your business."
        badgeText="Amenities Ready"
        badgeIcon={Zap}
        primaryAction={{
          text: "Schedule Visit",
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

export default Amenities;
