import { Construction, Sparkles, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface UnderConstructionProps {
  pageTitle: string;
  description?: string;
}

const UnderConstruction = ({
  pageTitle,
  description,
}: UnderConstructionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-xl shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-black bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              D{" "}
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                DOWNTOWN
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="w-12 h-12 text-amber-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{pageTitle}</h1>

          <p className="text-lg text-gray-600 mb-6">
            {description ||
              "This page is currently under construction. We're working hard to bring you amazing content!"}
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              🚧 Coming Soon 🚧
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our team is crafting something special for you. This page will be
              filled with valuable information, stunning visuals, and everything
              you need to know about D-DOWNTOWN. Stay tuned for updates!
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Return Home
            </Link>
            <Link
              to="/contact-us"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Need immediate assistance? Call us at{" "}
            <span className="font-semibold text-green-600">0313-055-2222</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
