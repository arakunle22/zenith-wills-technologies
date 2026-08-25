"use client";
import { useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });
  const height = useTransform(smooth, [0, 1], ["0%", "100%"]);
  const [pct, setPct] = useState(0);
  useMotionValueEvent(smooth, "change", (v) => setPct(Math.round(v * 100)));

  return (
    <div className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
      <span className="font-display text-[11px] font-semibold tabular-nums tracking-widest text-accent-deep">
        {pct}%
      </span>
      <div className="relative h-44 w-1.5 overflow-hidden rounded-full bg-line">
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-accent to-accent-deep"
          style={{ height }}
        />
      </div>
    </div>
  );
}
