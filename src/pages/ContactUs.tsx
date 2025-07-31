import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  Clock,
  Star,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero, CTASection, SEO } from "../components";

const ContactUs = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "0313-055-2222",
      description: "UAN with team extension",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      href: "tel:0313-055-2222",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@d-downtown.com",
      description: "General inquiries",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      href: "mailto:info@d-downtown.com",
    },
    {
      icon: Mail,
      title: "Sales Team",
      value: "sales@d-downtown.com",
      description: "Sales inquiries",
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      href: "mailto:sales@d-downtown.com",
    },
  ];

  const socialMedia = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      href: "#",
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      href: "#",
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      href: "#",
    },
    {
      name: "Threads",
      icon: Instagram,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      href: "#",
    },
    {
      name: "TikTok",
      icon: MessageCircle,
      color: "from-black to-gray-800",
      bgColor: "from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <SEO
        title="Contact D-DOWNTOWN - Get in Touch for Commercial Space Inquiries"
        description="Contact D-DOWNTOWN for commercial space inquiries. Call us at 0313-055-2222, email info@d-downtown.com, or visit our office. Get expert guidance on investment opportunities in Rawalpindi's premier commercial hub."
        keywords="contact D-DOWNTOWN, commercial space inquiries, Rawalpindi commercial hub, investment opportunities, phone number, email, office location, sales team"
        url="/contact-us"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact D-DOWNTOWN",
          description:
            "Get in touch with D-DOWNTOWN for commercial space inquiries and investment opportunities",
          url: "https://d-downtown.com/contact-us",
          mainEntity: {
            "@type": "Organization",
            name: "D-DOWNTOWN",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+92-313-055-2222",
                contactType: "customer service",
                areaServed: "PK",
                availableLanguage: "English",
              },
              {
                "@type": "ContactPoint",
                telephone: "+92-313-055-2222",
                contactType: "sales",
                areaServed: "PK",
                availableLanguage: "English",
              },
            ],
            email: "info@d-downtown.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Main Defence Road",
              addressLocality: "Rawalpindi",
              addressRegion: "Punjab",
              addressCountry: "PK",
            },
          },
        }}
      />
      {/* Hero Section */}
      <PageHero
        icon={MessageCircle}
        badgeText="Get In Touch"
        title="Let's Start a"
        gradientText="Conversation"
        description="Ready to explore opportunities at D-DOWNTOWN? Our team is here to help you with inquiries, support, or to learn more about our commercial hub."
        iconColor="text-blue-600"
      />

      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="group bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p
                  className={`text-lg font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent mb-2`}
                >
                  {method.value}
                </p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </a>
            ))}
          </div>

          {/* Address & Website Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Address Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Visit Us</h2>
                  <p className="text-gray-600">Our Location</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-semibold">
                      Main Defence Road
                    </p>
                    <p className="text-gray-600">
                      Opposite Askari 14, Rawalpindi
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-4 border border-red-200">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Star className="w-4 h-4 text-red-500 mr-2" />
                    Prime Location
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Strategically located near high footfall residential
                    communities including Bahria, DHA Phase 1, Gulshanabad, and
                    Morgah.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Quick Links
                  </h2>
                  <p className="text-gray-600">Explore More</p>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  to="/investment-models"
                  className="block bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-900 font-semibold">
                        Investment Models
                      </p>
                      <p className="text-blue-700 text-sm">
                        Explore opportunities
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>

                <Link
                  to="/project-portfolio"
                  className="block bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-4 border border-amber-200 hover:from-amber-100 hover:to-amber-200 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-amber-900 font-semibold">
                        Project Portfolio
                      </p>
                      <p className="text-amber-700 text-sm">
                        View our projects
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-4 border border-green-200">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Stay Connected
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Browse our website to explore project details, investment
                    opportunities, and latest updates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Connect With Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Follow us on social media for the latest updates, project
                progress, and exclusive insights about D-DOWNTOWN.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {socialMedia.map((platform, index) => (
                <a
                  key={index}
                  href={platform.href}
                  className={`group bg-gradient-to-br ${platform.bgColor} rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border ${platform.borderColor}`}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <platform.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-semibold text-sm">
                    {platform.name}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Business Hours & Support */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Business Hours</h2>
                  <p className="text-green-100">When We're Available</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl">
                  <span className="text-green-100">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl">
                  <span className="text-green-100">Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl">
                  <span className="text-green-100">Sunday</span>
                  <span className="font-semibold">By Appointment</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Quick Support
                  </h2>
                  <p className="text-gray-600">Get Help Fast</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-4 border border-amber-200">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Our team is ready to help you with any questions about
                    D-DOWNTOWN opportunities.
                  </p>
                  <a
                    href="tel:0313-055-2222"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Team Extension
                  </h3>
                  <p className="text-gray-700 text-sm">
                    When calling our UAN, you can reach specific team members
                    using internal extensions for specialized assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Join D-DOWNTOWN Today"
        description="Join the future of commercial excellence in Rawalpindi. Contact us today to explore investment opportunities and become part of D-DOWNTOWN."
        badgeText="Get Started"
        badgeIcon={Star}
        primaryAction={{
          text: "Call Us Now",
          href: "tel:0313-055-2222",
          icon: Phone,
        }}
        secondaryAction={{
          text: "Explore Opportunities",
          href: "/investment-models",
          icon: ArrowRight,
        }}
      />
    </div>
  );
};

export default ContactUs;
