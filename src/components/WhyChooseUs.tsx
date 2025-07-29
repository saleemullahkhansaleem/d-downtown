import React from "react";
import {
  CheckCircle,
  Clock,
  Calculator,
  Building,
  Users,
  Zap,
  Star,
  Shield,
} from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: CheckCircle,
      color: "from-green-400 to-green-600",
      shadowColor: "group-hover:shadow-green-500/25",
      title: "RDA Approved",
      description:
        "Fully approved by Rawalpindi Development Authority with complete legal documentation.",
    },
    {
      icon: Clock,
      color: "from-blue-400 to-blue-600",
      shadowColor: "group-hover:shadow-blue-500/25",
      title: "Post-Handover Payment Plan",
      description:
        "Possession in 1 year with flexible installments spread over 2 years.",
    },
    {
      icon: Calculator,
      color: "from-purple-400 to-purple-600",
      shadowColor: "group-hover:shadow-purple-500/25",
      title: "Net Area Only",
      description:
        "Pay only for usable space. No charges for non-functional or shared areas.",
    },
    {
      icon: Building,
      color: "from-amber-400 to-amber-600",
      shadowColor: "group-hover:shadow-amber-500/25",
      title: "No Competition",
      description:
        "No other branded commercial development in the area, ensuring maximum visibility.",
    },
    {
      icon: Users,
      color: "from-indigo-400 to-indigo-600",
      shadowColor: "group-hover:shadow-indigo-500/25",
      title: "Professional Management",
      description:
        "Dedicated property management services by our experienced team.",
    },
    {
      icon: Zap,
      color: "from-pink-400 to-pink-600",
      shadowColor: "group-hover:shadow-pink-500/25",
      title: "Modern Infrastructure",
      description:
        "Underground utilities, centralized HVAC, and state-of-the-art amenities.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="text-white font-semibold text-sm">
              Premium Benefits
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Why Choose D Downtown?
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover the advantages that make us the preferred choice for smart
            investors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 group hover:transform hover:scale-105 ${benefit.shadowColor} shadow-2xl hover:shadow-3xl`}
              >
                <div
                  className={`bg-gradient-to-br ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 max-w-5xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 group">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-amber-400" />
              <h3 className="text-2xl font-black text-white">
                Modern Infrastructure Includes:
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-blue-100">
              <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl group-hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-amber-400" />
                <span className="font-semibold text-base">
                  Underground Electricity System
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl group-hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-amber-400" />
                <span className="font-semibold text-base">
                  Underground Water Supply
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl group-hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-amber-400" />
                <span className="font-semibold text-base">
                  Modern Sewerage System
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl group-hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-amber-400" />
                <span className="font-semibold text-base">
                  Centralized Heating & Cooling
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
