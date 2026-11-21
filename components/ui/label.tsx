import * as React from "react";

import { cn } from "@/lib/utils";

const Label = React.forwardRef<HTMLLabelElement, React.ComponentProps<"label">>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink-700",
          className,
        )}
        {...props}
      />
    );
  },
);
Label.displayName = "Label";

export { Label };
