"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const LINES = [
  "Rep: Thanks for taking the call today.",
  "Prospect: We manage our pipeline in spreadsheets.",
  "Rep: What's the biggest challenge with that?",
  "Prospect: Forecasting accuracy is terrible.",
  "AI: ⚡ Deal risk increased",
];

const CHAR_DELAY_MS = 35;
const HIGHLIGHT_PHRASE = "Forecasting accuracy is terrible";

function getSpeaker(line: string): "rep" | "prospect" | "ai" {
  if (line.startsWith("AI:")) return "ai";
  if (line.startsWith("Prospect:")) return "prospect";
  return "rep";
}

function renderLine(
  line: string,
  highlightPhrase: string,
  isLastLine: boolean,
  isPartial: boolean
) {
  const speaker = getSpeaker(line);
  const speakerColors = {
    rep: "text-violet-400",
    prospect: "text-cyan-400",
    ai: "text-amber-400",
  };
  const labelEnd = line.indexOf(":") + 1;
  const label = line.slice(0, labelEnd);
  const rest = line.slice(labelEnd, isPartial ? undefined : line.length);

  const needsHighlight = rest.includes(highlightPhrase) && !isPartial;
  const content = needsHighlight ? (
    <>
      {rest.split(highlightPhrase)[0]}
      <span className="bg-purple-500/25 text-purple-100 px-1.5 py-0.5 rounded border border-purple-500/30">
        {highlightPhrase}
      </span>
      {rest.split(highlightPhrase)[1]}
    </>
  ) : (
    rest
  );

  if (speaker === "ai") {
    return (
      <div className="flex gap-2 items-start mt-3">
        <div className="flex-shrink-0 w-px h-full min-h-[1.5em] bg-amber-500/50 rounded-full" />
        <div className="flex-1 rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2">
          <span className={`font-semibold ${speakerColors.ai}`}>{label}</span>
          <span className="text-amber-100/90"> {content}</span>
        </div>
      </div>
    );
  }

  return (
    <p className="text-sm leading-relaxed">
      <span className={`font-semibold ${speakerColors[speaker]}`}>{label}</span>
      <span className="text-neutral-300"> {content}</span>
    </p>
  );
}

interface TypingTranscriptProps {
  onLineComplete?: (lineIndex: number) => void;
  highlightPhrase?: string;
  className?: string;
  /** When false, typing does not start (for "Play demo" flow) */
  isPlaying?: boolean;
}

export default function TypingTranscript({
  onLineComplete,
  highlightPhrase = HIGHLIGHT_PHRASE,
  className = "",
  isPlaying = true,
}: TypingTranscriptProps) {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLineComplete = useCallback(
    (idx: number) => {
      onLineComplete?.(idx);
    },
    [onLineComplete]
  );

  useEffect(() => {
    if (!isPlaying || lineIndex >= LINES.length) {
      if (lineIndex >= LINES.length) setIsComplete(true);
      return;
    }

    const line = LINES[lineIndex];
    const timeout = setTimeout(() => {
      setText((prev) => prev + line[charIndex]);
      setCharIndex((c) => c + 1);

      if (charIndex === line.length - 1) {
        handleLineComplete(lineIndex);
        setLineIndex((l) => l + 1);
        setCharIndex(0);
        setText((prev) => prev + "\n");
      }
    }, CHAR_DELAY_MS);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, handleLineComplete, isPlaying]);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [text]);

  const lines = text.split("\n").filter(Boolean);
  const currentLine = lineIndex < LINES.length ? LINES[lineIndex].slice(0, charIndex) : "";

  if (!isPlaying && !text) {
    return (
      <div className={`text-sm font-sans text-neutral-500 ${className}`}>
        <p>Click &quot;Play demo&quot; to simulate a live call.</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`text-sm font-sans overflow-y-auto overflow-x-hidden ${className}`}
    >
      <div className="space-y-2 pr-2">
        {lines.map((line, i) => (
          <div key={i}>
            {renderLine(line, highlightPhrase, false, false)}
          </div>
        ))}
        {currentLine && (
          <div key="current" className="inline">
            {renderLine(currentLine, highlightPhrase, true, true)}
            {!isComplete && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="inline-block w-0.5 h-4 align-middle bg-violet-400 ml-0.5"
                aria-hidden
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
