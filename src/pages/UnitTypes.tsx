import {
  ShoppingBag,
  Coffee,
  Scissors,
  Stethoscope,
  Briefcase,
  Palette,
  ChevronRight,
  Building2,
  Store,
  Users,
  Target,
  TrendingUp,
  Phone,
} from "lucide-react";
import { PageHero, CTASection, SEO } from "../components";

const UnitTypes = () => {
  const unitTypes = [
    {
      name: "Clothing And Fashion Brands",
      icon: ShoppingBag,
      description:
        "Perfect spaces for fashion retailers, boutiques, and clothing brands to showcase their latest collections.",
      features: [
        "High visibility storefronts",
        "Ample display space",
        "Fitting room areas",
        "Storage facilities",
      ],
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Cafés & Restaurants",
      icon: Coffee,
      description:
        "Ideal locations for restaurants, cafes, and food establishments with kitchen facilities and dining areas.",
      features: [
        "Kitchen infrastructure",
        "Dining space",
        "Outdoor seating options",
        "Delivery access",
      ],
      color: "from-amber-500 to-orange-600",
    },
    {
      name: "Tea & Coffee Shops",
      icon: Coffee,
      description:
        "Cozy spaces perfect for tea houses, coffee shops, and beverage-focused establishments.",
      features: [
        "Beverage preparation area",
        "Seating arrangements",
        "Takeaway service",
        "Relaxed atmosphere",
      ],
      color: "from-brown-500 to-amber-600",
    },
    {
      name: "Ice Cream Parlors",
      icon: Coffee,
      description:
        "Sweet spots for ice cream shops, dessert cafes, and confectionery businesses.",
      features: [
        "Freezer storage",
        "Display counters",
        "Seating area",
        "Takeaway service",
      ],
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Juice Bars",
      icon: Coffee,
      description:
        "Fresh and healthy spaces for juice bars, smoothie shops, and health-focused beverage businesses.",
      features: [
        "Juice preparation area",
        "Fresh fruit storage",
        "Health-focused branding",
        "Quick service setup",
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Grocery And Convenience Stores",
      icon: ShoppingBag,
      description:
        "Essential retail spaces for grocery stores, convenience stores, and daily necessities.",
      features: [
        "Storage facilities",
        "Display shelving",
        "Checkout counters",
        "Parking access",
      ],
      color: "from-green-600 to-teal-700",
    },
    {
      name: "Pharmacy & Cosmetics Stores",
      icon: ShoppingBag,
      description:
        "Healthcare and beauty retail spaces with proper storage and display systems.",
      features: [
        "Medicine storage",
        "Beauty product displays",
        "Consultation area",
        "Security systems",
      ],
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Beauty Salons",
      icon: Scissors,
      description:
        "Professional beauty and grooming spaces with specialized equipment and facilities.",
      features: [
        "Styling stations",
        "Washing areas",
        "Equipment storage",
        "Waiting area",
      ],
      color: "from-pink-600 to-rose-700",
    },
    {
      name: "Boutiques",
      icon: ShoppingBag,
      description:
        "Exclusive retail spaces for boutique shops, specialty stores, and unique merchandise.",
      features: [
        "Premium display areas",
        "Fitting rooms",
        "Storage space",
        "VIP customer service",
      ],
      color: "from-purple-600 to-violet-700",
    },
    {
      name: "Dental Clinics",
      icon: Stethoscope,
      description:
        "Healthcare spaces designed for dental practices with proper medical infrastructure.",
      features: [
        "Treatment rooms",
        "Sterilization area",
        "Waiting room",
        "Medical equipment storage",
      ],
      color: "from-blue-600 to-sky-700",
    },
    {
      name: "Corporate Offices",
      icon: Briefcase,
      description:
        "Professional office spaces for corporate businesses, startups, and established companies.",
      features: [
        "Meeting rooms",
        "Open workspace",
        "Reception area",
        "IT infrastructure",
      ],
      color: "from-gray-600 to-slate-700",
    },
    {
      name: "Consultancies & Service Providers",
      icon: Briefcase,
      description:
        "Consulting and service business spaces with meeting rooms and professional atmosphere.",
      features: [
        "Consultation rooms",
        "Conference facilities",
        "Reception area",
        "Professional branding",
      ],
      color: "from-indigo-600 to-blue-700",
    },
    {
      name: "Creative Studios & Agencies",
      icon: Palette,
      description:
        "Creative workspaces for design agencies, studios, and artistic businesses.",
      features: [
        "Creative workspace",
        "Meeting areas",
        "Equipment storage",
        "Inspiration zones",
      ],
      color: "from-orange-500 to-red-600",
    },
  ];

  const benefits = [
    {
      title: "Flexible Layout Options",
      description:
        "Each unit can be customized to fit your specific business needs and branding requirements.",
      icon: Building2,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Prime Location Visibility",
      description:
        "Strategic positioning ensures maximum exposure and foot traffic for your business.",
      icon: Target,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Modern Infrastructure",
      description:
        "State-of-the-art facilities and amenities to support your business operations.",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Community Integration",
      description:
        "Be part of a thriving commercial community with complementary businesses.",
      icon: Users,
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Unit Types - D-DOWNTOWN Commercial Development"
        description="Explore diverse commercial unit types at D-DOWNTOWN. From retail spaces to professional offices, find the perfect space for your business in Rawalpindi's premier commercial hub."
        keywords="commercial units, retail spaces, office spaces, business units, D-DOWNTOWN units, commercial spaces Rawalpindi, business premises"
        url="/unit-types"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "D-DOWNTOWN Unit Types",
          description: "Commercial unit types available at D-DOWNTOWN",
          url: "https://d-downtown.com/unit-types",
          itemListElement: unitTypes.map((unit, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "RealEstateListing",
              name: unit.name,
              description: unit.description,
            },
          })),
        }}
      />

      {/* Hero Section */}
      <PageHero
        icon={Store}
        badgeText="Commercial Units"
        title="Unit"
        gradientText="Types"
        description="Discover the perfect commercial space for your business. From retail stores to professional offices, D-DOWNTOWN offers diverse unit types designed to support every business need."
        iconColor="text-blue-600"
      />

      {/* Unit Types Grid */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-amber-100/20"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-amber-100 px-4 py-2 rounded-full mb-4">
              <Store className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-blue-900 text-sm">
                Diverse Business Spaces
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect Units for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              D-DOWNTOWN offers commercial units that fit a wide range of
              businesses. Whether you're in retail, food service, or
              professional services, there's a space designed to support your
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unitTypes.map((unit, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-blue-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-amber-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 p-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className={`p-3 bg-gradient-to-r ${unit.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <unit.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-lg mb-2">
                        {unit.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {unit.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {unit.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-blue-600 font-semibold text-sm">
                      Available Now
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-amber-50/30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-green-900 text-sm">
                Why Choose D-DOWNTOWN
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Our Commercial Units
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every unit at D-DOWNTOWN is designed with your business success in
              mind. Discover the advantages that make our commercial spaces the
              perfect choice for your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
                <div
                  className={`p-4 bg-gradient-to-r ${benefit.color} rounded-xl text-white w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Find Your Perfect Unit?"
        subtitle="Explore Available Spaces"
        description="Contact our sales team today to explore available units and find the perfect space for your business. Let us help you take the next step towards your success."
        badgeText="Units Available"
        badgeIcon={Store}
        primaryAction={{
          text: "Contact Sales Team",
          href: "/contact-us",
          icon: Phone,
        }}
        secondaryAction={{
          text: "Schedule Viewing",
          href: "/contact-us",
          icon: Target,
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

export default UnitTypes;
