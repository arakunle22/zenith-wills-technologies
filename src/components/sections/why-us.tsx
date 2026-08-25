import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { whyIcons } from "@/components/icons";
import { site } from "@/config/site";

const icons = [whyIcons.shield, whyIcons.pin, whyIcons.clock, whyIcons.message];

export function WhyUs() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Zenith Wills"
          title="Installed right, backed by people who stay."
          subtitle="We're a professional installation company serving homes, offices and estates across Nigeria. Our promise is simple: clear quotes, tidy work, and support after the job."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.whyUs.map((w, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={w.title} delay={i * 0.05} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-deep">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {w.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
