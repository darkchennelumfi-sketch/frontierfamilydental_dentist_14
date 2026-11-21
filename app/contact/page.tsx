import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { site } from "@/lib/site";
import { PageHero } from "@/components/shared/page-hero";
import { ContactBody } from "@/components/sections/contact/contact-body";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us",
  description: site.description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/contact",
    siteName: site.name,
    title: `Contact Us | ${site.name}`,
    description: site.description,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Powell, Wyoming"
        title="Contact Us"
        description={site.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      >
        <Button asChild size="lg">
          <Link href={site.phoneHref}>
            <Phone aria-hidden="true" />
            CALL {site.phoneDisplay}
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="#contact-form">
            Send us a message
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>
      <ContactBody />
    </>
  );
}
