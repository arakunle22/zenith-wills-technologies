"use client";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { WorkCarousel } from "@/components/work-carousel";
import { VideoCard } from "@/components/video-card";
import { Lightbox, type LightboxItem } from "@/components/lightbox";
import { site } from "@/config/site";

export function WorkGallery() {
  const { videos, projects } = site.work;
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images: LightboxItem[] = projects.map((p) => ({
    type: "image" as const,
    src: p.src,
    alt: p.alt,
  }));
  const videoItems: LightboxItem[] = videos.map((v) => ({
    type: "video" as const,
    src: v.src,
    alt: v.title,
  }));
  const media = [...images, ...videoItems];

  return (
    <>
      <section className="py-16 sm:py-20">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Recent projects"
            title="Work from the field."
            subtitle="Swipe or use the arrows to browse recent installations. Tap a photo to view it in full — more are added as we complete them."
            align="center"
          />
          <div className="mt-10">
            <WorkCarousel
              items={projects}
              onImageClick={(item) => {
                const i = projects.findIndex((p) => p.src === item.src);
                setLightbox(i >= 0 ? i : 0);
              }}
            />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Installation clips"
            title="Short clips from the field."
            subtitle="Tap a clip to watch it in full."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {videos.map((v, i) => (
              <Reveal key={v.src} delay={i * 0.05} className="h-full">
                <VideoCard
                  video={v}
                  onClick={() => setLightbox(images.length + i)}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Lightbox
        items={media}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </>
  );
}
