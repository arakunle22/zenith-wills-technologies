"use client";
import { motion } from "motion/react";

export function SolarPanel({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 440" className={className} fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60d818" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#60d818" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* glow behind sun */}
      <motion.circle
        cx="392" cy="92" r="90" fill="url(#sunGlow)"
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* sun core */}
      <motion.circle
        cx="392" cy="92" r="30" fill="#60d818"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* rays */}
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
        const x1 = 392 + Math.cos(a) * 42;
        const y1 = 92 + Math.sin(a) * 42;
        const x2 = 392 + Math.cos(a) * 58;
        const y2 = 92 + Math.sin(a) * 58;
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#60d818" strokeWidth="3" strokeLinecap="round" opacity="0.45"
          />
        );
      })}

      {/* energy line sun -> panel */}
      <motion.path
        d="M392 150 C 340 190, 260 190, 250 165"
        stroke="#0090f0" strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round"
        opacity="0.7"
        animate={{ strokeDashoffset: [0, -65] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
      />

      {/* solar panel */}
      <g transform="translate(60,160)">
        <rect width="340" height="212" rx="16" fill="#0a1322" stroke="#1b2a42" strokeWidth="2" />
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <motion.rect
              key={`${row}-${col}`}
              x={26 + col * 66}
              y={26 + row * 44}
              width="50" height="30" rx="6" fill="#0090f0"
              initial={{ opacity: 0.12 }}
              animate={{ opacity: [0.12, 0.65, 0.12] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (row * 5 + col) * 0.1,
              }}
            />
          )),
        )}
      </g>
    </svg>
  );
}
