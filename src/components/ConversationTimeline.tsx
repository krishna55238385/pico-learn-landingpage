"use client";

import { motion } from "framer-motion";

const SEGMENTS = [
  { speaker: "rep", label: "Rep", color: "bg-violet-500" },
  { speaker: "prospect", label: "Prospect", color: "bg-cyan-500" },
  { speaker: "rep", label: "Rep", color: "bg-violet-500" },
  { speaker: "prospect", label: "Prospect", color: "bg-cyan-500" },
  { speaker: "ai", label: "AI Insight", color: "bg-amber-500" },
];

interface ConversationTimelineProps {
  /** Number of segments completed (0–5), tracks transcript progress */
  completedCount: number;
}

export default function ConversationTimeline({ completedCount }: ConversationTimelineProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
        <span className="text-[10px] uppercase tracking-wider text-neutral-500">
          Conversation timeline
        </span>
        <div className="flex items-center gap-4 text-[10px] text-neutral-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-1.5 rounded-sm bg-violet-500" /> Rep
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-1.5 rounded-sm bg-cyan-500" /> Prospect
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-1.5 rounded-sm bg-amber-500" /> AI
          </span>
        </div>
      </div>
      <div className="flex h-2.5 rounded-full overflow-hidden bg-white/5 border border-white/10">
        {SEGMENTS.map((seg, i) => (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            animate={{ width: i < completedCount ? "20%" : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`flex-shrink-0 h-full ${seg.color} opacity-90`}
          />
        ))}
      </div>
      <div className="flex justify-between mt-1.5 text-[10px] text-neutral-500">
        <span>00:00</span>
        <span>00:12</span>
      </div>
    </div>
  );
}
