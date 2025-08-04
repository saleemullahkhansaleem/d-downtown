import { useState, useEffect } from "react";
import {
  Building2,
  Square,
  Store,
  Building,
  MapPin,
  TrendingUp,
  Eye,
  Layers,
  Users,
  Target,
  Phone,
  X,
  ChevronRight,
} from "lucide-react";
import { PageHero, CTASection, SEO } from "../components";
import { floorPlanImages } from "../assets/images";

const PropertyLayout = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<string>("");
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Prevent body scrolling when dialog is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const propertyLayouts = [
    {
      floor: "Lower Ground Floor",
      shops: 10,
      pricing: "PKR 40,000/Sq. Ft",
      description:
        "This level is ideal for supermarkets, large retail stores, or showrooms. With wide spaces and easy access from entry points, it's a great choice for businesses expecting high customer traffic throughout the day.",
      areas: [
        { shop: "Shop Number 2 & 9", area: "330 Sq. ft" },
        { shop: "Shop Number 1, 3 to 8, 10", area: "355 Sq. ft" },
      ],
      color: "from-gray-600 to-gray-800",
      icon: Square,
      image: floorPlanImages.lowerGround,
      features: [
        "High Traffic Access",
        "Large Storage Space",
        "Loading Dock Access",
        "Cost-Effective Pricing",
      ],
      idealFor: [
        "Supermarkets",
        "Large Retail Stores",
        "Showrooms",
        "Wholesale Businesses",
      ],
    },
    {
      floor: "Ground Floor (18 Feet Height)",
      shops: 6,
      pricing: "PKR 60,000/Sq. Ft",
      description:
        "The ground floor stands out with its tall 18-foot ceilings and large storefronts. It's perfect for clothing brands, food chains, flagship stores, and brand showrooms looking to make a strong impression.",
      areas: [
        { shop: "Shop Number 1 & 6", area: "317 Sq. ft" },
        { shop: "Shop Number 2 & 5", area: "542 Sq. ft" },
        { shop: "Shop Number 3 & 4", area: "533 Sq. ft" },
      ],
      color: "from-blue-600 to-blue-800",
      icon: Store,
      image: floorPlanImages.groundFloor,
      features: [
        "18-Foot Ceilings",
        "Premium Visibility",
        "Large Storefronts",
        "High-Value Location",
      ],
      idealFor: [
        "Clothing Brands",
        "Food Chains",
        "Flagship Stores",
        "Brand Showrooms",
      ],
    },
    {
      floor: "Mezzanine Floor",
      shops: 4,
      pricing: "PKR 60,000/Sq. Ft",
      description:
        "Located just above the ground floor, the mezzanine suits boutique shops, cafés, juice bars, and tea houses. It offers a cozy yet visible space that feels close to the energy of the ground floor.",
      areas: [{ shop: "Shop Number 3 to 5", area: "361 Sq. ft" }],
      color: "from-purple-600 to-purple-800",
      icon: Building,
      image: floorPlanImages.mezzanine,
      features: [
        "Cozy Atmosphere",
        "Ground Floor Proximity",
        "Moderate Traffic",
        "Versatile Layout",
      ],
      idealFor: ["Boutique Shops", "Cafés", "Juice Bars", "Tea Houses"],
    },
    {
      floor: "First Floor",
      shops: 38,
      pricing: "PKR 35,000/Sq. Ft",
      description:
        "With an open and flexible layout, the first floor works well for service-based businesses, small offices, or local agencies. It keeps you connected to customer traffic while giving you the space to work.",
      areas: [
        { shop: "Space Number 1 to 18, 20-27, 30-37", area: "100 Sq. ft" },
        { shop: "Space Number 19 & 28", area: "143 Sq. ft" },
        { shop: "Space Number 29 & 38", area: "145 Sq. ft" },
      ],
      color: "from-green-600 to-green-800",
      icon: Building2,
      image: floorPlanImages.firstFloor,
      features: [
        "Flexible Layout",
        "Multiple Unit Sizes",
        "Service-Oriented",
        "Cost-Effective",
      ],
      idealFor: [
        "Service Businesses",
        "Small Offices",
        "Local Agencies",
        "Consultancies",
      ],
    },
    {
      floor: "Second Floor",
      shops: 38,
      pricing: "PKR 30,000/Sq. Ft",
      description:
        "This is the quietest and most private level, ideal for corporate offices, consultancies, or creative studios. It's designed to support focused work and offers room for customization.",
      areas: [
        { shop: "Space Number 1 to 18, 20-27, 30-37", area: "100 Sq. ft" },
        { shop: "Space Number 19 & 28", area: "143 Sq. ft" },
        { shop: "Space Number 29 & 38", area: "145 Sq. ft" },
      ],
      color: "from-amber-600 to-amber-800",
      icon: Building2,
      image: floorPlanImages.secondFloor,
      features: [
        "Quiet Environment",
        "Privacy Focused",
        "Customizable Space",
        "Professional Atmosphere",
      ],
      idealFor: [
        "Corporate Offices",
        "Consultancies",
        "Creative Studios",
        "Professional Services",
      ],
    },
    {
      floor: "Roof Top",
      shops: 12,
      pricing: "PKR 25,000/Sq. Ft",
      description:
        "The rooftop offers a unique outdoor commercial space perfect for rooftop restaurants, cafes, event venues, and recreational facilities. With panoramic views and open-air atmosphere.",
      areas: [
        { shop: "Restaurant Area 1", area: "450 Sq. ft" },
        { shop: "Restaurant Area 2", area: "380 Sq. ft" },
        { shop: "Cafe Zone", area: "320 Sq. ft" },
        { shop: "Event Space", area: "600 Sq. ft" },
        { shop: "Recreation Area", area: "280 Sq. ft" },
        { shop: "Utility & Storage", area: "150 Sq. ft" },
      ],
      color: "from-indigo-600 to-indigo-800",
      icon: Building2,
      image: floorPlanImages.roofTop,
      features: [
        "Panoramic Views",
        "Open Air Space",
        "Unique Experience",
        "Event Ready",
      ],
      idealFor: [
        "Rooftop Restaurants",
        "Event Venues",
        "Recreational Facilities",
        "Outdoor Cafes",
      ],
    },
  ];

  const layoutFeatures = [
    {
      title: "Strategic Floor Planning",
      description:
        "Each floor is strategically designed to maximize business potential and customer flow.",
      icon: Layers,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Flexible Space Options",
      description:
        "Multiple unit sizes and configurations to accommodate various business needs.",
      icon: Building2,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Optimal Traffic Flow",
      description:
        "Intelligent design ensures maximum visibility and accessibility for all businesses.",
      icon: Target,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Community Integration",
      description:
        "Complementary business mix creates a thriving commercial ecosystem.",
      icon: Users,
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Property Layout - D-DOWNTOWN Commercial Development"
        description="Explore D-DOWNTOWN's strategic property layout across multiple floors. View detailed floor plans, specifications, and find the perfect space for your business in Rawalpindi's premier commercial hub."
        keywords="property layout, floor plans, commercial spaces, D-DOWNTOWN layout, business spaces, commercial floor plans, retail spaces Rawalpindi"
        url="/property-layout"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "D-DOWNTOWN Property Layout",
          description: "Strategic property layout and floor plans",
          url: "https://d-downtown.com/property-layout",
          itemListElement: propertyLayouts.map((layout, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "RealEstateListing",
              name: layout.floor,
              description: layout.description,
            },
          })),
        }}
      />

      {/* Hero Section */}
      <PageHero
        icon={Building2}
        badgeText="Strategic Design"
        title="Property"
        gradientText="Layout"
        description="Discover D-DOWNTOWN's intelligent property layout designed across multiple floors. Each level is strategically planned to maximize business potential and create the perfect environment for your success."
        iconColor="text-blue-600"
      />

      {/* Layout Features Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-amber-100/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-amber-100 px-4 py-2 rounded-full mb-4">
              <Layers className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-blue-900 text-sm">
                Intelligent Design
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Strategic Property Layout
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              D-DOWNTOWN is designed across multiple levels to suit a variety of
              business types. Each floor offers practical layouts, easy access,
              and strong visibility to help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {layoutFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-blue-200 text-center"
              >
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

      {/* Property Layout Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-amber-50/30"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-4">
              <Building2 className="w-4 h-4 text-purple-600" />
              <span className="font-semibold text-purple-900 text-sm">
                Floor Plans
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Each Floor
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the unique characteristics and opportunities of each
              floor at D-DOWNTOWN. From ground-level retail to rooftop
              experiences, find your perfect business space.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {propertyLayouts.map((layout, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/50 hover:shadow-xl transition-all duration-500"
              >
                <div
                  className={`bg-gradient-to-r ${layout.color} p-6 text-white relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                          <layout.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {layout.floor}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm text-xs">
                              <Store className="w-3 h-3" />
                              <span className="font-semibold">
                                {layout.shops} Units
                              </span>
                            </span>
                            <span className="flex items-center space-x-1 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm text-xs">
                              <TrendingUp className="w-3 h-3" />
                              <span className="font-semibold">
                                {layout.pricing}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {layout.description}
                  </p>

                  {/* Floor Plan Image */}
                  <div className="mb-6">
                    <div
                      className="relative w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 cursor-pointer group"
                      onClick={() => {
                        setSelectedImage(layout.image);
                        setSelectedFloor(layout.floor);
                      }}
                    >
                      <img
                        src={layout.image}
                        alt={`${layout.floor} Floor Plan`}
                        className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                          <span className="font-bold text-gray-900 text-sm flex items-center space-x-2">
                            <Eye className="w-4 h-4" />
                            <span>View Floor Plan</span>
                          </span>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-md">
                          <span className="font-bold text-gray-900 text-xs">
                            {layout.floor}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features and Ideal For */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2 text-sm">
                        <div className="p-1 bg-blue-100 rounded-md">
                          <Target className="w-3 h-3 text-blue-600" />
                        </div>
                        <span>Key Features</span>
                      </h4>
                      <div className="space-y-1">
                        {layout.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="text-xs text-gray-700"
                          >
                            • {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2 text-sm">
                        <div className="p-1 bg-green-100 rounded-md">
                          <Users className="w-3 h-3 text-green-600" />
                        </div>
                        <span>Ideal For</span>
                      </h4>
                      <div className="space-y-1">
                        {layout.idealFor.map((business, businessIndex) => (
                          <div
                            key={businessIndex}
                            className="text-xs text-gray-700"
                          >
                            • {business}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Area Breakdown */}
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2 text-sm">
                      <div className="p-1 bg-blue-100 rounded-md">
                        <MapPin className="w-3 h-3 text-blue-600" />
                      </div>
                      <span>Area Breakdown</span>
                    </h4>
                    <div className="grid gap-2">
                      {layout.areas.map((area, areaIndex) => (
                        <div
                          key={areaIndex}
                          className="flex justify-between items-center p-2 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <span className="font-semibold text-gray-800 text-xs">
                            {area.shop}
                          </span>
                          <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full text-xs">
                            {area.area}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Choose Your Floor?"
        subtitle="Explore Available Spaces"
        description="Contact our sales team to explore available units on your preferred floor. Let us help you find the perfect space that matches your business requirements and budget."
        badgeText="Spaces Available"
        badgeIcon={Building2}
        primaryAction={{
          text: "Contact Sales Team",
          href: "/contact-us",
          icon: Phone,
        }}
        secondaryAction={{
          text: "Schedule Viewing",
          href: "/contact-us",
          icon: Eye,
        }}
        gradientColors={{
          from: "from-blue-900",
          via: "via-purple-900",
          to: "to-amber-900",
        }}
      />

      {/* Image Dialog/Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedImage(null);
              setSelectedFloor("");
              setZoom(1);
              setPosition({ x: 0, y: 0 });
            }
          }}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
              <h3 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span>{selectedFloor} Floor Plan</span>
              </h3>
              <div className="flex items-center space-x-2">
                {/* Zoom Controls */}
                <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setZoom(Math.max(0.5, zoom - 0.25))}
                    className="p-1 hover:bg-gray-200 rounded text-gray-600 hover:text-gray-800 transition-colors"
                    disabled={zoom <= 0.5}
                  >
                    <span className="text-sm font-bold">−</span>
                  </button>
                  <span className="px-2 text-sm font-medium text-gray-700 min-w-[3rem] text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={() => setZoom(Math.min(3, zoom + 0.25))}
                    className="p-1 hover:bg-gray-200 rounded text-gray-600 hover:text-gray-800 transition-colors"
                    disabled={zoom >= 3}
                  >
                    <span className="text-sm font-bold">+</span>
                  </button>
                </div>
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setSelectedFloor("");
                    setZoom(1);
                    setPosition({ x: 0, y: 0 });
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div className="relative overflow-hidden bg-gray-100">
              <div
                className="relative w-full h-[70vh] overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseDown={(e) => {
                  if (zoom > 1) {
                    e.preventDefault();
                    setIsDragging(true);
                    setDragStart({
                      x: e.clientX - position.x,
                      y: e.clientY - position.y,
                    });
                  }
                }}
                onMouseMove={(e) => {
                  if (isDragging && zoom > 1) {
                    e.preventDefault();
                    const newX = e.clientX - dragStart.x;
                    const newY = e.clientY - dragStart.y;

                    const maxX = (zoom - 1) * 100;
                    const maxY = (zoom - 1) * 100;

                    setPosition({
                      x: Math.max(-maxX, Math.min(maxX, newX)),
                      y: Math.max(-maxY, Math.min(maxY, newY)),
                    });
                  }
                }}
                onMouseUp={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                }}
                onMouseLeave={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                }}
                onWheel={(e) => {
                  e.preventDefault();
                  const delta = e.deltaY > 0 ? -0.1 : 0.1;
                  const newZoom = Math.max(0.5, Math.min(3, zoom + delta));
                  setZoom(newZoom);
                  if (newZoom <= 1) {
                    setPosition({ x: 0, y: 0 });
                  }
                }}
              >
                <img
                  src={selectedImage}
                  alt={`${selectedFloor} Floor Plan`}
                  className="w-full h-full object-contain"
                  style={{
                    transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
                    transformOrigin: "center",
                    transition: isDragging ? "none" : "transform 0.1s ease-out",
                  }}
                  loading="lazy"
                />
              </div>

              {/* Zoom Instructions */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-lg backdrop-blur-sm text-sm">
                <span>Scroll to zoom • Drag to pan when zoomed</span>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Eye className="w-4 h-4" />
                    <span>High Resolution View</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Building2 className="w-4 h-4" />
                    <span>Detailed Floor Plan</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      setZoom(1);
                      setPosition({ x: 0, y: 0 });
                    }}
                    className="bg-gray-600 text-white px-3 py-1.5 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-semibold"
                  >
                    Reset View
                  </button>
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      setSelectedFloor("");
                      setZoom(1);
                      setPosition({ x: 0, y: 0 });
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyLayout;
