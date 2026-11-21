import { ArrowUpRight, Globe, MessageCircle, type LucideIcon } from "lucide-react";

import { reviewsCopy } from "@/components/sections/reviews/content";
import { site } from "@/lib/site";
import { AmbientBackground, SmileArch } from "@/components/shared/ambient-background";
import { IconTile } from "@/components/shared/icon-tile";
import { QuoteCard } from "@/components/shared/quote-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

type ReviewPlatform = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const platforms: ReviewPlatform[] = [
  { label: site.social[0].label, href: site.social[0].href, icon: Globe },
  { label: site.social[1].label, href: site.social[1].href, icon: MessageCircle },
];

export function ReviewInvite() {
  return (
    <section className="relative isolate overflow-hidden bg-band py-20 sm:py-24 lg:py-28">
      <AmbientBackground variant="dark" />
      <SmileArch className="pointer-events-none absolute -right-24 -bottom-20 h-96 w-[46rem] text-brand-300/10" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Share Your Experience"
              title="Review Us on Google or Facebook"
            />
            <QuoteCard
              variant="dark"
              quote={reviewsCopy.invitation}
              attribution="Frontier Family Dental"
              className="mt-8"
            />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-4 sm:grid-cols-2">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-dark group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-300/35 hover:bg-white/12 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-4 focus-visible:ring-offset-brand-900"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-14 -right-14 size-40 rounded-full bg-brand-400/15 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <IconTile tone="dark">
                      <Icon aria-hidden="true" />
                    </IconTile>
                    <h3 className="relative mt-7 font-display text-3xl leading-none text-cream-50">
                      {platform.label}
                    </h3>
                    <span className="relative mt-auto inline-flex items-center gap-2 pt-10 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-200 transition-colors group-hover:text-cream-50">
                      LEAVE US A REVIEW
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-cream-100/60">
              Both links open the review platform in a new tab.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
