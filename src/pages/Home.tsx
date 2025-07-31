import {
  Hero,
  Location,
  Approvals,
  WhyChooseUs,
  CommercialUnits,
  Brands,
  BookingSection,
  SEO,
} from "../components";

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="D-DOWNTOWN - Future-Ready Commercial Hub in Rawalpindi"
        description="D-DOWNTOWN is Rawalpindi's premier commercial hub featuring 10 modern plazas on Main Defence Road. RDA approved with flexible payment plans, prime location, and unmatched visibility. Invest in the future of retail excellence."
        keywords="D-DOWNTOWN, commercial hub, Rawalpindi, Main Defence Road, RDA approved, commercial plazas, retail spaces, investment opportunities, commercial real estate, Pakistan, 10 plazas, modern commercial spaces"
        url="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "D-DOWNTOWN",
          description:
            "Rawalpindi's premier commercial hub featuring 10 modern plazas on Main Defence Road",
          url: "https://d-downtown.com",
          logo: "https://d-downtown.com/logo-full.svg",
          image: "https://d-downtown.com/hero-bg.webp",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Main Defence Road",
            addressLocality: "Rawalpindi",
            addressRegion: "Punjab",
            addressCountry: "PK",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "33.6844",
            longitude: "73.0479",
          },
          telephone: "+92-XXX-XXXXXXX",
          email: "info@d-downtown.com",
          sameAs: [
            "https://www.facebook.com/ddowntown",
            "https://www.instagram.com/ddowntown",
            "https://www.linkedin.com/company/ddowntown",
          ],
          areaServed: {
            "@type": "City",
            name: "Rawalpindi",
          },
          serviceType: "Commercial Real Estate Development",
          priceRange: "$$",
        }}
      />
      <Hero />
      <Location />
      <Approvals />
      <WhyChooseUs />
      <CommercialUnits />
      <Brands />
      <BookingSection />
    </div>
  );
};

export default Home;
