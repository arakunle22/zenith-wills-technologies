import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Space_Grotesk, Inter } from "next/font/google";
import { site } from "@/config/site";
import { ScrollProgress } from "@/components/scroll-progress";
import { TopBanner } from "@/components/top-banner";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title =
  "Zenith Wills Technologies — Solar, CCTV, Car Tracking, Intercom & Networking";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s — Zenith Wills Technologies",
  },
  description: site.description,
  keywords: [
    "solar inverter",
    "CCTV installation",
    "car tracker",
    "car GPS",
    "intercom",
    "network installation",
    "Zenith Wills Technologies",
    "Victoria Island",
    "VI",
    "Lekki",
    "Ikoyi",
    "Lagos Island",
    "Badagry",
    "Egan",
    "Ikotun",
    "Alimosho",
    "LASU",
    "Mile 2",
    "Ikeja",
    "Surulere",
    "Lagos",
    "Nigeria",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_NG",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/logo.png`,
      image: `${site.url}/logo.png`,
      sameAs: site.social.map((s) => s.href),
      description: site.description,
      telephone: site.phone.tel,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone.tel,
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: "English",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#localbusiness`,
      name: site.name,
      description: site.description,
      url: site.url,
      image: `${site.url}/logo.png`,
      sameAs: site.social.map((s) => s.href),
      telephone: site.phone.tel,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      areaServed: site.areasServed.map((name) => ({
        "@type": "AdministrativeArea",
        name,
      })),
      makesOffer: site.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          provider: { "@id": `${site.url}/#organization` },
          areaServed: site.areasServed.map((name) => ({
            "@type": "AdministrativeArea",
            name,
          })),
        },
      })),
      parentOrganization: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <TopBanner />
        {children}
        <ScrollProgress />
      </body>
      {process.env.NODE_ENV === "production" &&
        process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
    </html>
  );
}
