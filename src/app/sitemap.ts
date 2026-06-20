import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { tourPackages } from "@/data/packages";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/packages", "/vehicles", "/destinations", "/gallery", "/about", "/contact", "/booking", "/blog", "/privacy-policy", "/terms-and-conditions"];
  const packageRoutes = tourPackages.map((tour) => `/packages/${tour.slug}`);
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticRoutes, ...packageRoutes, ...blogRoutes].map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
