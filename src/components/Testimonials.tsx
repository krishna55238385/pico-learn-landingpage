"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const companyLogos = [
  "Acme Corp",
  "TechFlow",
  "ScaleUp",
  "RevenueLab",
  "SalesForce Co",
];

const stats = [
  { value: "34%", label: "Increase in win rate", highlight: true },
  { value: "2.3x", label: "Faster onboarding", highlight: false },
  { value: "89%", label: "Objections detected", highlight: false },
  { value: "12 hrs", label: "Saved per rep per week", highlight: false },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="Trusted by revenue teams"
      subtitle="See why leaders choose Picolearn to close more deals."
    >
      <div className="space-y-12">
        {/* Logos row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {companyLogos.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="text-sm font-medium text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 md:p-8 transition-all duration-300 hover:border-violet-500/20 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.15)]"
          >
            <svg className="w-11 h-11 text-violet-500/50 mb-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              &ldquo;We saw a 34% lift in win rate within two quarters. Picolearn didn&apos;t just surface what was happening on calls—it gave our managers a playbook to fix it.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500/30 to-purple-600/20 flex items-center justify-center text-violet-400 font-semibold text-lg">
                JM
              </div>
              <div>
                <p className="font-semibold text-foreground">Jordan Mitchell</p>
                <p className="text-sm text-neutral-500">VP Sales, B2B SaaS</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className={`rounded-xl border backdrop-blur-xl p-5 text-center transition-all duration-300 ${
                  stat.highlight
                    ? "border-violet-500/35 bg-violet-500/10 shadow-[0_0_32px_-8px_rgba(139,92,246,0.35)]"
                    : "border-white/10 bg-white/[0.02] hover:border-violet-500/25 hover:bg-violet-500/5"
                }`}
              >
                <p
                  className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent ${
                    stat.highlight
                      ? "bg-gradient-to-r from-violet-400 to-emerald-400"
                      : "bg-gradient-to-r from-violet-400 to-purple-400"
                  }`}
                >
                  {stat.value}
                </p>
                <p className={`text-sm mt-1.5 ${stat.highlight ? "text-foreground font-medium" : "text-neutral-400"}`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
