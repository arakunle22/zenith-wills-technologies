import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/config/site";

export function Showcase() {
  const { videos, gallery } = site.work;
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Our work"
            title="See the systems we install."
            subtitle="A look at recent installations and the environments we work in."
          />
          <Link
            href="/work"
            className="mb-1 text-sm font-semibold text-primary hover:text-primary-deep"
          >
            View all work →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
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

        <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {gallery.slice(0, 3).map((g, i) => (
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
  );
}
