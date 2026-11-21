import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  FileText,
  Home,
  LayoutGrid,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

import { serviceLinks, site } from "@/lib/site";
import { AmbientBackground, SmileArch } from "@/components/shared/ambient-background";
import { IconTile } from "@/components/shared/icon-tile";
import { LocationCard } from "@/components/shared/location-card";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

type SitemapLink = {
  label: string;
  href: string;
};

type SitemapGroup = {
  title: string;
  icon: LucideIcon;
  links: SitemapLink[];
};

const groups: SitemapGroup[] = [
  {
    title: "Main pages",
    icon: Home,
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Leave Us a Review", href: "/reviews" },
      { label: "Blog", href: "/news" },
      { label: "Contact", href: "/contact" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "About",
    icon: BookOpen,
    links: [{ label: "FAQ", href: "/about/faq" }],
  },
  {
    title: "Services",
    icon: Stethoscope,
    links: [
      { label: "All services", href: "/services" },
      ...serviceLinks.map((service) => ({ label: service.label, href: service.href })),
    ],
  },
  {
    title: "Legal",
    icon: FileText,
    links: [
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

function LinkList({ links }: { links: SitemapLink[] }) {
  return (
    <ul className="mt-5 flex flex-col divide-y divide-line/70">
      {links.map((link) => (
        <li key={`${link.href}-${link.label}`}>
          <Link
            href={link.href}
            className="group flex items-center justify-between gap-3 rounded-lg py-3 text-sm font-medium text-ink-700 transition-colors hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
          >
            <span>{link.label}</span>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 shrink-0 text-brand-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SitemapIndex() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-cream-50">
        <AmbientBackground variant="cream" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl bg-brand-50 text-brand-700">
              <LayoutGrid aria-hidden="true" className="size-5" />
            </span>
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-ink-500 uppercase">
              Every page on this website
            </p>
          </div>

          <Stagger className="mt-8 grid gap-4 md:grid-cols-2 lg:gap-5">
            {groups.map((group) => {
              const Icon = group.icon;
              return (
                <StaggerItem key={group.title} className="h-full">
                  <section
                    aria-labelledby={`sitemap-group-${group.title.replaceAll(" ", "-").toLowerCase()}`}
                    className="h-full rounded-3xl border border-line bg-white/80 p-6 shadow-card backdrop-blur-sm sm:p-7"
                  >
                    <div className="flex items-center gap-3">
                      <IconTile>
                        <Icon aria-hidden="true" />
                      </IconTile>
                      <div>
                        <h2
                          id={`sitemap-group-${group.title.replaceAll(" ", "-").toLowerCase()}`}
                          className="text-xl text-brand-800"
                        >
                          {group.title}
                        </h2>
                        <p className="text-[0.64rem] font-semibold tracking-[0.16em] text-ink-500 uppercase">
                          {group.links.length} {group.links.length === 1 ? "page" : "pages"}
                        </p>
                      </div>
                    </div>
                    <LinkList links={group.links} />
                  </section>
                </StaggerItem>
              );
            })}
          </Stagger>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <Reveal>
              <LocationCard className="h-full" />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="relative isolate flex h-full flex-col overflow-hidden rounded-3xl bg-band p-7 text-cream-100 shadow-card sm:p-8">
                <AmbientBackground variant="dark" />
                <SmileArch className="pointer-events-none absolute -right-14 -bottom-10 h-52 w-80 text-brand-300/10" />
                <div className="relative">
                  <p className="text-[0.64rem] font-semibold tracking-[0.18em] text-brand-300 uppercase">
                    Site tools
                  </p>
                  <h2 className="mt-3 text-2xl text-cream-50">XML sitemap</h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-cream-100/75">
                    A machine-readable index of every page, generated at{" "}
                    <span className="font-semibold text-cream-50">/sitemap.xml</span>.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild variant="light" size="sm">
                      <Link
                        href="/sitemap.xml"
                        prefetch={false}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink aria-hidden="true" />
                        Open sitemap.xml
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-cream-50/30 text-cream-50 hover:border-cream-50/60 hover:bg-white/10"
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                  <p className="mt-6 flex items-center gap-2 text-xs text-cream-100/55">
                    {site.phoneDisplay}
                    <span aria-hidden="true" className="size-1 rounded-full bg-brand-300/60" />
                    {site.addressLine}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
