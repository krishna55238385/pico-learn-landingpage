"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const transcript = [
  { speaker: "Rep", text: "Thanks for taking the call today. I'd love to understand your current workflow." },
  { speaker: "Prospect", text: "We currently manage everything manually across spreadsheets." },
  { speaker: "Rep", text: "Got it. What's the biggest challenge with that approach today?" },
  { speaker: "Prospect", text: "Visibility across our pipeline and forecasting accuracy." },
  { speaker: "AI", text: "⚡ Objection detected: Process inefficiency" },
  { speaker: "Rep", text: "That's exactly where our platform helps teams the most." },
];

export default function AITranscript() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < transcript.length) return prev + 1;
        return prev;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/40 border border-white/10 backdrop-blur-xl rounded-xl p-6 h-56 overflow-hidden">
      {transcript.slice(0, visibleLines).map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-3 text-sm flex gap-2"
        >
          <span
            className={`font-semibold shrink-0 ${
              line.speaker === "Rep"
                ? "text-purple-400"
                : line.speaker === "Prospect"
                  ? "text-cyan-400"
                  : "text-amber-400"
            }`}
          >
            {line.speaker}:
          </span>
          <span className="text-neutral-300">{line.text}</span>
        </motion.div>
      ))}
    </div>
  );
}
