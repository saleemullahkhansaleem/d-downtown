import React from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Shield,
  Users,
  Building2,
  Calculator,
  TrendingUp,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ComponentType<{ className?: string }>;
  };
  secondaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ComponentType<{ className?: string }>;
  };
  badgeText?: string;
  badgeIcon?: React.ComponentType<{ className?: string }>;
  gradientColors?: {
    from: string;
    via: string;
    to: string;
  };
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  badgeText = "Get Started",
  badgeIcon = Star,
  gradientColors = {
    from: "from-slate-900",
    via: "via-blue-900",
    to: "to-indigo-900",
  },
}) => {
  const BadgeIcon = badgeIcon;

  return (
    <section
      className={`py-16 bg-gradient-to-br ${gradientColors.from} ${gradientColors.via} ${gradientColors.to} relative overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
            <BadgeIcon className="w-4 h-4 text-amber-400" />
            <span className="text-white font-semibold text-sm">
              {badgeText}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
              {subtitle}
            </h3>
          )}
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryAction && (
              <div className="group">
                {primaryAction.href ? (
                  <Link
                    to={primaryAction.href}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {primaryAction.icon && (
                      <primaryAction.icon className="w-5 h-5" />
                    )}
                    <span>{primaryAction.text}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <button
                    onClick={primaryAction.onClick}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {primaryAction.icon && (
                      <primaryAction.icon className="w-5 h-5" />
                    )}
                    <span>{primaryAction.text}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            )}

            {secondaryAction && (
              <div className="group">
                {secondaryAction.href ? (
                  <Link
                    to={secondaryAction.href}
                    className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {secondaryAction.icon && (
                      <secondaryAction.icon className="w-5 h-5" />
                    )}
                    <span>{secondaryAction.text}</span>
                  </Link>
                ) : (
                  <button
                    onClick={secondaryAction.onClick}
                    className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {secondaryAction.icon && (
                      <secondaryAction.icon className="w-5 h-5" />
                    )}
                    <span>{secondaryAction.text}</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
