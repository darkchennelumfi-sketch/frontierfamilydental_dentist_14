import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em]",
  {
    variants: {
      variant: {
        default: "bg-brand-50 text-brand-700",
        outline: "border border-brand-800/20 bg-transparent text-brand-800",
        dark: "border border-white/15 bg-white/10 text-cream-100 backdrop-blur-md",
        clay: "bg-clay-100 text-clay-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
