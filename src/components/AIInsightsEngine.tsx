"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const steps = [
  { label: "Call Audio", id: "audio" },
  { label: "Speech-to-Text", id: "stt" },
  { label: "Sentiment + NLP", id: "nlp" },
  { label: "AI Insights", id: "insight" },
  { label: "CRM Sync", id: "crm" },
];

export function AIInsightsEngine() {
  return (
    <Section
      id="ai-engine"
      title="AI Insights Engine"
      subtitle="From raw audio to actionable intelligence in seconds."
      className="bg-gradient-to-b from-transparent via-violet-500/5 to-transparent"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 py-10 md:py-6">
          {steps.map((step, i) => (
            <div key={step.id} className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 50px -5px rgba(139, 92, 246, 0.5), 0 0 30px -5px rgba(59, 130, 246, 0.3)",
                }}
                className="relative rounded-2xl border border-violet-500/35 bg-violet-500/10 backdrop-blur-xl px-6 py-4 min-w-[150px] md:min-w-[140px] text-center transition-shadow duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-blue-500/5 pointer-events-none" />
                <p className="relative text-sm font-semibold text-foreground">{step.label}</p>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_16px_6px_rgba(139,92,246,0.6)]"
                />
              </motion.div>
              {i < steps.length - 1 && (
                <>
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="hidden md:block w-10 h-0.5 bg-gradient-to-r from-violet-500/80 via-violet-400/60 to-transparent origin-left rounded-full shadow-[0_0_12px_2px_rgba(139,92,246,0.4)]"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="md:hidden text-neutral-500"
                  >
                    <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="h-px flex-1 max-w-2xl bg-gradient-to-r from-transparent via-violet-500/50 to-transparent shadow-[0_0_24px_4px_rgba(139,92,246,0.25)]"
          />
        </div>
      </motion.div>
    </Section>
  );
}
