"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroMap from "./HeroMap";

const EASE = [0.16, 1, 0.3, 1] as const;

interface Props {
  founded: number | string;
}

export default function HeroDesktop({ founded }: Props) {
  return (
    <div className="hidden lg:flex min-h-screen items-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        <div className="grid grid-cols-12 gap-8 items-center">

          {/* ── Left: Copy ──────────────────────────────────────────── */}
          <div className="col-span-6 xl:col-span-7 flex flex-col justify-center">

            {/* Overline */}
            {/* Credential badge — solid gold pill for legibility */}
            <motion.div
              className="inline-flex mb-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: EASE }}
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gold-500 text-navy-900 font-mono text-[10px] font-bold tracking-[0.15em] uppercase rounded-full select-none">
                AA Class PWD Contractor · Since {founded}
              </span>
            </motion.div>

            {/* H1 — single element, clip-rise from below, uses animate not whileInView */}
            <div className="overflow-hidden mb-5">
              <motion.h1
                className="font-display font-black tracking-tight text-[clamp(2.8rem,3.8vw,4.8rem)] leading-[1.02] text-navy-900"
                initial={{ y: "106%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.88, delay: 0.12, ease: EASE }}
              >
                Engineering{" "}
                <span className="text-gold-500">Strength.</span>
                <br />Delivering Certainty.
              </motion.h1>
            </div>

            {/* Sub-copy + chips + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
            >
              <p className="text-[#1B2A4A] text-base leading-relaxed mb-5 max-w-xl">
                India&apos;s trusted AA-Class infrastructure contractor — delivering ground
                improvement, deep pile foundations, bridges, steel fabrication and railway
                structures across eight states since 2015.
              </p>

              <div className="flex flex-wrap gap-2 mb-7">
                {["8 States", "9 Marquee Projects", "Railway-Approved RRV", "AA-Class PWD"].map((b) => (
                  <span key={b} className="px-3 py-1.5 border border-[#1B2A4A]/30 text-[#1B2A4A] text-xs font-mono tracking-wide rounded-lg bg-navy-800/4">
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-all duration-200 text-sm shadow-[0_4px_16px_rgba(242,185,28,0.32)] hover:shadow-[0_6px_24px_rgba(242,185,28,0.45)] hover:-translate-y-px"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-navy-800/20 text-navy-800 font-semibold rounded-xl hover:border-gold-500 hover:text-gold-500 transition-all duration-200 text-sm"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            {/* Trust logos */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.88 }}
            >
              <p className="eyebrow text-slate-400 mb-3">Trusted by</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {[
                  { name: "Adani Group",        logo: "/images/clients/adani.png" },
                  { name: "L&T Construction",   logo: "/images/clients/lt.png" },
                  { name: "GMR Infrastructure", logo: "/images/clients/gmr.png" },
                  { name: "KEC International",  logo: "/images/clients/kec.png" },
                  { name: "Dilip Buildcon",     logo: "/images/clients/dilip-buildcon.png" },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="h-7 flex items-center transition-all duration-200 group/logo"
                    style={{ filter: "grayscale(1) brightness(0.45)" }}
                    onMouseEnter={e => (e.currentTarget.style.filter = "grayscale(0) brightness(1)")}
                    onMouseLeave={e => (e.currentTarget.style.filter = "grayscale(1) brightness(0.45)")}
                  >
                    <Image src={c.logo} alt={c.name} width={72} height={28} className="object-contain h-7 w-auto" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Map ──────────────────────────────────────────── */}
          <div className="col-span-6 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease: EASE }}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="eyebrow text-navy-700/60">Pan-India Presence</p>
                <span className="font-mono text-xs text-slate-400">8 States · 9 Projects</span>
              </div>
              {/* Map stage — subtle panel anchors the map visually */}
              <div
                className="relative rounded-2xl p-3"
                style={{
                  background: "linear-gradient(145deg,rgba(248,250,255,0.95) 0%,rgba(244,247,253,0.8) 100%)",
                  boxShadow: "inset 0 0 0 1px rgba(15,27,61,0.07), 0 4px 32px rgba(15,27,61,0.07)",
                }}
              >
                {/* Gold radial halo behind the active-state cluster */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 65% 55% at 50% 44%, rgba(242,185,28,0.11) 0%, transparent 70%)" }}
                />
                <div className="w-full aspect-[9/10]">
                  <HeroMap lightBg />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
