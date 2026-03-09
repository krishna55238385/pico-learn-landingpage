"use client";

import { motion } from "framer-motion";

const BARS = 40;

// Deterministic "speech-like" keyframes per bar to avoid hydration mismatch
function getBarKeyframes(i: number) {
  const phase = i % 7;
  const a = 12 + phase * 4;
  const b = 25 + (i % 5) * 12 + (i % 3) * 8;
  const c = 18 + (i % 4) * 6;
  return [`${a}px`, `${b}px`, `${c}px`, `${Math.min(80, b + 15)}px`, `${a + 5}px`];
}

const gradientBySentiment = {
  positive: "bg-gradient-to-t from-emerald-500 via-green-400 to-cyan-400",
  negative: "bg-gradient-to-t from-red-500 via-orange-400 to-amber-400",
  neutral:
    "bg-gradient-to-t from-purple-500 via-indigo-400 to-cyan-400",
} as const;

type Sentiment = keyof typeof gradientBySentiment;

interface AIWaveformProps {
  /** Bar count */
  bars?: number;
  /** Height of container in Tailwind size (e.g. h-28, h-24) */
  height?: string;
  /** Sentiment for gradient color */
  sentiment?: Sentiment;
  /** Show "AI Listening..." pulse above */
  showListeningLabel?: boolean;
  /** Optional wrapper class (e.g. for glow) */
  className?: string;
  /** Bar width in Tailwind (e.g. w-[6px]) */
  barWidth?: string;
  /** Gap between bars (e.g. gap-[4px]) */
  gap?: string;
  /** Use scaleY "speech reactive" animation instead of height */
  reactive?: boolean;
}

export default function AIWaveform({
  bars = BARS,
  height = "h-28",
  sentiment = "neutral",
  showListeningLabel = false,
  className = "",
  barWidth = "w-[6px]",
  gap = "gap-[4px]",
  reactive = false,
}: AIWaveformProps) {
  const barCount = Math.min(bars, 60);
  const gradient = gradientBySentiment[sentiment];

  return (
    <div className={`relative ${className}`}>
      {showListeningLabel && (
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs text-purple-300/90 whitespace-nowrap"
        >
          AI Listening...
        </motion.div>
      )}
      <div
        className={`w-full flex items-end justify-center ${gap} ${height} overflow-hidden`}
      >
        {Array.from({ length: barCount }).map((_, i) => (
          <motion.div
            key={i}
            className={`flex-shrink-0 ${barWidth} rounded-full ${gradient} ${reactive ? "origin-bottom" : ""}`}
            style={reactive ? { height: 80 } : undefined}
            animate={
              reactive
                ? {
                    scaleY: [0.25, 0.9, 0.35, 1, 0.2],
                  }
                : { height: getBarKeyframes(i) }
            }
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: i * 0.04,
            }}
          />
        ))}
      </div>
    </div>
  );
}
