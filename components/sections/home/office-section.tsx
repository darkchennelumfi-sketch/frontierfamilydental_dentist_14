import Link from "next/link";
import { ArrowRight, Compass, Phone } from "lucide-react";

import { site } from "@/lib/site";
import { AmbientBackground } from "@/components/shared/ambient-background";
import { LocationCard } from "@/components/shared/location-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

const officeText =
  "Conveniently located at 303 N Division St., Powell, Wyoming, our staff works hard to create a warm and welcoming dental office. We know that not everyone enjoys visiting the dentist. To help you feel comfortable and relaxed during each visit, our staff will provide you and your family with the gentle and compassionate care needed to help reduce the stress or anxiety you may typically experience when visiting the dentist.";

export function OfficeSection() {
  return (
    <section className="relative isolate overflow-hidden bg-cream-100 py-20 sm:py-24 lg:py-28">
      <AmbientBackground variant="cream" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Powell, Wyoming"
              title="Our Conveniently Located Powell Dental Office"
            />
            <Reveal>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-700 sm:text-lg">
                {officeText}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    SCHEDULE AN APPOINTMENT
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full px-2 py-2 text-sm font-semibold text-brand-800 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
                >
                  <Phone aria-hidden="true" className="size-4 text-brand-600" />
                  {site.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-ink-500">
                <Compass aria-hidden="true" className="size-4 text-clay-500" />
                {site.addressLine}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -top-10 -right-4 hidden size-44 rounded-full border border-brand-700/15 sm:block"
              />
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-0 hidden size-24 rounded-full border border-clay-500/20 sm:block"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-8 -left-6 hidden size-32 rounded-full border border-brand-700/10 sm:block"
              />
              <LocationCard className="relative" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
