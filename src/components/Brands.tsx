import { Star, Coffee, Utensils, Shirt, Cake, Pill } from "lucide-react";

const Brands = () => {
  const brandCategories = [
    {
      icon: Utensils,
      title: "CAVE RESTAURANT",
      type: "restaurant",
      description: "Modern dining experience with a unique ambiance",
      brands: ["BBQ Platter", "Steaks", "Grilled Chicken"],
      logo: "cave-logo.png",
    },
    {
      icon: Utensils,
      title: "LA MONTANA",
      type: "restaurant",
      description: "Scenic restaurant offering traditional cuisine",
      brands: ["Karahi", "Tikka", "Handi"],
      logo: "la-montana-logo.png",
    },
    {
      icon: Coffee,
      title: "Tim Hortons",
      type: "coffee & bakery",
      description: "International coffee and fast food chain",
      brands: ["Coffee", "Donuts", "Bagels"],
      logo: "tim-hortons-logo.png",
    },
    {
      icon: Cake,
      title: "Tehzeeb",
      type: "bakery",
      description: "Renowned bakery with premium quality goods",
      brands: ["Cakes", "Pastries", "Cookies"],
      logo: "tehzeeb-logo.png",
    },
    {
      icon: Pill,
      title: "SHAHEEN CHEMIST & GROCERS",
      type: "pharmacy & grocery",
      description: "Leading chemist and grocery chain in the region",
      brands: ["Medicines", "Personal Care", "Daily Groceries"],
      logo: "shaheen-logo.png",
    },
    {
      icon: Shirt,
      title: "Outfitters",
      type: "fashion",
      description: "Trendy and casual fashion brand for youth",
      brands: ["Men's Wear", "Women's Wear", "Accessories"],
      logo: "outfitters-logo.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Star className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Your Favourite Brands Closer than Ever
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From Shopping Bags To Dining Trays, We've Got It All
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {brandCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                  <Icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {category.description}
                </p>
                <div className="space-y-1.5">
                  {category.brands.map((brand, brandIndex) => (
                    <div
                      key={brandIndex}
                      className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block mx-1"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Ready to Join the Community?
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Be part of Rawalpindi's most vibrant commercial hub where businesses
            thrive and customers love to shop, dine, and explore.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
            Reserve Your Space Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Brands;
