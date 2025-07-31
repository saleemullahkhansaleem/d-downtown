import { LucideIcon } from "lucide-react";
import { heroImages } from "../assets/images";

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
  iconColor = "text-amber-400",
  badgeBgColor = "from-white/10 to-white/20",
  badgeTextColor = "text-white",
}: PageHeroProps) => {
  return (
    <section
      className="relative pt-20 pb-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
      style={{
        backgroundImage: `url(${heroImages.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Matte Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-indigo-900/80"></div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center space-x-2 bg-gradient-to-r ${badgeBgColor} backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20`}
          >
            <Icon className={`w-5 h-5 ${iconColor}`} />
            <span className={`font-semibold text-sm ${badgeTextColor}`}>
              {badgeText}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            {title}{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
              {gradientText}
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
