"use client";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type CarouselItem = { src: string; alt: string };

export function WorkCarousel({
  items,
  className,
  onImageClick,
}: {
  items: readonly CarouselItem[];
  className?: string;
  onImageClick?: (item: CarouselItem) => void;
}) {
  const [index, setIndex] = useState(0);
  const moved = useRef(false);
  const go = useCallback(
    (d: number) => setIndex((i) => (i + d + items.length) % items.length),
    [items.length],
  );

  if (!items.length) return null;
  const current = items[index];

  return (
    <div className={cn("relative", className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-surface sm:aspect-[16/10]">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragStart={() => {
              moved.current = false;
            }}
            onDrag={(_, info) => {
              if (Math.abs(info.offset.x) > 8) moved.current = true;
            }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -70) go(1);
              else if (info.offset.x > 70) go(-1);
            }}
            onClick={() => {
              if (!moved.current) onImageClick?.(current);
            }}
            className={cn(
              "absolute inset-0 z-0",
              onImageClick
                ? "cursor-zoom-in"
                : "cursor-grab active:cursor-grabbing",
            )}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(max-width: 640px) 100vw, 900px"
              className="object-contain p-1"
              draggable={false}
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tabular-nums text-ink">
          {index + 1} / {items.length}
        </span>

        <button
          onClick={() => go(-1)}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/90 text-ink shadow-sm transition hover:bg-white hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next image"
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/90 text-ink shadow-sm transition hover:bg-white hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {onImageClick && (
          <button
            onClick={() => onImageClick(current)}
            aria-label="View full image"
            className="absolute bottom-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition hover:bg-white hover:text-primary"
          >
            <Maximize2 className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === index ? "w-6 bg-primary" : "w-2 bg-line hover:bg-mist",
            )}
          />
        ))}
      </div>
    </div>
  );
}
