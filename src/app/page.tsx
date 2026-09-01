import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Showcase } from "@/components/sections/showcase";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Coverage } from "@/components/sections/coverage";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  description:
    "Solar inverter, CCTV, car tracking, intercom and networking installation across Lagos — Victoria Island, Lekki, Ikoyi, Badagry, Egan, Ikotun, Alimosho, LASU, Mile 2 and beyond. Professional installs, clear quotes.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <WhyUs />
        <Process />
        <Coverage />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
