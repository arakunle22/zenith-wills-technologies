import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WorkCarousel } from "@/components/work-carousel";
import { Cta } from "@/components/sections/cta";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Recent installations by Zenith Wills Technologies — solar, CCTV, tracking, intercom and networking.",
};

export default function WorkPage() {
  const { videos, projects } = site.work;
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Our work"
          subtitle="A look at recent installations from the field."
          image="/images/rooftop.jpg"
        />

        <section className="py-16 sm:py-20">
          <Container className="max-w-4xl">
            <SectionHeading
              eyebrow="Recent projects"
              title="Work from the field."
              subtitle="Swipe or use the arrows to browse recent installations. More are added as we complete them."
              align="center"
            />
            <div className="mt-10">
              <WorkCarousel items={projects} />
            </div>
          </Container>
        </section>

        <section className="bg-surface py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Installation clips"
              title="Short clips from the field."
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

        <Cta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
