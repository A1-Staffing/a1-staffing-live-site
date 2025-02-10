import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Best Staffing Agencies in New Jersey | A1 Staffing Pro LLC",
  description:
    "A1 Staffing Pro New Jersey offers premier staffing solutions, including temporary and full-time positions, recruitment services, and expert job placement. Connect with skilled professionals and explore rewarding career paths with our customized hiring solutions. Discover more today.",
  keywords: [
    "Staffing Solutions New Jersey",
    "Temporary Staffing New Jersey",
    "Recruitment Services New Jersey",
    "Job Placement New Jersey",
    "Staffing Agency New Jersey",
    "Employment Services New Jersey",
    "Job Opportunities",
    "Hiring Solutions",
    "Career Placement",
    "Professional Staffing",
    "Staffing Specialists",
    "Temporary Jobs",
    "Employment Agency",
    "Job Search",
    "HR Solutions New Jersey",
  ],

  openGraph: {
    title: "Best Staffing Agencies in New Jersey | A1 Staffing Pro LLC",
    description:
      "A1 Staffing Pro New Jersey provides premier staffing solutions, including temporary and full-time positions, recruitment services, and expert job placement. Connect with skilled professionals and explore rewarding career opportunities with our customized hiring solutions. Discover more today.",
    url: "https://www.a1staffingpro.com/",
    images: [
      {
        url: "https://www.a1staffingpro.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A1 Staffing Pro",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Staffing Agencies in New Jersey | A1 Staffing Pro LLC",
    description:
      "A1 Staffing Pro New Jersey provides premier staffing solutions, including temporary and full-time positions, recruitment services, and expert job placement. Connect with skilled professionals and explore rewarding career opportunities with our customized hiring solutions. Discover more today.",
    images: "https://www.a1staffingpro.com/images/og-image.jpg",
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "A1 Staffing Pro LLC",
  "url": "https://www.a1staffingpro.com/",
  "logo": "https://www.a1staffingpro.com/logo.png", // Replace with actual logo URL
  "image": "https://www.a1staffingpro.com/cover-image.jpg", // Replace with actual cover image URL
  "description": "A1 Staffing Pro New Jersey offers premier staffing solutions, including temporary and full-time positions, recruitment services, and expert job placement.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Replace with actual address",
    "addressLocality": "New Jersey, New York, Pennsylvania, Connecticut", // Added the locations
    "addressRegion": "NJ", // You can modify this based on specific state in the region
    "postalCode": "Replace with postal code", // Replace with actual postal code
    "addressCountry": "US",
  },
  "telephone": "+1-888 973 3410", // Replace with actual phone number
  "openingHoursWeekdays": "Monday to Friday 09:00-18:00", // Replace with actual hours
  "openingHoursWeekends": "Saturday-Sunday Closed", // Replace with actual hours if available
  "sameAs": [
    "https://www.facebook.com/a1staffingpro", // Replace with actual social media URLs
    "https://www.instagram.com/a1staffingpro",
    "https://www.linkedin.com/company/a1staffingpro",
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128", // Replace with actual latitude
    "longitude": "-74.0060", // Replace with actual longitude
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </body>
    </html>
  );
}