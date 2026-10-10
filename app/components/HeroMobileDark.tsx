"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// ── Slide data (same set as desktop) ────────────────────────────────────────
const SLIDES = [
  {
    src: "/images/services/hero-feature.webp",
    alt: "Aerial view of Parkline Infra piling operations",
    heading: "Engineering Strength.\nDelivering Certainty.",
    body: "AA-Class infrastructure — ground improvement, pile foundations, bridges & railways across India since 2015.",
    caption: "Pile Foundation & Ground Improvement",
  },
  {
    src: "/images/services/ground-improvement.webp",
    alt: "Ground improvement machinery on site",
    heading: "Expert Ground\nImprovement Solutions",
    body: "From stone columns to dynamic compaction — engineered soil solutions for demanding foundations.",
    caption: "Geotechnical Engineering",
  },
  {
    src: "/images/services/pile-foundation.webp",
    alt: "Piling rig on construction site",
    heading: "Deep Pile Foundation\nExcellence",
    body: "Driven piles, bored piles, precast concrete — load-bearing certainty on every project.",
    caption: "Deep Foundation Works",
  },
  {
    src: "/images/services/maintenance-rrv.webp",
    alt: "Road Rail Vehicle on railway tracks",
    heading: "Railway-Approved\nRRV Manufacturing",
    body: "In-house Road Rail Vehicle manufacturing across EDFC/WDFC corridors.",
    caption: "Railway Infrastructure",
  },
];

const INTERVAL = 5500;
// Mobile header height = main nav bar h-[72px]
const MOBILE_HEADER = 80;

interface Props { founded: number | string }

export default function HeroMobileDark({ founded }: Props) {
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [reduced]); // eslint-disable-line react-hooks/exhaustive-deps

  const slide = SLIDES[current];

  return (
    <div
      className="lg:hidden flex flex-col"
      style={{ minHeight: "calc(88svh - 84px)" }}
    >
      {/* ── Image section (top ~52%) ───────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ height: "52svh", minHeight: "200px" }}>
        {/* Cross-fade images */}
        {SLIDES.map((s, i) => (
          <div
            key={s.src}
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transition: reduced ? "none" : "opacity 700ms ease-in-out",
            }}
          >
            <Image
              src={s.src}
              alt={i === current ? s.alt : ""}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
              aria-hidden={i !== current}
            />
          </div>
        ))}

        {/* Credential badge — top left */}
        <div className="absolute top-3 left-4 z-10">
          <span className="inline-flex items-center px-2.5 py-1 bg-gold-500 text-navy-900 font-mono text-[8px] font-bold tracking-[0.14em] uppercase rounded-full select-none">
            AA Class PWD · Since {founded}
          </span>
        </div>

        {/* Bottom caption on image */}
        <div className="absolute bottom-3 left-4 z-10">
          <AnimatePresence mode="wait">
            <motion.span
              key={`mcap-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="font-mono text-[8px] text-white/60 tracking-[0.18em] uppercase"
            >
              {slide.caption}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Gold text panel (bottom ~48%) ─────────────────────────────── */}
      <div className="bg-gold-500 flex-1 flex flex-col justify-center px-5 pt-6 pb-7">

        {/* Heading */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`mh-${current}`}
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-navy-900 whitespace-pre-line mb-3"
            style={{
              fontSize: "clamp(1.65rem, 6vw, 2.2rem)",
              lineHeight: "1.12",
              letterSpacing: "-0.01em",
            }}
          >
            {slide.heading}
          </motion.h1>
        </AnimatePresence>

        {/* Body */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`mb-${current}`}
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.35, delay: 0.07 }}
            className="text-navy-900/65 text-sm leading-relaxed mb-5 max-w-[36ch]"
          >
            {slide.body}
          </motion.p>
        </AnimatePresence>

        {/* CTA */}
        <Link
          href="/contact"
          className="self-start inline-flex items-center gap-2 border-2 border-navy-900 text-navy-900 px-5 py-2.5 font-bold text-sm hover:bg-navy-900 hover:text-gold-500 transition-all duration-200 mb-5"
        >
          Request a Quote
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        {/* Slide dots */}
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-[3px] transition-all duration-300"
              style={{
                width: i === current ? "24px" : "12px",
                background: i === current ? "#0F1B3D" : "rgba(15,27,61,0.22)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
