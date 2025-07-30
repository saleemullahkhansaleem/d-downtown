import {
  Mail,
  Users,
  Star,
  Building2,
  Target,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { teamImages } from "../assets/images/team";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Khawar Abbasi",
      position: "Chief Executive Officer",
      email: "CEO@d-downtown.com",
      description:
        "Founder and head of the project. Leads all development, finances it, and manages every decision from planning to execution.",
      color: "from-blue-600 to-blue-800",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      icon: Building2,
      priority: "ceo",
      image: teamImages.khawarAbbasi,
    },
    {
      name: "Hafsa Akmal Wyne",
      position: "Project Manager",
      email: "Projectmanager@d-downtown.com",
      description:
        "Manages project execution, team coordination, and internal communication. Monitors KPIs and reports directly to the CEO. Handles communication with clients.",
      color: "from-purple-600 to-purple-800",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      icon: Target,
      priority: "senior",
      image: teamImages.hafsaAkmalWyne,
    },
    {
      name: "Saliha Amjad Awan",
      position: "HR & Admin Officer",
      email: "Admin@d-downtown.com",
      description:
        "Responsible for team hiring, internal coordination, maintaining records, and managing daily administrative tasks.",
      color: "from-green-600 to-green-800",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      icon: Users,
      priority: "senior",
      image: teamImages.salihaAmjadAwan,
    },
    {
      name: "Khawaja Huzaifa Akmal Wyne",
      position: "Business Development Manager",
      email: "Salesmanager@d-downtown.com",
      description:
        "Meets clients and investors, generates business leads, monitors sales team KPIs, and works on building partnerships and expanding business channels.",
      color: "from-amber-600 to-amber-800",
      bgColor: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      icon: Target,
      priority: "senior",
      image: teamImages.khawajaHuzaifaAkmalWyne,
    },
    {
      name: "Unsa Akmal Wyne",
      position: "PR & Marketing Strategist",
      email: "Marketingstrategist@d-downtown.com",
      description:
        "Leads SEO and keyword planning, content creation, marketing strategy and PR strategy. Supervises content, graphic, website, and PR teams, and manages brand relationships.",
      color: "from-pink-600 to-pink-800",
      bgColor: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      icon: Award,
      priority: "senior",
      image: teamImages.unsaAkmalWyne,
    },
    {
      name: "Muhammad Shoaib Malik",
      position: "PR Executive",
      email: "PR@d-downtown.com",
      description:
        "Handles communication with brands and manages leasing of property spaces to them for commercial use.",
      color: "from-indigo-600 to-indigo-800",
      bgColor: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200",
      icon: Award,
      priority: "mid",
      image: teamImages.muhammadShoaibMalik,
    },
    {
      name: "Muhammad Arsalan Amin",
      position: "Social Media Manager & IT Specialist",
      email: "Operationsmanager@d-downtown.com",
      description:
        "Runs social media platforms, ensures daily updates, and provides ongoing tech support for smooth digital operations.",
      color: "from-teal-600 to-teal-800",
      bgColor: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
      icon: Users,
      priority: "mid",
      image: teamImages.muhammadArsalanAmin,
    },
    {
      name: "Afaq Ahmed",
      position: "Graphic Designer",
      email: "Graphicdesigner@d-downtown.com",
      description:
        "Creative professional responsible for visual design and branding elements.",
      color: "from-orange-600 to-orange-800",
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      icon: Award,
      priority: "mid",
      image: teamImages.afaqAhmed,
    },
    {
      name: "Raja Mohsin",
      position: "Sales Manager",
      email: "Salesmanager@d-downtown.com",
      description:
        "Deals with clients directly, manages site visits, and handles all buying and selling negotiations.",
      color: "from-red-600 to-red-800",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      icon: Target,
      priority: "senior",
      image: teamImages.rajaMohsin,
    },
    {
      name: "Malik Ghulam Qasim",
      position: "Accounts & Finance Manager",
      email: "Accounts@d-downtown.com",
      description:
        "Responsible for budgeting, financial reporting, and tracking all project payments and expenses.",
      color: "from-emerald-600 to-emerald-800",
      bgColor: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200",
      icon: Building2,
      priority: "senior",
      image: teamImages.malikGhulamQasim,
    },
  ];

  const leadership = teamMembers.filter((member) => member.priority === "ceo");
  const seniorManagement = teamMembers.filter(
    (member) => member.priority === "senior"
  );
  const midLevel = teamMembers.filter((member) => member.priority === "mid");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Hero Section */}
      <PageHero
        icon={Users}
        badgeText="Meet Our Team"
        title="The"
        gradientText="D-DOWNTOWN Team"
        description="Meet the dedicated professionals behind D-DOWNTOWN's success and commitment to excellence. Our diverse team brings together expertise from various fields to create Rawalpindi's premier commercial hub."
        iconColor="text-blue-600"
      />

      {/* Main Content */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-6xl">
          {/* Leadership Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Leadership
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our visionary leadership team drives the strategic direction and
                ensures the success of every D-DOWNTOWN initiative.
              </p>
            </div>

            <div className="grid lg:grid-cols-1 gap-8">
              {leadership.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                    <div className="relative">
                      <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            target.nextElementSibling?.classList.remove(
                              "hidden"
                            );
                          }}
                        />
                        <div
                          className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center hidden`}
                        >
                          <member.icon className="w-12 h-12 lg:w-14 lg:h-14 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <div className="mb-3">
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p
                          className={`text-base lg:text-lg font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-2`}
                        >
                          {member.position}
                        </p>
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                        >
                          <Mail className="w-4 h-4" />
                          <span>{member.email}</span>
                        </a>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Senior Management Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Senior Management
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our experienced senior management team oversees critical
                operations and ensures seamless project execution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seniorManagement.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <div className="relative mx-auto mb-3">
                      <div className="w-24 h-24 rounded-xl overflow-hidden border-3 border-white shadow-lg mx-auto">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            target.nextElementSibling?.classList.remove(
                              "hidden"
                            );
                          }}
                        />
                        <div
                          className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center hidden`}
                        >
                          <member.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p
                      className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-2`}
                    >
                      {member.position}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      <Mail className="w-3 h-3" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mid-Level Team Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Specialized Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our specialized professionals bring their expertise to deliver
                exceptional results in their respective domains.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {midLevel.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-center mb-3">
                    <div className="relative mx-auto mb-2">
                      <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-white shadow-md mx-auto">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            target.nextElementSibling?.classList.remove(
                              "hidden"
                            );
                          }}
                        />
                        <div
                          className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center hidden`}
                        >
                          <member.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p
                      className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-1`}
                    >
                      {member.position}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      <Mail className="w-3 h-3" />
                      <span className="text-xs">{member.email}</span>
                    </a>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Stats Section */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Team at a Glance
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A diverse team of professionals working together to create
                Rawalpindi's premier commercial destination.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {teamMembers.length}
                </h3>
                <p className="text-gray-600 text-sm">Team Members</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">10+</h3>
                <p className="text-gray-600 text-sm">
                  Years Combined Experience
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">6</h3>
                <p className="text-gray-600 text-sm">Departments</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-600 text-sm">Dedicated to Excellence</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 shadow-2xl text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Interested in being part of the D-DOWNTOWN success story? We're
              always looking for talented professionals who share our vision for
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Admin@d-downtown.com"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                <span>Send Your Resume</span>
              </a>
              <Link
                to="/contact-us"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
