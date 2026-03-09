"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const withoutItems = [
  "Manual call reviews",
  "Missed objections",
  "Inconsistent coaching",
  "Slow ramp for new reps",
];

const withItems = [
  "AI analyzes every conversation",
  "Real-time sentiment insights",
  "Automated coaching suggestions",
  "Faster rep ramp-up",
];

export function WhyPicolearn() {
  return (
    <Section
      id="why-picolearn"
      title="Why revenue teams switch to Picolearn"
      subtitle="From reactive reviews to proactive intelligence."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 md:p-8 transition-all duration-300 hover:border-white/15"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-neutral-700/50 flex items-center justify-center">
              <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-400">Without Picolearn</h3>
          </div>
          <ul className="space-y-4">
            {withoutItems.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className="flex items-center gap-3 text-neutral-400 text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-neutral-600 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-violet-500/25 bg-violet-500/5 backdrop-blur-xl p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:border-violet-500/35 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.2)]"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/25 flex items-center justify-center">
              <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">With Picolearn</h3>
          </div>
          <ul className="space-y-4 relative">
            {withItems.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className="flex items-center gap-3 text-neutral-200 text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-violet-400 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </Section>
  );
}
