"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// ── Slideshow config ─────────────────────────────────────────────────────────
const SLIDES = [
  { src: "/images/services/hero-feature.webp",     alt: "Aerial flyover of Parkline Infra piling operations at golden hour", caption: "Elevated Flyover & Pile Foundation" },
  { src: "/images/services/structure-work.png",    alt: "Bridge girder construction",  caption: "Major Bridge & RCC Structures" },
  { src: "/images/services/steel-fabrication.png", alt: "Steel fabrication workshop",  caption: "Structural Steel Fabrication" },
  { src: "/images/services/pile-foundation.png",   alt: "Piling rig on site",          caption: "Deep Pile Foundations" },
];
const SLIDE_DURATION = 5500; // ms between cross-fades
const FADE_DURATION  = 1.2;  // seconds

// ── Easing ───────────────────────────────────────────────────────────────────
const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ── Client logos ─────────────────────────────────────────────────────────────
const LOGOS = [
  { name: "Adani Group",        logo: "/images/clients/adani.png" },
  { name: "L&T Construction",   logo: "/images/clients/lt.png" },
  { name: "GMR Infrastructure", logo: "/images/clients/gmr.png" },
  { name: "KEC International",  logo: "/images/clients/kec.png" },
  { name: "Dilip Buildcon",     logo: "/images/clients/dilip-buildcon.png" },
];

interface Props { founded: number | string }

