import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type IconTileProps = {
  children: ReactNode;
  tone?: "light" | "dark" | "clay";
  className?: string;
};

export function IconTile({ children, tone = "light", className }: IconTileProps) {
  return (
    <span
      className={cn(
        "grid size-12 shrink-0 place-items-center rounded-2xl border shadow-sm [&_svg]:size-5",
        tone === "light" && "border-brand-800/10 bg-brand-50 text-brand-700",
        tone === "dark" && "border-white/15 bg-white/10 text-brand-200 backdrop-blur-md",
        tone === "clay" && "border-clay-500/15 bg-clay-100 text-clay-600",
        className,
      )}
    >
      {children}
    </span>
  );
}
