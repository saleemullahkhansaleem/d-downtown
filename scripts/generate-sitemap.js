#!/usr/bin/env node

/**
 * Generate Sitemap Script for D-DOWNTOWN
 * This script generates a sitemap.xml file based on the application routes
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_URL = "https://d-downtown.com";
const OUTPUT_FILE = path.join(__dirname, "../public/sitemap.xml");
const CURRENT_DATE = new Date().toISOString().split("T")[0];

// Route configuration with priorities and change frequencies
const routes = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "weekly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/about-us",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/project-portfolio",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/investment-models",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/payment-pricing",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/commercial-services",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/location-connectivity",
    priority: "0.7",
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/our-team",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/faqs",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/contact-us",
    priority: "0.8",
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/drone-shoots",
    priority: "0.6",
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/blog",
    priority: "0.7",
    changefreq: "weekly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/privacy-policy",
    priority: "0.3",
    changefreq: "yearly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/terms-of-service",
    priority: "0.3",
    changefreq: "yearly",
    lastmod: CURRENT_DATE,
  },
];

// Generate XML content
function generateSitemapXML() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  routes.forEach((route) => {
    xml += "  <url>\n";
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += "  </url>\n";
  });

  xml += "</urlset>";
  return xml;
}

// Main execution
function main() {
  try {
    const sitemapContent = generateSitemapXML();

    // Ensure the public directory exists
    const publicDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write the sitemap file
    fs.writeFileSync(OUTPUT_FILE, sitemapContent, "utf8");

    console.log("✅ Sitemap generated successfully!");
    console.log(`📁 Location: ${OUTPUT_FILE}`);
    console.log(`🔗 Base URL: ${BASE_URL}`);
    console.log(`📊 Total URLs: ${routes.length}`);
    console.log(`📅 Generated: ${CURRENT_DATE}`);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error.message);
    process.exit(1);
  }
}

// Run the script
main();
