import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

export type DetailFact = {
  icon: ReactNode;
  value: string;
  label: string;
};

export function ProseSection({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("scroll-mt-28", className)}>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-6 max-w-prose space-y-5 text-base leading-relaxed text-ink-700 sm:text-lg">
        {children}
      </div>
    </section>
  );
}

export function FactPanel({
  eyebrow,
  title,
  facts,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  facts: DetailFact[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-line bg-white/85 p-7 shadow-card",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute -top-14 -right-14 size-36 rounded-full bg-brand-300/20 blur-2xl"
      />
      <div className="relative">
        {eyebrow ? (
          <span className="inline-flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand-600">
            <span aria-hidden="true" className="h-px w-6 bg-brand-600/50" />
            {eyebrow}
          </span>
        ) : null}
        <h2 className="mt-3 text-2xl leading-tight text-brand-800">{title}</h2>
        {children ? (
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-700">{children}</div>
        ) : null}
        <ul className="mt-6 space-y-4 border-t border-line pt-6">
          {facts.map((fact) => (
            <li key={`${fact.value}-${fact.label}`} className="flex items-start gap-3">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 [&_svg]:size-4">
                {fact.icon}
              </span>
              <div>
                <p className="text-sm font-semibold leading-snug text-brand-800">{fact.value}</p>
                <p className="mt-0.5 text-xs leading-snug text-ink-500">{fact.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export type RelatedServiceLink = {
  label: string;
  href: string;
  description?: string;
};

export function RelatedServices({ links }: { links: RelatedServiceLink[] }) {
  return (
    <section aria-label="Related services" className="border-y border-line bg-band-soft py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Keep exploring" title="Related services" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex h-full items-start justify-between gap-4 rounded-3xl border border-line bg-white/80 p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-brand-600/25 hover:bg-white hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
              >
                <span className="min-w-0">
                  <span className="block font-display text-lg leading-snug text-brand-800">
                    {link.label}
                  </span>
                  {link.description ? (
                    <span className="mt-1.5 block text-sm leading-relaxed text-ink-500">
                      {link.description}
                    </span>
                  ) : null}
                </span>
                <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-line text-brand-700 transition-colors duration-200 group-hover:bg-brand-700 group-hover:text-cream-50">
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
