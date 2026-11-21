import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { site } from "@/lib/site";
import { aboutCopy } from "@/components/sections/about/content";
import { ReviewInvite } from "@/components/sections/reviews/review-invite";
import { ReviewLocation } from "@/components/sections/reviews/review-location";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Leave Us a Review",
  description: site.description,
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/reviews",
    siteName: site.name,
    title: `Leave Us a Review | ${site.name}`,
    description: site.description,
  },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Leave Us a Review"
        description={site.serviceArea}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
      >
        <Button asChild size="lg">
          <Link href="/contact">
            CONTACT US
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <ReviewInvite />
      <ReviewLocation />
      <CtaBand title="Schedule an appointment" description={aboutCopy.schedule} />
    </>
  );
}
