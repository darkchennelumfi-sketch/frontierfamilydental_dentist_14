"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({ value, prefix = "", suffix = "", duration = 1.3, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value, duration]);

  const shown = reduceMotion ? value : display;

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      <span aria-hidden="true">
        {prefix}
        {shown}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {value}
        {suffix}
      </span>
    </span>
  );
}

type StatProps = {
  value: string;
  label: string;
  icon?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function Stat({ value, label, icon, tone = "light", className }: StatProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border p-4",
        dark ? "border-white/12 bg-white/8 text-cream-50" : "border-line bg-white/75 text-brand-800",
        className,
      )}
    >
      {icon ? (
        <span
          className={cn(
            "mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl [&_svg]:size-4",
            dark ? "bg-brand-400/20 text-brand-200" : "bg-brand-50 text-brand-700",
          )}
        >
          {icon}
        </span>
      ) : null}
      <div>
        <p className="font-display text-2xl leading-none">{value}</p>
        <p className={cn("mt-1.5 text-xs leading-snug", dark ? "text-cream-100/70" : "text-ink-500")}>
          {label}
        </p>
      </div>
    </div>
  );
}
