import { useState, useEffect } from "react";
import {
  Building2,
  Zap,
  Droplets,
  Shield,
  Car,
  Coffee,
  ShoppingBag,
  Scissors,
  Stethoscope,
  Briefcase,
  Palette,
  MapPin,
  TrendingUp,
  Eye,
  Layers,
  Store,
  Building,
  Square,
  ChevronRight,
  Phone,
  X,
} from "lucide-react";
import { PageHero, CTASection, SEO } from "../components";
import { floorPlanImages } from "../assets/images";

const ProjectPortfolio = () => {
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

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const unitTypes = [
    { name: "Clothing And Fashion Brands", icon: ShoppingBag },
    { name: "Cafés & Restaurants", icon: Coffee },
    { name: "Tea & Coffee Shops", icon: Coffee },
    { name: "Ice Cream Parlors", icon: Coffee },
    { name: "Juice Bars", icon: Coffee },
    { name: "Grocery And Convenience Stores", icon: ShoppingBag },
    { name: "Pharmacy & Cosmetics Stores", icon: ShoppingBag },
    { name: "Beauty Salons", icon: Scissors },
    { name: "Boutiques", icon: ShoppingBag },
    { name: "Dental Clinics", icon: Stethoscope },
    { name: "Corporate Offices", icon: Briefcase },
    { name: "Consultancies & Service Providers", icon: Briefcase },
    { name: "Creative Studios & Agencies", icon: Palette },
  ];

  const amenities = [
    {
      title: "Underground Electricity/ Water/ Sewerage",
      description:
        "All units are connected to underground electricity, water, and sewerage systems for a cleaner, safer, and more organized setup.",
      icon: Zap,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Centralized Heating and Cooling",
      description:
        "A fully integrated heating and cooling system ensures comfortable temperatures throughout the year in all commercial spaces.",
      icon: Droplets,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Elevator Access",
      description:
        "Each commercial plaza is equipped with 2 high-quality elevators, located on either end, providing smooth and convenient access to all floors for both customers and business owners.",
      icon: Building2,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Waste Management",
      description:
        "A dedicated garbage disposal system helps maintain cleanliness and hygiene throughout the premises.",
      icon: Shield,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Front-Facing Parking",
      description:
        "Convenient parking is available right in front of the plazas, making access easy for customers and employees.",
      icon: Car,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: "24/7 Security",
      description:
        "Round-the-clock security with surveillance cameras and trained on-site staff ensures a safe and secure environment for everyone.",
      icon: Shield,
      color: "from-red-500 to-red-600",
    },
  ];

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
    },
    {
      floor: "Ground Floor (18 Feet Height)",
      shops: 6,
      pricing: "PKR 60,000/Sq. Ft",
      description:
        "The ground floor stands out with its tall 18-foot ceilings and large storefronts. It's perfect for clothing brands, food chains, flagship stores, and brand showrooms looking to make a strong impression. High visibility from the main road makes it a prime location for well-known names.",
      areas: [
        { shop: "Shop Number 1 & 6", area: "317 Sq. ft" },
        { shop: "Shop Number 2 & 5", area: "542 Sq. ft" },
        { shop: "Shop Number 3 & 4", area: "533 Sq. ft" },
      ],
      color: "from-blue-600 to-blue-800",
      icon: Store,
      image: floorPlanImages.groundFloor,
    },
    {
      floor: "Mezzanine Floor",
      shops: 4,
      pricing: "PKR 60,000/Sq. Ft",
      description:
        "Located just above the ground floor, the mezzanine suits boutique shops, cafés, juice bars, and tea houses. It offers a cozy yet visible space that feels close to the energy of the ground floor while providing a slightly more private setting.",
      areas: [{ shop: "Shop Number 3 to 5", area: "361 Sq. ft" }],
      color: "from-purple-600 to-purple-800",
      icon: Building,
      image: floorPlanImages.mezzanine,
    },
    {
      floor: "First Floor",
      shops: 38,
      pricing: "PKR 35,000/Sq. Ft",
      description:
        "With an open and flexible layout, the first floor works well for service-based businesses, small offices, or local agencies. It keeps you connected to customer traffic while giving you the space to work or serve in a clean, modern setting.",
      areas: [
        { shop: "Space Number 1 to 18, 20-27, 30-37", area: "100 Sq. ft" },
        { shop: "Space Number 19 & 28", area: "143 Sq. ft" },
        { shop: "Space Number 29 & 38", area: "145 Sq. ft" },
      ],
      color: "from-green-600 to-green-800",
      icon: Building2,
      image: floorPlanImages.firstFloor,
    },
    {
      floor: "Second Floor",
      shops: 38,
      pricing: "PKR 30,000/Sq. Ft",
      description:
        "This is the quietest and most private level, ideal for corporate offices, consultancies, or creative studios. It's designed to support focused work and offers room for customization, making it suitable for long-term operations and professional setups.",
      areas: [
        { shop: "Space Number 1 to 18, 20-27, 30-37", area: "100 Sq. ft" },
        { shop: "Space Number 19 & 28", area: "143 Sq. ft" },
        { shop: "Space Number 29 & 38", area: "145 Sq. ft" },
      ],
      color: "from-amber-600 to-amber-800",
      icon: Building2,
      image: floorPlanImages.secondFloor,
    },
    {
      floor: "Roof Top",
      shops: 12,
      pricing: "PKR 25,000/Sq. Ft",
      description:
        "The rooftop offers a unique outdoor commercial space perfect for rooftop restaurants, cafes, event venues, and recreational facilities. With panoramic views and open-air atmosphere, it's ideal for businesses that want to create memorable experiences for their customers.",
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
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Project Portfolio - D-DOWNTOWN Commercial Development"
        description="Explore D-DOWNTOWN's impressive project portfolio showcasing our 10 modern commercial plazas. View detailed specifications, floor plans, and investment opportunities in Rawalpindi's premier commercial hub."
        keywords="D-DOWNTOWN portfolio, commercial development, project showcase, floor plans, specifications, investment opportunities, commercial plazas Rawalpindi, retail spaces, commercial units"
        url="/project-portfolio"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "D-DOWNTOWN Project Portfolio",
          description: "Collection of commercial development projects",
          url: "https://d-downtown.com/project-portfolio",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@type": "RealEstateListing",
                name: "Commercial Plaza 1",
                description: "Modern commercial space in D-DOWNTOWN",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@type": "RealEstateListing",
                name: "Commercial Plaza 2",
                description: "Retail and office spaces in D-DOWNTOWN",
              },
            },
          ],
        }}
      />
      {/* Hero Section */}
      <PageHero
        icon={Building2}
        badgeText="Portfolio"
        title="Project"
        gradientText="Portfolio"
        description="Explore our impressive portfolio of successful commercial projects and developments across Rawalpindi. Discover the perfect space for your business."
        iconColor="text-blue-600"
      />

      {/* Unit Types Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-amber-100/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-amber-100 px-4 py-2 rounded-full mb-4">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-blue-900 text-sm">
                Commercial Spaces
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect Units for Every Business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              D-Downtown offers commercial units that fit a wide range of
              businesses. Whether you're in retail, food, or professional
              services, there's a space designed to support your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {unitTypes.map((unit, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden p-4"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-amber-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-amber-500 rounded-xl text-white shadow-md transition-transform duration-300">
                      <unit.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                        {unit.name}
                      </h3>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full w-0 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <p className="text-gray-700 font-medium">
                Each unit offers flexibility in layout and size, helping
                businesses create the right environment for their customers or
                teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-12 px-4 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-amber-50/30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-green-900 text-sm">
                Premium Features
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              World-Class Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              D-Downtown offers a range of modern amenities that make it easy
              for businesses to operate smoothly and for customers to enjoy
              their visit. Every detail is planned with comfort, efficiency, and
              reliability in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${amenity.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                ></div>
                <div
                  className={`p-4 bg-gradient-to-r ${amenity.color} rounded-xl text-white w-fit mb-4 shadow-md group-hover:scale-105 transition-transform duration-300`}
                >
                  <amenity.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {amenity.description}
                </p>
                {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-blue-600 font-semibold text-sm">
                    <span>Learn More</span>
                    <ChevronRight className="w-3 h-3 ml-1" />
                  </div>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Layout Section */}
      <section className="py-8 px-4 bg-gradient-to-br from-blue-50 via-gray-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-amber-100/20"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-3 py-1.5 rounded-full mb-3">
              <Building2 className="w-3.5 h-3.5 text-purple-600" />
              <span className="font-semibold text-purple-900 text-xs">
                Floor Plans
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Strategic Property Layout
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              D-Downtown is designed across multiple levels to suit a variety of
              business types. Each floor offers practical layouts, easy access,
              and strong visibility to help your business grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {propertyLayouts.map((layout, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-white/50 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`bg-gradient-to-r ${layout.color} p-4 text-white relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                          <layout.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">
                            {layout.floor}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="flex items-center space-x-1 bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm text-xs">
                              <Store className="w-3 h-3" />
                              <span className="font-semibold">
                                {layout.shops} Shops
                              </span>
                            </span>
                            <span className="flex items-center space-x-1 bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm text-xs">
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

                <div className="p-4">
                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {layout.description}
                  </p>

                  {/* Full Width Floor Plan Image */}
                  <div className="mb-4">
                    <div
                      className="relative w-full rounded-lg overflow-hidden shadow-md border border-gray-200 cursor-pointer group"
                      onClick={() => {
                        setSelectedImage(layout.image);
                        setSelectedFloor(layout.floor);
                      }}
                    >
                      <img
                        src={layout.image}
                        alt={`${layout.floor} Floor Plan`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                          <span className="font-bold text-gray-900 text-sm flex items-center space-x-2">
                            <Eye className="w-4 h-4" />
                            <span>Click to View</span>
                          </span>
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-md">
                          <span className="font-bold text-gray-900 text-xs">
                            {layout.floor} Plan
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2 text-base">
                      <div className="p-1.5 bg-blue-100 rounded-md">
                        <MapPin className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>Net Size/Area Breakdown</span>
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

      {/* 3D Model Section */}
      <section className="py-12 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 px-4 py-2 rounded-full mb-4 backdrop-blur-sm border border-white/20">
              <Eye className="w-4 h-4 text-blue-300" />
              <span className="font-semibold text-blue-200 text-sm">
                Virtual Experience
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              3D Model of the Project Space
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience our project in immersive 3D. Explore every detail of
              D-Downtown's commercial spaces and see how your business can
              thrive in our modern development.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-blue-800/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 shadow-xl">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl mb-8 shadow-lg border border-white/20">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Interactive 3D Experience
                </h3>
                <p className="text-blue-100">
                  Coming Soon - Experience D-Downtown in full 3D detail
                </p>
                <div className="mt-4">
                  <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 text-sm">
                    Get Notified When Available
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="group bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-blue-500/20 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                    <Layers className="w-5 h-5 text-blue-300" />
                  </div>
                  <h4 className="font-bold mb-2 text-base">Floor Plans</h4>
                  <p className="text-gray-300 text-sm">
                    Detailed layouts of each floor with interactive navigation
                  </p>
                </div>
                <div className="group bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-purple-500/20 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-5 h-5 text-purple-300" />
                  </div>
                  <h4 className="font-bold mb-2 text-base">Unit Views</h4>
                  <p className="text-gray-300 text-sm">
                    360° views of commercial units with realistic lighting
                  </p>
                </div>
                <div className="group bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-green-500/20 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-5 h-5 text-green-300" />
                  </div>
                  <h4 className="font-bold mb-2 text-base">Location Context</h4>
                  <p className="text-gray-300 text-sm">
                    See the surrounding area and accessibility features
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Find Your Perfect Space?"
        subtitle="Explore Our Project Portfolio"
        description="Contact us today to explore available units and start your journey with D-Downtown. Our expert team is ready to help you find the perfect location for your business."
        badgeText="Portfolio Ready"
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

                    // Calculate bounds to prevent dragging too far
                    const maxX = (zoom - 1) * 100; // Adjust based on zoom level
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

export default ProjectPortfolio;
