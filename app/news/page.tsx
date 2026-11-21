import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { site } from "@/lib/site";
import { aboutCopy } from "@/components/sections/about/content";
import { ResourceHub } from "@/components/sections/news/resource-hub";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog",
  description: site.description,
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/news",
    siteName: site.name,
    title: `Blog | ${site.name}`,
    description: site.description,
  },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Blog"
        description={site.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      >
        <Button asChild size="lg">
          <Link href="/contact">
            SCHEDULE AN APPOINTMENT
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <ResourceHub />
      <CtaBand title="Schedule an appointment" description={aboutCopy.schedule} />
    </>
  );
}
