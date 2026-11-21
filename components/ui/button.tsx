import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[0.78rem] font-semibold uppercase tracking-[0.1em] transition-[transform,background-color,border-color,color,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-700 text-cream-50 shadow-card hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-soft",
        secondary: "bg-cream-200 text-brand-800 hover:-translate-y-0.5 hover:bg-cream-300",
        outline:
          "border border-brand-800/25 bg-transparent text-brand-800 hover:border-brand-700 hover:bg-brand-50",
        ghost: "text-brand-800 hover:bg-brand-50",
        dark: "bg-brand-900 text-cream-50 hover:-translate-y-0.5 hover:bg-brand-800",
        light:
          "bg-cream-50 text-brand-900 shadow-card hover:-translate-y-0.5 hover:bg-white hover:shadow-soft",
        link: "h-auto rounded-none p-0 text-brand-700 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-7 text-[0.8rem] sm:h-14 sm:px-8",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
