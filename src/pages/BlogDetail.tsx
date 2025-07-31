import { useParams, Link } from "react-router-dom";
import {
  FileText,
  Calendar,
  User,
  ArrowLeft,
  Tag,
  Clock,
  Eye,
  TrendingUp,
  Star,
  MessageSquareText,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageSquare,
} from "lucide-react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

const BlogDetail = () => {
  const { id } = useParams();

  // Mock blog data - in a real app, this would come from an API
  const blogPosts: Record<string, any> = {
    "1": {
      id: "1",
      title: "D-DOWNTOWN: Rawalpindi's Commercial Revolution",
      excerpt:
        "Discover how D-DOWNTOWN is transforming Rawalpindi's commercial landscape with its strategic location, modern infrastructure, and innovative investment models.",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Rawalpindi, the historic city adjacent to Pakistan's capital, is experiencing a remarkable transformation in its commercial landscape. At the heart of this revolution stands D-DOWNTOWN, a visionary project that's redefining what commercial real estate means in this dynamic region.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The Strategic Vision</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          D-DOWNTOWN isn't just another commercial project; it's a carefully crafted vision that addresses the evolving needs of modern businesses. Located strategically near Askari 14 and Adyala Road, this development offers unparalleled accessibility and visibility for businesses looking to establish a strong presence in Rawalpindi.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Infrastructure Excellence</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          What sets D-DOWNTOWN apart is its commitment to infrastructure excellence. The project features:
        </p>
        <ul class="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Underground electricity systems for uninterrupted power supply</li>
          <li>Centralized HVAC systems for optimal climate control</li>
          <li>Front-facing parking facilities for maximum convenience</li>
          <li>Modern security systems for enhanced safety</li>
          <li>High-speed internet connectivity throughout the complex</li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Investment Models That Work</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          D-DOWNTOWN offers multiple investment models designed to cater to different investor profiles and goals. From direct ownership to partnership models, each option is structured to maximize returns while minimizing risks.
        </p>

        <div class="bg-gradient-to-r from-blue-50 to-amber-50 p-6 rounded-2xl mb-8">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Key Investment Benefits:</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start space-x-3">
              <Star className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h4 class="font-semibold text-gray-900">RDA Approval</h4>
                <p class="text-gray-600 text-sm">Fully compliant with all regulatory requirements</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 class="font-semibold text-gray-900">Prime Location</h4>
                <p class="text-gray-600 text-sm">Strategic positioning for maximum footfall</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <Building2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 class="font-semibold text-gray-900">Modern Infrastructure</h4>
                <p class="text-gray-600 text-sm">State-of-the-art facilities and amenities</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <TrendingUp className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h4 class="font-semibold text-gray-900">Growth Potential</h4>
                <p class="text-gray-600 text-sm">High appreciation potential in growing market</p>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Market Analysis</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Rawalpindi's commercial real estate market is showing strong growth indicators. With increasing urbanization, rising disposable incomes, and growing business activities, the demand for quality commercial spaces is at an all-time high.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The Future Outlook</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          As Rawalpindi continues to grow and develop, D-DOWNTOWN is positioned to become the premier commercial destination in the region. The project's forward-thinking design and strategic location ensure that it will remain relevant and profitable for years to come.
        </p>

        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          For investors looking to capitalize on Rawalpindi's commercial boom, D-DOWNTOWN represents an opportunity that shouldn't be missed. With its combination of strategic location, modern infrastructure, and proven investment models, it's setting the standard for commercial real estate in the region.
        </p>
      `,
      author: "D-DOWNTOWN Team",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Project Updates",
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      views: "2.3K",
      tags: [
        "Commercial Real Estate",
        "Rawalpindi",
        "Investment",
        "D-DOWNTOWN",
        "RDA Approved",
      ],
      relatedPosts: [
        {
          title: "Why Rawalpindi is the Next Commercial Hotspot",
          excerpt:
            "Explore the factors driving Rawalpindi's emergence as a prime commercial destination.",
          date: "December 12, 2024",
          image: "bg-gradient-to-br from-green-500 to-teal-600",
        },
        {
          title: "Investment Models That Work: D-DOWNTOWN's Success Formula",
          excerpt:
            "Learn about our proven investment strategies and how they're delivering exceptional returns.",
          date: "December 10, 2024",
          image: "bg-gradient-to-br from-amber-500 to-orange-600",
        },
        {
          title: "The Future of Commercial Real Estate in Pakistan",
          excerpt:
            "Insights into emerging trends and market dynamics shaping the future of commercial real estate.",
          date: "December 8, 2024",
          image: "bg-gradient-to-br from-red-500 to-pink-600",
        },
      ],
    },
    "2": {
      id: "2",
      title: "Why Rawalpindi is the Next Commercial Hotspot",
      excerpt:
        "Explore the factors driving Rawalpindi's emergence as a prime commercial destination and how D-DOWNTOWN is positioned to capitalize on this growth.",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Rawalpindi, often overshadowed by its neighboring capital Islamabad, is quietly emerging as one of Pakistan's most promising commercial destinations. This transformation is driven by several key factors that make it an ideal location for commercial investments.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Strategic Geographic Location</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Rawalpindi's strategic position at the crossroads of major transportation routes makes it a natural hub for commercial activities. The city serves as a gateway to northern Pakistan and provides easy access to major markets.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Growing Population and Urbanization</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          The city's population is growing rapidly, creating a larger consumer base and increasing demand for commercial spaces. This demographic shift is driving the need for modern retail and office spaces.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Economic Development</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Rawalpindi's economy is diversifying beyond its traditional military and government sectors. New industries and businesses are establishing themselves in the city, creating opportunities for commercial real estate.
        </p>

        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          D-DOWNTOWN is perfectly positioned to capitalize on these trends, offering modern commercial spaces that meet the evolving needs of businesses and consumers in this dynamic market.
        </p>
      `,
      author: "Real Estate Analyst",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Market Analysis",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      views: "1.8K",
      tags: [
        "Market Analysis",
        "Rawalpindi",
        "Commercial Real Estate",
        "Growth",
      ],
      relatedPosts: [
        {
          title: "D-DOWNTOWN: Rawalpindi's Commercial Revolution",
          excerpt:
            "Discover how D-DOWNTOWN is transforming Rawalpindi's commercial landscape.",
          date: "December 15, 2024",
          image: "bg-gradient-to-br from-blue-500 to-purple-600",
        },
        {
          title: "Investment Models That Work: D-DOWNTOWN's Success Formula",
          excerpt:
            "Learn about our proven investment strategies and how they're delivering exceptional returns.",
          date: "December 10, 2024",
          image: "bg-gradient-to-br from-amber-500 to-orange-600",
        },
      ],
    },
    "3": {
      id: "3",
      title: "Investment Models That Work: D-DOWNTOWN's Success Formula",
      excerpt:
        "Learn about our proven investment strategies and how they're delivering exceptional returns for early investors in the D-DOWNTOWN project.",
      content: `
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Successful commercial real estate investment requires more than just capital—it demands a strategic approach backed by proven models and market understanding. D-DOWNTOWN's investment strategies are designed to maximize returns while minimizing risks.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Direct Ownership Model</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Our direct ownership model allows investors to purchase commercial units outright, providing complete control over their investment and the potential for maximum returns through appreciation and rental income.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Partnership Opportunities</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          For investors looking to diversify their portfolio, we offer partnership opportunities that allow multiple investors to pool resources and share in the profits of larger commercial ventures.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Managed Investment Programs</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Our managed investment programs provide hands-off investment opportunities where our team handles all aspects of property management, from tenant acquisition to maintenance.
        </p>

        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Each investment model is carefully designed to meet different investor needs and risk profiles, ensuring that every investor can find an option that aligns with their financial goals.
        </p>
      `,
      author: "Investment Specialist",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Investment Guide",
      image: "bg-gradient-to-br from-amber-500 to-orange-600",
      views: "1.5K",
      tags: ["Investment", "ROI", "Commercial Real Estate", "D-DOWNTOWN"],
      relatedPosts: [
        {
          title: "D-DOWNTOWN: Rawalpindi's Commercial Revolution",
          excerpt:
            "Discover how D-DOWNTOWN is transforming Rawalpindi's commercial landscape.",
          date: "December 15, 2024",
          image: "bg-gradient-to-br from-blue-500 to-purple-600",
        },
        {
          title: "Why Rawalpindi is the Next Commercial Hotspot",
          excerpt:
            "Explore the factors driving Rawalpindi's emergence as a prime commercial destination.",
          date: "December 12, 2024",
          image: "bg-gradient-to-br from-green-500 to-teal-600",
        },
      ],
    },
  };

  const currentBlogData = blogPosts[id || "1"] || blogPosts["1"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Hero Section */}
      <PageHero
        icon={FileText}
        badgeText="Blog Article"
        title="D-DOWNTOWN"
        gradientText="Insights"
        description="Deep dive into the latest developments, market analysis, and investment opportunities in Rawalpindi's premier commercial hub."
        iconColor="text-amber-600"
      />

      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
          </div>

          {/* Article Header */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 mb-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-amber-100 px-4 py-2 rounded-full mb-4">
                <Tag className="w-4 h-4 text-blue-600" />
                <span className="text-blue-800 font-semibold text-sm">
                  {currentBlogData.category}
                </span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {currentBlogData.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {currentBlogData.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{currentBlogData.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{currentBlogData.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{currentBlogData.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{currentBlogData.views}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-amber-600 transition-colors">
                  <Bookmark className="w-4 h-4" />
                  <span>Save</span>
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div
              className={`${currentBlogData.image} w-full h-64 md:h-80 rounded-2xl relative overflow-hidden mb-8`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 mb-8">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: currentBlogData.content }}
            />
          </div>

          {/* Tags */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {currentBlogData.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-100 to-amber-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Engagement Section */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <ThumbsUp className="w-5 h-5" />
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span>Comment</span>
                </button>
              </div>
              <div className="text-sm text-gray-500">
                <span>Share this article with your network</span>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {currentBlogData.relatedPosts.map((post: any, index: number) => (
                <Link
                  key={index}
                  to={`/blog/${post.id || "1"}`}
                  className="block"
                >
                  <article className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div
                      className={`${post.image} w-full h-32 rounded-lg mb-4 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </article>
                </Link>
              ))}
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
          icon: MessageSquareText,
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

export default BlogDetail;
