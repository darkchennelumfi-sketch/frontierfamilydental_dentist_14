import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { AmbientBackground, SmileArch } from "@/components/shared/ambient-background";
import { Button } from "@/components/ui/button";

type CtaBandProps = {
  title: string;
  description?: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  showPhone?: boolean;
  className?: string;
};

export function CtaBand({
  title,
  description,
  primaryLabel = "SCHEDULE AN APPOINTMENT",
  primaryHref = "/contact",
  showPhone = true,
  className,
}: CtaBandProps) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-band py-16 sm:py-20", className)}>
      <AmbientBackground variant="dark" />
      <SmileArch className="absolute -right-16 -bottom-16 h-80 w-[36rem] text-brand-300/15" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.02] text-cream-50">{title}</h2>
          {description ? (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream-100/78">{description}</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg" variant="light">
            <Link href={primaryHref}>
              {primaryLabel}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          {showPhone ? (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cream-50/30 text-cream-50 hover:border-cream-50/60 hover:bg-white/10"
            >
              <Link href="tel:307-754-4554">
                <Phone aria-hidden="true" />
                CALL US TODAY!
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
