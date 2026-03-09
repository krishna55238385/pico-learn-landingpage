"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Connect call sources",
    description: "Integrate with Zoom, Meet, Teams, or your dialer. Picolearn ingests calls automatically.",
  },
  {
    number: "02",
    title: "AI analyzes conversations",
    description: "Speech-to-text and NLP models process every word—with accuracy built for sales terminology.",
  },
  {
    number: "03",
    title: "Detect sentiment and objections",
    description: "Real-time sentiment, topic tagging, and objection flags surface what matters most.",
  },
  {
    number: "04",
    title: "Generate insights",
    description: "Summaries, action items, and deal notes are created instantly for your CRM and team.",
  },
  {
    number: "05",
    title: "Improve team performance",
    description: "Coaching recommendations and leaderboards help managers lift rep performance at scale.",
  },
];

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      title="How it works"
      subtitle="From raw calls to revenue intelligence in five steps."
    >
      <div className="relative">
        {/* Connector line - hidden on mobile, visible on lg */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-500/40 to-transparent -translate-x-1/2" />

        <div className="space-y-10 lg:space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 lg:w-1/2 lg:pr-14 lg:pl-0 lg:text-right order-2 lg:order-1">
                <div
                  className={`inline-block ${
                    i % 2 === 1 ? "lg:text-left" : "lg:text-right"
                  }`}
                >
                  <span className="inline-block text-xs font-mono font-medium text-violet-400/90 bg-violet-500/10 border border-violet-500/20 rounded-lg px-2.5 py-1">
                    {step.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 mt-2 max-w-md leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center node */}
              <div className="relative z-10 flex-shrink-0 order-1 lg:order-2">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="w-5 h-5 rounded-full bg-violet-500 ring-8 ring-violet-500/25 shadow-[0_0_20px_4px_rgba(139,92,246,0.4)]"
                />
              </div>

              <div className="flex-1 lg:w-1/2 lg:pl-14 lg:pr-0 order-3 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
