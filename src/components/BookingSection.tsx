import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Globe,
  Calendar,
  CheckCircle,
  Mail,
} from "lucide-react";
import ContactForm from "./ContactForm";

const BookingSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Book Your Spot in Rawalpindi's Next Big Commercial Zone
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            For more information or to book a site visit, contact us today and
            step into a space where your business vision comes to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Benefits */}
          <div className="space-y-6">
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Prime Location Advantage
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Strategic position on Main Defence Road with maximum
                    visibility
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Flexible Payment Plans
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Post-handover payment options with easy installments
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    No Hidden Charges
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Transparent net area pricing with no additional fees
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <h4 className="text-base font-semibold text-white mb-3">
                What's Included in Your Visit:
              </h4>
              <ul className="space-y-1.5 text-gray-300 text-sm">
                <li>• Detailed site tour and unit showcase</li>
                <li>• Meeting with our investment consultants</li>
                <li>• Complete documentation review</li>
                <li>• Customized payment plan discussion</li>
              </ul>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="bg-white rounded-3xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-5 text-center">
              Get in Touch Today
            </h3>

            <div className="space-y-5 mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2.5 rounded-full">
                  <MapPin className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Address
                  </h4>
                  <p className="text-gray-600 text-xs">
                    Main Defence Road, Opposite Askari 14, Rawalpindi
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2.5 rounded-full">
                  <Phone className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Phone</h4>
                  <p className="text-gray-600 text-xs">UAN: 0313-055-2222</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2.5 rounded-full">
                  <Mail className="w-5 h-5 text-purple-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Email</h4>
                  <p className="text-gray-600 text-xs">info@d-downtown.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Site Visit</span>
              </button>

              <a
                href="tel:0313-055-2222"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default BookingSection;
