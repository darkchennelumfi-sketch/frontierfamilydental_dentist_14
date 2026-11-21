import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { site } from "@/lib/site";
import { aboutCopy } from "@/components/sections/about/content";
import { FaqList } from "@/components/sections/about/faq-list";
import { RelatedLinks } from "@/components/sections/about/related-links";
import { SmileArch } from "@/components/shared/ambient-background";
import { CtaBand } from "@/components/shared/cta-band";
import { LocationCard } from "@/components/shared/location-card";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: site.description,
  alternates: {
    canonical: "/about/faq",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/about/faq",
    siteName: site.name,
    title: `Frequently Asked Questions | ${site.name}`,
    description: site.description,
  },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Frequently Asked Questions"
        description={site.serviceArea}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "FAQ" },
        ]}
      >
        <Button asChild size="lg">
          <Link href="/contact">
            SCHEDULE AN APPOINTMENT
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href={site.phoneHref}>
            <Phone aria-hidden="true" />
            {site.phoneDisplay}
          </Link>
        </Button>
      </PageHero>

      <section className="relative isolate overflow-hidden bg-cream-50 py-20 sm:py-24 lg:py-32">
        <SmileArch className="pointer-events-none absolute -top-16 -right-20 hidden h-80 w-[38rem] text-brand-700/10 lg:block" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start lg:gap-16">
            <div>
              <SectionHeading eyebrow="Common Questions" title="Questions & Answers" />
              <div className="mt-8 rounded-3xl border border-line bg-white/80 p-6 shadow-card sm:p-8">
                <FaqList />
              </div>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28">
              <LocationCard />
              <div className="relative overflow-hidden rounded-3xl bg-band p-7 text-cream-100 shadow-card">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 -right-10 size-32 rounded-full bg-brand-400/15 blur-2xl"
                />
                <h2 className="relative font-display text-2xl text-cream-50">
                  Still have a question?
                </h2>
                <p className="relative mt-3 text-sm leading-relaxed text-cream-100/78">
                  Call{" "}
                  <Link
                    href={site.phoneHref}
                    className="font-semibold text-brand-200 underline underline-offset-4 transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                  >
                    {site.phoneDisplay}
                  </Link>{" "}
                  or contact our office to schedule an appointment.
                </p>
                <Button asChild variant="light" className="relative mt-5 w-full">
                  <Link href="/contact">
                    CONTACT US
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <RelatedLinks
        links={[
          { label: "About Frontier Family Dental", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
      <CtaBand title="Schedule an appointment" description={aboutCopy.schedule} />
    </>
  );
}
