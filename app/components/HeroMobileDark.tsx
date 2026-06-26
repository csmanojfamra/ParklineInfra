"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// 2 images on mobile — keeps it smooth on low-end devices
const SLIDES = [
  { src: "/images/services/hero-feature.webp",  alt: "Aerial flyover of Parkline Infra piling operations", caption: "Elevated Flyover & Pile Foundation" },
  { src: "/images/services/structure-work.png", alt: "Bridge girder construction",                          caption: "Major Bridge & RCC Structures" },
];
const SLIDE_DURATION = 5500;
const FADE_DURATION  = 1200; // ms for CSS transition

interface Props { founded: number | string }

export default function HeroMobileDark({ founded }: Props) {
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduced) return;
    const advance = () => setCurrent(c => (c + 1) % SLIDES.length);
    const start = () => { timerRef.current = setInterval(advance, SLIDE_DURATION); };
    const stop  = () => { if (timerRef.current) clearInterval(timerRef.current); };
    const onVis = () => document.hidden ? stop() : start();
    document.addEventListener("visibilitychange", onVis);
    start();
    return () => { stop(); document.removeEventListener("visibilitychange", onVis); };
  }, [reduced]);

  return (
    <div className="lg:hidden relative overflow-hidden" style={{ minHeight: "100svh" }}>

      {/* Full-bleed background — CSS cross-fade via opacity */}
      <div className="absolute inset-0 bg-[#0a1223]">
        {SLIDES.map((s, i) => (
          <div
            key={s.src}
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transition: reduced ? "none" : `opacity ${FADE_DURATION}ms ease-in-out`,
            }}
          >
            <Image
              src={s.src}
              alt={i === 0 ? s.alt : ""}
              aria-hidden={i !== current}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Heavy full scrim — legibility across all slides */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,18,44,0.80) 0%, rgba(10,18,44,0.68) 55%, rgba(10,18,44,0.88) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col" style={{ minHeight: "100svh" }}>
        {/* Nav spacer */}
        <div className="h-[72px]" />

        {/* Copy — above the fold */}
        <div className="px-5 pt-5 pb-6 flex-1">
          <span
            className="inline-flex items-center px-3 py-1 font-mono text-[9px] font-bold tracking-[0.18em] uppercase rounded-full mb-4 select-none"
            style={{ background: "#E8A92C", color: "#0a1223" }}
          >
            AA Class PWD Contractor · Since {founded}
          </span>
          <h1
            className="font-display font-black text-[clamp(2rem,8vw,2.6rem)] text-white mb-3"
            style={{ letterSpacing: "-0.02em", lineHeight: "0.97" }}
          >
            Engineering{" "}
            <span style={{ color: "#E8A92C" }}>Strength.</span>
            <br />Delivering Certainty.
          </h1>
          <p className="text-sm leading-[1.65] mb-5 max-w-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
            India&apos;s AA-Class infrastructure contractor — ground improvement, pile foundations,
            bridges &amp; railways across 8 states since 2015.
          </p>
          <div className="flex gap-2.5 mb-4">
            <Link
              href="/contact"
              className="group flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-gold-500 text-navy-900 font-bold rounded-xl text-xs whitespace-nowrap hover:bg-gold-400 transition-colors shadow-[0_2px_12px_rgba(242,185,28,0.35)]"
            >
              Request a Quote
              <ArrowRight className="w-3 h-3 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-white/25 text-white/80 rounded-xl text-xs whitespace-nowrap hover:border-gold-500 hover:text-gold-500 transition-colors"
            >
              Explore Services
            </Link>
          </div>
          <p className="font-mono text-[10px] text-white/35 tracking-widest">8 States · 9 Projects</p>
        </div>

        {/* Bottom area: caption left, credential right */}
        <div
          className="px-5 flex items-end justify-between gap-3"
          style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        >
          {/* Left: caption pill + dots */}
          <div className="flex flex-col items-start gap-1.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={reduced ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex items-center gap-2 px-2.5 py-1 rounded-full select-none"
                style={{
                  background: "rgba(10,18,44,0.60)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                <span
                  className="font-mono text-[7px] font-semibold tracking-[0.15em] uppercase whitespace-nowrap"
                  style={{ color: "#F2B91C" }}
                >
                  CAPABILITY
                </span>
                <span
                  className="w-px h-2.5 shrink-0"
                  style={{ background: "rgba(255,255,255,0.18)" }}
                />
                <span className="text-white/80 text-[10px] font-normal whitespace-nowrap">
                  {SLIDES[current].caption}
                </span>
              </motion.div>
            </AnimatePresence>

            {!reduced && (
              <div className="flex items-center gap-1.5 pl-0.5">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width:      i === current ? "14px" : "5px",
                      height:     "5px",
                      background: i === current ? "rgba(242,185,28,0.9)" : "rgba(255,255,255,0.28)",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right: fixed credential chip */}
          <span
            className="inline-flex items-center px-2.5 py-1 font-mono text-[7.5px] font-semibold tracking-[0.12em] uppercase rounded-full select-none shrink-0"
            style={{
              background: "rgba(10,18,44,0.48)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(242,185,28,0.22)",
              color: "rgba(242,185,28,0.72)",
            }}
          >
            AA-CLASS · 8 STATES · SINCE 2015
          </span>
        </div>
      </div>
    </div>
  );
}
