import Link from "next/link";
import { HeartPulse, Phone } from "lucide-react";

import { site } from "@/lib/site";
import { AmbientBackground } from "@/components/shared/ambient-background";
import { ContactForm } from "@/components/shared/contact-form";
import { LocationCard } from "@/components/shared/location-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function HomeContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-line/70 bg-cream-100 py-20 sm:py-24 lg:py-28"
    >
      <AmbientBackground variant="cream" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Get in touch"
          title="Contact Us"
          description={site.serviceArea}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <div className="rounded-3xl border border-line bg-white/85 p-6 shadow-card backdrop-blur-xl sm:p-8">
              <h3 className="text-2xl text-brand-800">Send us a message</h3>
              <ContactForm idPrefix="home-contact" className="mt-6" />
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal delay={0.08}>
              <LocationCard />
            </Reveal>
            <Reveal delay={0.14}>
              <div className="rounded-3xl border border-brand-600/15 bg-brand-50 p-6">
                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white/80 text-brand-700">
                    <HeartPulse aria-hidden="true" className="size-5" />
                  </span>
                  <p className="font-display text-xl leading-snug text-brand-800">
                    Same-day emergency care is always our goal!
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  We also offer same-day emergency appointments because no one should have to wait
                  when suffering an oral health emergency.
                </p>
                <Button asChild variant="outline" size="sm" className="mt-4">
                  <Link href={site.phoneHref}>
                    <Phone aria-hidden="true" />
                    CALL {site.phoneDisplay}
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
