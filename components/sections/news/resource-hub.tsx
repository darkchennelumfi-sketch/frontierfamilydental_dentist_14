import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Syringe,
  type LucideIcon,
} from "lucide-react";

import { newsCopy } from "@/components/sections/news/content";
import { IconTile } from "@/components/shared/icon-tile";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

type Resource = {
  index: string;
  title: string;
  href: string;
  excerpt: string;
  icon: LucideIcon;
};

const resources: Resource[] = [
  {
    index: "01",
    title: "Preventative Dental Care",
    href: "/services/preventative-dental-care",
    excerpt: newsCopy.preventative,
    icon: ShieldCheck,
  },
  {
    index: "02",
    title: "Implant Dentistry",
    href: "/services/dental-implants",
    excerpt: newsCopy.implant,
    icon: Syringe,
  },
  {
    index: "03",
    title: "Restorative Dental Care",
    href: "/services/restorative-dental-care",
    excerpt: newsCopy.restorative,
    icon: HeartPulse,
  },
  {
    index: "04",
    title: "Cosmetic Dentistry",
    href: "/services/cosmetic-dental-care",
    excerpt: newsCopy.cosmetic,
    icon: Sparkles,
  },
];

export function ResourceHub() {
  return (
    <section className="relative isolate overflow-hidden bg-cream-50 py-20 sm:py-24 lg:py-32">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Learn More" title="Our Services" />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <StaggerItem key={resource.href} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white/85 p-7 shadow-card transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-600/25 hover:bg-white hover:shadow-soft sm:p-8">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-16 -right-16 size-44 rounded-full bg-brand-300/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="relative flex items-center justify-between gap-4">
                    <IconTile>
                      <Icon aria-hidden="true" />
                    </IconTile>
                    <span
                      aria-hidden="true"
                      className="font-display text-sm tracking-[0.12em] text-brand-600"
                    >
                      {resource.index}
                    </span>
                  </div>
                  <h3 className="relative mt-6 text-[1.5rem] leading-tight text-brand-800">
                    {resource.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-ink-700 sm:text-[0.95rem]">
                    {resource.excerpt}
                  </p>
                  <div className="relative mt-auto pt-6">
                    <Link
                      href={resource.href}
                      className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-700 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
                    >
                      Read more
                      <span className="sr-only"> about {resource.title}</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button asChild variant="outline">
            <Link href="/services">
              FIND OUT MORE
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <p className="text-sm text-ink-500">
            Serving Powell, WY and the rest of the Big Horn Basin
          </p>
        </div>
      </div>
    </section>
  );
}
