"use client";
import { motion } from "motion/react";

export function SolarPanel({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 440" className={className} fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60d818" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#60d818" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* gentle glow behind the sun */}
      <motion.circle
        cx="392" cy="92" r="90" fill="url(#sunGlow)"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* sun core (static) */}
      <circle cx="392" cy="92" r="30" fill="#60d818" />

      {/* rays (static) */}
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
        return (
          <line
            key={i}
            x1={392 + Math.cos(a) * 42} y1={92 + Math.sin(a) * 42}
            x2={392 + Math.cos(a) * 58} y2={92 + Math.sin(a) * 58}
            stroke="#60d818" strokeWidth="3" strokeLinecap="round" opacity="0.45"
          />
        );
      })}

      {/* energy line: sun -> panel (flowing) */}
      <motion.path
        d="M392 150 C 340 190, 260 190, 250 165"
        stroke="#0090f0" strokeWidth="2" strokeDasharray="6 7" strokeLinecap="round"
        opacity="0.7"
        animate={{ strokeDashoffset: [0, -65] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
      />

      {/* solar panel (static cells) */}
      <g transform="translate(60,160)">
        <rect width="340" height="212" rx="16" fill="#0a1322" stroke="#1b2a42" strokeWidth="2" />
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={26 + col * 66} y={26 + row * 44}
              width="50" height="30" rx="6" fill="#0090f0" opacity="0.35"
            />
          )),
        )}
      </g>
    </svg>
  );
}
