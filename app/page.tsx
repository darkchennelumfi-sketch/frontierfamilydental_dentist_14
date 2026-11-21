import type { Metadata } from "next";

import { site } from "@/lib/site";
import { CommittedBand } from "@/components/sections/home/committed-band";
import { HomeContactSection } from "@/components/sections/home/home-contact-section";
import { HomeHero } from "@/components/sections/home/home-hero";
import { ImplantsSection } from "@/components/sections/home/implants-section";
import { OfficeSection } from "@/components/sections/home/office-section";
import { ServiceExplorer } from "@/components/sections/home/service-explorer";
import { ServicesBand } from "@/components/sections/home/services-band";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServiceExplorer />
      <ServicesBand />
      <CommittedBand />
      <OfficeSection />
      <ImplantsSection />
      <HomeContactSection />
    </>
  );
}
