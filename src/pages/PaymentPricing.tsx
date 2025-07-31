import {
  Building2,
  Calculator,
  DollarSign,
  Calendar,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  MapPin,
  Clock,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { PageHero, CTASection, SEO } from "../components";

const PaymentPricing = () => {
  const [activeFloor, setActiveFloor] = useState("lower-ground");

  const pricingData = {
    "lower-ground": {
      title: "Lower Ground (Shops)",
      pricePerSqFt: "Rs. 40,000",
      color: "from-blue-500 to-blue-700",
      shops: [
        {
          numbers: "Shop #1, 3, 4, 5, 6, 7, 8, 10",
          size: "355 sq ft",
          totalPrice: "14,200,000",
          breakdown: {
            booking: "700,000",
            confirmation: "700,000",
            allocation: "700,000",
            quarterly: "980,000",
            sixMonths: "1,420,000",
            possession: "2,840,000",
          },
        },
        {
          numbers: "Shop #2, 9",
          size: "330 sq ft",
          totalPrice: "13,200,000",
          breakdown: {
            booking: "700,000",
            confirmation: "700,000",
            allocation: "700,000",
            quarterly: "892,500",
            sixMonths: "1,320,000",
            possession: "2,640,000",
          },
        },
      ],
    },
    "ground-floor": {
      title: "Ground Floor (Shops)",
      pricePerSqFt: "Rs. 60,000",
      color: "from-green-500 to-green-700",
      shops: [
        {
          numbers: "Shop #1, 6",
          size: "317 sq ft",
          totalPrice: "19,020,000",
          breakdown: {
            booking: "700,000",
            confirmation: "700,000",
            allocation: "700,000",
            quarterly: "1,401,750",
            sixMonths: "1,902,000",
            possession: "3,804,000",
          },
        },
        {
          numbers: "Shop #2, 5",
          size: "542 sq ft",
          totalPrice: "32,520,000",
          breakdown: {
            booking: "1,000,000",
            confirmation: "1,000,000",
            allocation: "1,000,000",
            quarterly: "2,470,500",
            sixMonths: "3,252,000",
            possession: "6,504,000",
          },
        },
        {
          numbers: "Shop #3, 4",
          size: "533 sq ft",
          totalPrice: "31,980,000",
          breakdown: {
            booking: "1,000,000",
            confirmation: "1,000,000",
            allocation: "1,000,000",
            quarterly: "2,423,250",
            sixMonths: "3,198,000",
            possession: "6,396,000",
          },
        },
      ],
    },
    mezzanine: {
      title: "Mezzanine (Shops)",
      pricePerSqFt: "Rs. 60,000",
      color: "from-purple-500 to-purple-700",
      shops: [
        {
          numbers: "Shop # 2, 3, 4, 5",
          size: "361 sq ft",
          totalPrice: "21,660,000",
          breakdown: {
            booking: "700,000",
            confirmation: "700,000",
            allocation: "700,000",
            quarterly: "1,632,750",
            sixMonths: "2,166,000",
            possession: "4,332,000",
          },
        },
      ],
    },
    "first-floor": {
      title: "First Floor (Shared Commercial Space)",
      pricePerSqFt: "Rs. 35,000",
      color: "from-amber-500 to-amber-700",
      shops: [
        {
          numbers: "Space # 1-18, 20-27, 30-37",
          size: "100 sq ft",
          totalPrice: "3,500,000",
          breakdown: {
            booking: "225,000",
            confirmation: "225,000",
            allocation: "225,000",
            quarterly: "265,625",
            sixMonths: "350,000",
            possession: "350,000",
          },
        },
        {
          numbers: "Space # 19, 28",
          size: "143 sq ft",
          totalPrice: "5,005,000",
          breakdown: {
            booking: "225,000",
            confirmation: "225,000",
            allocation: "225,000",
            quarterly: "416,125",
            sixMonths: "500,500",
            possession: "500,500",
          },
        },
        {
          numbers: "Space # 29, 38",
          size: "145 sq ft",
          totalPrice: "5,075,000",
          breakdown: {
            booking: "225,000",
            confirmation: "225,000",
            allocation: "225,000",
            quarterly: "423,125",
            sixMonths: "507,500",
            possession: "507,500",
          },
        },
      ],
    },
    "second-floor": {
      title: "Second Floor (Shared Commercial Space)",
      pricePerSqFt: "Rs. 30,000",
      color: "from-red-500 to-red-700",
      shops: [
        {
          numbers: "Space # 1-18, 20-27, 30-37",
          size: "100 sq ft",
          totalPrice: "3,000,000",
          breakdown: {
            booking: "225,000",
            confirmation: "225,000",
            allocation: "225,000",
            quarterly: "215,625",
            sixMonths: "300,000",
            possession: "300,000",
          },
        },
        {
          numbers: "Space # 19, 28",
          size: "143 sq ft",
          totalPrice: "4,290,000",
          breakdown: {
            booking: "225,000",
            confirmation: "225,000",
            allocation: "225,000",
            quarterly: "344,625",
            sixMonths: "429,000",
            possession: "429,000",
          },
        },
        {
          numbers: "Space # 29, 38",
          size: "145 sq ft",
          totalPrice: "4,350,000",
          breakdown: {
            booking: "225,000",
            confirmation: "225,000",
            allocation: "225,000",
            quarterly: "350,625",
            sixMonths: "435,000",
            possession: "435,000",
          },
        },
      ],
    },
  };

  const paymentSteps = [
    {
      step: "1",
      title: "Booking",
      description: "Initial booking amount",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
    },
    {
      step: "2",
      title: "Confirmation",
      description: "After 30 days",
      icon: CheckCircle,
      color: "from-green-500 to-green-600",
    },
    {
      step: "3",
      title: "Allocation",
      description: "After 60 days",
      icon: MapPin,
      color: "from-purple-500 to-purple-600",
    },
    {
      step: "4",
      title: "Quarterly Installments",
      description: "8 installments",
      icon: Clock,
      color: "from-amber-500 to-amber-600",
    },
    {
      step: "5",
      title: "6 Months Payment",
      description: "10% of total price",
      icon: TrendingUp,
      color: "from-red-500 to-red-600",
    },
    {
      step: "6",
      title: "Possession",
      description: "10% on possession",
      icon: Building2,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const currentFloor = pricingData[activeFloor as keyof typeof pricingData];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <SEO
        title="Payment & Pricing - D-DOWNTOWN Commercial Spaces"
        description="Transparent pricing and flexible payment plans for D-DOWNTOWN commercial spaces. Get detailed cost breakdowns, installment options, and financing solutions for your commercial investment."
        keywords="payment plans, pricing, commercial spaces, cost breakdown, installment options, financing solutions, D-DOWNTOWN pricing, commercial real estate pricing Rawalpindi"
        url="/payment-pricing"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Payment & Pricing Plans",
          description: "Transparent pricing and flexible payment options",
          provider: {
            "@type": "Organization",
            name: "D-DOWNTOWN",
          },
          areaServed: {
            "@type": "City",
            name: "Rawalpindi",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Commercial Space Pricing",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Lower Ground Floor Spaces",
                  description: "Starting from Rs. 40,000 per sq ft",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Ground Floor Spaces",
                  description: "Starting from Rs. 60,000 per sq ft",
                },
              },
            ],
          },
        }}
      />
      {/* Hero Section */}
      <PageHero
        icon={Calculator}
        badgeText="Transparent Pricing"
        title="Payment & Pricing"
        gradientText="Plans"
        description="Explore our transparent pricing structure and flexible payment options tailored to your investment goals. Choose from various floor levels and unit sizes to find your perfect commercial space."
        iconColor="text-amber-600"
      />

      {/* Floor Selection */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(pricingData).map(([key, floor]) => (
              <button
                key={key}
                onClick={() => setActiveFloor(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFloor === key
                    ? `bg-gradient-to-r ${floor.color} text-white shadow-lg scale-105`
                    : "bg-white/80 text-gray-700 hover:bg-white border border-gray-200 shadow-md"
                }`}
              >
                {floor.title.split(" ")[0]} {floor.title.split(" ")[1]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Current Floor Details */}
      <section className="pb-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 p-8 mb-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {currentFloor.title}
              </h2>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 rounded-full">
                <DollarSign className="w-4 h-4 text-white" />
                <span className="text-white font-bold">
                  {currentFloor.pricePerSqFt} PER SQ FT
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {currentFloor.shops.map((shop, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {shop.numbers}
                    </h3>
                    <p className="text-gray-600 text-sm">Size: {shop.size}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg border border-green-200">
                      <span className="text-green-700 font-medium">
                        Total Price
                      </span>
                      <span className="text-gray-900 font-bold text-lg">
                        Rs. {shop.totalPrice}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Booking</span>
                        <span className="text-gray-900 font-semibold">
                          Rs. {shop.breakdown.booking}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">
                          Confirmation (30 days)
                        </span>
                        <span className="text-gray-900 font-semibold">
                          Rs. {shop.breakdown.confirmation}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">
                          Allocation (60 days)
                        </span>
                        <span className="text-gray-900 font-semibold">
                          Rs. {shop.breakdown.allocation}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">
                          8 Quarterly Installments
                        </span>
                        <span className="text-gray-900 font-semibold">
                          Rs. {shop.breakdown.quarterly}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">
                          10% After 6 Months
                        </span>
                        <span className="text-gray-900 font-semibold">
                          Rs. {shop.breakdown.sixMonths}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">10% on Possession</span>
                        <span className="text-gray-900 font-semibold">
                          Rs. {shop.breakdown.possession}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Process */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Payment Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured payment plan is designed to make your investment
              journey smooth and manageable with clear milestones and timelines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paymentSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300 group flex justify-between items-center gap-4"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`bg-gradient-to-r ${step.color} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                    >
                      <span className="text-white font-bold text-lg">
                        {step.step}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-semibold text-lg">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-amber-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Secure Your Commercial Space?"
        subtitle="Transparent Pricing & Flexible Payment Plans"
        description="Contact our sales team today to discuss your investment options, schedule a site visit, or get detailed information about any unit. We're here to help you make the best investment decision."
        badgeText="Investment Ready"
        badgeIcon={Calculator}
        primaryAction={{
          text: "Call Now: 0313-055-2222",
          href: "tel:0313-055-2222",
          icon: Phone,
        }}
        secondaryAction={{
          text: "Schedule Site Visit",
          onClick: () => window.open("tel:0313-055-2222", "_self"),
          icon: ArrowRight,
        }}
        gradientColors={{
          from: "from-amber-900",
          via: "via-orange-900",
          to: "to-red-900",
        }}
      />
    </div>
  );
};

export default PaymentPricing;
