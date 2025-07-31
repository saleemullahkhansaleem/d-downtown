import React from "react";
import { MapPin, Navigation, Clock, Users, TrendingUp } from "lucide-react";

const Location = () => {
  const neighborhoods = [
    "Bahria Town",
    "Adyala",
    "Morgah",
    "Askari 14",
    "Gulshanabad",
    "TNT Colony",
    "DHA Phase 1, 2 & 4",
  ];

  return (
    <section
      id="location"
      className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-1.5 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="text-blue-800 font-semibold text-sm">
              Strategic Location
            </span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Prime Location Advantage
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategically positioned on Main Defence Road with quick access to
            major areas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Map/Visual */}
          <div className="relative group">
            <div className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100">
              <img
                src="https://images.pexels.com/photos/6634154/pexels-photo-6634154.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Location Map"
                className="w-full h-72 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="mt-4 flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1.5 rounded-full">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="font-bold text-blue-900 text-sm">
                    Main Defence Road
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-amber-50 px-3 py-1.5 rounded-full">
                  <Navigation className="w-4 h-4 text-amber-600" />
                  <span className="font-bold text-amber-900 text-sm">
                    Opposite Askari 14
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span className="font-bold text-sm">High Growth Area</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center space-x-3">
                <Users className="w-6 h-6 text-blue-600" />
                <span>7 Densely Populated Neighborhoods</span>
              </h3>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Surrounded by 7 Densely Populated Neighborhoods
              </h3>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map((neighborhood, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white px-2.5 py-1 rounded shadow hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-800 font-semibold text-sm">
                      {neighborhood}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-3 p-2 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Quick Access
                  </h4>
                  <p className="text-gray-600 font-medium text-xs">
                    Saddar GPO & GT Road
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-2 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Heavy Daily Footfall
                  </h4>
                  <p className="text-gray-600 font-medium text-xs">
                    High-demand urban zone
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-2xl border border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200/30 rounded-full blur-2xl"></div>
              <h4 className="font-black text-blue-900 mb-2 text-lg relative z-10">
                🎯 No Competition
              </h4>
              <p className="text-blue-800 leading-relaxed font-medium relative z-10 text-sm">
                No branded commercial development in the area, offering
                unmatched visibility and market opportunity for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
