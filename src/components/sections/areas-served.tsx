import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/config/site";

export function AreasServed() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Where we work"
          title="Serving Lagos, corner to corner."
          subtitle="Based in Lagos, we reach homes, offices and estates across the city and its surroundings."
          align="center"
        />
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {site.areasServed.map((area, i) => (
            <Reveal key={area} delay={i * 0.04}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink">
                <MapPin className="h-4 w-4 text-primary" />
                {area}
              </span>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-mist">
          Don&apos;t see your area? Get in touch — if you&apos;re in or around
          Lagos, we&apos;ll almost certainly reach you.
        </p>
      </Container>
    </section>
  );
}
