import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const routes = ["/", "/services", "/work", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "monthly" : "weekly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
