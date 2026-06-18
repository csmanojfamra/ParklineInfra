"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
}

export default function StatCounter({ value, suffix = "", label, light = false }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  const numColor = light ? "text-gold-500" : "text-navy-800";
  const labelColor = light ? "text-white/60" : "text-slate-500";

  return (
    <div ref={ref} className="text-center">
      <div className={`font-display text-5xl md:text-6xl leading-none ${numColor}`}>
        {count}
        <span className="text-gold-500">{suffix}</span>
      </div>
      <div className={`font-mono text-xs tracking-[0.15em] uppercase mt-2 ${labelColor}`}>
        {label}
      </div>
    </div>
  );
}
