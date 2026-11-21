"use client";

import type { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
  defaultValue?: string;
};

export function FaqAccordion({ items, className, defaultValue }: FaqAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultValue}
      className={cn("w-full", className)}
    >
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`faq-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
