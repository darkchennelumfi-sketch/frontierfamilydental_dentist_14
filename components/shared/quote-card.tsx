import { Quote } from "lucide-react";

import { cn } from "@/lib/utils";

type QuoteCardProps = {
  quote: string;
  attribution?: string;
  variant?: "light" | "dark" | "clay";
  className?: string;
};

export function QuoteCard({ quote, attribution, variant = "light", className }: QuoteCardProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-3xl p-8 shadow-card",
        variant === "light" && "border border-line bg-white/85 text-brand-800",
        variant === "dark" && "glass-dark text-cream-50",
        variant === "clay" && "border border-clay-500/15 bg-clay-100 text-clay-600",
        className,
      )}
    >
      <Quote aria-hidden="true" className="size-8 opacity-35" />
      <blockquote className="mt-5 font-display text-[clamp(1.25rem,2.2vw,1.7rem)] leading-snug">
        {quote}
      </blockquote>
      {attribution ? (
        <figcaption
          className={cn(
            "mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em]",
            variant === "dark"
              ? "text-brand-300"
              : variant === "clay"
                ? "text-clay-600"
                : "text-ink-500",
          )}
        >
          {attribution}
        </figcaption>
      ) : null}
      <span
        aria-hidden="true"
        className={cn(
          "absolute -right-10 -bottom-10 size-32 rounded-full blur-2xl",
          variant === "dark" ? "bg-brand-400/15" : "bg-brand-300/20",
        )}
      />
    </figure>
  );
}
