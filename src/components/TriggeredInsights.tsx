"use client";

import { motion } from "framer-motion";

const INSIGHTS = [
  { label: "Sentiment", value: "Positive 78%" },
  { label: "Objection", value: "Process inefficiency" },
  { label: "Deal Risk", value: "Increased", highlight: true },
  { label: "Talk Ratio", value: "Rep 42% / Prospect 58%" },
];

interface TriggeredInsightsProps {
  /** Number of insights to show (0..4), driven by transcript line completion */
  visibleCount: number;
}

export default function TriggeredInsights({ visibleCount }: TriggeredInsightsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6 min-w-0">
      {INSIGHTS.slice(0, visibleCount).map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ x: 20, opacity: 0, scale: 0.96 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={
            item.highlight
              ? "bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 backdrop-blur-xl min-w-0 overflow-visible hover:shadow-[0_0_30px_-8px_rgba(139,92,246,0.4)] transition-shadow duration-300"
              : "bg-black/50 border border-white/10 rounded-lg p-4 backdrop-blur-xl min-w-0 overflow-visible hover:shadow-[0_0_24px_-8px_rgba(139,92,246,0.25)] transition-shadow duration-300"
          }
        >
          <p className="text-xs text-neutral-400">{item.label}</p>
          <p
            className={`text-lg font-semibold mt-0.5 break-words ${
              item.highlight ? "text-purple-200" : "text-white"
            }`}
          >
            {item.highlight && "⚡ "}
            {item.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
