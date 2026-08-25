"use client";
import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxItem =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string; alt?: string };

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: readonly LightboxItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const open = index !== null && index >= 0 && index < items.length;
  const idx = index ?? 0;
  const item = open ? items[idx] : null;

  const step = (d: number) => {
    if (index === null) return;
    onNavigate((index + d + items.length) % items.length);
  };

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
      else if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.type === "video" ? "Video preview" : "Image preview"}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[85vh] w-[min(94vw,1100px)] items-center justify-center"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain"
              />
            ) : (
              <div className="relative h-[85vh] w-full">
                <Image
                  src={item.src}
                  alt={item.alt ?? ""}
                  fill
                  sizes="(max-width: 768px) 94vw, 1100px"
                  className="object-contain"
                />
              </div>
            )}
          </motion.div>

          <span className="pointer-events-none absolute left-1/2 top-5 z-10 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tabular-nums text-frost">
            {idx + 1} / {items.length}
          </span>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Previous item"
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-frost transition hover:bg-white/25 sm:left-6"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Next item"
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-frost transition hover:bg-white/25 sm:right-6"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close preview"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-frost transition hover:bg-white/25"
          >
            <X className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
