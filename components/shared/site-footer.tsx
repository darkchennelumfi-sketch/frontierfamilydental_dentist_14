import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import { footerNav, site } from "@/lib/site";
import { AmbientBackground, SmileArch } from "@/components/shared/ambient-background";
import { BrandMark } from "@/components/shared/brand-mark";
import { SocialLinks } from "@/components/shared/social-links";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-band text-cream-100">
      <AmbientBackground variant="dark" />
      <SmileArch className="pointer-events-none absolute -right-24 bottom-10 h-96 w-[46rem] text-brand-300/10" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.7fr_0.9fr]">
          <div>
            <BrandMark tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-100/70">
              {site.description}
            </p>
            <h2 className="mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-300">
              Social
            </h2>
            <SocialLinks tone="dark" className="mt-3" />
          </div>

          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-300">
              Our Location
            </h2>
            <address className="mt-4 flex flex-col gap-1 text-sm not-italic leading-relaxed text-cream-100/78">
              <span className="font-semibold text-cream-50">Frontier Family Dental</span>
              <span className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-300" />
                <span>
                  303 N Division St
                  <br />
                  Powell, WY 82435
                </span>
              </span>
              <a
                href={site.phoneHref}
                className="mt-2 inline-flex items-center gap-2 font-semibold text-cream-50 transition-colors hover:text-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
              >
                <Phone aria-hidden="true" className="size-4 text-brand-300" />
                {site.phoneDisplay}
              </a>
            </address>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-200 transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
            >
              Get in touch
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </Link>
          </div>

          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-300">
              Navigation
            </h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream-100/78 transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-300">
              Contact Us
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cream-100/78">
              Same-day emergency care is always our goal!
            </p>
            <a
              href={site.phoneHref}
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cream-50 transition-colors hover:text-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
            >
              <Phone aria-hidden="true" className="size-4 text-brand-300" />
              CALL US TODAY! {site.phoneDisplay}
            </a>
            <Button asChild variant="light" size="md" className="mt-5">
              <Link href="/contact">Schedule an appointment</Link>
            </Button>
            <p className="mt-5 text-xs leading-relaxed text-cream-100/55">
              Serving Powell, WY and the rest of the Big Horn Basin
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.copyright} |{" "}
            <a
              href={site.credit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-cream-50"
            >
              {site.credit.label}
            </a>
          </p>
          <p className="text-cream-100/60">Powell, Wyoming</p>
        </div>
      </div>
    </footer>
  );
}
