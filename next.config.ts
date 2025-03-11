import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
     

      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },{
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
      {
        source: "/admin-support-employment-provider-for-business-nj-near-me.html",
        destination: "/admin-support-employment-provider-for-business-nj-near-me",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
