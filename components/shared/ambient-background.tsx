import { cn } from "@/lib/utils";

type AmbientBackgroundProps = {
  variant?: "light" | "dark" | "cream";
  className?: string;
};

export function AmbientBackground({ variant = "light", className }: AmbientBackgroundProps) {
  const dark = variant === "dark";

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className={cn(
          "absolute -top-32 -right-24 size-[28rem] rounded-full blur-3xl",
          dark ? "bg-brand-500/20" : "bg-brand-300/30",
        )}
      />
      <div
        className={cn(
          "absolute -bottom-40 -left-24 size-[26rem] rounded-full blur-3xl",
          dark ? "bg-clay-500/15" : "bg-clay-500/10",
        )}
      />
      <div
        className={cn(
          "absolute inset-0",
          dark ? "bg-grid-dark opacity-30" : "bg-grid opacity-40",
        )}
      />
      <div className="bg-grain absolute inset-0 opacity-[0.035]" />
      <svg
        className={cn(
          "absolute top-1/2 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 opacity-40",
          dark ? "text-brand-300/20" : "text-brand-700/10",
        )}
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="300" r="288" stroke="currentColor" strokeWidth="1" />
        <circle cx="300" cy="300" r="222" stroke="currentColor" strokeWidth="1" />
        <circle cx="300" cy="300" r="156" stroke="currentColor" strokeWidth="1" />
        <path d="M12 300h576" stroke="currentColor" strokeWidth="1" strokeDasharray="2 10" />
        <path d="M300 12v576" stroke="currentColor" strokeWidth="1" strokeDasharray="2 10" />
      </svg>
    </div>
  );
}

export function SmileArch({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 180"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 170C10 80 77 10 160 10s150 70 150 160"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M42 170C42 98 95 42 160 42s118 56 118 128"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 8"
      />
      <path
        d="M76 170c0-55 38-96 84-96s84 41 84 96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
