import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-ink-500">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight aria-hidden="true" className="size-3.5 text-ink-500/50" />
              ) : null}
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className="rounded-sm transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className="text-brand-800">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
