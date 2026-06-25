"use client";
import { useState, useRef, useCallback, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { geoMercator, geoPath } from "d3-geo";
import type { GeoPermissibleObjects } from "d3-geo";
import type { FeatureCollection, Feature, Geometry } from "geojson";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import topoData from "../data/india-states.topo.json";

// Convert bundled topojson → geojson once at module load (no runtime fetch)
const TOPO = topoData as unknown as Topology;
const OBJECT_KEY = Object.keys(TOPO.objects)[0];
const GEO_DATA = feature(TOPO, TOPO.objects[OBJECT_KEY]) as unknown as FeatureCollection;

const STATE_META: Record<string, {
  id: string;
  label: string;
  type: "primary" | "project" | "inactive";
  projectTitles: string[];
  labelAnchor?: "right" | "left" | "above" | "below";
}> = {
  "Rajasthan":      { id: "RJ", label: "Rajasthan",      type: "primary",  labelAnchor: "right",  projectTitles: ["JDA Road Development, Jaipur", "PWD Road: Chomu–Fatehpur", "L&T EDFC/WDFC Works"] },
  "Gujarat":        { id: "GJ", label: "Gujarat",        type: "primary",  labelAnchor: "left",   projectTitles: ["L&T WDFC Infrastructure Works"] },
  "Haryana":        { id: "HR", label: "Haryana",        type: "primary",  labelAnchor: "right",  projectTitles: ["L&T EDFC/WDFC Works"] },
  "Punjab":         { id: "PB", label: "Punjab",         type: "primary",  labelAnchor: "left",   projectTitles: ["Adani Group — Large-Scale Ground Improvement"] },
  "Uttar Pradesh":  { id: "UP", label: "Uttar Pradesh",  type: "primary",  labelAnchor: "right",  projectTitles: ["L&T EDFC Works", "Dilip Buildcon — Pile Foundation & Bridge", "GMR EDFCCIL — Pile & Bridge Works"] },
  "Madhya Pradesh": { id: "MP", label: "Madhya Pradesh", type: "primary",  labelAnchor: "right",  projectTitles: ["KEC International — 250 MW Power Project"] },
  "Kerala":         { id: "KL", label: "Kerala",         type: "primary",  labelAnchor: "left",   projectTitles: ["Infrastructure works in Kerala"] },
  "Delhi":          { id: "DL", label: "Delhi NCR",      type: "primary",  labelAnchor: "right",  projectTitles: ["Infrastructure works in Delhi NCR"] },
  "Karnataka":      { id: "KA", label: "Karnataka",      type: "project",  labelAnchor: "left",   projectTitles: ["Rays Power Infra — 125 MW Solar", "KEC International — 30 MW Power"] },
  "Uttaranchal":    { id: "UK", label: "Uttarakhand",    type: "project",  labelAnchor: "right",  projectTitles: ["Rays Power Infra — 102 MW Solar Project"] },
  "Maharashtra":    { id: "MH", label: "Maharashtra",    type: "project",  labelAnchor: "right",  projectTitles: ["L&T WDFC Maintenance Works"] },
};

// Marker positions (lng, lat) + label offset
const CITY_MARKERS: Array<{
  id: string;
  coords: [number, number];
  labelAnchor: "right" | "left" | "above" | "below";
}> = [
  { id: "RJ", coords: [74.5, 26.5],  labelAnchor: "right"  },
  { id: "UP", coords: [80.9, 26.8],  labelAnchor: "right"  },
  { id: "PB", coords: [74.5, 31.1],  labelAnchor: "left"   },
  { id: "GJ", coords: [71.5, 22.3],  labelAnchor: "left"   },
  { id: "MP", coords: [77.4, 23.6],  labelAnchor: "right"  },
  { id: "KA", coords: [76.8, 14.5],  labelAnchor: "left"   },
  { id: "UK", coords: [79.0, 30.1],  labelAnchor: "right"  },
  { id: "HR", coords: [76.5, 29.2],  labelAnchor: "right"  },
];

const W = 520, H = 580;
type TooltipData = { name: string; titles: string[]; x: number; y: number } | null;
type CardData   = { name: string; titles: string[] } | null;

function stateFill(name: string, hovered: boolean, lightBg: boolean) {
  const meta = STATE_META[name];
  if (!meta || meta.type === "inactive") return lightBg ? "#E6EAF1" : "#1a2a4a";
  const base = meta.type === "primary" ? "#F2B91C" : "#c49010";
  if (hovered) return meta.type === "primary" ? "#FFD44D" : "#E5B020";
  return base;
}

function getLabelOffset(anchor: "right" | "left" | "above" | "below", labelWidth: number) {
  const pad = 8;
  switch (anchor) {
    case "right":  return { dx: pad + labelWidth / 2, dy: -1 };
    case "left":   return { dx: -(pad + labelWidth / 2), dy: -1 };
    case "above":  return { dx: 0, dy: -(14 + 8) };
    case "below":  return { dx: 0, dy: 18 };
  }
}

interface Props {
  mobileBackdrop?: boolean;
  lightBg?: boolean;
}

export default function IndiaPresenceMap({ mobileBackdrop = false, lightBg = false }: Props) {
  const [tooltip, setTooltip]       = useState<TooltipData>(null);
  const [mobileCard, setMobileCard] = useState<CardData>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // GEO_DATA is pre-converted at module load — no fetch, renders on first paint
  const { projection, pathGen } = useMemo(() => {
    const proj = geoMercator().fitSize([W, H], GEO_DATA as GeoPermissibleObjects);
    return { projection: proj, pathGen: geoPath(proj) };
  }, []);

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<SVGPathElement>, feat: Feature) => {
      if (mobileBackdrop) return;
      const name = feat.properties?.NAME_1 as string;
      const meta = STATE_META[name];
      if (!meta || meta.type === "inactive") return;
      setHoveredState(name);
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setTooltip({ name: meta.label, titles: meta.projectTitles, x: e.clientX - rect.left, y: e.clientY - rect.top });
    }, [mobileBackdrop]
  );

  const handleMouseLeave = useCallback((feat: Feature) => {
    if (mobileBackdrop) return;
    setHoveredState(null);
    setTooltip(null);
  }, [mobileBackdrop]);

  const handleStateClick = useCallback((feat: Feature) => {
    if (!mobileBackdrop) return;
    const name = feat.properties?.NAME_1 as string;
    const meta = STATE_META[name];
    if (!meta || meta.type === "inactive") { setMobileCard(null); return; }
    setMobileCard(prev => prev?.name === meta.label ? null : { name: meta.label, titles: meta.projectTitles });
  }, [mobileBackdrop]);

  const strokeColor = lightBg ? "#CBD5E1" : "#0F1B3D";
  const legendTextClass = lightBg ? "text-slate-500" : "text-white/50";

  return (
    <div ref={containerRef} className="relative w-full h-full" aria-label="Pan-India presence map">
      <div className="sr-only">
        Parkline Infra operates in: Rajasthan, Gujarat, Haryana, Punjab, Uttar Pradesh, Madhya Pradesh, Kerala, Delhi NCR.
      </div>

      <motion.svg
          viewBox={`0 0 ${W} ${H}`}
          className={mobileBackdrop ? "w-full h-full" : "w-full h-auto"}
          preserveAspectRatio={mobileBackdrop ? "xMidYMin slice" : "xMidYMin meet"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            filter: lightBg
              ? "drop-shadow(0 4px 20px rgba(15,27,61,0.10)) drop-shadow(0 0 24px rgba(242,185,28,0.08))"
              : "drop-shadow(0 0 32px rgba(242,185,28,0.10))",
          }}
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#F2B91C" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#F2B91C" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="mapGlowLight" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#F2B91C" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#F2B91C" stopOpacity="0" />
            </radialGradient>
            <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="stateGlow" x="-5%" y="-5%" width="110%" height="110%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Radial gold glow — shown on both dark and light backgrounds */}
          {!lightBg && <ellipse cx={W*0.48} cy={H*0.45} rx={W*0.45} ry={H*0.45} fill="url(#mapGlow)" />}
          {lightBg  && <ellipse cx={W*0.48} cy={H*0.43} rx={W*0.40} ry={H*0.38} fill="url(#mapGlowLight)" />}

          {/* State paths */}
          {(GEO_DATA.features as Feature<Geometry>[]).map((feat, i) => {
            const name = feat.properties?.NAME_1 as string;
            const meta = STATE_META[name];
            const interactive = meta && meta.type !== "inactive";
            const hovered = hoveredState === name;
            const d = pathGen(feat as GeoPermissibleObjects);
            if (!d) return null;
            return (
              <motion.path
                key={name || i}
                d={d}
                fill={stateFill(name, hovered, lightBg)}
                stroke={strokeColor}
                strokeWidth={hovered ? "1.2" : (lightBg ? "0.6" : "0.8")}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: hovered ? "url(#stateGlow)" : "none",
                }}
                transition={{ duration: 0.4, delay: interactive ? i * 0.015 : i * 0.008 }}
                style={{ cursor: interactive ? "pointer" : "default", transformOrigin: "center", transformBox: "fill-box" }}
                onClick={() => handleStateClick(feat)}
                onMouseEnter={e => handleMouseEnter(e as unknown as React.MouseEvent<SVGPathElement>, feat)}
                onMouseLeave={() => handleMouseLeave(feat)}
              />
            );
          })}

          {/* Radar markers + full-name labels */}
          {CITY_MARKERS.map((m, mi) => {
            const [px, py] = projection(m.coords) ?? [0, 0];
            const stateName = Object.keys(STATE_META).find(k => STATE_META[k].id === m.id);
            const meta = stateName ? STATE_META[stateName] : null;
            if (!meta) return null;
            const color = meta.type === "project" ? "#c49010" : "#F2B91C";
            const isHovered = hoveredState === stateName;
            const ringDelay = `${mi * 0.28}s`;
            const ring2Delay = `${mi * 0.28 + 1.1}s`;

            // Label placement
            const label = meta.label;
            const charW = 6; // approx px per char at fontSize=9
            const labelW = label.length * charW + 10; // total pill width
            const offset = getLabelOffset(m.labelAnchor, labelW);
            const lx = offset.dx;
            const ly = offset.dy;

            return (
              <g key={m.id} transform={`translate(${px},${py})`}>
                <motion.g
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: isHovered ? 1.3 : 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + mi * 0.07, type: "spring", stiffness: 200 }}
                >
                  {/* Pulse rings — Framer Motion for reliable cross-browser animation */}
                  {/* On light bg gold (#F2B91C) is low-contrast; use deeper amber */}
                  {[0, 1.1].map((extraDelay, ri) => (
                    <motion.circle
                      key={ri}
                      r={8}
                      stroke={lightBg ? "#9A6500" : color}
                      strokeWidth={lightBg ? "2" : "1.5"}
                      fill="none"
                      style={{ transformOrigin: "0px 0px", transformBox: "fill-box" }}
                      animate={
                        typeof window !== "undefined" &&
                        window.matchMedia("(prefers-reduced-motion: reduce)").matches
                          ? {}
                          : { scale: [1, 2.6], opacity: [0.75, 0] }
                      }
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        delay: mi * 0.28 + extraDelay,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                  {/* Glow halo */}
                  <circle r="7" fill={lightBg ? "#B87A00" : color} opacity={isHovered ? 0.45 : (lightBg ? 0.35 : 0.18)} />
                  {/* Core dot */}
                  <circle r="5" fill={lightBg ? "#C48A00" : color} className="radar-core" filter="url(#coreGlow)" />
                  {/* 3D highlight */}
                  <circle r="2" cx="-1.5" cy="-2" fill="rgba(255,255,255,0.5)" />

                  {/* Leader line from marker to label */}
                  <line
                    x1={0} y1={0}
                    x2={lx > 0 ? 6 : lx < 0 ? -6 : 0}
                    y2={ly < -4 ? -6 : ly > 4 ? 6 : 0}
                    stroke={color}
                    strokeWidth="0.8"
                    opacity="0.5"
                  />

                  {/* Full-name label pill */}
                  <rect
                    x={lx - labelW / 2}
                    y={ly - 8}
                    width={labelW}
                    height={14}
                    rx={3}
                    fill={lightBg ? "#0F1B3D" : "#0F1B3D"}
                    opacity={lightBg ? 0.85 : 0.92}
                  />
                  <text
                    x={lx}
                    y={ly + 1.5}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="8.5"
                    fontFamily="monospace"
                    fontWeight="600"
                    letterSpacing="0.04em"
                    fill={color}
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    {label}
                  </text>
                </motion.g>
              </g>
            );
          })}
        </motion.svg>

      {/* Desktop hover tooltip */}
      {!mobileBackdrop && (
        <AnimatePresence>
          {tooltip && (
            <motion.div
              key={tooltip.name}
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute z-20 pointer-events-none"
              style={{
                left: Math.min(tooltip.x + 14, (containerRef.current?.offsetWidth ?? 400) - 230),
                top:  Math.max(tooltip.y - 90, 8),
              }}
            >
              <div className="bg-navy-900 border border-gold-500/30 rounded-xl shadow-2xl p-3.5 w-56"
                style={{ boxShadow: "0 8px 32px rgba(15,27,61,0.4), 0 0 0 1px rgba(242,185,28,0.15)" }}>
                <p className="text-gold-500 font-mono text-[10px] font-bold uppercase tracking-[0.15em] mb-2">{tooltip.name}</p>
                <ul className="space-y-1.5">
                  {tooltip.titles.map((t, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-white/65 text-xs leading-snug">
                      <span className="text-gold-500 mt-0.5 flex-shrink-0">·</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Legend */}
      {!mobileBackdrop && (
        <div className="flex flex-wrap items-center gap-4 mt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-gold-500" />
            <span className={`font-mono text-[10px] ${legendTextClass}`}>8 Presence States</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm" style={{ background: "#c49010" }} />
            <span className={`font-mono text-[10px] ${legendTextClass}`}>Project States</span>
          </div>
        </div>
      )}

      {/* Mobile bottom-sheet */}
      {mobileBackdrop && (
        <AnimatePresence>
          {mobileCard && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setMobileCard(null)} />
              <motion.div
                className="fixed bottom-0 left-0 right-0 z-50 px-4 pt-1 pb-5"
                style={{ paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 350 }}
              >
                <div className="bg-navy-800 border border-gold-500/30 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-start justify-between mb-3">
                    <p className="text-gold-500 font-mono text-xs font-bold uppercase tracking-wider">{mobileCard.name}</p>
                    <button
                      onClick={() => setMobileCard(null)}
                      className="text-white/40 text-xl leading-none pl-4 -mt-0.5"
                      aria-label="Close"
                    >×</button>
                  </div>
                  <ul className="space-y-2">
                    {mobileCard.titles.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <span className="text-gold-500 flex-shrink-0 mt-0.5">·</span>{t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
