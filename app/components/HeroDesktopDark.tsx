"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const SLIDES = [
  {
    src: "/images/services/hero-feature.webp",
    alt: "Parkline Infra piling operations",
    eyebrow: "AA-Class Contractor",
    heading: "Engineering\nStrength.",
    sub: "Foundation & ground improvement specialists across India since 2015.",
    caption: "Pile Foundation & Ground Improvement",
  },
  {
    src: "/images/services/ground-improvement.webp",
    alt: "Ground improvement machinery on site",
    eyebrow: "Geotechnical Engineering",
    heading: "Ground\nImprovement.",
    sub: "Stone columns, dynamic compaction & soil reinforcement solutions.",
    caption: "Geotechnical Works",
  },
  {
    src: "/images/services/pile-foundation.webp",
    alt: "Piling rig on construction site",
    eyebrow: "Deep Foundations",
    heading: "Pile\nFoundations.",
    sub: "Driven piles, bored piles & precast concrete for any load.",
    caption: "Deep Foundation Works",
  },
  {
    src: "/images/services/maintenance-rrv.webp",
    alt: "Road Rail Vehicle on railway tracks",
    eyebrow: "Railway Infrastructure",
    heading: "RRV\nManufacturing.",
    sub: "In-house road rail vehicles for EDFC & WDFC corridors.",
    caption: "Railway Infrastructure",
  },
];

const INTERVAL = 5500;
// Header: single nav bar 96px (no utility bar)
const HEADER_H = 116;

interface Props { founded: number | string }

export default function HeroDesktopDark({ founded }: Props) {
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(0);

  const goTo = (i: number) => setCurrent(i);
  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [reduced]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="hidden lg:block relative overflow-hidden"
      style={{ height: "calc(100vh - 268px)", minHeight: "380px", maxHeight: "700px" }}
    >

      {/* ── Solid gold left panel ─────────────────────────────────────────── */}
      {/* 52% wide so the chevron tip (at 38%) creates a ~14% triangle of image inside gold */}
      <div
        className="absolute inset-y-0 left-0 z-10 bg-gold-500 flex flex-col justify-center"
        style={{ width: "52%", padding: "0 4vw 0 5vw" }}
      >
        {/* Eyebrow */}
        <div className="relative mb-3" style={{ height: "1.1rem" }}>
          {SLIDES.map((s, i) => (
            <span
              key={i}
              className="font-mono text-[11px] font-bold tracking-[0.22em] uppercase absolute left-0 top-0"
              style={{
                color: "#0F1B3D",
                opacity: i === current ? 1 : 0,
                transition: reduced ? "none" : "opacity 0.4s ease",
              }}
            >
              {s.eyebrow}
            </span>
          ))}
        </div>

        {/* Heading */}
        <div className="relative" style={{ minHeight: "clamp(5rem, 10vw, 9rem)", marginBottom: "1rem" }}>
          {SLIDES.map((s, i) => (
            <h1
              key={i}
              className="font-display font-bold whitespace-pre-line absolute inset-0"
              style={{
                fontSize: "clamp(2.6rem, 4.8vw, 4.4rem)",
                lineHeight: "1.04",
                letterSpacing: "-0.02em",
                color: "#0F1B3D",
                opacity: i === current ? 1 : 0,
                transition: reduced ? "none" : "opacity 0.45s ease",
              }}
            >
              {s.heading}
            </h1>
          ))}
        </div>

        {/* Sub */}
        <div className="relative mb-8" style={{ minHeight: "1.5rem" }}>
          {SLIDES.map((s, i) => (
            <p
              key={i}
              className="font-medium absolute left-0 top-0"
              style={{
                fontSize: "clamp(0.875rem, 1.05vw, 0.95rem)",
                color: "#0F1B3D",
                opacity: i === current ? 1 : 0,
                lineHeight: "1.5",
                maxWidth: "34ch",
                transition: reduced ? "none" : "opacity 0.4s ease 0.08s",
              }}
            >
              {s.sub}
            </p>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-5 mb-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 font-bold px-7 py-3.5 text-sm tracking-wide transition-colors"
            style={{ background: "#0F1B3D", color: "#F2B91C" }}
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
            style={{ color: "#0F1B3D", borderBottom: "2px solid rgba(15,27,61,0.4)", paddingBottom: "2px" }}
          >
            Our Services
          </Link>
        </div>

        {/* Slide dots */}
        <div className="flex items-center gap-2.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="h-[3px] rounded-full transition-all duration-300"
              style={{
                width: i === current ? "36px" : "14px",
                background: i === current ? "#0F1B3D" : "rgba(15,27,61,0.25)",
              }}
            />
          ))}
        </div>

        {/* Caption bottom-left */}
        <div className="absolute bottom-6 left-0" style={{ paddingLeft: "5vw" }}>
          {SLIDES.map((s, i) => (
            <span
              key={i}
              className="font-mono text-[8px] tracking-[0.24em] uppercase absolute"
              style={{
                color: "#0F1B3D",
                opacity: i === current ? 0.4 : 0,
                transition: reduced ? "none" : "opacity 0.4s ease",
              }}
            >
              {s.caption}
            </span>
          ))}
        </div>

        {/* Prev arrow — left edge of gold panel */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full transition-all"
          style={{ background: "rgba(15,27,61,0.12)", color: "#0F1B3D" }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      {/* ── Image panel — starts at 38%, chevron tip at 38%, diagonal aligns at 52% ─ */}
      {/*
          Image div left: 38% → image div width: 62vw
          clip-path 0% 50% = leftmost tip at 38% viewport  (inside gold panel which ends at 52%)
          clip-path 22.6% = right of tip = 38% + 22.6%×62% = 38% + 14% = 52% = gold panel edge ✓
          Result: small triangle of image visible between 38%–52% inside gold = Keller effect
      */}
      <div
        className="absolute inset-y-0 right-0 z-20"
        style={{
          left: "38%",
          clipPath: "polygon(22.6% 0%, 100% 0%, 100% 100%, 22.6% 100%, 0% 50%)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity: i === current ? 1 : 0,
              transition: reduced ? "none" : "opacity 0.8s ease-in-out",
            }}
          >
            <Image
              src={s.src}
              alt={i === current ? s.alt : ""}
              fill
              className="object-cover"
              style={{ objectPosition: "center 40%", filter: "contrast(1.08) saturate(1.18)" }}
              priority={i === 0}
              sizes="65vw"
              quality={85}
              aria-hidden={i !== current}
            />
          </div>
        ))}

        {/* Gradient overlays — left gold bleed + top/bottom dark vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `
              linear-gradient(to right, rgba(242,185,28,0.32) 0%, transparent 36%),
              linear-gradient(to bottom, rgba(15,27,61,0.68) 0%, transparent 42%),
              linear-gradient(to top, rgba(15,27,61,0.75) 0%, transparent 40%)
            `,
          }}
        />


        {/* Next arrow — right edge of image */}
        <button
          onClick={next}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 flex items-center justify-center rounded-full transition-all backdrop-blur-sm"
          style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

      {/* Preload */}
      {SLIDES.slice(1).map((s) => (
        <Image key={s.src} src={s.src} alt="" aria-hidden fill
          className="opacity-0 pointer-events-none"
          style={{ position: "absolute", zIndex: -1 }}
          sizes="1px"
        />
      ))}
    </div>
  );
}
