"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const features = [
  {
    title: "AI Sentiment Timeline",
    description: "Watch buyer sentiment evolve through the call. Spot engagement drops and positive moments in real time.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v16" />
    ),
    preview: "chart" as const,
    chartHeights: [40, 55, 45, 70, 65, 80, 75, 88],
  },
  {
    title: "Objection Intelligence",
    description: "Auto-detect pricing, timing, and competitor objections. Get suggested responses and track patterns.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
    preview: "pills" as const,
    pills: ["Pricing", "Timing", "Competitor"],
  },
  {
    title: "Deal Risk Detection",
    description: "Predict at-risk deals from conversation signals. Commitment language, next-step clarity, and tone.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
    preview: "score" as const,
    score: 78,
    scoreLabel: "Low risk",
  },
  {
    title: "AI Sales Coaching",
    description: "Personalized recommendations after every call. Discovery, closing, and follow-up playbooks powered by AI.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
    preview: "suggestion" as const,
    suggestion: "Ask about budget timeline earlier in discovery.",
  },
  {
    title: "Conversation Search",
    description: "Search across every call by topic, objection, or phrase. Find winning moments and share with the team.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
    preview: "search" as const,
    searchQuery: "pricing objection",
    resultCount: 12,
  },
  {
    title: "Talk vs Listen Ratio",
    description: "Balance rep and prospect speaking time. See ideal ratios for discovery and closing so reps don't talk over buyers.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-4v4m0-11a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    preview: "ratio" as const,
    repPercent: 42,
    prospectPercent: 58,
  },
];

function FeatureCard({
  feature,
  i,
  className = "",
}: {
  feature: (typeof features)[0];
  i: number;
  className?: string;
}) {
  const renderPreview = () => {
    if (feature.preview === "chart" && "chartHeights" in feature) {
      return (
        <div className="flex items-end gap-0.5 h-12 mt-2">
          {feature.chartHeights.map((h, j) => (
            <motion.div
              key={j}
              initial={{ height: 4 }}
              whileInView={{ height: h }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 + j * 0.04 }}
              className="flex-1 rounded-t bg-gradient-to-t from-violet-600/90 to-emerald-500/70 min-h-[4px]"
            />
          ))}
        </div>
      );
    }
    if (feature.preview === "pills" && "pills" in feature) {
      return (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {feature.pills.map((label, j) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + j * 0.06 }}
              className="inline-flex items-center gap-1 rounded-md bg-amber-500/15 border border-amber-500/25 px-2 py-1 text-[11px] font-medium text-amber-200/90"
            >
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              {label}
            </motion.span>
          ))}
        </div>
      );
    }
    if (feature.preview === "score" && "score" in feature && "scoreLabel" in feature) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-2 flex items-center gap-3"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
            <span className="text-xl font-bold text-emerald-400">{feature.score}</span>
          </div>
          <span className="text-sm font-medium text-emerald-400/90">{feature.scoreLabel}</span>
        </motion.div>
      );
    }
    if (feature.preview === "suggestion" && "suggestion" in feature) {
      return (
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-xs text-neutral-400 leading-relaxed border-l-2 border-violet-500/40 pl-3"
        >
          {feature.suggestion}
        </motion.p>
      );
    }
    if (feature.preview === "search" && "searchQuery" in feature && "resultCount" in feature) {
      return (
        <div className="mt-2 space-y-1.5">
          <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-2.5 py-2">
            <svg className="w-3.5 h-3.5 text-neutral-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-[11px] text-neutral-500 truncate">&quot;{feature.searchQuery}&quot;</span>
          </div>
          <p className="text-[10px] text-neutral-500">{feature.resultCount} calls found</p>
        </div>
      );
    }
    if (feature.preview === "ratio" && "repPercent" in feature && "prospectPercent" in feature) {
      return (
        <div className="mt-2 space-y-2">
          <div>
            <div className="flex justify-between text-[10px] text-neutral-500 mb-1">
              <span>Rep</span>
              <span>{feature.repPercent}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${feature.repPercent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-full rounded-full bg-violet-500"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] text-neutral-500 mb-1">
              <span>Prospect</span>
              <span>{feature.prospectPercent}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${feature.prospectPercent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-full rounded-full bg-cyan-500/80"
              />
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: i * 0.07 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 transition-all duration-300 hover:border-violet-500/25 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.2)] hover:bg-white/[0.04] ${className}`}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/25 to-purple-600/20 text-violet-400 border border-violet-500/25 flex items-center justify-center group-hover:border-violet-400/40 group-hover:from-violet-500/30 transition-all duration-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {feature.icon}
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-foreground tracking-tight">{feature.title}</h3>
          <p className="text-sm text-neutral-400 mt-2 leading-relaxed">{feature.description}</p>
        </div>
      </div>
      <div className="rounded-xl border border-white/5 bg-black/20 p-3 min-h-[72px] group-hover:border-violet-500/10 transition-colors duration-300">
        {renderPreview()}
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <Section
      id="features"
      title="Built for revenue teams"
      subtitle="Every conversation, measured and actionable."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} i={i} />
        ))}
      </div>
    </Section>
  );
}
