import {
  MapPin,
  Navigation,
  Car,
  Home,
  TreePine,
  Heart,
  GraduationCap,
  Phone,
  Star,
  Users,
  TrendingUp,
} from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

const LocationConnectivity = () => {
  const roadAccess = ["Adyala Road", "GT Road", "Saddar"];

  const residentialCommunities = [
    "Askari 14",
    "Bahria Town",
    "DHA Phase 1, 2 & 4",
    "Morgah",
    "Adyala",
    "TNT Colony",
    "Gulshanabad",
  ];

  const parksRecreation = [
    "Ayub National Park",
    "Joyland",
    "Morgah Biodiversity Park",
  ];

  const hospitals = [
    "Fauji Foundation Hospital",
    "Al-Shifa Eye Trust Hospital",
    "Bahria International Hospital",
  ];

  const educationalInstitutions = ["Foundation University"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        icon={MapPin}
        badgeText="Strategic Location"
        title="Location &"
        gradientText="Connectivity"
        description="D-Downtown is Rawalpindi's only upcoming branded commercial hub, strategically located to ensure maximum visibility, convenience, and access. Surrounded by well-established residential communities and connected to major roads, it offers an ideal setting for businesses to thrive."
        iconColor="text-amber-400"
        badgeBgColor="from-white/10 to-white/20"
        badgeTextColor="text-white"
      />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Address Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900">
                    Our Address
                  </h2>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    D Downtown
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Sector 3 Rawalpindi, 46000, Pakistan
                  </p>

                  {/* Google Map Placeholder */}
                  <div className="mt-6 bg-gray-100 rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-500 font-medium">
                        Google Map Location
                      </p>
                      <p className="text-gray-400 text-sm">
                        Embed Google Map Here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Road Access */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
                <Car className="w-5 h-5 text-amber-600" />
                <span className="text-amber-800 font-semibold">
                  Road Access
                </span>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Major Road Connections
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Excellent connectivity to major roads ensures easy access for
                customers and suppliers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {roadAccess.map((road, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Navigation className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{road}</h3>
                  </div>
                  <p className="text-gray-600">
                    Direct access for seamless connectivity
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Residential Communities */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-4">
                <Home className="w-5 h-5 text-green-600" />
                <span className="text-green-800 font-semibold">
                  Residential Communities
                </span>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Surrounding Residential Communities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Surrounded by well-established, high-income residential areas
                providing a strong customer base
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {residentialCommunities.map((community, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="font-semibold text-gray-900">
                      {community}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parks & Recreation */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
                <TreePine className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-800 font-semibold">
                  Parks & Recreation
                </span>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Nearby Parks & Recreation
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Family-friendly recreational areas that enhance the quality of
                life in the neighborhood
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {parksRecreation.map((park, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <TreePine className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{park}</h3>
                  </div>
                  <p className="text-gray-600">
                    Perfect for family outings and relaxation
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hospitals */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-full mb-4">
                <Heart className="w-5 h-5 text-red-600" />
                <span className="text-red-800 font-semibold">Healthcare</span>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Hospitals Nearby
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access to quality healthcare facilities ensures peace of mind
                for residents and employees
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {hospitals.map((hospital, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {hospital}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Quality healthcare within reach
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Institutions */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <span className="text-purple-800 font-semibold">Education</span>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Educational Institutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Proximity to educational institutions creates a vibrant,
                knowledge-based community
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6 max-w-2xl mx-auto">
              {educationalInstitutions.map((institution, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {institution}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Excellence in education and research
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Advantage */}
          <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <Star className="w-5 h-5 text-amber-400" />
                  <span className="text-white font-semibold">
                    Strategic Advantage
                  </span>
                </div>
                <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Why This Location is Perfect
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">High Foot Traffic</h3>
                  <p className="text-blue-100">
                    Surrounded by densely populated residential areas
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Navigation className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Excellent Connectivity
                  </h3>
                  <p className="text-blue-100">
                    Easy access to major roads and highways
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Growth Potential</h3>
                  <p className="text-blue-100">
                    Prime location with high growth prospects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Secure Your Space?"
        subtitle="Prime Location Awaits"
        description="Don't miss the opportunity to establish your business in Rawalpindi's most strategic commercial location. Contact us today to learn more about available units and investment opportunities."
        primaryAction={{
          text: "Contact Us Now",
          href: "/contact-us",
          icon: Phone,
        }}
        secondaryAction={{
          text: "View Investment Models",
          href: "/investment-models",
          icon: TrendingUp,
        }}
        badgeText="Limited Units Available"
        badgeIcon={Star}
        gradientColors={{
          from: "from-slate-900",
          via: "via-blue-900",
          to: "to-indigo-900",
        }}
      />
    </div>
  );
};

export default LocationConnectivity;
