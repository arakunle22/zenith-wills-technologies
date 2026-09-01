import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Cta } from "@/components/sections/cta";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zenith Wills Technologies is a professional installation company serving homes, offices and estates across Lagos — Victoria Island, Lekki, Ikoyi, Badagry, Egan, Ikotun, Alimosho, LASU, Mile 2 and beyond.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="About Zenith Wills"
          subtitle={site.about.intro}
          image="/images/technician.jpg"
        />

        <section className="py-16 sm:py-20">
          <Container className="max-w-3xl">
            <div className="space-y-5 text-lg leading-relaxed text-mist">
              {site.about.story.map((p, i) => (
                <Reveal key={i}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-surface py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="What we stand for"
              title="Three things we never compromise on."
              align="center"
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {site.about.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06} className="h-full">
                  <div className="h-full rounded-2xl border border-line bg-white p-6 text-center">
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {v.description}
                    </p>
                  </div>
                </Reveal>
              ))}
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
