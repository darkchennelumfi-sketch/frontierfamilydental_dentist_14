import type { Metadata } from "next";
import { Award, CalendarClock, GraduationCap, MapPin } from "lucide-react";

import { FactPanel, ProseSection } from "@/components/sections/services/detail-parts";
import { ServiceDetail } from "@/components/sections/services/service-detail";
import { QuoteCard } from "@/components/shared/quote-card";

export const metadata: Metadata = {
  title: "Dental Implants",
  description:
    "Implants offer some of the best options for tooth replacement and denture stability. Dr. Williams has trained with the White Cap Institute.",
  alternates: {
    canonical: "/services/dental-implants",
  },
};

const highlights = [
  {
    icon: <GraduationCap aria-hidden="true" />,
    value: "White Cap Institute",
    label: "Dr. Williams has trained with",
  },
  {
    icon: <Award aria-hidden="true" />,
    value: "over 40 years",
    label: "of combined dental care experience",
  },
  {
    icon: <MapPin aria-hidden="true" />,
    value: "Powell, Wyoming",
    label: "Implant care close to home",
  },
];

export default function DentalImplantsPage() {
  return (
    <ServiceDetail
      eyebrow="Implant Dentistry"
      title="Dental Implants"
      description="Implants offer some of the best options for tooth replacement and denture stability."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Dental Implants" },
      ]}
      aside={
        <>
          <FactPanel
            eyebrow="Implant care in Powell"
            title="Trained with the White Cap Institute"
            facts={[
              {
                icon: <GraduationCap aria-hidden="true" />,
                value: "White Cap Institute",
                label: "Dr. Williams has trained with",
              },
              {
                icon: <Award aria-hidden="true" />,
                value: "over 40 years",
                label: "of combined dental care experience",
              },
              {
                icon: <MapPin aria-hidden="true" />,
                value: "Powell, Wyoming",
                label: "Implant care right here at home",
              },
            ]}
          >
            <p>
              Dr. Williams has trained with the White Cap Institute, and can help with your implant
              needs right here in Powell, Wyoming.
            </p>
            <p>
              With over 40 years of combined dental care experience, our team at Frontier Family
              Dental is the right choice as your Powell, Wyoming dentist.
            </p>
          </FactPanel>
          <QuoteCard
            quote="You can get back to comfort, function, and that beautiful smile again!"
            attribution="Frontier Family Dental"
          />
        </>
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
      ctaDescription="You can get back to comfort, function, and that beautiful smile again!"
    >
      <ProseSection eyebrow="Implant Dentistry" title="Missing a tooth and self-conscious?">
        <p>
          Missing a tooth and self-conscious? Maybe you have some dentures that just don&rsquo;t stay
          put? Implants offer some of the best options for tooth replacement and denture stability.
          Dr. Williams has trained with the White Cap Institute, and can help with your implant needs
          right here in Powell, Wyoming.
        </p>
      </ProseSection>

      <ProseSection eyebrow="Hope for your smile" title="There is hope">
        <p>
          For some, years of neglect due to fear or circumstances have crippled their smile and even
          their ability to function. If this describes your situation don&apos;t worry - there is
          hope! You can get back to comfort, function, and that beautiful smile again! Thank you for
          choosing us as your Powell dentist!
        </p>
      </ProseSection>

      <section aria-label="Dental implant highlights" className="rounded-3xl border border-line bg-white/75 p-5 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.value} className="flex items-start gap-3">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 [&_svg]:size-4">
                {item.icon}
              </span>
              <div>
                <p className="text-sm font-semibold leading-snug text-brand-800">{item.value}</p>
                <p className="mt-0.5 text-xs leading-snug text-ink-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 flex items-start gap-2 border-t border-line pt-4 text-sm leading-relaxed text-ink-700">
          <CalendarClock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-600" />
          We also offer same-day emergency appointments because no one should have to wait when
          suffering an oral health emergency.
        </p>
      </section>
    </ServiceDetail>
  );
}
