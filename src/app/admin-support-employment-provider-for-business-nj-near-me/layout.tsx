import { ReactNode } from "react";

// Define metadata for the About page layout
export const metadata = {
  title: " Professional Business Staffing Services in New Jersey & New York",
  description: "Discover A1 Staffing Pro's expert staffing solutions for businesses in New Jersey and New York. Offering customized recruitment services, direct hire, temporary staffing, and more. Elevate your workforce with our corporate recruitment agency.",
  keywords: [
    "Staffing solutions for businesses",
    "Business staffing services New Jersey",
    "Corporate recruitment agency NY",
    "Temporary staffing for businesses",
    "Direct hire services for companies",
    "Contract-to-hire staffing solutions",
    "Employment agency for companies",
    "Business staffing experts NJ",
    "Customized recruitment services",
    "Professional staffing solutions for companies",
  ],
  
  
  openGraph: {
    title: " Professional Business Staffing Services in New Jersey & New York",
  description: "Discover A1 Staffing Pro's expert staffing solutions for businesses in New Jersey and New York. Offering customized recruitment services, direct hire, temporary staffing, and more. Elevate your workforce with our corporate recruitment agency.",
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
// Schema Markup (Best moved to a separate component)
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
  "openingHoursWeekdays": "Monday to Friday 09:00-05:30", // Replace with actual hours
  "openingHoursWeekends": "Saturday-Sunday Closed", // Replace with actual hours if available
  "sameAs": [
    "https://www.facebook.com/people/A1-Staffing-Pro-LLC/100084799082964/", // Replace with actual social media URLs
    "https://x.com/a1staffingpro?mx=2",
    "https://www.google.com/search?sca_esv=33f171317715abb5&hl=en-GB&authuser=0&q=A1+Staffing+Pro+llc+%7C+Trusted+Staffing+Solutions+in+New+Jersey&ludocid=12504528373999787064&lsig=AB86z5XeIdmt69Inee8J4b6hnUNS&kgs=ecfe209993c83530&shndl=-1&shem=labmtre,lsde,lsp,vslcea&source=sh/x/loc/act/m1/2",
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128", // Replace with actual latitude
    "longitude": "-74.0060", // Replace with actual longitude
  },
};
export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`antialiased`}>
      {/* No extra content like Header or Footer here */}
      {children} {/* Only the content from the About page will be rendered */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    </div>
  );
}
