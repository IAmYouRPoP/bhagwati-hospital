import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bhagwati-hospital.vercel.app/",
      lastModified: new Date("2026-11-24T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
