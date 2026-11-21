import Link from "next/link";
import { Activity, ArrowRight, HeartHandshake } from "lucide-react";

import { AmbientBackground } from "@/components/shared/ambient-background";
import { ToothMark } from "@/components/shared/brand-mark";
import { IconTile } from "@/components/shared/icon-tile";
import { QuoteCard } from "@/components/shared/quote-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

const implantCareText =
  "The mouth is a very complex part of the body. Fortunately, its care can be fairly simple. Consistent brushing, flossing, and dental checkups can help to prevent small problems from becoming large concerns.";

const implantVisionText =
  'At Frontier Family Dental we want to provide an atmosphere of learning. Part of our vision statement says, "We want to be a resource for anyone seeking help, knowledge, and understanding within the scope of dentistry." Dentistry is not just about fixing problems, but also about teaching you how to prevent them from happening.';

const implantHopeText =
  "For some, years of neglect due to fear or circumstances have crippled their smile and even their ability to function. If this describes your situation don't worry - there is hope! You can get back to comfort, function, and that beautiful smile again! Thank you for choosing us as your Powell dentist!";

export function ImplantsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-cream-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Implant Dentistry" title="Implants" />
            <Reveal>
              <div className="relative mt-8 overflow-hidden rounded-[2.5rem] border border-line bg-band p-7 text-cream-50 shadow-card sm:p-8">
                <AmbientBackground variant="dark" />
                <div className="relative flex items-center gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/8 text-brand-200">
                    <ToothMark className="size-8" />
                  </span>
                  <div>
                    <p className="font-display text-xl text-cream-50">Dr. Williams</p>
                    <p className="text-[0.64rem] font-semibold tracking-[0.16em] text-brand-300 uppercase">
                      White Cap Institute
                    </p>
                  </div>
                </div>
                <p className="relative mt-6 text-sm leading-relaxed text-cream-100/78">
                  Dr. Williams has trained with the White Cap Institute, and can help with your
                  implant needs right here in Powell, Wyoming.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Button asChild size="lg" className="mt-8">
                <Link href="/contact">
                  SCHEDULE AN APPOINTMENT
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4">
            <Reveal>
              <article className="rounded-3xl border border-line bg-white/75 p-6 shadow-card backdrop-blur-sm sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <IconTile>
                    <Activity aria-hidden="true" />
                  </IconTile>
                  <span className="font-display text-sm tracking-[0.12em] text-brand-600">
                    01
                  </span>
                </div>
                <p className="mt-5 text-base leading-relaxed text-ink-700 sm:text-lg">
                  {implantCareText}
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <QuoteCard
                quote={implantVisionText}
                attribution="Our vision statement"
                variant="clay"
                className="[&_blockquote]:text-[1.05rem] [&_blockquote]:leading-relaxed sm:[&_blockquote]:text-[1.15rem]"
              />
            </Reveal>

            <Reveal delay={0.16}>
              <article className="rounded-3xl border border-line bg-white/75 p-6 shadow-card backdrop-blur-sm sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <IconTile tone="clay">
                    <HeartHandshake aria-hidden="true" />
                  </IconTile>
                  <span className="font-display text-sm tracking-[0.12em] text-brand-600">
                    03
                  </span>
                </div>
                <p className="mt-5 text-base leading-relaxed text-ink-700 sm:text-lg">
                  {implantHopeText}
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
