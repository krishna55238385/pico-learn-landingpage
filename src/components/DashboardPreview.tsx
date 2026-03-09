"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { GlassCard } from "@/components/ui/GlassCard";

function WaveformBar({ height }: { height: number }) {
  return (
    <motion.div
      initial={{ height: 4 }}
      whileInView={{ height }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="w-1.5 rounded-full bg-gradient-to-t from-violet-600 to-violet-400 min-h-[4px]"
    />
  );
}

const waveformHeights = [24, 40, 18, 55, 32, 48, 22, 38, 45, 28, 50, 35];

const widgetTooltips: Record<string, string> = {
  sentiment: "Sentiment trend: How positive or engaged the prospect is over the call duration.",
  talkRatio: "Talk ratio: Balance between rep speaking vs listening. Ideal is more prospect talk in discovery.",
  objections: "Objection frequency: How often and which objections were raised during the conversation.",
  dealRisk: "Deal risk score: AI-derived likelihood of closing based on commitment and next-step clarity.",
};

function DashboardWidget({
  title,
  tooltipKey,
  children,
  delay = 0,
}: {
  title: string;
  tooltipKey: "sentiment" | "talkRatio" | "objections" | "dealRisk";
  children: React.ReactNode;
  delay?: number;
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4 hover:border-violet-500/25 hover:bg-white/[0.04] hover:shadow-[0_0_28px_-8px_rgba(139,92,246,0.2)] transition-all duration-300"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="flex items-center gap-2 mb-3">
        <p className="text-xs font-medium text-neutral-500">{title}</p>
        <span className="relative flex">
          <span className="w-3.5 h-3.5 rounded-full bg-neutral-600/80 flex items-center justify-center text-[10px] text-neutral-400 cursor-help">
            ?
          </span>
          {showTooltip && (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute left-0 top-full mt-1 z-10 w-56 rounded-lg border border-white/10 bg-neutral-900/95 backdrop-blur-sm px-3 py-2 text-[11px] text-neutral-300 shadow-xl"
            >
              {widgetTooltips[tooltipKey]}
            </motion.span>
          )}
        </span>
      </div>
      {children}
    </motion.div>
  );
}

export function DashboardPreview() {
  return (
    <Section
      id="dashboard"
      title="Your AI Revenue Command Center"
      subtitle="One place for every call, deal, and rep."
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Layered glassmorphism: outer glow + card */}
        <div className="relative">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-violet-500/25 via-transparent to-blue-500/25 blur-xl opacity-70" />
          <GlassCard hover={false} className="overflow-hidden relative border-white/10">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/20">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="rounded-lg bg-white/5 px-4 py-1.5 text-xs text-neutral-500">
                  app.picolearn.com/command-center
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 md:p-8">
              <DashboardWidget title="Call Sentiment Timeline" tooltipKey="sentiment" delay={0.05}>
                <div className="flex items-end gap-0.5 h-24">
                  {[65, 70, 55, 72, 68, 75, 80, 78, 82, 85, 88, 90].map((val, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${val}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.03 }}
                      className="flex-1 rounded-t bg-gradient-to-t from-violet-600/80 to-emerald-500/80 min-h-[4px]"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-neutral-500">
                  <span>Start</span>
                  <span>End</span>
                </div>
              </DashboardWidget>

              <DashboardWidget title="Talk vs Listen Ratio" tooltipKey="talkRatio" delay={0.1}>
                <div className="flex gap-6 items-center">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs text-neutral-400 mb-1">
                      <span>Rep</span>
                      <span>42%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "42%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="h-full rounded-full bg-violet-500"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs text-neutral-400 mb-1">
                      <span>Prospect</span>
                      <span>58%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "58%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-full rounded-full bg-emerald-500/80"
                      />
                    </div>
                  </div>
                </div>
              </DashboardWidget>

              <DashboardWidget title="Objection Alerts" tooltipKey="objections" delay={0.15}>
                <div className="space-y-2">
                  {[
                    { type: "Pricing", time: "02:34", suggested: "Value-first response" },
                    { type: "Timing", time: "08:12", suggested: "Quarterly timeline" },
                  ].map((alert, i) => (
                    <motion.div
                      key={alert.type}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="flex items-center justify-between rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-sm font-medium text-amber-200/90">{alert.type}</span>
                        <span className="text-xs text-neutral-500">{alert.time}</span>
                      </div>
                      <span className="text-[10px] text-neutral-400">{alert.suggested}</span>
                    </motion.div>
                  ))}
                </div>
              </DashboardWidget>

              <DashboardWidget title="Deal Risk Score" tooltipKey="dealRisk" delay={0.2}>
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30"
                  >
                    <span className="text-2xl font-bold text-emerald-400">78</span>
                  </motion.div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-400/90">Low risk</p>
                    <p className="text-xs text-neutral-500">Strong commitment signals</p>
                  </div>
                </div>
                <div className="mt-3 flex items-end gap-1 h-8">
                  {waveformHeights.map((h, i) => (
                    <WaveformBar key={i} height={h} />
                  ))}
                </div>
              </DashboardWidget>
            </div>
          </GlassCard>
        </div>
      </motion.div>
    </Section>
  );
}
