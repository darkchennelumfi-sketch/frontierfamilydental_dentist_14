import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  as?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
  titleClassName,
  as: Heading = "h2",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto flex flex-col items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em]",
            dark ? "text-brand-300" : "text-brand-600",
          )}
        >
          <span
            aria-hidden="true"
            className={cn("h-px w-8", dark ? "bg-brand-300/50" : "bg-brand-600/50")}
          />
          {eyebrow}
        </span>
      ) : null}
      <Heading
        className={cn(
          "mt-4 text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.02]",
          dark ? "text-cream-50" : "text-brand-800",
          titleClassName,
        )}
      >
        {title}
      </Heading>
      {description ? (
        <div
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
            dark ? "text-cream-100/78" : "text-ink-700",
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
