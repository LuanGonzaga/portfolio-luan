import type { MetadataRoute } from "next";
import { pillars } from "@/lib/data";

export const dynamic = "force-static";

const BASE = "https://luangonzaga.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    ...pillars.map((p) => ({
      url: `${BASE}/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
