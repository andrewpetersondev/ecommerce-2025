import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/plus/img/logos/mark.svg?color=indigo&shade=500",
      },
      {
        protocol: "https",

        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-1472099645785-5658abf4ff4e*",
      },
    ],
  },
};

export default nextConfig;
