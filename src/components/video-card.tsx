"use client";
import { Maximize2 } from "lucide-react";

export function VideoCard({
  video,
  onClick,
}: {
  video: { src: string; title: string; tag: string };
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Play ${video.title}`}
      className="group block h-full w-full text-left"
    >
      <div className="h-full overflow-hidden rounded-2xl border border-line bg-white transition hover:border-primary/30 hover:shadow-md">
        <div className="relative aspect-video overflow-hidden bg-surface">
          <video
            src={video.src}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-contain"
          />
          <span className="absolute inset-0 flex items-center justify-center transition group-hover:bg-ink/10">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-sm transition group-hover:opacity-100">
              <Maximize2 className="h-5 w-5" />
            </span>
          </span>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <p className="font-display font-semibold text-ink">{video.title}</p>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
            {video.tag}
          </span>
        </div>
      </div>
    </button>
  );
}
