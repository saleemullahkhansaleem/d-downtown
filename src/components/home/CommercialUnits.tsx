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

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <Eye className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Net Area Pricing Policy
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              We deal exclusively in Net Area, ensuring that you only pay for
              the space you actually use. No charges for non-functional or
              shared areas - transparent pricing for smart investors.
            </p>

            {/* CTA Buttons */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Link
                to="/project-portfolio"
                className="group bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Building2 className="w-5 h-5" />
                <span>View Floor Plans</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </Link>

              <Link
                to="/payment-pricing"
                className="group bg-amber-600 hover:bg-amber-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <CreditCard className="w-5 h-5" />
                <span>View Pricing</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialUnits;
