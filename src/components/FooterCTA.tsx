"use client";

import { motion } from "framer-motion";

export function FooterCTA() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-white/10">
      {/* Match landing page gradient / glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-violet-600/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-purple-600/10 blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
          Ready to turn calls into revenue?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-neutral-400 leading-relaxed">
          Join 1,000+ teams using Picolearn to dominate their market.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-base font-bold text-white hover:from-violet-500 hover:to-purple-500 transition-all shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02]"
          >
            Get Started Now
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-medium text-foreground hover:bg-white/10 hover:border-white/20 transition-colors"
          >
            Talk to Sales
          </a>
        </div>
      </motion.div>
    </section>
  );
}
