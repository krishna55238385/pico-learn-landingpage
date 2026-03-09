"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const metrics = [
  {
    value: "34%",
    label: "Increase in win rate",
    subtext: "Teams using Picolearn",
  },
  {
    value: "2.3x",
    label: "Faster ramp for new reps",
    subtext: "With AI coaching",
  },
  {
    value: "89%",
    label: "Objections identified",
    subtext: "Before deal review",
  },
  {
    value: "12 hrs",
    label: "Saved per rep per week",
    subtext: "On manual note-taking",
  },
];

export function Metrics() {
  return (
    <Section
      id="metrics"
      title="Proven impact"
      subtitle="Numbers that matter for revenue teams."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-glass-border bg-glass backdrop-blur-xl p-6 md:p-8 text-center"
          >
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              {metric.value}
            </p>
            <p className="mt-2 text-lg font-medium text-foreground">
              {metric.label}
            </p>
            <p className="mt-1 text-sm text-neutral-500">{metric.subtext}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
