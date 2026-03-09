"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AIWaveform from "@/components/AIWaveform";
import TypingTranscript from "@/components/TypingTranscript";
import TriggeredInsights from "@/components/TriggeredInsights";
import ConversationTimeline from "@/components/ConversationTimeline";
import CallSummary from "@/components/CallSummary";

const WAVEFORM_BARS = 48;
const barHeights = Array.from({ length: WAVEFORM_BARS }, () => 16 + Math.random() * 72);

function AnimatedWaveformBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.12]">
        <div className="flex items-end gap-0.5 h-32 w-full max-w-4xl px-8">
          {barHeights.map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: [h * 0.4, h, h * 0.6, h] }}
              transition={{
                duration: 2.2 + (i % 6) * 0.15,
                repeat: Infinity,
                delay: i * 0.04,
              }}
              className="flex-1 min-w-[6px] max-w-[12px] rounded-full bg-gradient-to-t from-violet-600/60 to-blue-500/50"
              style={{ height: h }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const floatingCards = [
  {
    label: "Sentiment Score",
    value: "+87% positive",
    trend: "positive",
    delay: 0.2,
    position: "top-1/4 left-[6%]",
  },
  {
    label: "Objection Detected",
    value: "Pricing concern",
    trend: "alert",
    delay: 0.4,
    position: "top-1/3 right-[10%]",
  },
  {
    label: "Deal Risk",
    value: "Low",
    trend: "safe",
    delay: 0.1,
    position: "bottom-1/3 left-[12%]",
  },
  {
    label: "Talk Ratio",
    value: "Rep 42% / Prospect 58%",
    trend: "neutral",
    delay: 0.3,
    position: "bottom-1/4 right-[8%]",
  },
];

function FloatingCard({
  label,
  value,
  trend,
  delay,
  position,
}: {
  label: string;
  value: string;
  trend: string;
  delay: number;
  position: string;
}) {
  const trendColor =
    trend === "positive"
      ? "text-emerald-400 border-emerald-500/40 bg-emerald-500/5"
      : trend === "alert"
        ? "text-amber-400 border-amber-500/40 bg-amber-500/5"
        : trend === "safe"
          ? "text-blue-400 border-blue-500/40 bg-blue-500/5"
          : "text-neutral-300 border-white/15 bg-white/5";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute ${position} hidden lg:block`}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
        whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
        className={`rounded-xl border backdrop-blur-xl px-4 py-3 shadow-lg transition-shadow duration-300 hover:shadow-[0_0_28px_-6px_rgba(139,92,246,0.35)] ${trendColor}`}
      >
        <p className="text-[10px] uppercase tracking-wider opacity-90 font-medium">{label}</p>
        <p className="text-sm font-semibold mt-0.5">{value}</p>
      </motion.div>
    </motion.div>
  );
}

function HeroLiveDemo() {
  const [visibleInsightCount, setVisibleInsightCount] = useState(0);
  const [completedLines, setCompletedLines] = useState(0);

  const handleLineComplete = (lineIndex: number) => {
    setVisibleInsightCount((prev) => Math.min(prev + 1, 4));
    setCompletedLines(lineIndex + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-24 md:mt-32 max-w-4xl mx-auto px-4"
    >
      <div className="relative">
        <p className="text-center text-xs uppercase tracking-wider text-neutral-500 mb-4">
          Live call simulator
        </p>
        <div
          className="absolute inset-0 blur-3xl opacity-50 bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-500 rounded-full -z-10"
          aria-hidden
        />
        <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 overflow-x-hidden overflow-y-visible shadow-2xl">
          {/* AI Listening + analyzing indicator */}
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <div className="text-xs text-purple-300/90 flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
              </span>
              AI Listening To Live Call
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-xs text-purple-400"
            >
              AI analyzing conversation…
            </motion.div>
          </div>

          {/* Waveform (reactive / speech-like) */}
          <AIWaveform
            bars={40}
            height="h-24"
            sentiment="positive"
            showListeningLabel={false}
            barWidth="w-[5px]"
            gap="gap-[3px]"
            reactive
          />

          {/* Conversation timeline */}
          <ConversationTimeline completedCount={completedLines} />

          {/* Typing transcript with phrase highlight */}
          <div className="mt-6 relative">
            <div className="bg-black/40 border border-white/10 backdrop-blur-xl rounded-xl p-6 h-52 overflow-hidden">
              <TypingTranscript
                isPlaying
                onLineComplete={handleLineComplete}
                highlightPhrase="Forecasting accuracy is terrible"
              />
            </div>
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 rounded-b-xl bg-gradient-to-t from-black/60 to-transparent"
              aria-hidden
            />
          </div>

          {/* Insights appear as transcript progresses */}
          <TriggeredInsights visibleCount={visibleInsightCount} />

          {/* Call summary (AI report) */}
          <CallSummary visible={completedLines >= 5} />
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-mesh">
      <AnimatedWaveformBackground />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-violet-500/15 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/12 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-indigo-500/8 blur-[150px]" />
      </div>

      {floatingCards.map((card) => (
        <FloatingCard key={card.label} {...card} />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2.5 mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-neutral-400">
            AI-powered sales intelligence
          </span>
        </motion.div>

        {/* Headline with glowing gradient behind */}
        <div className="relative inline-block px-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="absolute -inset-6 bg-gradient-to-r from-violet-500/25 via-purple-500/20 to-blue-500/25 rounded-3xl blur-3xl -z-10"
            aria-hidden
          />
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-5xl mx-auto leading-[1.08] relative"
          >
            Your AI Sales Manager For Every Sales Call.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
        >
          Picolearn listens to conversations, detects sentiment and objections,
          and coaches your sales team automatically.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-9 py-4 text-base font-semibold text-white hover:from-violet-500 hover:to-purple-500 transition-all shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02]"
          >
            Start free trial
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-9 py-4 text-base font-medium text-foreground hover:bg-white/10 hover:border-white/20 transition-colors"
          >
            See how it works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-neutral-500"
        >
          <span className="flex items-center gap-3">
            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Used by high-performance revenue teams
          </span>
          <span className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            SOC2-ready architecture
          </span>
          <span className="flex items-center gap-3">
            <svg className="w-5 h-5 text-violet-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            Works with Zoom, Dialer, CRM systems
          </span>
        </motion.div>

        {/* Live demo: waveform + typing transcript + triggered insights */}
        <HeroLiveDemo />
      </div>
    </section>
  );
}
