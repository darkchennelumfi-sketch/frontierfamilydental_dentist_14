import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";

import { LegalPage, LegalSection } from "@/components/sections/legal/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "The contact form on this website collects Name, Email, Phone, and Comments. The information is used to respond to the inquiry.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const contactFields = ["Name", "Email", "Phone", "Comments"];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="The contact form collects Name, Email, Phone, and Comments. This information is used to respond to the inquiry."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      links={[
        {
          label: "Terms of Use",
          href: "/terms-of-use",
          description: "Read the Terms of Use.",
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
      ctaTitle="Questions about this policy?"
      ctaDescription="Contact Frontier Family Dental at 307.754.4554."
    >
      <LegalSection title="Information collected through the contact form">
        <p>The contact form on this website collects Name, Email, Phone, and Comments.</p>
        <p>The information is used to respond to the inquiry.</p>
        <ul
          aria-label="Contact form fields"
          className="grid gap-2 pt-1 sm:grid-cols-2"
        >
          {contactFields.map((field) => (
            <li
              key={field}
              className="rounded-2xl border border-line bg-cream-50 px-4 py-3 text-sm font-semibold text-brand-800"
            >
              {field}
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="Practice contact details">
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

      <LegalSection title="Related pages">
        <p>
          Read the{" "}
          <Link
            href="/terms-of-use"
            className="font-semibold text-brand-800 underline-offset-4 transition-colors hover:text-brand-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            Terms of Use
          </Link>
          , visit the{" "}
          <Link
            href="/contact"
            className="font-semibold text-brand-800 underline-offset-4 transition-colors hover:text-brand-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            contact page
          </Link>
          , or browse the{" "}
          <Link
            href="/sitemap"
            className="font-semibold text-brand-800 underline-offset-4 transition-colors hover:text-brand-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
          >
            Sitemap
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
