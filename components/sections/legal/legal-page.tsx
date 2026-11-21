import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { CtaBand } from "@/components/shared/cta-band";
import { LocationCard } from "@/components/shared/location-card";
import { PageHero } from "@/components/shared/page-hero";
import type { Crumb } from "@/components/shared/breadcrumbs";
import { site } from "@/lib/site";

export type LegalLink = {
  label: string;
  href: string;
  description: string;
};

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-3xl border border-line bg-white/80 p-7 shadow-card sm:p-9">
      <h2 className="text-2xl leading-tight text-brand-800">{title}</h2>
      <div className="mt-4 max-w-prose space-y-4 text-base leading-relaxed text-ink-700">
        {children}
      </div>
    </section>
  );
}

type LegalPageProps = {
  title: string;
  description: string;
  breadcrumbs: Crumb[];
  links: LegalLink[];
  children: ReactNode;
  ctaTitle: string;
  ctaDescription: string;
};

export function LegalPage({
  title,
  description,
  breadcrumbs,
  links,
  children,
  ctaTitle,
  ctaDescription,
}: LegalPageProps) {
  return (
    <>
      <PageHero
        eyebrow="Frontier Family Dental"
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
      />
      <section className="relative bg-cream-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <div className="space-y-5">{children}</div>
            <aside aria-label="Contact details and related pages" className="space-y-5">
              <LocationCard />
              <nav
                aria-label="Related pages"
                className="rounded-3xl border border-line bg-white/85 p-7 shadow-card"
              >
                <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-600">
                  Related pages
                </h2>
                <ul className="mt-4 space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-start justify-between gap-3 rounded-2xl border border-transparent px-3 py-2.5 transition-colors duration-200 hover:border-line hover:bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                      >
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-brand-800">
                            {link.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-ink-500">
                            {link.description}
                          </span>
                        </span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="mt-0.5 size-4 shrink-0 text-brand-700 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="rounded-3xl border border-line bg-cream-100/70 p-6">
                <p className="text-sm font-semibold text-brand-800">{site.copyright}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-500">{site.serviceArea}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <CtaBand
        title={ctaTitle}
        description={ctaDescription}
        primaryLabel="CONTACT US"
        primaryHref="/contact"
      />
    </>
  );
}
