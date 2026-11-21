import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

import { BrandMark } from "@/components/shared/brand-mark";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-mesh">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
        <BrandMark />
        <p className="mt-10 font-script text-2xl text-clay-500">404</p>
        <h1 className="mt-3 text-[clamp(2.5rem,5vw,4rem)] text-brand-800">Page not found</h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ink-700">
          The page you are looking for is not here. Return home or contact our Powell office and we
          will point you in the right direction.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              <Home aria-hidden="true" />
              Back home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              Contact us
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
