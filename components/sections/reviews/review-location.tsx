import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { aboutCopy } from "@/components/sections/about/content";
import { LocationCard } from "@/components/shared/location-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SocialLinks } from "@/components/shared/social-links";
import { Button } from "@/components/ui/button";

export function ReviewLocation() {
  return (
    <section className="relative isolate overflow-hidden bg-band-soft py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our Office"
              title="Our Conveniently Located Powell Dental Office"
            />
            <p className="mt-8 max-w-prose text-base leading-relaxed text-ink-700 sm:text-lg">
              {aboutCopy.officeIntro}
            </p>

            <div className="mt-8 rounded-2xl border border-line bg-white/70 p-5">
              <h3 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-600">
                Social
              </h3>
              <SocialLinks className="mt-3" />
            </div>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  SCHEDULE AN APPOINTMENT
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-md">
              <span
                aria-hidden="true"
                className="absolute -inset-3 rotate-1 rounded-[2rem] border border-brand-700/10 bg-white/45"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-10 -left-8 hidden size-28 rounded-full bg-clay-500/10 blur-2xl sm:block"
              />
              <LocationCard showSocial={false} className="relative" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
