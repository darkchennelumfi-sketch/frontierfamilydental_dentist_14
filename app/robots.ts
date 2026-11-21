import type { MetadataRoute } from "next";

const baseUrl = "https://myfrontierfamilydental.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

export const dynamic = "force-static";
