import {
  Building2,
  Users,
  Handshake,
  Shield,
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Briefcase,
  Home,
  Phone,
  Calculator,
} from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

const CommercialServices = () => {
  const leasingBenefits = [
    "Multi-national brand partnerships",
    "National and local brand engagement",
    "Strategic brand mix planning",
    "High footfall attraction",
    "Retail growth support",
    "Long-term value creation",
  ];

  const propertyManagementServices = [
    "Tenant communication management",
    "Rent collection and processing",
    "Maintenance coordination",
    "Property upkeep supervision",
    "Hands-off investment experience",
    "Overseas investor support",
  ];

  const serviceFeatures = [
    {
      icon: Handshake,
      title: "Brand Partnerships",
      description:
        "Strategic partnerships with leading brands to ensure commercial success",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Property Management",
      description:
        "Comprehensive management services for stress-free ownership",
      color: "from-green-500 to-green-600",
    },
    {
      icon: TrendingUp,
      title: "Value Maximization",
      description: "Focused on creating long-term value for all stakeholders",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Users,
      title: "Tenant Support",
      description: "Dedicated support for both tenants and property owners",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Hero Section */}
      <PageHero
        icon={Building2}
        badgeText="Commercial Services"
        title="Beyond Just"
        gradientText="Selling Spaces"
        description="At D-Downtown, we go beyond just selling commercial spaces. We're here to support your business or investment every step of the way."
        iconColor="text-amber-600"
      />

      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          {/* Services Overview */}
          <div className="text-center mb-16">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Commercial Support
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-lg">
                From leasing support for brands to property management for
                investors, we provide end-to-end services that ensure your
                commercial space thrives and generates maximum returns.
              </p>
            </div>
          </div>

          {/* Service Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Leasing Support Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">
                  1. Leasing Support for Brands
                </h2>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6">
                Our leasing team actively engages with multi-national, national,
                and local brands to bring well-known names into D-Downtown. From
                clothing outlets and food chains to pharmacies and service
                providers, we work to ensure a healthy brand mix that attracts
                high footfall.
              </p>
              <p className="text-blue-100 leading-relaxed mb-6">
                The goal is to create a space that attracts foot traffic,
                supports retail growth, and builds long-term value for everyone
                involved. This service benefits investors by increasing demand
                and ensuring that the project stays vibrant and commercially
                active from the start.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {leasingBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Strategic Brand Mix
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <span className="text-gray-800 font-medium">
                    Multi-national Brands
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">N</span>
                  </div>
                  <span className="text-gray-800 font-medium">
                    National Brands
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">L</span>
                  </div>
                  <span className="text-gray-800 font-medium">
                    Local Brands
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Property Management Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Hands-Off Investment
                </h3>
              </div>
              <div className="space-y-4">
                {propertyManagementServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-gray-800 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">
                  2. Property Management for Investors
                </h2>
              </div>
              <p className="text-green-100 leading-relaxed mb-6">
                Once you have possession of your unit, you don't have to manage
                everything on your own. Our property management team takes care
                of all the day-to-day details. This includes tenant
                communication, rent collection, maintenance issues, and overall
                upkeep.
              </p>
              <p className="text-green-100 leading-relaxed mb-6">
                Property management charges will be finalized following a site
                visit. It's a hands-off way for investors to earn rental income
                while we handle the operations behind the scenes. This service
                is especially helpful for overseas investors or those who want a
                stress-free ownership experience.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Home className="w-5 h-5 mr-2" />
                  Perfect for Overseas Investors
                </h4>
                <p className="text-green-100 text-sm">
                  Our comprehensive management services ensure that distance is
                  never a barrier to successful property ownership and income
                  generation.
                </p>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 text-white shadow-2xl text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              From Leasing to Long-term Care
            </h2>
            <p className="text-amber-100 text-lg max-w-3xl mx-auto leading-relaxed">
              We help you get the most out of your space with comprehensive
              services that cover every aspect of commercial property ownership,
              from initial leasing to ongoing management.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Comprehensive Commercial Services"
        description="Let our expert team help you maximize the potential of your commercial space. From leasing support to property management, we're here to ensure your success."
        badgeText="Get Started"
        badgeIcon={Star}
        primaryAction={{
          text: "Contact Our Team",
          href: "/contact-us",
          icon: Phone,
        }}
        secondaryAction={{
          text: "View Pricing",
          href: "/payment-pricing",
          icon: Calculator,
        }}
      />
    </div>
  );
};

export default CommercialServices;
