"use client";

import {
  Accessibility,
  Contrast,
  Eye,
  Heading,
  Keyboard,
  Link2,
  MousePointer2,
  Type,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type TextSize = "small" | "normal" | "large" | "xlarge";

type Preferences = {
  keyboard: boolean;
  motionReduced: boolean;
  contrast: boolean;
  readable: boolean;
  titles: boolean;
  links: boolean;
  textSize: TextSize;
};

const defaultPreferences: Preferences = {
  keyboard: false,
  motionReduced: false,
  contrast: false,
  readable: false,
  titles: false,
  links: false,
  textSize: "normal",
};

function applyPreferences(preferences: Preferences) {
  const root = document.documentElement;

  const flags: Array<[keyof Omit<Preferences, "textSize">, string]> = [
    ["keyboard", "keyboard"],
    ["motionReduced", "motion"],
    ["contrast", "contrast"],
    ["readable", "readable"],
    ["titles", "titles"],
    ["links", "links"],
  ];

  for (const [key, attribute] of flags) {
    if (preferences[key]) {
      root.dataset[attribute] = key === "motionReduced" ? "reduced" : "true";
    } else {
      delete root.dataset[attribute];
    }
  }

  if (preferences.textSize === "normal") {
    delete root.dataset.textSize;
  } else {
    root.dataset.textSize = preferences.textSize;
  }
}

const textSizes: TextSize[] = ["small", "normal", "large", "xlarge"];
const textSizeLabels: Record<TextSize, string> = {
  small: "Small",
  normal: "Default",
  large: "Large",
  xlarge: "Largest",
};

export function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);

  useEffect(() => {
    applyPreferences(preferences);
  }, [preferences]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function toggle(key: keyof Omit<Preferences, "textSize">) {
    setPreferences((current) => ({ ...current, [key]: !current[key] }));
  }

  function changeTextSize(direction: 1 | -1) {
    setPreferences((current) => {
      const index = textSizes.indexOf(current.textSize);
      const next = Math.min(Math.max(index + direction, 0), textSizes.length - 1);
      return { ...current, textSize: textSizes[next] ?? "normal" };
    });
  }

  const sizeIndex = textSizes.indexOf(preferences.textSize);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open ? (
        <div
          id="accessibility-toolbar-panel"
          role="region"
          aria-label="Accessibility Toolbar"
          className="w-[min(calc(100vw-2rem),21rem)] overflow-hidden rounded-3xl border border-white/60 bg-cream-50/95 shadow-soft backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-4 border-b border-line/70 bg-brand-900 px-4 py-3 text-cream-50">
            <div className="flex items-center gap-2">
              <Accessibility aria-hidden="true" className="size-5 text-brand-300" />
              <h2 className="font-display text-lg text-cream-50">Accessibility Toolbar</h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close accessibility toolbar"
              className="grid size-8 place-items-center rounded-full border border-white/15 bg-white/10 text-cream-50 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900"
            >
              <X aria-hidden="true" className="size-4" />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto p-3">
            <ul className="flex flex-col gap-1">
              <ToolbarToggle
                label="Keyboard Navigation"
                icon={<Keyboard aria-hidden="true" />}
                pressed={preferences.keyboard}
                onClick={() => toggle("keyboard")}
              />
              <ToolbarToggle
                label="Disable Animations"
                icon={<MousePointer2 aria-hidden="true" />}
                pressed={preferences.motionReduced}
                onClick={() => toggle("motionReduced")}
              />
              <ToolbarToggle
                label="Contrast"
                icon={<Contrast aria-hidden="true" />}
                pressed={preferences.contrast}
                onClick={() => toggle("contrast")}
              />
              <li className="flex items-center justify-between gap-3 rounded-xl px-3 py-2">
                <span className="flex items-center gap-2.5 text-sm font-medium text-ink-900">
                  <Type aria-hidden="true" className="size-4 text-brand-700" />
                  Text Size
                </span>
                <span className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => changeTextSize(-1)}
                    disabled={sizeIndex <= 0}
                    aria-label="Decrease Text"
                    className="grid size-8 place-items-center rounded-lg border border-line bg-white/80 text-brand-800 transition-colors hover:bg-brand-50 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                  >
                    A-
                  </button>
                  <span
                    aria-live="polite"
                    className="min-w-16 text-center text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink-500"
                  >
                    {textSizeLabels[preferences.textSize]}
                  </span>
                  <button
                    type="button"
                    onClick={() => changeTextSize(1)}
                    disabled={sizeIndex >= textSizes.length - 1}
                    aria-label="Increase Text"
                    className="grid size-8 place-items-center rounded-lg border border-line bg-white/80 text-brand-800 transition-colors hover:bg-brand-50 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                  >
                    A+
                  </button>
                </span>
              </li>
              <ToolbarToggle
                label="Readable Font"
                icon={<Eye aria-hidden="true" />}
                pressed={preferences.readable}
                onClick={() => toggle("readable")}
              />
              <ToolbarToggle
                label="Mark Titles"
                icon={<Heading aria-hidden="true" />}
                pressed={preferences.titles}
                onClick={() => toggle("titles")}
              />
              <ToolbarToggle
                label="Highlight Links & Buttons"
                icon={<Link2 aria-hidden="true" />}
                pressed={preferences.links}
                onClick={() => toggle("links")}
              />
            </ul>
            <p className="mt-3 border-t border-line/70 px-3 pt-3 text-[0.68rem] leading-relaxed text-ink-500">
              Powered with Love by{" "}
              <a
                href="https://www.codenroll.co.il/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-600"
              >
                Codenroll
              </a>
            </p>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="accessibility-toolbar-panel"
        aria-label="Toggle the visibility of the Accessibility Toolbar"
        className={cn(
          "group grid size-12 place-items-center rounded-full border border-white/20 bg-brand-900 text-cream-50 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 sm:size-14",
          open && "ring-2 ring-brand-300 ring-offset-2 ring-offset-cream-50",
        )}
      >
        <Accessibility aria-hidden="true" className="size-6" />
      </button>
    </div>
  );
}

type ToolbarToggleProps = {
  label: string;
  icon: React.ReactNode;
  pressed: boolean;
  onClick: () => void;
};

function ToolbarToggle({ label, icon, pressed, onClick }: ToolbarToggleProps) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        aria-pressed={pressed}
        className={cn(
          "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600",
          pressed
            ? "bg-brand-700 text-cream-50 hover:bg-brand-600"
            : "text-ink-900 hover:bg-brand-50",
        )}
      >
        <span className="flex items-center gap-2.5">
          <span className={cn("grid size-4 place-items-center", pressed ? "text-brand-200" : "text-brand-700")}>
            {icon}
          </span>
          {label}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "flex h-5 w-9 items-center rounded-full p-0.5 transition-colors",
            pressed ? "bg-brand-300" : "bg-sand-400/60",
          )}
        >
          <span
            className={cn(
              "size-4 rounded-full bg-white shadow-sm transition-transform",
              pressed && "translate-x-4",
            )}
          />
        </span>
      </button>
    </li>
  );
}
