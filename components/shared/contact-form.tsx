"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { contactDefaults, contactSchema, type ContactValues } from "@/lib/contact-schema";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type ContactFormProps = {
  idPrefix?: string;
  className?: string;
};

export function ContactForm({ idPrefix = "contact", className }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactDefaults,
    mode: "onTouched",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(values: ContactValues) {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      reset(contactDefaults);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-start justify-center rounded-3xl border border-brand-600/20 bg-white/85 p-7 shadow-card"
      >
        <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
          <CheckCircle2 aria-hidden="true" className="size-6" />
        </span>
        <h3 className="mt-5 text-2xl text-brand-800">Thank you!</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-700">
          Your message has been received. For immediate assistance, call{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-600"
          >
            {site.phoneDisplay}
          </a>
          .
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={className}
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${idPrefix}-name`}>Name</Label>
          <Input
            id={`${idPrefix}-name`}
            type="text"
            placeholder="Name"
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${idPrefix}-name-error` : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id={`${idPrefix}-name-error`} className="text-xs font-medium text-red-700">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor={`${idPrefix}-email`}>Email</Label>
          <Input
            id={`${idPrefix}-email`}
            type="email"
            placeholder="Email"
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
            {...register("email")}
          />
          {errors.email ? (
            <p id={`${idPrefix}-email-error`} className="text-xs font-medium text-red-700">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor={`${idPrefix}-phone`}>Phone</Label>
          <Input
            id={`${idPrefix}-phone`}
            type="tel"
            placeholder="(999) 999-9999"
            autoComplete="tel"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? `${idPrefix}-phone-error` : undefined}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id={`${idPrefix}-phone-error`} className="text-xs font-medium text-red-700">
              {errors.phone.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor={`${idPrefix}-comments`}>Comments</Label>
          <Textarea
            id={`${idPrefix}-comments`}
            placeholder="Comments"
            aria-invalid={errors.comments ? true : undefined}
            aria-describedby={errors.comments ? `${idPrefix}-comments-error` : undefined}
            {...register("comments")}
          />
          {errors.comments ? (
            <p id={`${idPrefix}-comments-error`} className="text-xs font-medium text-red-700">
              {errors.comments.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${idPrefix}-validation-comments`}>Comments</label>
        <input
          id={`${idPrefix}-validation-comments`}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("validationComments")}
        />
        <p>This field is for validation purposes and should be left unchanged.</p>
      </div>

      {status === "error" ? (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-2xl border border-red-700/20 bg-red-50 p-4 text-sm text-red-800"
        >
          <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          <p>
            We couldn&apos;t send your message right now. Please call{" "}
            <a href={site.phoneHref} className="font-semibold underline underline-offset-4">
              {site.phoneDisplay}
            </a>{" "}
            for immediate assistance.
          </p>
        </div>
      ) : null}

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 aria-hidden="true" className="animate-spin" />
        ) : (
          <Send aria-hidden="true" />
        )}
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>
    </form>
  );
}
