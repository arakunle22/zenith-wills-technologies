"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { site } from "@/config/site";

export function Showcase() {
  const { videos, projects } = site.work;
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  // Two photos + one clip for the strip.
  const media: LightboxItem[] = [
    ...projects.slice(0, 2).map((p) => ({ type: "image" as const, src: p.src, alt: p.alt })),
    ...videos.slice(0, 1).map((v) => ({ type: "video" as const, src: v.src, alt: v.title })),
  ];

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({
      left: dir * scroller.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  // Auto-scroll: advance one card every few seconds, loop back to start.
  useEffect(() => {
    const el = scroller.current;
    if (!el || paused || lightbox !== null) return;
    const id = setInterval(() => {
      const first = el.querySelector(":scope > *") as HTMLElement | null;
      if (!first) return;
      const step = first.offsetWidth + 20; // 20px = gap-5
      const maxLeft = el.scrollWidth - el.clientWidth;
      if (maxLeft <= 0) return;
      if (el.scrollLeft + step >= maxLeft - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3200);
    return () => clearInterval(id);
  }, [paused, lightbox]);

  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Our work"
            title="See the systems we install."
            subtitle="A few recent jobs — tap any card to view it in full."
          />
          <div className="mb-1 flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <ButtonLink href="/work" variant="outline" className="ml-2">
              View all work
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>

        <div
          ref={scroller}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {media.map((m, i) => (
            <button
              key={m.src}
              type="button"
              onClick={() => setLightbox(i)}
              aria-label={
                m.type === "video" ? `Play ${m.alt ?? "clip"}` : `View ${m.alt ?? "photo"}`
              }
              className="group relative block aspect-[4/3] w-[76vw] max-w-[400px] shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-white transition hover:border-primary/30"
            >
              {m.type === "video" ? (
                <video
                  src={m.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={m.src}
                  alt={m.alt ?? ""}
                  fill
                  sizes="400px"
                  className="object-contain p-1"
                />
              )}
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink">
                {m.type === "video" ? "Clip" : "Photo"}
              </span>
              <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-sm transition group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </Container>

      <Lightbox
        items={media}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </section>
  );
}
