import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { aboutCopy } from "@/components/sections/about/content";
import { SmileArch } from "@/components/shared/ambient-background";
import { Reveal } from "@/components/shared/reveal";
import { QuoteCard } from "@/components/shared/quote-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function AboutStory() {
  return (
    <section className="relative isolate overflow-hidden bg-cream-50 py-20 sm:py-24 lg:py-32">
      <SmileArch className="pointer-events-none absolute -top-16 right-0 hidden h-80 w-[38rem] text-brand-700/10 lg:block" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-line/60 lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Our Story" title="Committed to Your Oral Health" />
            <p className="mt-8 max-w-prose text-base leading-relaxed text-ink-700 sm:text-lg">
              {aboutCopy.committed}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild variant="outline">
                <Link href="/about/faq">
                  FREQUENTLY ASKED QUESTIONS
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:pt-10">
            <QuoteCard
              quote={aboutCopy.vision}
              attribution="Our vision statement"
              className="bg-white/90"
            />
            <div className="mt-6 border-l-2 border-clay-500/40 pl-5">
              <p className="text-sm leading-relaxed text-ink-700 sm:text-base">
                {aboutCopy.visionContext}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
