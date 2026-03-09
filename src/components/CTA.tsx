"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="cta" className="relative py-28 md:py-36 overflow-hidden scroll-mt-24">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139, 92, 246, 0.2), transparent 50%)",
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59, 130, 246, 0.14), transparent 50%)",
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139, 92, 246, 0.2), transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-violet-600/18 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/12 blur-[80px] pointer-events-none" />

      {/* Subtle waveform behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08]">
        <div className="flex items-end gap-0.5 h-20 w-full max-w-2xl px-8">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [8, 16 + (i % 5) * 4, 10, 20] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.04 }}
              className="flex-1 min-w-[4px] max-w-[8px] rounded-full bg-gradient-to-t from-violet-600/80 to-blue-500/60"
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
          Your AI Sales Manager Is Listening To Every Call.
        </h2>
        <p className="mt-8 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Stop guessing why deals close or fail.
          <br />
          Let AI analyze every conversation.
        </p>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-10 py-4 text-base font-semibold text-white hover:from-violet-500 hover:to-purple-500 transition-all shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02]"
          >
            Start Free Trial
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-10 py-4 text-base font-medium text-foreground hover:bg-white/10 hover:border-white/20 transition-colors"
          >
            Book Demo
          </a>
        </div>
        <p className="mt-10 text-sm text-neutral-500">
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </motion.div>
    </section>
  );
}
