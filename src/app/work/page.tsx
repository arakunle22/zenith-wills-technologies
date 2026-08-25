import type { Metadata } from "next";
import Image from "next/image";
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
  title: "Our Work",
  description:
    "Recent installations and the systems Zenith Wills Technologies works with — solar, CCTV, tracking, intercom and networking.",
};

export default function WorkPage() {
  const { videos, gallery } = site.work;
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Our work"
          subtitle="A look at recent installations and the systems we work with every day."
          image="/images/rooftop.jpg"
        />

        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Recent installations"
              title="Work from the field."
              subtitle="Short clips from recent jobs. More projects are added as we complete them."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {videos.map((v, i) => (
                <Reveal key={v.src} delay={i * 0.05} className="h-full">
                  <div className="h-full overflow-hidden rounded-2xl border border-line bg-white">
                    <video
                      src={v.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="aspect-video w-full object-cover"
                    />
                    <div className="flex items-center justify-between px-4 py-3">
                      <p className="font-display font-semibold text-ink">
                        {v.title}
                      </p>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                        {v.tag}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-surface py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Systems we work with"
              title="The environments we install in."
            />

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {gallery.map((g, i) => (
                <Reveal key={g.src} delay={i * 0.05}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
                    <Image
                      src={g.src}
                      alt={g.tag}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-ink">
                      {g.tag}
                    </span>
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
