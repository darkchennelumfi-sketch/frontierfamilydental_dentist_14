import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { AmbientBackground, SmileArch } from "@/components/shared/ambient-background";
import { Breadcrumbs, type Crumb } from "@/components/shared/breadcrumbs";
import { Reveal } from "@/components/shared/reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  breadcrumbs: Crumb[];
  children?: ReactNode;
  aside?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  aside,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-line/70 bg-hero-mesh",
        className,
      )}
    >
      <AmbientBackground />
      <div className="relative mx-auto max-w-7xl px-5 pt-8 pb-16 sm:px-8 lg:px-10 lg:pt-10 lg:pb-24">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-10 grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            {eyebrow ? (
              <span className="inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-600">
                <span aria-hidden="true" className="h-px w-8 bg-brand-600/50" />
                {eyebrow}
              </span>
            ) : null}
            <h1 className="mt-4 max-w-3xl text-[clamp(2.5rem,5.5vw,4.6rem)] leading-[0.98] text-brand-800">
              {title}
            </h1>
            {description ? (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">{description}</p>
            ) : null}
            {children ? <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div> : null}
          </Reveal>
          <div className="relative hidden justify-end lg:flex">
            <SmileArch className="h-52 w-80 text-brand-700/15" />
            {aside ? <div className="absolute right-0 bottom-0">{aside}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
