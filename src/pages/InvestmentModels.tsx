import {
  Building2,
  TrendingUp,
  Users,
  Calculator,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Percent,
  Award,
} from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

const InvestmentModels = () => {
  const investmentModels = [
    {
      id: 1,
      title: "Rental Model",
      subtitle: "Monthly Returns After Possession",
      icon: Building2,
      color: "from-blue-500 to-blue-700",
      shadowColor: "group-hover:shadow-blue-500/25",
      features: [
        "0.5% monthly return once unit is rented",
        "Rental income retained during 2-year installment period",
        "Full rental income after ownership transfer",
        "Ideal for passive income investors",
      ],
      highlights: [
        { label: "Monthly Return", value: "0.5%", icon: Percent },
        { label: "Installment Period", value: "2 Years", icon: Clock },
      ],
    },
    {
      id: 2,
      title: "Pre-Launch Model",
      subtitle: "Early Bird Advantage",
      icon: TrendingUp,
      color: "from-green-500 to-green-700",
      shadowColor: "group-hover:shadow-green-500/25",
      features: [
        "Lower prices for early investors",
        "PKR 5,000/sq.ft. increase after ground floor slab",
        "Additional 10% increase after initial phase",
        "25-50% gradual increase after gray structure",
      ],
      highlights: [
        {
          label: "Price Increase",
          value: "PKR 5,000/sq.ft.",
          icon: DollarSign,
        },
        { label: "ROI Potential", value: "25-50%", icon: TrendingUp },
      ],
    },
    {
      id: 3,
      title: "End-User Model",
      subtitle: "Client-Based Investment",
      icon: Users,
      color: "from-purple-500 to-purple-700",
      shadowColor: "group-hover:shadow-purple-500/25",
      features: [
        "Perfect for space utilization",
        "Full rental income after installment completion",
        "100% ownership transfer",
        "Flexible usage options",
      ],
      highlights: [
        { label: "Ownership", value: "100%", icon: Award },
        { label: "Usage", value: "Flexible", icon: CheckCircle },
      ],
    },
  ];

  const comparisonFeatures = [
    {
      feature: "Initial Investment",
      rental: "Standard",
      preLaunch: "Lower",
      endUser: "Standard",
      best: "preLaunch",
    },
    {
      feature: "Monthly Returns",
      rental: "0.5% after rent",
      preLaunch: "Capital appreciation",
      endUser: "Full after completion",
      best: "rental",
    },
    {
      feature: "Risk Level",
      rental: "Low",
      preLaunch: "Medium",
      endUser: "Low",
      best: "rental",
    },
    {
      feature: "Time to Returns",
      rental: "After possession",
      preLaunch: "Immediate appreciation",
      endUser: "After completion",
      best: "preLaunch",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Hero Section */}
      <PageHero
        icon={Calculator}
        badgeText="Investment Opportunities"
        title="Investment Models at"
        gradientText="D-DOWNTOWN"
        description="Discover our flexible investment options designed to benefit both short-term and long-term investors with maximum returns and strategic advantages."
        iconColor="text-amber-600"
      />

      {/* Investment Models Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {investmentModels.map((model, index) => {
              const IconComponent = model.icon;
              return (
                <div
                  key={model.id}
                  className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-500 group hover:transform hover:scale-[1.02] shadow-lg"
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div
                      className={`bg-gradient-to-br ${model.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {model.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{model.subtitle}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    {model.highlights.map((highlight, idx) => {
                      const HighlightIcon = highlight.icon;
                      return (
                        <div key={idx} className="text-center">
                          <div className="flex items-center justify-center mb-1">
                            <HighlightIcon className="w-4 h-4 text-amber-500 mr-1" />
                            <span className="text-xs text-gray-600">
                              {highlight.label}
                            </span>
                          </div>
                          <p className="text-gray-900 font-semibold text-sm">
                            {highlight.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Comparison Table */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Investment Model Comparison
              </h2>
              <p className="text-gray-600">
                Compare the key features of each investment model to make an
                informed decision
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 text-gray-700 font-semibold">
                      Feature
                    </th>
                    <th className="text-center py-4 px-4 text-gray-700 font-semibold">
                      Rental Model
                    </th>
                    <th className="text-center py-4 px-4 text-gray-700 font-semibold">
                      Pre-Launch Model
                    </th>
                    <th className="text-center py-4 px-4 text-gray-700 font-semibold">
                      End-User Model
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-4 text-gray-900 font-medium">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            row.best === "rental"
                              ? "bg-green-500/20 text-green-700 border border-green-500/30"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {row.rental}
                          {row.best === "rental" && (
                            <Star className="w-3 h-3 ml-1 text-green-500" />
                          )}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            row.best === "preLaunch"
                              ? "bg-green-500/20 text-green-700 border border-green-500/30"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {row.preLaunch}
                          {row.best === "preLaunch" && (
                            <Star className="w-3 h-3 ml-1 text-green-500" />
                          )}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            row.best === "endUser"
                              ? "bg-green-500/20 text-green-700 border border-green-500/30"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {row.endUser}
                          {row.best === "endUser" && (
                            <Star className="w-3 h-3 ml-1 text-green-500" />
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Invest in Your Future?"
        subtitle="Choose Your Investment Model"
        description="Select the investment model that best suits your financial goals and timeline. Our expert team is here to guide you through every step of your investment journey."
        badgeText="Investment Ready"
        badgeIcon={TrendingUp}
        primaryAction={{
          text: "Contact Investment Team",
          href: "/contact-us",
          icon: ArrowRight,
        }}
        secondaryAction={{
          text: "View Pricing Details",
          href: "/payment-pricing",
          icon: Calculator,
        }}
        gradientColors={{
          from: "from-emerald-900",
          via: "via-teal-900",
          to: "to-cyan-900",
        }}
      />
    </div>
  );
};

export default InvestmentModels;
