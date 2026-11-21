import type { Metadata } from "next";

import { site } from "@/lib/site";
import { PageHero } from "@/components/shared/page-hero";
import { SitemapIndex } from "@/components/sections/sitemap/sitemap-index";

export const metadata: Metadata = {
  title: "Sitemap",
  description: site.description,
  alternates: {
    canonical: "/sitemap",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/sitemap",
    siteName: site.name,
    title: `Sitemap | ${site.name}`,
    description: site.description,
  },
};

export default function SitemapPage() {
  return (
    <>
      <PageHero
        eyebrow="All pages"
        title="Sitemap"
        description={site.serviceArea}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sitemap" }]}
      />
      <SitemapIndex />
    </>
  );
}
