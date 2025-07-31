import {
  MapPin,
  Building2,
  Shield,
  Users,
  Target,
  Award,
  CheckCircle,
  Star,
  TrendingUp,
  Calculator,
  MessageSquareText,
} from "lucide-react";
import { PageHero, CTASection } from "../components";

const AboutUs = () => {
  const features = [
    {
      icon: Building2,
      title: "6 Well-Planned Plazas",
      description:
        "Modern commercial plazas with state-of-the-art infrastructure",
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description:
        "Round-the-clock security ensuring safety for all businesses",
    },
    {
      icon: Users,
      title: "Property Management",
      description: "Comprehensive property management services for investors",
    },
    {
      icon: Target,
      title: "Strategic Location",
      description:
        "Prime location surrounded by high footfall residential communities",
    },
  ];

  const nearbyLandmarks = [
    "Ayub National Park",
    "Al-Shifa Trust Eye Hospital",
    "Fauji Foundation Hospital",
    "CMH",
    "Joyland",
    "Morgah Biodiversity Park",
    "Foundation University",
  ];

  const residentialAreas = ["Bahria", "DHA Phase 1", "Gulshanabad", "Morgah"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Hero Section */}
      <PageHero
        icon={Star}
        badgeText="About D-DOWNTOWN"
        title="Rawalpindi's Premier"
        gradientText="Commercial Hub"
        description="A purpose-built commercial ecosystem designed to meet the growing business and retail needs of Rawalpindi, creating long-term value through convenience, connectivity, and commercial excellence."
        iconColor="text-amber-600"
      />

      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Strategic Location & Connectivity
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  D-Downtown is strategically located near Askari 14 and Adyala
                  Road, surrounded by high footfall residential communities
                  including{" "}
                  <span className="font-semibold text-blue-600">
                    {residentialAreas.join(", ")}
                  </span>
                  , making it a prime location for retail outlets, food chains,
                  corporate offices, and service-based businesses.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    Nearby Landmarks (5-minute drive)
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {nearbyLandmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">
                          {landmark}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
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
          </div>

          {/* Infrastructure Section */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full mb-4">
                <Award className="w-5 h-5 text-green-600" />
                <span className="text-green-800 font-semibold text-sm">
                  RDA APPROVED
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Modern Infrastructure
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Approved by the Rawalpindi Development Authority (RDA),
                D-Downtown features cutting-edge infrastructure designed for the
                future of commercial excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Underground Electricity
                </h3>
                <p className="text-gray-600 text-sm">
                  Modern electrical infrastructure for reliable power supply
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Centralized HVAC
                </h3>
                <p className="text-gray-600 text-sm">
                  Heating, ventilation, and air conditioning systems
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Front-Facing Parking
                </h3>
                <p className="text-gray-600 text-sm">
                  Convenient parking facilities for customers and staff
                </p>
              </div>
            </div>
          </div>

          {/* Management & Investment Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">In-House Management</h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                What sets us apart is not just the location and amenities. It is
                the way we manage the project. Our in-house team handles
                everything from leasing to brands and managing investor
                properties after possession.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Complete leasing management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Brand partnership facilitation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100">
                    Post-possession property management
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Flexible Investment Models
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We offer flexible investment models designed to meet diverse
                investor needs and maximize returns.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <span className="text-gray-800 font-medium">
                    Rental Income Plans
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <span className="text-gray-800 font-medium">
                    Early Possession Options
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <span className="text-gray-800 font-medium">
                    Price Benefits for Early Investors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join D-DOWNTOWN?"
        subtitle="Rawalpindi's Premier Commercial Hub"
        description="Take the first step towards securing your commercial space in Rawalpindi's most strategic location. Our team is ready to guide you through every step of your investment journey."
        badgeText="Get Started"
        badgeIcon={Star}
        primaryAction={{
          text: "Contact Us Today",
          href: "/contact-us",
          icon: MessageSquareText,
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

export default AboutUs;
