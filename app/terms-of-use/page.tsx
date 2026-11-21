import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";

import { LegalPage, LegalSection } from "@/components/sections/legal/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Website information and contact details for Frontier Family Dental in Powell, Wyoming.",
  alternates: {
    canonical: "/terms-of-use",
  },
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      description="This website is provided by Frontier Family Dental. Questions about these terms can be directed to the practice."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      links={[
        {
          label: "Privacy Policy",
          href: "/privacy-policy",
          description: "Read the Privacy Policy.",
        },
        {
          label: "Contact",
          href: "/contact",
          description: "Send a message to Frontier Family Dental.",
        },
        {
          label: "Sitemap",
          href: "/sitemap",
          description: "Browse every page on this website.",
        },
      ]}
      ctaTitle="Questions about these terms?"
      ctaDescription="Contact Frontier Family Dental at 307.754.4554."
    >
      <LegalSection title="Website information">
        <p>This website is provided by Frontier Family Dental.</p>
        <p>
          Frontier Family Dental
          <br />
          303 N Division St
          <br />
          Powell, WY 82435
        </p>
        <p>
          Phone:{" "}
          <Link
            href={site.phoneHref}
            className="inline-flex items-center gap-2 font-semibold text-brand-800 underline-offset-4 transition-colors hover:text-brand-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            <Phone aria-hidden="true" className="size-4" />
            {site.phoneDisplay}
          </Link>
        </p>
      </LegalSection>

      <LegalSection title="Questions about these terms">
        <p>
          For questions about these terms, contact the practice at the phone number or address above.
        </p>
        <p>
          You can also visit the{" "}
          <Link
            href="/contact"
            className="font-semibold text-brand-800 underline-offset-4 transition-colors hover:text-brand-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            contact page
          </Link>{" "}
          to send a message.
        </p>
        <p>
          Read the{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-brand-800 underline-offset-4 transition-colors hover:text-brand-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            Privacy Policy
          </Link>{" "}
          or browse the{" "}
          <Link
            href="/sitemap"
            className="font-semibold text-brand-800 underline-offset-4 transition-colors hover:text-brand-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            Sitemap
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Copyright">
        <p>{site.copyright}</p>
      </LegalSection>
    </LegalPage>
  );
}
