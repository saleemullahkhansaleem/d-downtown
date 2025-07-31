import React from "react";
import { SEO } from "../components";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <SEO
        title="Privacy Policy - D-DOWNTOWN"
        description="Learn about how D-DOWNTOWN collects, uses, and protects your personal information. Our privacy policy ensures your data security and transparency."
        keywords="privacy policy, D-DOWNTOWN privacy, data protection, personal information, GDPR compliance"
        url="/privacy-policy"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          description:
            "D-DOWNTOWN Privacy Policy and Data Protection Information",
          url: "https://d-downtown.com/privacy-policy",
          publisher: {
            "@type": "Organization",
            name: "D-DOWNTOWN",
          },
        }}
      />
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 mb-4">
            We collect information you provide directly to us, such as when you:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Fill out contact forms</li>
            <li>Request information about our properties</li>
            <li>Subscribe to our newsletter</li>
            <li>Apply for commercial units</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Provide and improve our services</li>
            <li>Communicate with you about our properties</li>
            <li>Send you marketing materials (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Information Sharing
          </h2>
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Data Security
          </h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Your Rights
          </h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">Email: info@d-downtown.com</p>
            <p className="text-gray-700">Phone: 0313-055-2222</p>
            <p className="text-gray-700">
              Address: Main Defence Road, Opposite Askari 14, Rawalpindi
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
