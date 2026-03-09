"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const DETECTS = [
  "Sentiment shift",
  "Pricing objection",
  "Competitor mention",
  "Buying signals",
  "Next-step commitment",
  "Talk vs listen ratio",
];

export default function WhatAIDetects() {
  return (
    <Section
      id="what-ai-detects"
      title="What AI detects in every call"
      subtitle="Real-time signals that help your team close more deals."
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {DETECTS.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-5 transition-all duration-300 hover:border-violet-500/25 hover:bg-violet-500/5 hover:shadow-[0_0_32px_-8px_rgba(139,92,246,0.25)]"
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-sm font-medium text-foreground">{item}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
