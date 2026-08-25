import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Showcase } from "@/components/sections/showcase";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Cta } from "@/components/sections/cta";

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
        <Cta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
