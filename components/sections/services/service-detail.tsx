import type { ReactNode } from "react";

import type { Crumb } from "@/components/shared/breadcrumbs";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { RelatedServices, type RelatedServiceLink } from "./detail-parts";

type ServiceDetailProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  breadcrumbs: Crumb[];
  children: ReactNode;
  aside: ReactNode;
  related: RelatedServiceLink[];
  ctaTitle: string;
  ctaDescription: string;
};

export function ServiceDetail({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
  aside,
  related,
  ctaTitle,
  ctaDescription,
}: ServiceDetailProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
      />
      <section className="relative bg-cream-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-16">
            <div className="space-y-14 sm:space-y-16">{children}</div>
            <aside aria-label="Key facts" className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              {aside}
            </aside>
          </div>
        </div>
      </section>
      <RelatedServices links={related} />
      <CtaBand title={ctaTitle} description={ctaDescription} />
    </>
  );
}
