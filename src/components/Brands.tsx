import React from "react";
import { Star, ShoppingBag, Coffee, Utensils, Shirt } from "lucide-react";

const Brands = () => {
  const brandCategories = [
    {
      icon: ShoppingBag,
      title: "Retail & Shopping",
      description: "Fashion, electronics, and lifestyle brands",
      brands: ["Fashion Outlets", "Electronics Stores", "Lifestyle Brands"],
    },
    {
      icon: Coffee,
      title: "Cafes & Bakeries",
      description: "Coffee shops and food outlets",
      brands: ["Coffee Chains", "Local Cafes", "Bakeries"],
    },
    {
      icon: Utensils,
      title: "Restaurants",
      description: "Fine dining and fast food chains",
      brands: ["Fine Dining", "Fast Food", "Local Cuisine"],
    },
    {
      icon: Shirt,
      title: "Brand Outlets",
      description: "International and local brand stores",
      brands: ["International Brands", "Local Brands", "Specialty Stores"],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {brandCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
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





// import { Star } from "lucide-react";

// const Brands = () => {
//   const brandLogos = [
//     {
//       name: "CAVE RESTAURANT",
//       type: "Restaurant",
//       style: "bg-black text-gold-400",
//       logo: "CAVE",
//     },
//     {
//       name: "LA MONTANA",
//       type: "Restaurant",
//       style: "bg-white text-green-600",
//       logo: "LA MONTANA",
//     },
//     {
//       name: "Tim Hortons",
//       type: "Coffee & Bakery",
//       style: "bg-red-600 text-white",
//       logo: "Tim Hortons",
//     },
//     {
//       name: "Tehzeeb",
//       type: "Bakery",
//       style: "bg-white text-red-600",
//       logo: "Tehzeeb",
//     },
//     {
//       name: "SHAHEEN CHEMIST & GROCERS",
//       type: "Pharmacy & Grocery",
//       style: "bg-white text-red-600",
//       logo: "SC+",
//     },
//     {
//       name: "Outfitters",
//       type: "Fashion",
//       style: "bg-white text-black",
//       logo: "Outfitters",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-900 text-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <Star className="w-12 h-12 text-amber-500 mx-auto mb-4" />
//           <h2 className="text-3xl font-bold text-white mb-3">
//             YOUR FAVOURITE BRANDS
//           </h2>
//           <p className="text-2xl font-serif text-amber-400 mb-2">
//             CLOSER THAN EVER
//           </p>
//           <p className="text-lg text-gray-300 max-w-3xl mx-auto">
//             From Shopping Bags To Dining Trays, We've Got It All
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {brandLogos.map((brand, index) => (
//             <div
//               key={index}
//               className="text-center group hover:transform hover:scale-105 transition-all duration-300"
//             >
//               <div
//                 className={`${brand.style} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-2xl transition-all duration-300 border-2 border-gray-700`}
//               >
//                 <span className="font-bold text-lg">{brand.logo}</span>
//               </div>
//               <h3 className="text-lg font-bold text-white mb-2">
//                 {brand.name}
//               </h3>
//               <p className="text-gray-400 text-sm">{brand.type}</p>
//             </div>
//           ))}
//         </div>

//         <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 text-center text-white">
//           <h3 className="text-2xl font-bold mb-3">
//             Ready to Join the Community?
//           </h3>
//           <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
//             Be part of Rawalpindi's most vibrant commercial hub where businesses
//             thrive and customers love to shop, dine, and explore.
//           </p>
//           <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
//             Reserve Your Space Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Brands;
