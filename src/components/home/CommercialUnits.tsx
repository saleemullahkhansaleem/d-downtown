import { Square, DollarSign, Eye } from "lucide-react";

const CommercialUnits = () => {
  const units = [
    {
      image:
        "https://images.pexels.com/photos/2767815/pexels-photo-2767815.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "200 sq ft",
      pricing: "Starting from PKR 15 Lac",
      type: "Shop",
    },
    {
      image:
        "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "400 sq ft",
      pricing: "Starting from PKR 28 Lac",
      type: "Retail Store",
    },
    {
      image:
        "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "600 sq ft",
      pricing: "Starting from PKR 40 Lac",
      type: "Restaurant",
    },
    {
      image:
        "https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "300 sq ft",
      pricing: "Starting from PKR 22 Lac",
      type: "Cafe",
    },
    {
      image:
        "https://images.pexels.com/photos/3621220/pexels-photo-3621220.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "800 sq ft",
      pricing: "Starting from PKR 55 Lac",
      type: "Brand Outlet",
    },
    {
      image:
        "https://images.pexels.com/photos/2539462/pexels-photo-2539462.jpeg?auto=compress&cs=tinysrgb&w=800",
      area: "500 sq ft",
      pricing: "Starting from PKR 35 Lac",
      type: "Office Space",
    },
  ];

  return (
    <section id="units" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Commercial Units
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from a variety of commercial spaces designed for different
            business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={unit.image}
                  alt={unit.type}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <button className="w-full bg-white/90 backdrop-blur-sm text-gray-900 py-1.5 rounded-lg font-semibold hover:bg-white transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {unit.type}
                </h3>

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Square className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 text-sm">Area</span>
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">
                      {unit.area}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 text-sm">Price</span>
                    </div>
                    <span className="font-semibold text-blue-900 text-sm">
                      {unit.pricing}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-blue-900 hover:bg-blue-800 text-white py-2.5 rounded-lg font-semibold transition-colors text-sm">
                  Get More Info
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
            <Eye className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Net Area Pricing Policy
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              We deal exclusively in Net Area, ensuring that you only pay for
              the space you actually use. No charges for non-functional or
              shared areas - transparent pricing for smart investors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialUnits;
