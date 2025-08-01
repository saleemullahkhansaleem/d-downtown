import { Award, CheckCircle, Shield, FileText } from "lucide-react";
import { approvalImages } from "../../assets/images/approvals";

const Approvals = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Fully Approved & Certified
          </h2>
          <p className="text-gray-600 text-sm">
            Complete legal documentation and government approvals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* NOC Display */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center">
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              NOC Approved
            </h3>
            <p className="text-blue-800 mb-3 text-sm">
              Valid No Objection Certificate
            </p>
            <div className="bg-white p-3 rounded-lg">
              <p className="text-xs font-mono text-gray-600">
                NOC# XXXX-XXXX-XXXX
              </p>
            </div>
          </div>

          {/* RDA Approval */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl text-center">
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden">
              <img
                src={approvalImages.rdaStamp}
                alt="RDA Approval Stamp"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-amber-900">
              RDA Approved
            </h3>
            <p className="text-amber-800 mb-3 text-sm">
              Rawalpindi Development Authority
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-green-800 font-semibold text-sm">
              100% Legal & Secure Investment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approvals;
