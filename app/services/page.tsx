import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarClock,
  GraduationCap,
  MapPin,
  Phone,
} from "lucide-react";

import { AmbientBackground, SmileArch } from "@/components/shared/ambient-background";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { Stat } from "@/components/shared/stat";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { serviceCards, serviceLinks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description: site.description,
  alternates: {
    canonical: "/services",
  },
};

const whyStats = [
  {
    value: "over 40 years",
    label: "of combined dental care experience",
    icon: <Award aria-hidden="true" />,
  },
  {
    value: "Same-day",
    label: "emergency appointments",
    icon: <CalendarClock aria-hidden="true" />,
  },
  {
    value: "White Cap Institute",
    label: "Dr. Williams has trained with",
    icon: <GraduationCap aria-hidden="true" />,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Exceptional Care. Modern Dentistry. Timeless Values."
        title="Our Services"
        description={site.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        aside={
          <div className="w-72 rounded-2xl border border-line bg-white/80 p-5 shadow-card backdrop-blur-md">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-brand-600">
              Service details
            </p>
            <ul className="mt-3 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href} className="flex items-center gap-2 text-sm text-ink-700">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-400" />
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <Button asChild size="lg">
          <Link href="/contact">
            SCHEDULE AN APPOINTMENT
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href={site.phoneHref}>
            <Phone aria-hidden="true" />
            CALL US TODAY!
          </Link>
        </Button>
      </PageHero>

      <section className="relative bg-cream-50 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title="Emergency, cosmetic, family, and implant dentistry"
              description="All of us at Frontier Family Dental are committed to you and will treat you like you are a member of our family - because you are!"
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {serviceCards.map((card, index) => (
              <StaggerItem
                key={card.title}
                className={index === 0 ? "md:col-span-2" : undefined}
              >
                <ServiceCard
                  index={`0${index + 1}`}
                  title={card.title}
                  body={card.body}
                  href={card.href}
                  cta={card.cta}
                  icon={card.icon}
                  tone="light"
                  featured={index === 0}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section aria-label="Explore all services" className="border-y border-line bg-band-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Our Services"
                title="Explore all services"
                description="We understand that you have a lot of choices when searching for a family dentist in Powell."
              />
              <div className="mt-8 rounded-3xl border border-line bg-white/85 p-7 shadow-card">
                <Badge variant="clay">
                  <MapPin aria-hidden="true" className="size-3.5" />
                  Powell, Wyoming
                </Badge>
                <h3 className="mt-4 font-display text-2xl leading-tight text-brand-800">
                  Frontier Family Dental
                </h3>
                <address className="mt-3 flex flex-col gap-1 text-sm not-italic leading-relaxed text-ink-700">
                  <span>303 N Division St</span>
                  <span>Powell, WY 82435</span>
                  <Link
                    href={site.phoneHref}
                    className="mt-1 inline-flex items-center gap-2 font-semibold text-brand-800 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                  >
                    <Phone aria-hidden="true" className="size-4" />
                    {site.phoneDisplay}
                  </Link>
                </address>
                <p className="mt-4 text-xs leading-relaxed text-ink-500">{site.serviceArea}</p>
                <Button asChild className="mt-6 w-full">
                  <Link href="/contact">
                    SCHEDULE AN APPOINTMENT
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
            <Reveal delay={0.08}>
              <ul className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white/85 shadow-card">
                {serviceLinks.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-4 p-5 transition-colors duration-200 hover:bg-brand-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-inset sm:gap-5 sm:p-6"
                    >
                      <span className="font-display text-sm text-brand-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-xl leading-snug text-brand-800">
                          {link.label}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-ink-500">
                          {link.description}
                        </span>
                      </span>
                      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-brand-700 transition-all duration-200 group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:text-cream-50">
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-band py-20 sm:py-24 lg:py-28">
        <AmbientBackground variant="dark" />
        <SmileArch className="absolute -right-24 -bottom-24 h-96 w-[42rem] text-brand-300/10" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:px-10">
          <div>
            <SectionHeading
              eyebrow="Why choose Frontier Family Dental"
              title="Committed to Your Oral Health"
              tone="dark"
            />
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-cream-100/78 sm:text-lg">
                We understand that you have a lot of choices when searching for a family dentist in
                Powell. That&apos;s why our team at Frontier Family Dental goes the extra mile to
                ensure that we meet and exceed our patients&apos; needs and expectations. Our office
                works with your busy schedule to find appointment times that conveniently fit into
                your busy day. We also offer same-day emergency appointments because no one should
                have to wait when suffering an oral health emergency. To ensure our patients receive
                only the most advanced dental care possible, Dr. Williams remains committed to
                continuing his education in the latest tools, techniques, and technology dentistry
                has to offer. With over 40 years of combined dental care experience, our team at
                Frontier Family Dental is the right choice as your Powell, Wyoming dentist.
              </p>
            </Reveal>
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {whyStats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <Stat
                    value={stat.value}
                    label={stat.label}
                    icon={stat.icon}
                    tone="dark"
                    className="h-full"
                  />
                </StaggerItem>
              ))}
            </Stagger>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="light">
                <Link href="/about">
                  LEARN MORE ABOUT US
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream-50/30 text-cream-50 hover:border-cream-50/60 hover:bg-white/10"
              >
                <Link href="/reviews">LEAVE US A REVIEW</Link>
              </Button>
            </div>
          </div>
          <Reveal delay={0.12}>
            <div className="glass-dark rounded-3xl p-7 text-cream-100 shadow-glow">
              <span className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-brand-300">
                At a glance
              </span>
              <h3 className="mt-3 font-display text-2xl leading-tight text-cream-50">
                Trained with the White Cap Institute
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-100/78">
                Dr. Williams has trained with the White Cap Institute, and can help with your
                implant needs right here in Powell, Wyoming.
              </p>
              <div className="mt-6 space-y-3 border-t border-white/12 pt-6">
                <p className="flex items-start gap-2 text-sm leading-relaxed text-cream-100/78">
                  <CalendarClock
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-brand-300"
                  />
                  We also offer same-day emergency appointments because no one should have to wait
                  when suffering an oral health emergency.
                </p>
                <p className="flex items-start gap-2 text-sm leading-relaxed text-cream-100/78">
                  <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-300" />
                  303 N Division St, Powell, WY 82435
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Schedule an appointment"
        description="Same-day emergency care is always our goal!"
      />
    </>
  );
}
