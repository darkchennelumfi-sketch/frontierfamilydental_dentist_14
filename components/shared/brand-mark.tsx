import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  tone?: "dark" | "light";
  showWordmark?: boolean;
  href?: string;
};

export function ToothMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 5.5c-4.9 0-8.8 3.4-8.8 8.2 0 3.1 1.3 5.6 2.2 8.5.7 2.3 1 4.9 1.7 7 .5 1.6 1.2 3.3 2.5 3.3 1.7 0 1.4-4 2.4-4s.7 4 2.4 4c1.3 0 2-1.7 2.5-3.3.7-2.1 1-4.7 1.7-7 .9-2.9 2.2-5.4 2.2-8.5 0-4.8-3.9-8.2-8.8-8.2Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M30.5 18.5c3.2-1.1 5.1-3.7 5.4-7.3-3.4.2-5.9 1.9-7.1 4.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrandMark({
  className,
  tone = "dark",
  showWordmark = true,
  href = "/",
}: BrandMarkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-4 focus-visible:ring-offset-cream-50",
        className,
      )}
    >
      <span
        className={cn(
          "relative grid size-11 shrink-0 place-items-center rounded-2xl border shadow-sm transition-transform duration-300 group-hover:-rotate-3",
          tone === "dark"
            ? "border-brand-800/15 bg-brand-800 text-cream-50"
            : "border-white/25 bg-cream-50 text-brand-800",
        )}
      >
        <ToothMark className="size-7" />
        <span
          aria-hidden="true"
          className={cn(
            "absolute -right-1 -bottom-1 size-3 rounded-full border-2",
            tone === "dark"
              ? "border-cream-50 bg-brand-400"
              : "border-brand-900 bg-brand-300",
          )}
        />
      </span>
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.35rem] font-semibold tracking-[-0.03em]",
              tone === "dark" ? "text-brand-800" : "text-cream-50",
            )}
          >
            Frontier
          </span>
          <span
            className={cn(
              "mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em]",
              tone === "dark" ? "text-ink-500" : "text-cream-200/80",
            )}
          >
            Family Dental
          </span>
        </span>
      ) : null}
    </Link>
  );
}
