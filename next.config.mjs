/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.apple.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "support.apple.com",
        pathname: "/content/**",
      },
    ],
  },
};

export default nextConfig;
