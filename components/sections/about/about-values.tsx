import { HeartHandshake, Landmark, Microscope, type LucideIcon } from "lucide-react";

import { aboutValues } from "@/components/sections/about/content";
import { AmbientBackground, SmileArch } from "@/components/shared/ambient-background";
import { IconTile } from "@/components/shared/icon-tile";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const valueIcons: Record<(typeof aboutValues)[number]["title"], LucideIcon> = {
  "Exceptional Care": HeartHandshake,
  "Modern Dentistry": Microscope,
  "Timeless Values": Landmark,
};

export function AboutValues() {
  return (
    <section className="relative isolate overflow-hidden bg-band py-20 sm:py-24 lg:py-28">
      <AmbientBackground variant="dark" />
      <SmileArch className="pointer-events-none absolute -right-20 -bottom-24 h-96 w-[46rem] text-brand-300/10" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Our Promise"
          title="Our Values"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-3">
          {aboutValues.map((value) => {
            const Icon = valueIcons[value.title];
            return (
              <StaggerItem key={value.title} className="h-full">
                <article className="glass-dark group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-300/35 hover:bg-white/12 sm:p-8">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-4 -bottom-8 font-display text-[7rem] leading-none text-cream-50/5"
                  >
                    {value.index}
                  </span>
                  <IconTile tone="dark">
                    <Icon aria-hidden="true" />
                  </IconTile>
                  <h3 className="relative mt-7 text-[clamp(1.5rem,2.2vw,1.85rem)] leading-tight text-cream-50">
                    {value.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-6 h-px w-12 bg-gradient-to-r from-brand-300/70 to-transparent"
                  />
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
