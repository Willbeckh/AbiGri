/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mshiwhdvlfmcbhdfozag.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ixvqngnpscqkhptmjnfs.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/a/**",
      },
    ],
  },
};

export default nextConfig;
