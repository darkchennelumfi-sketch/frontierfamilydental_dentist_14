import Link from "next/link";
import { ArrowRight, HeartPulse, Sparkles, Syringe, Users } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { IconTile } from "@/components/shared/icon-tile";

export type ServiceIconName = "emergency" | "cosmetic" | "family" | "implant";

const iconMap: Record<ServiceIconName, ReactNode> = {
  emergency: <HeartPulse aria-hidden="true" />,
  cosmetic: <Sparkles aria-hidden="true" />,
  family: <Users aria-hidden="true" />,
  implant: <Syringe aria-hidden="true" />,
};

type ServiceCardProps = {
  index?: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  icon: ServiceIconName;
  tone?: "light" | "dark";
  featured?: boolean;
  className?: string;
};

export function ServiceCard({
  index,
  title,
  body,
  href,
  cta,
  icon,
  tone = "dark",
  featured = false,
  className,
}: ServiceCardProps) {
  const dark = tone === "dark";

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-4 sm:p-8",
        dark
          ? "glass-dark text-cream-100 shadow-card hover:border-brand-300/35 hover:bg-white/12 hover:shadow-glow"
          : "border border-line bg-white/80 text-ink-700 shadow-card hover:border-brand-600/25 hover:bg-white",
        featured && "md:col-span-2",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute -top-16 -right-16 size-44 rounded-full blur-2xl transition-opacity duration-300 group-hover:opacity-100",
          dark ? "bg-brand-400/15 opacity-60" : "bg-brand-300/20 opacity-0",
        )}
      />
      <div className="relative flex items-center justify-between gap-4">
        <IconTile tone={dark ? "dark" : "light"}>{iconMap[icon]}</IconTile>
        {index ? (
          <span
            className={cn(
              "font-display text-sm tracking-[0.12em]",
              dark ? "text-brand-300" : "text-brand-600",
            )}
          >
            {index}
          </span>
        ) : null}
      </div>
      <h3
        className={cn(
          "mt-6 text-[1.55rem] leading-tight",
          dark ? "text-cream-50" : "text-brand-800",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-3 text-sm leading-relaxed sm:text-[0.95rem]",
          dark ? "text-cream-100/78" : "text-ink-700",
          featured && "max-w-2xl",
        )}
      >
        {body}
      </p>
      <span
        className={cn(
          "mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-colors",
          dark
            ? "text-brand-200 group-hover:text-cream-50"
            : "text-brand-700 group-hover:text-brand-600",
        )}
      >
        {cta}
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
