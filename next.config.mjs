/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mshiwhdvlfmcbhdfozag.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
