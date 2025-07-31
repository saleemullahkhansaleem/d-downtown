import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { PageHero, CTASection } from "../components";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is D-Downtown an approved project?",
    answer:
      "Yes, D-Downtown is officially approved by the Rawalpindi Development Authority (RDA). With the NOC number provided you can counter check the authenticity and status.",
  },
  {
    question: "What types of businesses can operate in D-Downtown?",
    answer:
      "The project is ideal for clothing brands, cafes, restaurants, grocery stores, pharmacies, salons, ice cream parlors, tea and coffee shops, corporate offices, creative studios, and boutique retail setups.",
  },
  {
    question: "What is the payment plan?",
    answer:
      "We offer a post-handover payment plan with possession in 1 year and a flexible 2-year installment schedule.",
  },
  {
    question: "Will rental income be available for investors?",
    answer:
      "Yes, investors will receive 0.5% monthly rental income once the unit is rented after possession. Full rental income begins after all installments are completed and ownership is transferred.",
  },
  {
    question: "Are there any early investment benefits?",
    answer:
      "Yes. Pre-launch bookings are offered at lower prices. As the construction progresses, prices increase in phases, so investing early ensures better rates and returns.",
  },
  {
    question: "Will you help lease my unit after I purchase it?",
    answer:
      "Yes. Our commercial services include leasing your unit to trusted brands and providing ongoing property management after possession.",
  },
  {
    question: "What amenities are included in the project?",
    answer:
      "Amenities include underground electricity and sewerage systems, centralized heating and cooling, high-speed elevators, waste disposal, front-facing parking, parks, hospitals, universities and 24/7 security.",
  },
  {
    question: "How accessible is the location?",
    answer:
      "D-Downtown is just 2 minutes from Adyala Road, 3 minutes from Khawaja Corporation, and close to key areas like Saddar GPO, GT Road, DHA and Bahria. It offers a 5-minute drive from major landmarks like Ayub National Park, Joyland, Morgah Biodiversity Park, Al-Shifa Trust Eye Hospital, Fauji Foundation Hospital, CMH, and Foundation University.",
  },
  {
    question: "Do you offer services for overseas investors?",
    answer:
      "Yes. Our team handles everything from purchase paperwork to leasing and property management, making it convenient for overseas clients to invest without being on-site.",
  },
  {
    question: "How can I book a unit or schedule a visit?",
    answer:
      "Simply call us at 0313-055-2222 or visit our website www.d-downtown.com to schedule a site tour or speak with a representative.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItem & { isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PageHero
        icon={HelpCircle}
        badgeText="FAQs"
        title="Frequently Asked"
        gradientText="Questions"
        description="Find answers to common questions about D-DOWNTOWN, investments, and commercial opportunities. Everything you need to know in one place."
        iconColor="text-amber-400"
      />

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get quick answers to the most frequently asked questions about
              D-Downtown. Can't find what you're looking for? Contact us
              directly.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems.includes(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>

          {/* Contact Info Card */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-gray-900 border border-blue-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
              <p className="text-blue-900">
                Our team is here to help you with any additional questions or
                concerns.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-amber-400" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-blue-800">0313-055-2222</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-amber-400" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-blue-800">info@d-downtown.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-amber-400" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-blue-800">Schedule a site tour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Invest in D-Downtown?"
        subtitle="Join the Future of Commercial Real Estate"
        description="Don't miss out on this incredible opportunity. Book your unit today and secure your place in Rawalpindi's premier commercial destination."
        primaryAction={{
          text: "Book Your Unit Now",
          href: "/contact-us",
          icon: Phone,
        }}
        secondaryAction={{
          text: "Schedule Site Visit",
          href: "/contact-us",
          icon: MapPin,
        }}
        badgeText="Limited Time Offer"
        badgeIcon={HelpCircle}
      />
    </div>
  );
};

export default FAQs;
