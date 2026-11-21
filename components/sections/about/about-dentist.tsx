import { CalendarCheck, School, Stethoscope, type LucideIcon } from "lucide-react";

import { aboutCopy } from "@/components/sections/about/content";
import { ToothMark } from "@/components/shared/brand-mark";
import { IconTile } from "@/components/shared/icon-tile";
import { QuoteCard } from "@/components/shared/quote-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

type Fact = {
  term: string;
  value: string;
  icon: LucideIcon;
};

const facts: Fact[] = [
  { term: "Dentist", value: "Dr. Williams", icon: Stethoscope },
  { term: "Implant training", value: "White Cap Institute", icon: School },
  {
    term: "Team experience",
    value: "over 40 years of combined dental care experience",
    icon: CalendarCheck,
  },
];

export function AboutDentist() {
  return (
    <section className="relative isolate overflow-hidden bg-cream-50 py-20 sm:py-24 lg:py-32">
      <ToothMark className="pointer-events-none absolute top-24 -right-16 hidden size-80 text-brand-700/5 lg:block" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Your Dentist" title="Dr. Williams" description={aboutCopy.implantIntro} />

            <dl className="mt-9 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white/80 shadow-card">
              {facts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.term} className="p-5 sm:p-6">
                    <dt className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
                      <IconTile className="size-10 rounded-xl">
                        <Icon aria-hidden="true" />
                      </IconTile>
                      <span>{fact.term}</span>
                    </dt>
                    <dd className="mt-3 font-display text-lg leading-snug text-brand-800">
                      {fact.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -top-6 -left-6 hidden size-24 rounded-full bg-clay-500/10 blur-2xl sm:block"
              />
              <QuoteCard
                variant="clay"
                quote={aboutCopy.implantTraining}
                attribution="Frontier Family Dental"
                className="relative"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
