import {
  FileText,
  Calendar,
  User,
  ArrowRight,
  Tag,
  Clock,
  Eye,
  TrendingUp,
  Building2,
  MapPin,
  Star,
  Award,
} from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

const Blog = () => {
  const featuredPost = {
    title: "D-DOWNTOWN: Rawalpindi's Commercial Revolution",
    excerpt:
      "Discover how D-DOWNTOWN is transforming Rawalpindi's commercial landscape with its strategic location, modern infrastructure, and innovative investment models.",
    author: "D-DOWNTOWN Team",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Project Updates",
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
    views: "2.3K",
  };

  const blogPosts = [
    {
      title: "Why Rawalpindi is the Next Commercial Hotspot",
      excerpt:
        "Explore the factors driving Rawalpindi's emergence as a prime commercial destination and how D-DOWNTOWN is positioned to capitalize on this growth.",
      author: "Real Estate Analyst",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Market Analysis",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      views: "1.8K",
    },
    {
      title: "Investment Models That Work: D-DOWNTOWN's Success Formula",
      excerpt:
        "Learn about our proven investment strategies and how they're delivering exceptional returns for early investors in the D-DOWNTOWN project.",
      author: "Investment Specialist",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Investment Guide",
      image: "bg-gradient-to-br from-amber-500 to-orange-600",
      views: "1.5K",
    },
    {
      title: "The Future of Commercial Real Estate in Pakistan",
      excerpt:
        "Insights into emerging trends, technological advancements, and market dynamics shaping the future of commercial real estate in Pakistan.",
      author: "Industry Expert",
      date: "December 8, 2024",
      readTime: "9 min read",
      category: "Industry Trends",
      image: "bg-gradient-to-br from-red-500 to-pink-600",
      views: "2.1K",
    },
    {
      title: "Location Analysis: Askari 14 and Adyala Road Advantage",
      excerpt:
        "Detailed analysis of why our strategic location near Askari 14 and Adyala Road provides unmatched commercial opportunities.",
      author: "Location Strategist",
      date: "December 5, 2024",
      readTime: "5 min read",
      category: "Location Insights",
      image: "bg-gradient-to-br from-indigo-500 to-purple-600",
      views: "1.2K",
    },
    {
      title: "RDA Approval: What It Means for Your Investment",
      excerpt:
        "Understanding the significance of Rawalpindi Development Authority approval and how it protects and enhances your investment value.",
      author: "Legal Advisor",
      date: "December 3, 2024",
      readTime: "4 min read",
      category: "Legal & Compliance",
      image: "bg-gradient-to-br from-emerald-500 to-green-600",
      views: "956",
    },
    {
      title: "Commercial Infrastructure: The D-DOWNTOWN Difference",
      excerpt:
        "Explore our cutting-edge infrastructure including underground electricity, centralized HVAC, and front-facing parking facilities.",
      author: "Infrastructure Expert",
      date: "November 30, 2024",
      readTime: "6 min read",
      category: "Infrastructure",
      image: "bg-gradient-to-br from-cyan-500 to-blue-600",
      views: "1.3K",
    },
  ];

  const categories = [
    { name: "Project Updates", count: 8, color: "from-blue-500 to-blue-600" },
    {
      name: "Market Analysis",
      count: 12,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Investment Guide",
      count: 15,
      color: "from-amber-500 to-amber-600",
    },
    { name: "Industry Trends", count: 10, color: "from-red-500 to-red-600" },
    {
      name: "Location Insights",
      count: 6,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Legal & Compliance",
      count: 4,
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  const popularTags = [
    "Commercial Real Estate",
    "Rawalpindi",
    "Investment",
    "D-DOWNTOWN",
    "RDA Approved",
    "Strategic Location",
    "Infrastructure",
    "Market Trends",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Hero Section */}
      <PageHero
        icon={FileText}
        badgeText="Latest Insights"
        title="Stay Updated with"
        gradientText="D-DOWNTOWN"
        description="Discover the latest news, market insights, investment strategies, and project updates from Rawalpindi's premier commercial hub."
        iconColor="text-amber-600"
      />

      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          {/* Featured Post */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 mb-16">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-4">
                <Star className="w-5 h-5 text-amber-600" />
                <span className="text-amber-800 font-semibold text-sm">
                  FEATURED POST
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div
                className={`${featuredPost.image} w-full h-64 rounded-2xl relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{featuredPost.views}</span>
                  </div>
                </div>

                <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div
                  className={`${post.image} w-full h-48 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                      {post.category}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-center space-x-1 text-white text-sm">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <button className="inline-flex items-center space-x-1 text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Categories and Tags Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Categories */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Tag className="w-5 h-5 text-blue-600 mr-2" />
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full`}
                      ></div>
                      <span className="font-medium text-gray-800">
                        {category.name}
                      </span>
                    </div>
                    <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm font-medium">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-amber-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl mb-16">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated with D-DOWNTOWN
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest project updates,
                market insights, and exclusive investment opportunities.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Key Insights Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                6 Commercial Plazas
              </h3>
              <p className="text-gray-600 text-sm">
                Modern commercial spaces designed for maximum business potential
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Strategic Location
              </h3>
              <p className="text-gray-600 text-sm">
                Prime location near Askari 14 and Adyala Road with high footfall
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                RDA Approved
              </h3>
              <p className="text-gray-600 text-sm">
                Fully compliant with Rawalpindi Development Authority
                regulations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Invest in D-DOWNTOWN?"
        subtitle="Rawalpindi's Premier Commercial Hub"
        description="Join the commercial revolution in Rawalpindi. Our team is ready to guide you through every step of your investment journey with comprehensive support and proven strategies."
        badgeText="Get Started"
        badgeIcon={Star}
        primaryAction={{
          text: "Contact Our Team",
          href: "/contact-us",
          icon: ArrowRight,
        }}
        secondaryAction={{
          text: "View Investment Models",
          href: "/investment-models",
          icon: TrendingUp,
        }}
      />
    </div>
  );
};

export default Blog;