export default function HeroDesktopDark({ founded }: Props) {
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [prev,    setPrev]    = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Auto-advance; pause when tab hidden ──────────────────────────────────
  useEffect(() => {
    if (reduced) return; // static image for reduced-motion

    const advance = () => {
      setCurrent(c => {
        setPrev(c);
        return (c + 1) % SLIDES.length;
      });
    };

    const start = () => { timerRef.current = setInterval(advance, SLIDE_DURATION); };
    const stop  = () => { if (timerRef.current) clearInterval(timerRef.current); };

    const onVis = () => document.hidden ? stop() : start();
    document.addEventListener("visibilitychange", onVis);
    start();
    return () => { stop(); document.removeEventListener("visibilitychange", onVis); };
  }, [reduced]);

  // ── Orchestrated entrance variants ───────────────────────────────────────
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
  };
  const fadeUp = {
    hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EXPO } },
  };
  const clipRise = {
    hidden: reduced ? { y: 0 }    : { y: "108%" },
    show:   { y: 0, transition: { duration: 0.82, ease: EXPO } },
  };
  const chipStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0 } },
  };

  return (
    <div className="hidden lg:flex relative min-h-screen items-center overflow-hidden">

      {/* ── Slideshow background ─────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0 bg-[#0a1223]">
        {/* Outgoing slide fades out */}
        {prev !== null && (
          <motion.div
            key={`prev-${prev}`}
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
            onAnimationComplete={() => setPrev(null)}
          >
            <Image
              src={SLIDES[prev].src}
              alt=""
              fill
              aria-hidden
              className="object-cover object-right-center"
              sizes="100vw"
            />
          </motion.div>
        )}

        {/* Active slide — ken-burns scale while visible */}
        <motion.div
          key={`slide-${current}`}
          className="absolute inset-0"
          initial={{ opacity: prev !== null ? 0 : 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0"
            animate={reduced ? {} : { scale: [1, 1.06] }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear", repeat: 0 }}
          >
            <Image
              src={SLIDES[current].src}
              alt={SLIDES[current].alt}
              fill
              className="object-cover object-right-center"
              priority={current === 0}
              sizes="100vw"
              quality={82}
            />
          </motion.div>
        </motion.div>

        {/* Preload upcoming images (hidden, off-screen) */}
        {!reduced && SLIDES.slice(1).map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt=""
            aria-hidden
            fill
            className="opacity-0 pointer-events-none select-none"
            style={{ position: "absolute", zIndex: -1 }}
            sizes="1px"
            priority={false}
          />
        ))}
      </div>

      {/* ── Directional scrims (fixed; always on top of photo) ───────────── */}
      {/* Left-to-right: heavy navy → transparent */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(10,18,44,0.97) 0%, rgba(10,18,44,0.92) 30%, rgba(10,18,44,0.55) 58%, rgba(10,18,44,0.10) 80%, transparent 100%)",
        }}
      />
      {/* Bottom-up: keeps trusted-by row legible */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(10,18,44,0.72) 0%, rgba(10,18,44,0.18) 18%, transparent 35%)",
        }}
      />
      {/* Top-down: blends behind transparent nav */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,18,44,0.55) 0%, transparent 18%)",
        }}
      />

      {/* ── Overlaid content ─────────────────────────────────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-14">
        <motion.div
          className="max-w-[54%]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Gold badge — navy-900 on gold-500: ~12:1 contrast, well above AA */}
          <motion.div className="inline-flex mb-5" variants={fadeUp}>
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.18em] uppercase rounded-full select-none"
              style={{ background: "#E8A92C", color: "#0a1223" }}
            >
              AA Class PWD Contractor · Since {founded}
            </span>
          </motion.div>

          {/* H1 — tight negative tracking, compressed line-height */}
          <div className="mb-6">
            <div className="overflow-hidden">
              <motion.div variants={clipRise}>
                <span
                  className="block font-display font-black text-[clamp(2.8rem,3.8vw,4.8rem)] text-white"
                  style={{ letterSpacing: "-0.02em", lineHeight: "0.97" }}
                >
                  Engineering{" "}
                  <span style={{ color: "#E8A92C" }}>Strength.</span>
                </span>
              </motion.div>
            </div>
            <div className="overflow-hidden pb-[0.14em]">
              <motion.div variants={clipRise} transition={{ duration: 0.82, delay: 0.08, ease: EXPO }}>
                <span
                  className="block font-display font-black text-[clamp(2.8rem,3.8vw,4.8rem)] text-white"
                  style={{ letterSpacing: "-0.02em", lineHeight: "0.97" }}
                >
                  Delivering Certainty.
                </span>
              </motion.div>
            </div>
          </div>

          {/* Paragraph — off-white, slightly smaller, max ~48ch */}
          <motion.p
            className="text-[0.9375rem] leading-[1.65] mb-6 max-w-[48ch]"
            style={{ color: "rgba(255,255,255,0.72)" }}
            variants={fadeUp}
          >
            India&apos;s trusted AA-Class infrastructure contractor — delivering ground
            improvement, deep pile foundations, bridges, steel fabrication and railway
            structures across eight states since 2015.
          </motion.p>

          {/* Chips — defined border, backdrop-blur, faint navy fill */}
          <motion.div className="flex flex-wrap gap-2 mb-7" variants={chipStagger}>
            {["8 States", "9 Marquee Projects", "Railway-Approved RRV", "AA-Class PWD"].map((b) => (
              <motion.span
                key={b}
                variants={fadeUp}
                className="px-3 py-1.5 text-xs font-mono tracking-wide rounded-lg select-none"
                style={{
                  color: "rgba(255,255,255,0.82)",
                  background: "rgba(10,18,44,0.45)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                {b}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div className="flex gap-4" variants={fadeUp}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-all duration-200 text-sm shadow-[0_4px_16px_rgba(242,185,28,0.32)] hover:shadow-[0_6px_24px_rgba(242,185,28,0.45)] hover:-translate-y-px"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/20 text-white/80 font-semibold rounded-xl hover:border-gold-500 hover:text-gold-500 transition-all duration-200 text-sm"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Trusted-by logos */}
          <motion.div className="mt-10" variants={fadeUp}>
            <p className="eyebrow text-white/35 mb-3">Trusted by</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {LOGOS.map((c) => (
                <div
                  key={c.name}
                  className="h-7 flex items-center transition-all duration-200"
                  style={{ filter: "brightness(0) invert(1) opacity(0.38)" }}
                  onMouseEnter={e => (e.currentTarget.style.filter = "brightness(0) invert(1) opacity(0.80)")}
                  onMouseLeave={e => (e.currentTarget.style.filter = "brightness(0) invert(1) opacity(0.38)")}
                >
                  <Image src={c.logo} alt={c.name} width={72} height={28} className="object-contain h-7 w-auto" />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom-LEFT: rotating caption pill + dots ───────────────────── */}
      <motion.div
        className="absolute bottom-6 left-8 z-20 flex flex-col items-start gap-2"
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1, ease: EXPO }}
      >
        {/* Single pill — AnimatePresence mode="wait" prevents ghost overlap */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="flex items-center gap-2.5 px-3 py-1.5 rounded-full select-none"
            style={{
              background: "rgba(10,18,44,0.60)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <span
              className="font-mono text-[8px] font-semibold tracking-[0.16em] uppercase whitespace-nowrap"
              style={{ color: "#F2B91C" }}
            >
              CAPABILITY
            </span>
            <span className="w-px h-3 bg-white/18 shrink-0" style={{ background: "rgba(255,255,255,0.18)" }} />
            <span className="text-white/80 text-[11px] font-normal whitespace-nowrap">
              {SLIDES[current].caption}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Slide dots — tucked below the caption */}
        {!reduced && (
          <div className="flex items-center gap-1.5 pl-1">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => { setPrev(current); setCurrent(i); }}
                aria-label={`Go to slide ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width:      i === current ? "16px" : "5px",
                  height:     "5px",
                  background: i === current ? "rgba(242,185,28,0.9)" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* ── Bottom-RIGHT: fixed credential chip ─────────────────────────── */}
      <motion.div
        className="absolute bottom-6 right-8 z-20"
        initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.15, ease: EXPO }}
      >
        <span
          className="inline-flex items-center px-2.5 py-1 font-mono text-[8px] font-semibold tracking-[0.13em] uppercase rounded-full select-none"
          style={{
            background: "rgba(10,18,44,0.48)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(242,185,28,0.25)",
            color: "rgba(242,185,28,0.75)",
          }}
        >
          AA-CLASS · 8 STATES · SINCE 2015
        </span>
      </motion.div>
    </div>
  );
}
