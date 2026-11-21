import Link from "next/link";
import { ArrowUpRight, LayoutGrid } from "lucide-react";

import { serviceLinks } from "@/lib/site";

export function ServiceExplorer() {
  return (
    <section aria-labelledby="service-explorer-title" className="border-b border-line/70 bg-cream-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-10 lg:py-8">
        <div className="flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
            <LayoutGrid aria-hidden="true" className="size-4" />
          </span>
          <p
            id="service-explorer-title"
            className="text-[0.68rem] font-semibold tracking-[0.2em] text-ink-500 uppercase"
          >
            Explore our services
          </p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {serviceLinks.map((service) => (
            <li key={service.href} className="w-full sm:w-auto">
              <Link
                href={service.href}
                className="group flex w-full items-center justify-between gap-4 rounded-full border border-line bg-white/70 px-4 py-2.5 text-sm font-medium text-ink-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-600/30 hover:bg-white hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 sm:w-auto sm:justify-start"
              >
                {service.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-3.5 shrink-0 text-brand-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
