import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { serviceIconMap } from "@/components/icons";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Cta } from "@/components/sections/cta";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Solar inverter, CCTV, car tracking, intercom and networking installation across Lagos — Badagry, Egan, Ikotun, Alimosho, LASU, Mile 2 and beyond.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Our services"
          subtitle="Five systems, one professional standard — sized for your space and Nigeria's realities."
          image="/images/solar.jpg"
        />

        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-8">
              {site.services.map((s, i) => {
                const Icon = serviceIconMap[s.icon];
                const flip = i % 2 === 1;
                return (
                  <Reveal key={s.id}>
                    <div
                      id={s.id}
                      className="grid scroll-mt-24 items-center gap-8 rounded-3xl border border-line bg-white p-6 sm:p-8 lg:grid-cols-2"
                    >
                      <div className={cn(flip && "lg:order-2")}>
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                          {s.title}
                        </h2>
                        <p className="mt-3 leading-relaxed text-mist">
                          {s.description}
                        </p>
                        <ul className="mt-5 space-y-2.5">
                          {s.points.map((p) => (
                            <li
                              key={p}
                              className="flex items-start gap-2.5 text-sm text-ink"
                            >
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                              {p}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-7">
                          <ButtonLink
                            href={site.whatsapp.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <WhatsAppIcon className="h-4 w-4" />
                            Book this service
                          </ButtonLink>
                        </div>
                      </div>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                        <Image
                          src={s.image}
                          alt={s.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>

        <Cta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
