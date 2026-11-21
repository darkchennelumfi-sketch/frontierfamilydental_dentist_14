import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarClock,
  ChevronDown,
  GraduationCap,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";

import { site } from "@/lib/site";
import { AmbientBackground, SmileArch } from "@/components/shared/ambient-background";
import { ToothMark } from "@/components/shared/brand-mark";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

type HeroFact = {
  label: string;
  icon: LucideIcon;
};

const heroFacts: HeroFact[] = [
  { label: "40+ years combined experience", icon: Award },
  { label: "Same-day emergency appointments", icon: CalendarClock },
  { label: "White Cap Institute", icon: GraduationCap },
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line/70 bg-hero-mesh">
      <AmbientBackground />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pt-12 pb-16 sm:px-8 sm:pt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16 lg:px-10 lg:pt-20 lg:pb-24">
        <div>
          <Reveal>
            <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-brand-800/15 bg-white/70 px-4 py-2 text-sm leading-snug font-medium text-brand-800 shadow-sm backdrop-blur-md">
              <MapPin aria-hidden="true" className="size-4 shrink-0 text-brand-600" />
              {site.serviceArea}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-[clamp(3rem,7.2vw,5.8rem)] leading-[0.92] tracking-[-0.035em] text-brand-800">
              Frontier Family Dental
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 flex flex-col gap-1 font-display text-[clamp(1.45rem,2.6vw,2.1rem)] leading-tight text-brand-700 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1">
              <span>Exceptional Care</span>
              <span aria-hidden="true" className="hidden text-clay-500 sm:inline">
                ·
              </span>
              <span>Modern Dentistry</span>
              <span aria-hidden="true" className="hidden text-clay-500 sm:inline">
                ·
              </span>
              <span>Timeless Values</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg">
              {site.description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  SCHEDULE AN APPOINTMENT
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={site.phoneHref}>
                  <Phone aria-hidden="true" />
                  CALL {site.phoneDisplay}
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-ink-500">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-500" />
                {site.addressLine}
              </span>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full font-semibold text-brand-700 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
              >
                Explore our services
                <ChevronDown aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative mx-auto w-full max-w-md lg:max-w-[30rem]">
            <SmileArch className="absolute -top-12 left-1/2 h-56 w-[34rem] max-w-none -translate-x-1/2 text-brand-700/12" />
            <div className="relative rounded-[2.5rem] border border-white/70 bg-white/65 p-4 shadow-soft backdrop-blur-xl sm:p-5">
              <div className="relative isolate overflow-hidden rounded-[2rem] bg-band px-6 py-8 text-cream-50 sm:px-8 sm:py-10">
                <AmbientBackground variant="dark" />
                <div className="relative flex flex-wrap items-center justify-between gap-3">
                  <p className="font-script text-xl text-brand-200">Powell, Wyoming</p>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[0.6rem] font-semibold tracking-[0.16em] text-brand-200 uppercase">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-300" />
                    Dr. Williams
                  </span>
                </div>

                <div className="relative mx-auto mt-7 grid w-full max-w-[15rem] place-items-center rounded-t-full rounded-b-3xl border border-white/15 bg-white/5 px-6 pt-10 pb-8">
                  <span
                    aria-hidden="true"
                    className="absolute inset-3 rounded-t-full rounded-b-2xl border border-dashed border-white/15"
                  />
                  <ToothMark className="relative size-20 text-brand-200 sm:size-24" />
                  <p className="relative mt-6 text-center font-display text-2xl leading-tight text-cream-50">
                    Frontier Family Dental
                  </p>
                  <p className="relative mt-1 text-center text-[0.62rem] font-semibold tracking-[0.18em] text-brand-300 uppercase">
                    Powell, WY 82435
                  </p>
                </div>

                <ul className="relative mt-7 flex flex-col gap-2">
                  {heroFacts.map((fact) => {
                    const Icon = fact.icon;
                    return (
                      <li
                        key={fact.label}
                        className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-3 backdrop-blur-md"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-400/15 text-brand-200">
                          <Icon aria-hidden="true" className="size-4" />
                        </span>
                        <span className="text-sm font-medium text-cream-100">{fact.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-brand-700/20 blur-xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
