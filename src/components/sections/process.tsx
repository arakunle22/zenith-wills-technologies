import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/config/site";

export function Process() {
  return (
    <section id="process" className="py-24 pt-0">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From enquiry to switch-on in four steps."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-frost/10 bg-ink-2 p-6">
                <span className="font-display text-4xl font-bold text-primary/25">
                  {p.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-frost">
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
