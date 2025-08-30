import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://caploop.example";
  return [
    { url: `${base}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/privacy`, priority: 0.4 },
    { url: `${base}/terms`, priority: 0.4 },
  ];
}