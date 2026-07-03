import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // export estático — Cloudflare Pages serve o /out direto
  output: "export",
  images: {
    // sem servidor de otimização no Pages; imagens servidas como estão
    unoptimized: true,
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
