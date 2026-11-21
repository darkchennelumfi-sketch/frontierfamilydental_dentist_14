import type { Metadata } from "next";
import {
  Award,
  CalendarCheck,
  CalendarClock,
  Droplets,
  MapPin,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { FactPanel, ProseSection } from "@/components/sections/services/detail-parts";
import { ServiceDetail } from "@/components/sections/services/service-detail";
import { IconTile } from "@/components/shared/icon-tile";
import { QuoteCard } from "@/components/shared/quote-card";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "Preventative Dental Care",
  description:
    "Consistent brushing, flossing, and dental checkups can help to prevent small problems from becoming large concerns.",
  alternates: {
    canonical: "/services/preventative-dental-care",
  },
};

const routine: { label: string; icon: LucideIcon }[] = [
  { label: "Brush", icon: Sparkles },
  { label: "Floss", icon: Droplets },
  { label: "Checkups", icon: CalendarCheck },
];

export default function PreventativeDentalCarePage() {
  return (
    <ServiceDetail
      eyebrow="Preventative Dentistry"
      title="Preventative Dental Care"
      description="Consistent brushing, flossing, and dental checkups can help to prevent small problems from becoming large concerns."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Preventative Dental Care" },
      ]}
      aside={
        <FactPanel
          eyebrow="When you need us"
          title="Same-day emergency appointments"
          facts={[
            {
              icon: <CalendarClock aria-hidden="true" />,
              value: "Same-day",
              label: "emergency appointments",
            },
            {
              icon: <Award aria-hidden="true" />,
              value: "over 40 years",
              label: "of combined dental care experience",
            },
            {
              icon: <MapPin aria-hidden="true" />,
              value: "Powell, WY",
              label: "Serving the Big Horn Basin",
            },
          ]}
        >
          <p>
            We also offer same-day emergency appointments because no one should have to wait when
            suffering an oral health emergency.
          </p>
        </FactPanel>
      }
      related={[
        {
          label: "Cosmetic Dental Care",
          href: "/services/cosmetic-dental-care",
          description: "Skill and artistry for a healthy smile",
        },
        {
          label: "Restorative Dental Care",
          href: "/services/restorative-dental-care",
          description: "Comfort, function, and a beautiful smile",
        },
        {
          label: "All Services",
          href: "/services",
          description: "Emergency, cosmetic, family, and implant dentistry",
        },
      ]}
      ctaTitle="Schedule an appointment"
      ctaDescription="Dentistry is not just about fixing problems, but also about teaching you how to prevent them from happening."
    >
      <section>
        <SectionHeading
          eyebrow="Preventative Dentistry"
          title="Consistent brushing, flossing, and dental checkups"
        />
        <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-700 sm:text-lg">
          The mouth is a very complex part of the body. Fortunately, its care can be fairly simple.
          Consistent brushing, flossing, and dental checkups can help to prevent small problems from
          becoming large concerns.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {routine.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="group rounded-3xl border border-line bg-white/80 p-6 shadow-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:border-brand-600/25 hover:shadow-card"
            >
              <IconTile>
                <Icon aria-hidden="true" />
              </IconTile>
              <h3 className="mt-5 font-display text-xl leading-tight text-brand-800">{label}</h3>
            </li>
          ))}
        </ul>
      </section>

      <ProseSection eyebrow="Part of our vision statement" title="An atmosphere of learning">
        <p>
          At Frontier Family Dental we want to provide an atmosphere of learning. Part of our vision
          statement says, &quot;We want to be a resource for anyone seeking help, knowledge, and
          understanding within the scope of dentistry.&quot; Dentistry is not just about fixing
          problems, but also about teaching you how to prevent them from happening.
        </p>
      </ProseSection>

      <QuoteCard
        quote="We want to be a resource for anyone seeking help, knowledge, and understanding within the scope of dentistry."
        attribution="Our vision statement"
        variant="light"
      />
    </ServiceDetail>
  );
}
