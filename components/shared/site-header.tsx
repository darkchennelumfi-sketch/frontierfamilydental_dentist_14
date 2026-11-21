"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, MapPin, Menu, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { primaryNav, site } from "@/lib/site";
import { BrandMark } from "@/components/shared/brand-mark";
import { SocialLinks } from "@/components/shared/social-links";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-brand-900 text-cream-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] sm:px-8 lg:px-10">
          <p className="flex min-w-0 items-center gap-2">
            <MapPin aria-hidden="true" className="size-3.5 shrink-0 text-brand-300" />
            <span className="truncate">{site.serviceArea}</span>
          </p>
          <Link
            href={site.phoneHref}
            className="hidden shrink-0 items-center gap-2 text-brand-200 transition-colors hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900 sm:flex"
          >
            <Phone aria-hidden="true" className="size-3.5" />
            CALL US TODAY! {site.phoneDisplay}
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/60 bg-cream-50/88 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <BrandMark />

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((group) => {
              const active = isActivePath(pathname, group.href);

              if (group.children && group.children.length > 0) {
                return (
                  <DropdownMenu key={group.label}>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-50 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
                          active ? "text-brand-800" : "text-ink-700",
                        )}
                      >
                        {group.label}
                        <ChevronDown aria-hidden="true" className="size-3.5 text-ink-500" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuLabel>{group.label}</DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <Link href={group.href} className="font-semibold text-brand-800">
                          {group.label === "Services" ? "All services" : "About Frontier Family Dental"}
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {group.children.map((child) => (
                        <DropdownMenuItem key={child.href} asChild>
                          <Link href={child.href} className="flex flex-col gap-0.5">
                            <span className="font-medium">{child.label}</span>
                            {child.description ? (
                              <span className="text-xs text-ink-500">{child.description}</span>
                            ) : null}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={group.href}
                  href={group.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-50 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2",
                    active ? "text-brand-800" : "text-ink-700",
                  )}
                >
                  {group.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-brand-800/15 bg-white/60 px-4 py-2 text-sm font-semibold text-brand-800 transition-colors hover:border-brand-700/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 xl:flex"
            >
              <Phone aria-hidden="true" className="size-4 text-brand-600" />
              {site.phoneDisplay}
            </Link>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Schedule an appointment</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-brand-800 lg:hidden"
            >
              <Link href={site.phoneHref} aria-label={`Call ${site.name} at ${site.phoneDisplay}`}>
                <Phone aria-hidden="true" />
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Open menu"
                  className="lg:hidden"
                >
                  <Menu aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>{site.serviceArea}</SheetDescription>
                </SheetHeader>

                <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                  {primaryNav.map((group) => (
                    <div key={group.label} className="py-1">
                      <SheetClose asChild>
                        <Link
                          href={group.href}
                          className={cn(
                            "block rounded-xl px-3 py-2.5 text-base font-semibold transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600",
                            isActivePath(pathname, group.href)
                              ? "bg-brand-50 text-brand-800"
                              : "text-ink-900",
                          )}
                        >
                          {group.label}
                        </Link>
                      </SheetClose>
                      {group.children && group.children.length > 0 ? (
                        <ul className="mt-1 ml-3 flex flex-col gap-0.5 border-l border-line pl-3">
                          {group.children.map((child) => (
                            <li key={child.href}>
                              <SheetClose asChild>
                                <Link
                                  href={child.href}
                                  className="block rounded-lg px-2 py-2 text-sm text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                                >
                                  {child.label}
                                </Link>
                              </SheetClose>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6">
                  <SheetClose asChild>
                    <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                      Schedule an appointment
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href={site.phoneHref}
                      className={buttonVariants({ variant: "outline", size: "lg" })}
                    >
                      <Phone aria-hidden="true" />
                      {site.phoneDisplay}
                    </Link>
                  </SheetClose>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </p>
                  <SocialLinks className="mt-1" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
