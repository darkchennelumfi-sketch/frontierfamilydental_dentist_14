import Link from "next/link";
import { Check, MapPin, Phone } from "lucide-react";

import { aboutCopy, serviceNames } from "@/components/sections/about/content";
import { FaqAccordion, type FaqItem } from "@/components/shared/faq-accordion";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const inlineLink =
  "rounded-sm font-semibold text-brand-700 underline underline-offset-4 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2";

const faqItems: FaqItem[] = [
  {
    question: "Where is Frontier Family Dental located?",
    answer: (
      <>
        <p>{aboutCopy.officeIntro}</p>
        <address className="mt-4 flex flex-col gap-1.5 not-italic">
          <span className="inline-flex items-start gap-2">
            <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-600" />
            303 N Division St, Powell, WY 82435
          </span>
          <Link href={site.phoneHref} className={cn(inlineLink, "inline-flex items-center gap-2")}>
            <Phone aria-hidden="true" className="size-4" />
            {site.phoneDisplay}
          </Link>
        </address>
      </>
    ),
  },
  {
    question: "How do I schedule an appointment?",
    answer: (
      <>
        <p>{aboutCopy.schedule}</p>
        <p className="mt-3">
          Call{" "}
          <Link href={site.phoneHref} className={inlineLink}>
            {site.phoneDisplay}
          </Link>{" "}
          or{" "}
          <Link href="/contact" className={inlineLink}>
            schedule an appointment
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: "Do you offer same-day emergency appointments?",
    answer: (
      <>
        <p>{aboutCopy.sameDay}</p>
        <p className="mt-3">{aboutCopy.emergency}</p>
      </>
    ),
  },
  {
    question: "What services are offered?",
    answer: (
      <ul className="grid gap-2 sm:grid-cols-2">
        {serviceNames.map((name) => (
          <li key={name} className="flex items-start gap-2">
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-600" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    question: "Does Dr. Williams have implant training?",
    answer: <p>{aboutCopy.implant}</p>,
  },
  {
    question: "How much experience does the team have?",
    answer: <p>{aboutCopy.experience}</p>,
  },
  {
    question: "Is Frontier Family Dental right for my family?",
    answer: (
      <>
        <p>{aboutCopy.family}</p>
        <p className="mt-3">{aboutCopy.familyCommitment}</p>
      </>
    ),
  },
  {
    question: "Are cosmetic treatments available?",
    answer: (
      <>
        <p>{aboutCopy.cosmetic}</p>
        <p className="mt-3">{aboutCopy.cosmeticArtistry}</p>
      </>
    ),
  },
];

export function FaqList({ className }: { className?: string }) {
  return <FaqAccordion items={faqItems} defaultValue="faq-0" className={className} />;
}
