import type { Metadata } from "next";
import { Award, CalendarClock, GraduationCap } from "lucide-react";

import { FactPanel, ProseSection } from "@/components/sections/services/detail-parts";
import { ServiceDetail } from "@/components/sections/services/service-detail";
import { QuoteCard } from "@/components/shared/quote-card";

export const metadata: Metadata = {
  title: "Restorative Dental Care",
  description:
    "Implants offer some of the best options for tooth replacement and denture stability. You can get back to comfort, function, and that beautiful smile again!",
  alternates: {
    canonical: "/services/restorative-dental-care",
  },
};

export default function RestorativeDentalCarePage() {
  return (
    <ServiceDetail
      eyebrow="Restorative Dentistry"
      title="Restorative Dental Care"
      description="You can get back to comfort, function, and that beautiful smile again!"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Restorative Dental Care" },
      ]}
      aside={
        <>
          <FactPanel
            eyebrow="Restorative care in Powell"
            title="Comfort, function, and a beautiful smile"
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
                icon: <CalendarClock aria-hidden="true" />,
                value: "Same-day",
                label: "emergency appointments",
              },
            ]}
          >
            <p>
              We also offer same-day emergency appointments because no one should have to wait when
              suffering an oral health emergency.
            </p>
            <p>
              With over 40 years of combined dental care experience, our team at Frontier Family
              Dental is the right choice as your Powell, Wyoming dentist.
            </p>
          </FactPanel>
          <QuoteCard
            quote="You can get back to comfort, function, and that beautiful smile again!"
            attribution="Frontier Family Dental"
            variant="clay"
          />
        </>
      }
      related={[
        {
          label: "Dental Implants",
          href: "/services/dental-implants",
          description: "Tooth replacement and denture stability",
        },
        {
          label: "Cosmetic Dental Care",
          href: "/services/cosmetic-dental-care",
          description: "Skill and artistry for a healthy smile",
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

      <ProseSection eyebrow="Restorative care" title="There is hope">
        <p>
          For some, years of neglect due to fear or circumstances have crippled their smile and even
          their ability to function. If this describes your situation don&apos;t worry - there is
          hope! You can get back to comfort, function, and that beautiful smile again! Thank you for
          choosing us as your Powell dentist!
        </p>
      </ProseSection>
    </ServiceDetail>
  );
}
