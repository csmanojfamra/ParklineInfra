"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SLIDES = [
  { src: "/images/services/hero-feature.webp",  alt: "Aerial flyover of Parkline Infra piling operations", caption: "Elevated Flyover & Pile Foundation" },
  { src: "/images/services/structure-work.png", alt: "Bridge girder construction",                          caption: "Major Bridge & RCC Structures" },
];
const SLIDE_DURATION = 5500;
const FADE_DURATION  = 1200;

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
    <div className="lg:hidden relative overflow-hidden">

      {/* Background slideshow */}
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

      {/* Scrim */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,18,44,0.85) 0%, rgba(10,18,44,0.55) 55%, rgba(10,18,44,0.90) 100%)",
        }}
      />

      {/* Copy — natural height; pb-20 creates the image-reveal band + room for caption */}
      <div className="relative z-10 px-5 pb-20" style={{ paddingTop: "calc(72px + 1.25rem)" }}>
        {/* Eyebrow badge */}
        <span
          className="inline-flex items-center px-3 py-1 font-mono text-[9px] font-bold tracking-[0.18em] uppercase rounded-full mb-4 select-none"
          style={{ background: "#E8A92C", color: "#0a1223" }}
        >
          AA Class PWD Contractor · Since {founded}
        </span>

        {/* H1 */}
        <h1
          className="font-display font-black text-[clamp(2rem,8vw,2.6rem)] text-white mb-3"
          style={{ letterSpacing: "-0.02em", lineHeight: "0.97", paddingBottom: "0.12em" }}
        >
          Engineering{" "}
          <span style={{ color: "#E8A92C" }}>Strength.</span>
          <br />Delivering Certainty.
        </h1>

        {/* Paragraph */}
        <p
          className="text-sm leading-[1.65] mb-5 max-w-[38ch]"
          style={{ color: "rgba(255,255,255,0.72)" }}
        >
          India&apos;s AA-Class contractor — ground improvement, foundations, bridges
          &amp; railways across 8 states.
        </p>

        {/* CTAs */}
        <div className="flex gap-2.5">
          <Link
            href="/contact"
            className="group flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 font-bold rounded-xl text-xs whitespace-nowrap transition-colors shadow-[0_2px_12px_rgba(232,169,44,0.35)]"
            style={{ background: "#E8A92C", color: "#0a1223" }}
          >
            Request a Quote
            <ArrowRight className="w-3 h-3 shrink-0 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-white/45 text-white rounded-xl text-xs whitespace-nowrap hover:border-gold-500 hover:text-gold-500 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Bottom caption — absolutely pinned, clears chat widget + safe area */}
      <div
        className="absolute left-5 z-20"
        style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
      >
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
                background: "rgba(10,18,44,0.65)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <span
                className="font-mono text-[7px] font-semibold tracking-[0.15em] uppercase whitespace-nowrap"
                style={{ color: "#E8A92C" }}
              >
                CAPABILITY
              </span>
              <span className="w-px h-2.5 shrink-0" style={{ background: "rgba(255,255,255,0.20)" }} />
              <span
                className="text-[10px] font-normal whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
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
                    width:      i === current ? "18px" : "6px",
                    height:     "6px",
                    background: i === current ? "rgba(232,169,44,0.9)" : "rgba(255,255,255,0.30)",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
