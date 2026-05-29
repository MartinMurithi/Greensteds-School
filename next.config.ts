import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use webpack for builds (Turbopack has stricter network requirements)
  // Switch back to Turbopack on Vercel by removing this line
  turbopack: undefined,

  // Security headers — applied to every route
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options",         value: "DENY" },
          { key: "X-Content-Type-Options",   value: "nosniff" },
          { key: "Referrer-Policy",          value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",       value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },

  // Image optimisation
  images: {
    formats:     ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 828, 1080, 1280, 1440, 1920],
    imageSizes:  [16, 32, 64, 96, 128, 256],
  },

  compress:        true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
