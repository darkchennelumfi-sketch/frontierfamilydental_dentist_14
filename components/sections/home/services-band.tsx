import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { serviceCards } from "@/lib/site";
import { AmbientBackground, SmileArch } from "@/components/shared/ambient-background";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { Button } from "@/components/ui/button";

const cards = [
  {
    ...serviceCards[0],
    index: "01",
    featured: true,
    spanClassName: "md:col-span-2 lg:col-span-2",
  },
  {
    ...serviceCards[1],
    index: "02",
    featured: false,
    spanClassName: "",
  },
  {
    ...serviceCards[2],
    index: "03",
    featured: false,
    spanClassName: "",
  },
  {
    ...serviceCards[3],
    index: "04",
    featured: false,
    spanClassName: "md:col-span-2 lg:col-span-2",
  },
] as const;

export function ServicesBand() {
  return (
    <section
      id="services"
      className="relative isolate scroll-mt-24 overflow-hidden bg-band py-20 sm:py-24 lg:py-28"
    >
      <AmbientBackground variant="dark" />
      <SmileArch className="pointer-events-none absolute -right-28 top-16 h-96 w-[46rem] text-brand-300/10" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading tone="dark" eyebrow="What we do" title="Our Services" />
          <Reveal className="shrink-0">
            <Button
              asChild
              variant="outline"
              size="md"
              className="border-cream-50/30 text-cream-50 hover:border-cream-50/60 hover:bg-white/10"
            >
              <Link href="/services">
                VIEW ALL SERVICES
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {cards.map((card) => (
            <StaggerItem key={card.title} className={`h-full ${card.spanClassName}`}>
              <ServiceCard
                index={card.index}
                title={card.title}
                body={card.body}
                href={card.href}
                cta={card.cta}
                icon={card.icon}
                tone="dark"
                featured={card.featured}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
