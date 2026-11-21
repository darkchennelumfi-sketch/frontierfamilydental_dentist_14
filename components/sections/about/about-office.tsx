import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { aboutCopy } from "@/components/sections/about/content";
import { AmbientBackground, SmileArch } from "@/components/shared/ambient-background";
import { LocationCard } from "@/components/shared/location-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function AboutOffice() {
  return (
    <section className="relative isolate overflow-hidden bg-band-soft py-20 sm:py-24 lg:py-32">
      <AmbientBackground />
      <SmileArch className="pointer-events-none absolute -right-24 -bottom-20 hidden h-96 w-[46rem] text-brand-700/10 lg:block" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our Office"
              title="Our Conveniently Located Powell Dental Office"
            />
            <p className="mt-8 max-w-prose text-base leading-relaxed text-ink-700 sm:text-lg">
              {aboutCopy.office}
            </p>
            <div className="mt-9">
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
                className="absolute -inset-3 -rotate-1 rounded-[2rem] border border-brand-700/10 bg-white/45"
              />
              <span
                aria-hidden="true"
                className="absolute -top-10 -right-8 hidden size-28 rounded-full bg-brand-300/25 blur-2xl sm:block"
              />
              <LocationCard className="relative" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
