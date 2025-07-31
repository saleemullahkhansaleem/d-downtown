import React from "react";
import { SEO } from "../components";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <SEO
        title="Terms of Service - D-DOWNTOWN"
        description="Read D-DOWNTOWN's terms of service and conditions for using our website and commercial real estate services. Understand our policies and agreements."
        keywords="terms of service, D-DOWNTOWN terms, conditions, legal agreement, commercial real estate terms"
        url="/terms-of-service"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Service",
          description: "D-DOWNTOWN Terms of Service and Legal Agreements",
          url: "https://d-downtown.com/terms-of-service",
          publisher: {
            "@type": "Organization",
            name: "D-DOWNTOWN",
          },
        }}
      />
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Terms of Service
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 mb-4">
            By accessing and using the D-DOWNTOWN website and services, you
            accept and agree to be bound by the terms and provision of this
            agreement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Use License
          </h2>
          <p className="text-gray-700 mb-4">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on D-DOWNTOWN's website for
            personal, non-commercial transitory viewing only.
          </p>
          <p className="text-gray-700 mb-4">
            This is the grant of a license, not a transfer of title, and under
            this license you may not:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Remove any copyright or other proprietary notations</li>
            <li>Transfer the materials to another person</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Property Information
          </h2>
          <p className="text-gray-700 mb-4">
            All property information, pricing, and availability shown on this
            website are subject to change without notice. While we strive to
            keep information accurate and up-to-date, we make no guarantees
            regarding the accuracy, completeness, or reliability of any
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Booking and Reservations
          </h2>
          <p className="text-gray-700 mb-4">
            Booking requests and reservations are subject to availability and
            approval. All bookings must be confirmed in writing by D-DOWNTOWN.
            We reserve the right to refuse service to anyone for any reason at
            any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Payment Terms
          </h2>
          <p className="text-gray-700 mb-4">
            Payment terms and conditions will be specified in individual
            agreements. All payments must be made in accordance with the
            agreed-upon schedule and method.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Disclaimers
          </h2>
          <p className="text-gray-700 mb-4">
            The materials on D-DOWNTOWN's website are provided on an 'as is'
            basis. D-DOWNTOWN makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Limitations
          </h2>
          <p className="text-gray-700 mb-4">
            In no event shall D-DOWNTOWN or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on D-DOWNTOWN's website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Revisions and Errata
          </h2>
          <p className="text-gray-700 mb-4">
            The materials appearing on D-DOWNTOWN's website could include
            technical, typographical, or photographic errors. D-DOWNTOWN does
            not warrant that any of the materials on its website are accurate,
            complete, or current.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            9. Links
          </h2>
          <p className="text-gray-700 mb-4">
            D-DOWNTOWN has not reviewed all of the sites linked to its website
            and is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by D-DOWNTOWN of
            the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            10. Governing Law
          </h2>
          <p className="text-gray-700 mb-4">
            These terms and conditions are governed by and construed in
            accordance with the laws of Pakistan and you irrevocably submit to
            the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            11. Contact Information
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about these Terms of Service, please
            contact us at:
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

export default TermsOfService;
