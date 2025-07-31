// SEO Configuration for D-DOWNTOWN
export const seoConfig = {
  // Default SEO settings
  default: {
    title:
      "D-DOWNTOWN - Future-Ready Commercial Hub in Rawalpindi | RDA Approved",
    description:
      "D-DOWNTOWN is Rawalpindi's premier commercial hub featuring 10 modern plazas on Main Defence Road. RDA approved with flexible payment plans, prime location, and unmatched visibility.",
    keywords:
      "D-DOWNTOWN, commercial hub, Rawalpindi, Main Defence Road, RDA approved, commercial plazas, retail spaces, investment opportunities, commercial real estate, Pakistan",
    image: "https://d-downtown.com/og-image.jpg",
    url: "https://d-downtown.com",
    type: "website" as const,
  },

  // Page-specific SEO configurations
  pages: {
    home: {
      title: "D-DOWNTOWN - Future-Ready Commercial Hub in Rawalpindi",
      description:
        "D-DOWNTOWN is Rawalpindi's premier commercial hub featuring 10 modern plazas on Main Defence Road. RDA approved with flexible payment plans, prime location, and unmatched visibility. Invest in the future of retail excellence.",
      keywords:
        "D-DOWNTOWN, commercial hub, Rawalpindi, Main Defence Road, RDA approved, commercial plazas, retail spaces, investment opportunities, commercial real estate, Pakistan, 10 plazas, modern commercial spaces",
      url: "/",
      structuredData: {
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
      },
    },

    about: {
      title: "About D-DOWNTOWN - Rawalpindi's Premier Commercial Hub",
      description:
        "Learn about D-DOWNTOWN's strategic location near Askari 14 and Adyala Road, surrounded by high footfall residential communities. Discover our 6 well-planned plazas with 24/7 security and comprehensive property management.",
      keywords:
        "D-DOWNTOWN about, commercial hub Rawalpindi, strategic location, Askari 14, Adyala Road, residential communities, property management, 24/7 security, commercial plazas",
      url: "/about-us",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "D-DOWNTOWN",
        description:
          "Rawalpindi's premier commercial hub with strategic location and comprehensive property management",
        url: "https://d-downtown.com/about-us",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Near Askari 14 and Adyala Road",
          addressLocality: "Rawalpindi",
          addressRegion: "Punjab",
          addressCountry: "PK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "33.6844",
          longitude: "73.0479",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Commercial Spaces",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial Plaza Spaces",
              },
            },
          ],
        },
      },
    },

    contact: {
      title: "Contact D-DOWNTOWN - Get in Touch for Commercial Space Inquiries",
      description:
        "Contact D-DOWNTOWN for commercial space inquiries. Call us at 0313-055-2222, email info@d-downtown.com, or visit our office. Get expert guidance on investment opportunities in Rawalpindi's premier commercial hub.",
      keywords:
        "contact D-DOWNTOWN, commercial space inquiries, Rawalpindi commercial hub, investment opportunities, phone number, email, office location, sales team",
      url: "/contact-us",
      structuredData: {
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
      },
    },

    portfolio: {
      title: "Project Portfolio - D-DOWNTOWN Commercial Development",
      description:
        "Explore D-DOWNTOWN's impressive project portfolio showcasing our 10 modern commercial plazas. View detailed specifications, floor plans, and investment opportunities in Rawalpindi's premier commercial hub.",
      keywords:
        "D-DOWNTOWN portfolio, commercial development, project showcase, floor plans, specifications, investment opportunities, commercial plazas Rawalpindi",
      url: "/project-portfolio",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "D-DOWNTOWN Project Portfolio",
        description: "Collection of commercial development projects",
        url: "https://d-downtown.com/project-portfolio",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "RealEstateListing",
              name: "Commercial Plaza 1",
              description: "Modern commercial space in D-DOWNTOWN",
            },
          },
        ],
      },
    },

    investment: {
      title: "Investment Models - D-DOWNTOWN Commercial Opportunities",
      description:
        "Discover flexible investment models and opportunities at D-DOWNTOWN. Choose from various payment plans, ownership options, and investment strategies for commercial real estate in Rawalpindi.",
      keywords:
        "investment models, commercial opportunities, payment plans, ownership options, investment strategies, commercial real estate Rawalpindi, D-DOWNTOWN investment",
      url: "/investment-models",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Investment Models",
        description:
          "Flexible investment opportunities in commercial real estate",
        provider: {
          "@type": "Organization",
          name: "D-DOWNTOWN",
        },
        areaServed: {
          "@type": "City",
          name: "Rawalpindi",
        },
      },
    },

    pricing: {
      title: "Payment & Pricing - D-DOWNTOWN Commercial Spaces",
      description:
        "Transparent pricing and flexible payment plans for D-DOWNTOWN commercial spaces. Get detailed cost breakdowns, installment options, and financing solutions for your commercial investment.",
      keywords:
        "payment plans, pricing, commercial spaces, cost breakdown, installment options, financing solutions, D-DOWNTOWN pricing",
      url: "/payment-pricing",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Payment & Pricing Plans",
        description: "Transparent pricing and flexible payment options",
        provider: {
          "@type": "Organization",
          name: "D-DOWNTOWN",
        },
      },
    },

    services: {
      title: "Commercial Services - D-DOWNTOWN Business Solutions",
      description:
        "Comprehensive commercial services at D-DOWNTOWN including property management, security, maintenance, and business support. Everything you need for successful commercial operations.",
      keywords:
        "commercial services, property management, business support, security services, maintenance, D-DOWNTOWN services",
      url: "/commercial-services",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Commercial Services",
        description: "Comprehensive business solutions and property management",
        provider: {
          "@type": "Organization",
          name: "D-DOWNTOWN",
        },
      },
    },

    location: {
      title: "Location & Connectivity - D-DOWNTOWN Strategic Position",
      description:
        "Discover D-DOWNTOWN's strategic location on Main Defence Road with excellent connectivity to major landmarks, residential areas, and transportation hubs in Rawalpindi.",
      keywords:
        "location, connectivity, Main Defence Road, strategic position, landmarks, residential areas, transportation, D-DOWNTOWN location",
      url: "/location-connectivity",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Place",
        name: "D-DOWNTOWN",
        description: "Strategic commercial location in Rawalpindi",
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
      },
    },

    team: {
      title: "Our Team - D-DOWNTOWN Leadership & Experts",
      description:
        "Meet the dedicated professionals behind D-DOWNTOWN's success. Our experienced team brings together expertise in real estate, project management, and commercial development.",
      keywords:
        "D-DOWNTOWN team, leadership, experts, professionals, real estate team, project management, commercial development experts",
      url: "/our-team",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "D-DOWNTOWN Team",
        description: "Professional team of real estate and development experts",
        employee: [
          {
            "@type": "Person",
            name: "Khawar Abbasi",
            jobTitle: "Chief Executive Officer",
          },
        ],
      },
    },

    faqs: {
      title: "FAQs - D-DOWNTOWN Commercial Hub Questions & Answers",
      description:
        "Find answers to frequently asked questions about D-DOWNTOWN commercial spaces, investment opportunities, payment plans, and project details. Get all the information you need.",
      keywords:
        "FAQs, frequently asked questions, D-DOWNTOWN questions, commercial hub FAQ, investment FAQ, payment plans FAQ",
      url: "/faqs",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is D-DOWNTOWN?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "D-DOWNTOWN is Rawalpindi's premier commercial hub featuring 10 modern plazas on Main Defence Road.",
            },
          },
        ],
      },
    },

    blog: {
      title: "Blog - D-DOWNTOWN Commercial Real Estate Insights",
      description:
        "Stay updated with the latest insights, market trends, and news about commercial real estate in Rawalpindi. Expert analysis and valuable information from D-DOWNTOWN.",
      keywords:
        "blog, commercial real estate, market trends, Rawalpindi real estate, D-DOWNTOWN blog, real estate insights",
      url: "/blog",
      type: "website" as const,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "D-DOWNTOWN Blog",
        description: "Commercial real estate insights and market trends",
        publisher: {
          "@type": "Organization",
          name: "D-DOWNTOWN",
        },
      },
    },

    drone: {
      title: "Drone Shoots - D-DOWNTOWN Aerial Views & Progress",
      description:
        "Experience D-DOWNTOWN from above with stunning drone footage. View aerial perspectives of our commercial development progress and strategic location in Rawalpindi.",
      keywords:
        "drone shoots, aerial views, D-DOWNTOWN progress, commercial development footage, Rawalpindi aerial, construction progress",
      url: "/drone-shoots",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: "D-DOWNTOWN Drone Shoots",
        description:
          "Aerial views and progress footage of D-DOWNTOWN commercial development",
        uploadDate: "2025-07-31",
        publisher: {
          "@type": "Organization",
          name: "D-DOWNTOWN",
        },
      },
    },
  },
};

// Helper function to get SEO config for a specific page
export const getSEOConfig = (page: keyof typeof seoConfig.pages) => {
  return seoConfig.pages[page];
};

// Helper function to get default SEO config
export const getDefaultSEOConfig = () => {
  return seoConfig.default;
};
