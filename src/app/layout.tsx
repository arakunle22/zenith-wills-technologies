import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zenith Wills Technologies — Solar, CCTV, Car Tracking, Intercom & Networking",
  description:
    "Professional installation of solar power inverters, CCTV cameras, car trackers, intercoms and system networking across Nigeria. Book us on WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen font-body">{children}</body>
    </html>
  );
}
