import Link from "next/link";
import { ArrowRight, Award, CalendarClock, GraduationCap, type LucideIcon } from "lucide-react";

import { AmbientBackground, SmileArch } from "@/components/shared/ambient-background";
import { ToothMark } from "@/components/shared/brand-mark";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

const committedText =
  "We understand that you have a lot of choices when searching for a family dentist in Powell. That's why our team at Frontier Family Dental goes the extra mile to ensure that we meet and exceed our patients' needs and expectations. Our office works with your busy schedule to find appointment times that conveniently fit into your busy day. We also offer same-day emergency appointments because no one should have to wait when suffering an oral health emergency. To ensure our patients receive only the most advanced dental care possible, Dr. Williams remains committed to continuing his education in the latest tools, techniques, and technology dentistry has to offer. With over 40 years of combined dental care experience, our team at Frontier Family Dental is the right choice as your Powell, Wyoming dentist.";

type FactChip = {
  label: string;
  icon: LucideIcon;
};

const factChips: FactChip[] = [
  { label: "40+ years combined experience", icon: Award },
  { label: "Same-day emergency appointments", icon: CalendarClock },
  { label: "White Cap Institute", icon: GraduationCap },
];

export function CommittedBand() {
  return (
    <section className="relative isolate overflow-hidden border-y border-brand-950/40 bg-band py-20 sm:py-24 lg:py-28">
      <AmbientBackground variant="dark" />
      <SmileArch className="pointer-events-none absolute -bottom-28 -left-28 h-96 w-[48rem] text-brand-300/10" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Why families choose us"
              title="Committed to Your Oral Health"
            />
            <Reveal>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream-100/78 sm:text-lg">
                {committedText}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Button asChild size="lg" variant="light" className="mt-8">
                <Link href="/about">
                  LEARN MORE ABOUT US
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/8 p-6 shadow-glow backdrop-blur-xl sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-script text-2xl text-brand-300">At a glance</p>
                  <p className="mt-1 text-[0.64rem] font-semibold tracking-[0.2em] text-cream-100/75 uppercase">
                    Frontier Family Dental
                  </p>
                </div>
                <ToothMark className="size-10 shrink-0 text-brand-300/50" />
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {factChips.map((chip) => {
                  const Icon = chip.icon;
                  return (
                    <li
                      key={chip.label}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-brand-950/25 px-4 py-4"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-400/15 text-brand-200">
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <p className="text-base leading-snug font-semibold text-cream-50">
                        {chip.label}
                      </p>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-cream-100/70">
                Dr. Williams remains committed to continuing his education in the latest tools,
                techniques, and technology dentistry has to offer.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
