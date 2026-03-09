"use client";

import { motion } from "framer-motion";

const insights = [
  { label: "Sentiment", value: "Positive 78%" },
  { label: "Objection", value: "Pricing concern" },
  { label: "Deal Risk", value: "Low" },
  { label: "Talk Ratio", value: "Rep 42%" },
];

export default function AIInsights() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {insights.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.5 }}
          className="bg-black/50 border border-white/10 rounded-lg p-4 backdrop-blur-xl"
        >
          <p className="text-xs text-neutral-400">{item.label}</p>
          <p className="text-lg font-semibold text-white mt-0.5">{item.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
