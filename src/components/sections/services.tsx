import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { serviceIconMap } from "@/components/icons";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="bg-paper py-24">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Five systems. One standard."
          subtitle="Every installation is sized for your space and Nigeria's realities — and finished to the same professional standard."
          onLight
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-6">
          {site.services.map((s, i) => {
            const Icon = serviceIconMap[s.icon];
            const featured = s.id === "solar";
            return (
              <Reveal
                key={s.id}
                delay={i * 0.06}
                className={cn("h-full", featured ? "sm:col-span-4" : "sm:col-span-2")}
              >
                <a
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1",
                    featured
                      ? "border-primary/30 bg-gradient-to-br from-primary to-[#0070c0] text-frost hover:shadow-xl hover:shadow-primary/25"
                      : "border-ink/10 bg-white text-ink hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
                  )}
                >
                  <div
                    className={cn(
                      "mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
                      featured
                        ? "bg-accent text-ink"
                        : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={cn(
                      "font-display text-xl font-semibold",
                      featured ? "text-frost" : "text-ink",
                    )}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 flex-1 text-sm leading-relaxed",
                      featured ? "text-frost/80" : "text-ink/60",
                    )}
                  >
                    {s.description}
                  </p>
                  <span
                    className={cn(
                      "mt-5 inline-flex items-center gap-1 text-sm font-semibold",
                      featured ? "text-accent" : "text-primary",
                    )}
                  >
                    Book this
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
