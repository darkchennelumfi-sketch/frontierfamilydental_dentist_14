import type { MetadataRoute } from "next";

import { allRoutes } from "@/lib/site";

const baseUrl = "https://myfrontierfamilydental.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-01T02:02:46+00:00");

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.href === "/" ? "" : route.href}`,
    lastModified,
    changeFrequency: route.href === "/" ? "monthly" : "yearly",
    priority: route.href === "/" ? 1 : route.href.startsWith("/services") ? 0.8 : 0.6,
  }));
}

export const dynamic = "force-static";
export const revalidate = false;
