import { MapPin, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { SocialLinks } from "@/components/shared/social-links";

type LocationCardProps = {
  tone?: "light" | "dark";
  className?: string;
  showSocial?: boolean;
};

export function LocationCard({ tone = "light", className, showSocial = true }: LocationCardProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "rounded-3xl border p-7 shadow-card",
        dark ? "glass-dark text-cream-100" : "border-line bg-white/85",
        className,
      )}
    >
      <h2
        className={cn(
          "text-[0.7rem] font-semibold uppercase tracking-[0.18em]",
          dark ? "text-brand-300" : "text-brand-600",
        )}
      >
        Our Location
      </h2>
      <p className={cn("mt-4 font-display text-2xl", dark ? "text-cream-50" : "text-brand-800")}>
        Frontier Family Dental
      </p>
      <address
        className={cn(
          "mt-3 flex flex-col gap-2 text-sm not-italic leading-relaxed",
          dark ? "text-cream-100/78" : "text-ink-700",
        )}
      >
        <span className="flex items-start gap-2">
          <MapPin
            aria-hidden="true"
            className={cn("mt-0.5 size-4 shrink-0", dark ? "text-brand-300" : "text-brand-600")}
          />
          <span>
            303 N Division St
            <br />
            Powell, WY 82435
          </span>
        </span>
        <a
          href={site.phoneHref}
          className={cn(
            "inline-flex items-center gap-2 font-semibold transition-colors",
            dark
              ? "text-cream-50 hover:text-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
              : "text-brand-800 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
          )}
        >
          <Phone aria-hidden="true" className="size-4" />
          {site.phoneDisplay}
        </a>
      </address>
      <p
        className={cn(
          "mt-4 text-xs leading-relaxed",
          dark ? "text-cream-100/60" : "text-ink-500",
        )}
      >
        {site.serviceArea}
      </p>
      {showSocial ? (
        <SocialLinks tone={tone} className="mt-5" showLabels={false} />
      ) : null}
    </div>
  );
}
