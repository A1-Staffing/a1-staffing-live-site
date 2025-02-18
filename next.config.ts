import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
     
      {
        source: "/employers.html",
        destination: "/employer",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/accounting-finance-employees-for-business-in-New-Jersey.html",
        destination: "/accounting-finance-employees-for-business-in-New-Jersey",
        permanent: true,
      },
      {
        source: "/locations.html",
        destination: "/location",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
