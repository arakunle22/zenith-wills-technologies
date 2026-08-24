import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { site } from "@/config/site";
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
  title,
  description: site.description,
  keywords: [
    "solar inverter",
    "CCTV installation",
    "car tracker",
    "car GPS",
    "intercom",
    "network installation",
    "Zenith Wills Technologies",
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
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/logo.png`,
  telephone: site.phone.tel,
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "Nigeria" },
  makesOffer: site.services.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      description: s.description,
    },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
