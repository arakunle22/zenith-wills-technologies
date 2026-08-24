import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { ChargeMeter } from "@/components/charge-meter";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        {/* power-on: dark -> light transition */}
        <div aria-hidden className="h-24 bg-gradient-to-b from-ink to-paper" />
        <Services />
        <WhyUs />
        <Process />
        {/* power-down: light -> dark transition */}
        <div aria-hidden className="h-24 bg-gradient-to-b from-paper to-ink" />
        <Contact />
      </main>
      <Footer />
      <ChargeMeter />
    </div>
  );
}
