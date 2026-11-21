import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { site } from "@/lib/site";
import { aboutCopy } from "@/components/sections/about/content";
import { AboutDentist } from "@/components/sections/about/about-dentist";
import { AboutOffice } from "@/components/sections/about/about-office";
import { AboutStory } from "@/components/sections/about/about-story";
import { AboutValues } from "@/components/sections/about/about-values";
import { RelatedLinks } from "@/components/sections/about/related-links";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: site.description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/about",
    siteName: site.name,
    title: `About | ${site.name}`,
    description: site.description,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={site.serviceArea}
        title="About Frontier Family Dental"
        description={site.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      >
        <Button asChild size="lg">
          <Link href="/contact">
            SCHEDULE AN APPOINTMENT
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <AboutStory />
      <AboutValues />
      <AboutDentist />
      <AboutOffice />
      <RelatedLinks
        links={[
          { label: "Frequently Asked Questions", href: "/about/faq" },
          { label: "Services", href: "/services" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
      <CtaBand title="Schedule an appointment" description={aboutCopy.schedule} />
    </>
  );
}
