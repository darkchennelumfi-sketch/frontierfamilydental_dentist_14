import Link from "next/link";
import { ArrowRight, HeartPulse, Phone, Send, Stethoscope, Users } from "lucide-react";

import { site } from "@/lib/site";
import { AmbientBackground } from "@/components/shared/ambient-background";
import { ContactForm } from "@/components/shared/contact-form";
import { IconTile } from "@/components/shared/icon-tile";
import { LocationCard } from "@/components/shared/location-card";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

const emergencyText =
  "There is nothing more concerning than when an unexpected problem pops up. Whether it’s a toothache, a broken tooth, or trauma, the best dentist you can turn to is Dr. Williams and our friendly staff at Frontier Family Dental. We will get you back to your busy life. Same-day emergency care is always our goal!";

const sameDayText =
  "We also offer same-day emergency appointments because no one should have to wait when suffering an oral health emergency.";

export function ContactBody() {
  return (
    <>
      <section id="contact-form" className="relative isolate scroll-mt-24 overflow-hidden bg-cream-50">
        <AmbientBackground />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal>
              <div className="rounded-3xl border border-line bg-white/85 p-6 shadow-card backdrop-blur-xl sm:p-8">
                <div className="flex items-center gap-3">
                  <IconTile>
                    <Send aria-hidden="true" />
                  </IconTile>
                  <h2 className="text-[clamp(1.6rem,2.4vw,2.1rem)] text-brand-800">
                    Send us a message
                  </h2>
                </div>
                <ContactForm idPrefix="contact-page" className="mt-7" />
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal delay={0.08}>
                <LocationCard />
              </Reveal>
              <Reveal delay={0.14}>
                <div className="rounded-3xl border border-line bg-cream-100 p-6">
                  <h2 className="text-[0.7rem] font-semibold tracking-[0.18em] text-brand-600 uppercase">
                    Service area
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">
                    {site.serviceArea}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={site.phoneHref}>
                        <Phone aria-hidden="true" />
                        {site.phoneDisplay}
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/sitemap">
                        Sitemap
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-band py-16 sm:py-20 lg:py-24">
        <AmbientBackground variant="dark" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <Reveal>
              <p className="font-script text-2xl text-brand-300">Same-day emergency care</p>
              <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.02] text-cream-50">
                Emergency Care
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream-100/80 sm:text-lg">
                {emergencyText}
              </p>
              <Button asChild size="lg" variant="light" className="mt-8">
                <Link href={site.phoneHref}>
                  <Phone aria-hidden="true" />
                  CALL {site.phoneDisplay}
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/12 bg-white/8 p-6 shadow-glow backdrop-blur-xl sm:p-8">
                <span className="grid size-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-brand-200">
                  <HeartPulse aria-hidden="true" className="size-5" />
                </span>
                <p className="mt-5 font-display text-xl leading-snug text-cream-50 sm:text-2xl">
                  {sameDayText}
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  {site.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line/70 bg-cream-100 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] text-brand-800">Continue exploring</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-700">
                {site.serviceArea}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="md">
                <Link href="/services">
                  <Stethoscope aria-hidden="true" />
                  Explore our services
                </Link>
              </Button>
              <Button asChild size="md" variant="outline">
                <Link href="/about">
                  <Users aria-hidden="true" />
                  Learn more about us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
