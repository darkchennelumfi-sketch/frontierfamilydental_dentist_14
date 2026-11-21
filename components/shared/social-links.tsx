import { Globe2 } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 8.5V6.9c0-.8.2-1.2 1.3-1.2H17V3.2c-.4-.1-1.3-.2-2.3-.2-2.4 0-4 1.5-4 4.2v1.3H8v3h2.7V21h3.8v-9.5h2.8l.4-3h-3.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

const socialIcons: Record<string, ReactNode> = {
  Google: <Globe2 aria-hidden="true" />,
  Facebook: <FacebookIcon className="size-4" />,
  Instagram: <InstagramIcon className="size-4" />,
};

type SocialLinksProps = {
  tone?: "light" | "dark";
  className?: string;
  showLabels?: boolean;
};

export function SocialLinks({ tone = "light", className, showLabels = true }: SocialLinksProps) {
  const dark = tone === "dark";

  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {site.social.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 [&_svg]:size-4",
              dark
                ? "border-white/15 bg-white/8 text-cream-100 hover:border-brand-300/40 hover:bg-white/12 hover:text-cream-50 focus-visible:ring-brand-300 focus-visible:ring-offset-brand-900"
                : "border-line bg-white/75 text-ink-700 hover:border-brand-600/25 hover:bg-white hover:text-brand-800 focus-visible:ring-offset-cream-50",
            )}
          >
            {socialIcons[item.label]}
            {showLabels ? <span>{item.label}</span> : <span className="sr-only">{item.label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
