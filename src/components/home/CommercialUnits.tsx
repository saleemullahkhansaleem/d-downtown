import { Square, DollarSign, Eye, Building2, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { commercialUnitImages } from "../../assets/images/commercial-units";

const CommercialUnits = () => {
  const units = [
    {
      image: commercialUnitImages.shop,
      area: "200 sq ft",
      pricing: "Starting from PKR 15 Lac",
      type: "Shop",
    },
    {
      image: commercialUnitImages.retailStore,
      area: "400 sq ft",
      pricing: "Starting from PKR 28 Lac",
      type: "Retail Store",
    },
    {
      image: commercialUnitImages.restaurant,
      area: "600 sq ft",
      pricing: "Starting from PKR 40 Lac",
      type: "Restaurant",
    },
    {
      image: commercialUnitImages.cafe,
      area: "300 sq ft",
      pricing: "Starting from PKR 22 Lac",
      type: "Cafe",
    },
    {
      image: commercialUnitImages.brandOutlet,
      area: "800 sq ft",
      pricing: "Starting from PKR 55 Lac",
      type: "Brand Outlet",
    },
    {
      image: commercialUnitImages.officeSpace,
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
                  className="w-full h-56 object-cover"
                />
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
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Floor-wise Diversion CTA */}
          <Link
            to="/project-portfolio"
            className="group bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 text-white hover:from-blue-800 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-colors">
                <Building2 className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Floor-wise Diversion</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Explore detailed floor plans and commercial plaza layout with
                  complete area breakdowns
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-blue-100 group-hover:text-white transition-colors">
              <span className="text-sm font-semibold">
                View Project Portfolio
              </span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>

          {/* Pricing CTA */}
          <Link
            to="/payment-pricing"
            className="group bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-6 text-white hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition-colors">
                <CreditCard className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Payment & Pricing</h3>
                <p className="text-amber-100 text-sm leading-relaxed">
                  Get detailed pricing information, payment plans, and
                  investment options
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-amber-100 group-hover:text-white transition-colors">
              <span className="text-sm font-semibold">
                View Pricing Details
              </span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
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
