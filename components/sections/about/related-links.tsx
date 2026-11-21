import Link from "next/link";
import { ArrowRight, CircleQuestionMark, Info, Mail, Stethoscope, type LucideIcon } from "lucide-react";

import { IconTile } from "@/components/shared/icon-tile";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

export type RelatedLink = {
  label: string;
  href: string;
};

const iconByHref: Record<string, LucideIcon> = {
  "/about": Info,
  "/about/faq": CircleQuestionMark,
  "/services": Stethoscope,
  "/contact": Mail,
};

type RelatedLinksProps = {
  links: RelatedLink[];
  eyebrow?: string;
  title?: string;
  className?: string;
};

export function RelatedLinks({
  links,
  eyebrow = "Keep Exploring",
  title = "Related Links",
  className,
}: RelatedLinksProps) {
  return (
    <section className={cn("bg-cream-50 py-16 sm:py-20", className)}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => {
            const Icon = iconByHref[link.href] ?? Info;
            return (
              <StaggerItem key={link.href} className="h-full">
                <Link
                  href={link.href}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white/80 p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-600/25 hover:bg-white hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
                >
                  <IconTile>
                    <Icon aria-hidden="true" />
                  </IconTile>
                  <span className="min-w-0 flex-1 font-display text-lg leading-snug text-brand-800">
                    {link.label}
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 shrink-0 text-brand-600 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
