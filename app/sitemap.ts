import type { MetadataRoute } from "next";

const publicRoutes = [
  "/",
  "/about",
  "/services",
  "/antivirus",
  "/web-vulnerability-scanner",
  "/blog",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");
  return publicRoutes.map((route) => ({
    url: siteUrl ? `${siteUrl}${route}` : route,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.6,
  }));
}
