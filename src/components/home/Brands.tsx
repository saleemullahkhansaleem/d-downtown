import { Star, Coffee, Utensils, Shirt, Cake, Pill } from "lucide-react";
import { brandLogos } from "../../assets/images/brands";

const Brands = () => {
  const brandCategories = [
    {
      icon: Utensils,
      title: "CAVE RESTAURANT",
      type: "restaurant",
      description: "Modern dining experience with a unique ambiance",
      brands: ["BBQ Platter", "Steaks", "Grilled Chicken"],
      logo: brandLogos.caveRestaurant,
    },
    {
      icon: Utensils,
      title: "LA MONTANA",
      type: "restaurant",
      description: "Scenic restaurant offering traditional cuisine",
      brands: ["Karahi", "Tikka", "Handi"],
      logo: brandLogos.laMontana,
    },
    {
      icon: Coffee,
      title: "Tim Hortons",
      type: "coffee & bakery",
      description: "International coffee and fast food chain",
      brands: ["Coffee", "Donuts", "Bagels"],
      logo: brandLogos.timHortons,
    },
    {
      icon: Cake,
      title: "Tehzeeb",
      type: "bakery",
      description: "Renowned bakery with premium quality goods",
      brands: ["Cakes", "Pastries", "Cookies"],
      logo: brandLogos.tehzeeb,
    },
    {
      icon: Pill,
      title: "SHAHEEN CHEMIST & GROCERS",
      type: "pharmacy & grocery",
      description: "Leading chemist and grocery chain in the region",
      brands: ["Medicines", "Personal Care", "Daily Groceries"],
      logo: brandLogos.shaheen,
    },
    {
      icon: Shirt,
      title: "Outfitters",
      type: "fashion",
      description: "Trendy and casual fashion brand for youth",
      brands: ["Men's Wear", "Women's Wear", "Accessories"],
      logo: brandLogos.outfitters,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brandCategories.map((category, index) => {
            return (
              <div
                key={index}
                className="text-center group hover:transform transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-3xl border-4 border-amber-500/50 shadow-xl ring-4 ring-amber-500/20 flex items-center justify-center mx-auto mb-4 transition-all duration-300 overflow-hidden">
                  <img
                    src={category.logo}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
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
      </div>
    </section>
  );
};

export default Brands;
