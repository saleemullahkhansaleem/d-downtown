import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  structuredData?: object;
}

const SEO = ({
  title = "D-DOWNTOWN - Future-Ready Commercial Hub in Rawalpindi | RDA Approved",
  description = "D-DOWNTOWN is Rawalpindi's premier commercial hub featuring 10 modern plazas on Main Defence Road. RDA approved with flexible payment plans, prime location, and unmatched visibility.",
  keywords = "D-DOWNTOWN, commercial hub, Rawalpindi, Main Defence Road, RDA approved, commercial plazas, retail spaces, investment opportunities, commercial real estate, Pakistan",
  image = "https://d-downtown.com/og-image.jpg",
  url = "https://d-downtown.com",
  type = "website",
  publishedTime,
  modifiedTime,
  author = "D-DOWNTOWN",
  section,
  tags = [],
  structuredData,
}: SEOProps) => {
  const fullTitle = title.includes("D-DOWNTOWN")
    ? title
    : `${title} | D-DOWNTOWN`;
  const fullUrl = url.startsWith("http") ? url : `https://d-downtown.com${url}`;
  const fullImage = image.startsWith("http")
    ? image
    : `https://d-downtown.com${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="D-DOWNTOWN" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
