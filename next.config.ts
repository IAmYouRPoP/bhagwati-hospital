import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is one page now; old addresses go to the matching section.
  async redirects() {
    return [
      { source: "/services", destination: "/#treatments", permanent: true },
      { source: "/treatments/:path*", destination: "/#treatments", permanent: true },
      { source: "/doctors/:path*", destination: "/#doctors", permanent: true },
      { source: "/facilities", destination: "/#facilities", permanent: true },
      { source: "/contact", destination: "/#visit", permanent: true },
      { source: "/about", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
