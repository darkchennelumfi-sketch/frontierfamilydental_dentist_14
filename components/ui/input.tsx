import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-line bg-white/80 px-4 py-2 text-base text-ink-900 shadow-sm transition-colors outline-none placeholder:text-ink-500 focus-visible:border-brand-600 focus-visible:ring-2 focus-visible:ring-brand-600/25 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-600 aria-[invalid=true]:focus-visible:ring-red-600/20",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
