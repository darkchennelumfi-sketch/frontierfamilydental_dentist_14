import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-32 w-full rounded-xl border border-line bg-white/80 px-4 py-3 text-base text-ink-900 shadow-sm transition-colors outline-none placeholder:text-ink-500 focus-visible:border-brand-600 focus-visible:ring-2 focus-visible:ring-brand-600/25 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-red-600 aria-[invalid=true]:focus-visible:ring-red-600/20",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
