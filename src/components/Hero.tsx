import { useState } from "react";
import { MapPin, Award, Calendar, ArrowRight, Sparkles } from "lucide-react";
import ContactForm from "./ContactForm";
import { heroImages } from "../assets/images";

// Dynamic features data
const keyFeatures = [
  {
    id: 1,
    icon: MapPin,
    title: "Prime Location",
    subtitle: "Main Defence Road",
    gradient: "from-amber-400 to-amber-600",
    shadowColor: "amber-500",
  },
  {
    id: 2,
    icon: Award,
    title: "RDA Approved",
    subtitle: "Fully Certified",
    gradient: "from-green-400 to-green-600",
    shadowColor: "green-500",
  },
  {
    id: 3,
    icon: Calendar,
    title: "Quick Possession",
    subtitle: "1 Year Delivery",
    gradient: "from-purple-400 to-purple-600",
    shadowColor: "purple-500",
  },
];

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${heroImages.background})`,
        }}
      ></div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-10rem)]">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                <span className="text-amber-400 font-semibold tracking-wider uppercase text-xs">
                  Premium Commercial Hub
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-amber-200 bg-clip-text text-transparent">
                D{"-"}
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  DOWNTOWN
                </span>
              </h1>
              <p className="text-xl lg:text-2xl font-light text-transparent bg-gradient-to-r from-blue-200 to-amber-200 bg-clip-text">
                FUTURE-READY, TODAY!
              </p>
            </div>

            <p className="text-base lg:text-lg text-blue-100 leading-relaxed max-w-2xl opacity-90">
              Rawalpindi's modern purpose-built commercial hub, featuring 10
              modern plazas on Main Defence Road, surrounded by 7 densely
              populated neighborhoods with unmatched visibility and heavy daily
              footfall.
            </p>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-2 pt-4">
              {keyFeatures.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="flex items-center space-x-3 group hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div
                      className={`bg-gradient-to-br ${feature.gradient} p-2.5 rounded-xl shadow-lg group-hover:shadow-${feature.shadowColor}/25`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{feature.title}</p>
                      <p className="text-xs text-blue-200">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setShowForm(true)}
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25 flex items-center justify-center space-x-2"
              >
                <span>Book Site Visit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a
                href="#units"
                className="group border-2 border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 text-center hover:border-white flex items-center justify-center space-x-2"
              >
                <span>View Units</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <img
                src={heroImages.plaza}
                alt="D-DOWNTOWN Commercial Plaza"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="mt-6 space-y-4 relative">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  10 Plazas
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Modern Commercial Plazas
                </h3>
                <p className="text-blue-100 text-lg">
                  Contemporary spaces designed for retail excellence
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-2xl shadow-xl animate-bounce">
              <Award className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-2xl shadow-xl animate-pulse">
              <MapPin className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Hero;
