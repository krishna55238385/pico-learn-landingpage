"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const integrations = [
  { name: "Zoom", color: "text-blue-400" },
  { name: "Google Meet", color: "text-emerald-400" },
  { name: "Slack", color: "text-violet-400" },
  { name: "Salesforce", color: "text-sky-400" },
  { name: "HubSpot", color: "text-orange-400" },
  { name: "Aircall", color: "text-rose-400" },
];

export function Integrations() {
  return (
    <Section
      id="integrations"
      title="Works with your sales stack"
      subtitle="Connect your calls and CRM in minutes."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-4 md:gap-5"
      >
        {integrations.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 36px -6px rgba(139, 92, 246, 0.4)",
            }}
            className="rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl px-7 py-4 flex items-center justify-center transition-all duration-300 hover:border-violet-500/35 hover:bg-violet-500/10"
          >
            <span className={`text-base font-semibold ${item.color}`}>{item.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
