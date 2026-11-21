import type { Metadata } from "next";
import { Award, MapPin, Quote, Sparkles } from "lucide-react";

import { FactPanel, ProseSection } from "@/components/sections/services/detail-parts";
import { ServiceDetail } from "@/components/sections/services/service-detail";
import { SmileArch } from "@/components/shared/ambient-background";

export const metadata: Metadata = {
  title: "Cosmetic Dental Care",
  description:
    "Having a healthy mouth is very important, but we can help you make it look great too! With the perfect blend of skill and artistry, we can keep your mouth healthy and beautiful.",
  alternates: {
    canonical: "/services/cosmetic-dental-care",
  },
};

export default function CosmeticDentalCarePage() {
  return (
    <ServiceDetail
      eyebrow="Cosmetic Dentistry"
      title="Cosmetic Dental Care"
      description="With the perfect blend of skill and artistry, we can keep your mouth healthy and beautiful."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Cosmetic Dental Care" },
      ]}
      aside={
        <FactPanel
          eyebrow="Cosmetic care in Powell"
          title="Skill and artistry"
          facts={[
            {
              icon: <Award aria-hidden="true" />,
              value: "Dr. Williams",
              label: "A great cosmetic dentist in Powell",
            },
            {
              icon: <Sparkles aria-hidden="true" />,
              value: "skill and artistry",
              label: "A healthy and beautiful smile",
            },
            {
              icon: <MapPin aria-hidden="true" />,
              value: "Powell, WY",
              label: "Serving the Big Horn Basin",
            },
          ]}
        >
          <p>
            If you are looking for a great cosmetic dentist in Powell, look no further than Dr.
            Williams.
          </p>
        </FactPanel>
      }
      related={[
        {
          label: "Restorative Dental Care",
          href: "/services/restorative-dental-care",
          description: "Comfort, function, and a beautiful smile",
        },
        {
          label: "Preventative Dental Care",
          href: "/services/preventative-dental-care",
          description: "Brushing, flossing, and checkups",
        },
        {
          label: "All Services",
          href: "/services",
          description: "Emergency, cosmetic, family, and implant dentistry",
        },
      ]}
      ctaTitle="Schedule an appointment"
      ctaDescription="With the perfect blend of skill and artistry, we can keep your mouth healthy and beautiful."
    >
      <ProseSection eyebrow="A healthy mouth" title="Cosmetic Dentistry">
        <p>
          Having a healthy mouth is very important, but we can help you make it look great too! If you
          are looking for a great cosmetic dentist in Powell, look no further than Dr. Williams.
        </p>
      </ProseSection>

      <section
        aria-label="Skill and artistry"
        className="relative isolate overflow-hidden rounded-3xl bg-band p-8 shadow-glow sm:p-10"
      >
        <SmileArch className="absolute -right-16 -bottom-16 h-64 w-96 text-brand-300/15" />
        <div className="relative">
          <span className="inline-flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-brand-300">
            <Quote aria-hidden="true" className="size-4" />
            Skill and artistry
          </span>
          <blockquote className="mt-5 font-display text-[clamp(1.5rem,3.4vw,2.5rem)] leading-[1.15] text-cream-50">
            With the perfect blend of skill and artistry, we can keep your mouth healthy and
            beautiful.
          </blockquote>
        </div>
      </section>
    </ServiceDetail>
  );
}
