import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WorkCarousel } from "@/components/work-carousel";
import { site } from "@/config/site";

export function Showcase() {
  const { videos, projects } = site.work;
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Our work"
            title="See the systems we install."
            subtitle="Browse recent installations, then watch short clips from the field."
          />
          <Link
            href="/work"
            className="mb-1 text-sm font-semibold text-primary hover:text-primary-deep"
          >
            View all work →
          </Link>
        </div>

        <div className="mt-12">
          <WorkCarousel items={projects} />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
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
                  <p className="font-display font-semibold text-ink">{v.title}</p>
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
  );
}
