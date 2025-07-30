import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  icon: LucideIcon;
  badgeText: string;
  title: string;
  gradientText: string;
  description: string;
  iconColor?: string;
  badgeBgColor?: string;
  badgeTextColor?: string;
}

const PageHero = ({
  icon: Icon,
  badgeText,
  title,
  gradientText,
  description,
  iconColor = "text-blue-600",
  badgeBgColor = "from-blue-100 to-amber-100",
  badgeTextColor = "text-blue-900",
}: PageHeroProps) => {
  return (
    <section className="relative pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center space-x-2 bg-gradient-to-r ${badgeBgColor} px-4 py-2 rounded-full mb-6`}
          >
            <Icon className={`w-5 h-5 ${iconColor}`} />
            <span className={`font-semibold text-sm ${badgeTextColor}`}>
              {badgeText}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {title}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
              {gradientText}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
