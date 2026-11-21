import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/manrope";
import "@fontsource/courgette";
import "./globals.css";

import { site } from "@/lib/site";
import { AccessibilityToolbar } from "@/components/shared/accessibility-toolbar";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://myfrontierfamilydental.com"),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: site.description,
  telephone: "+1-307-754-4554",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: site.serviceArea,
  sameAs: site.social.map((item) => item.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <body className="min-h-screen bg-cream-50 font-sans text-ink-900 antialiased">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-brand-900 px-5 py-3 text-sm font-semibold text-cream-50 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:outline-none focus:ring-2 focus:ring-brand-300"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <AccessibilityToolbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
