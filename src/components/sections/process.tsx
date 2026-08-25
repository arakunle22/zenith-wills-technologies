import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/config/site";

export function Process() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Getting started"
          title="From your first message to switch-on."
          subtitle="Four simple steps — we handle the details."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <span className="font-display text-4xl font-bold text-primary/25">
                  {p.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
