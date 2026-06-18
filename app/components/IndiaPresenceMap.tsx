"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { geoMercator, geoPath } from "d3-geo";
import type { GeoPermissibleObjects } from "d3-geo";
import type { FeatureCollection, Feature, Geometry } from "geojson";

// ── State presence data ──────────────────────────────────────────────────────
// "primary" = 8 stated presence states (gold fill)
// "project" = project-only states (secondary muted gold fill)
const STATE_META: Record<string, {
  id: string;
  type: "primary" | "project" | "inactive";
  projectTitles: string[];
}> = {
  "Rajasthan":      { id: "RJ", type: "primary",  projectTitles: ["JDA Road Development, Jaipur", "PWD Road: Chomu to Fatehpur", "L&T EDFC/WDFC Works"] },
  "Gujarat":        { id: "GJ", type: "primary",  projectTitles: ["L&T WDFC Infrastructure Works"] },
  "Haryana":        { id: "HR", type: "primary",  projectTitles: ["L&T EDFC/WDFC Works"] },
  "Punjab":         { id: "PB", type: "primary",  projectTitles: ["Adani Group — Large-Scale Ground Improvement"] },
  "Uttar Pradesh":  { id: "UP", type: "primary",  projectTitles: ["L&T EDFC Works", "Dilip Buildcon Pile Foundation & Bridge", "GMR EDFCCIL — Pile & Bridge Works"] },
  "Madhya Pradesh": { id: "MP", type: "primary",  projectTitles: ["KEC International 250 MW Power Project"] },
  "Kerala":         { id: "KL", type: "primary",  projectTitles: ["Infrastructure works in Kerala"] },
  "Delhi":          { id: "DL", type: "primary",  projectTitles: ["Infrastructure works in Delhi NCR"] },
  "Karnataka":      { id: "KA", type: "project",  projectTitles: ["Rays Power Infra — 125 MW Solar", "KEC International — 30 MW Power Project"] },
  "Uttaranchal":    { id: "UK", type: "project",  projectTitles: ["Rays Power Infra — 102 MW Solar Project"] },
  "Maharashtra":    { id: "MH", type: "project",  projectTitles: ["L&T WDFC Maintenance Works"] },
};

// City markers [lng, lat] for d3 projection (GeoJSON order: lon, lat)
const CITY_MARKERS = [
  { id: "RJ", name: "Jaipur",     coords: [75.8, 26.9] as [number, number] },
  { id: "UP", name: "Lucknow",    coords: [80.9, 26.8] as [number, number] },
  { id: "PB", name: "Ludhiana",   coords: [75.8, 30.9] as [number, number] },
  { id: "GJ", name: "Ahmedabad",  coords: [72.6, 23.0] as [number, number] },
  { id: "MP", name: "Bhopal",     coords: [77.4, 23.2] as [number, number] },
  { id: "KA", name: "Bengaluru",  coords: [77.6, 12.97] as [number, number] },
  { id: "UK", name: "Dehradun",   coords: [78.0, 30.3] as [number, number] },
  { id: "HR", name: "Gurugram",   coords: [77.0, 28.4] as [number, number] },
];

const W = 520;
const H = 580;

type TooltipData = { name: string; titles: string[]; x: number; y: number } | null;

export default function IndiaPresenceMap() {
  const [geo, setGeo] = useState<FeatureCollection | null>(null);
  const [tooltip, setTooltip] = useState<TooltipData>(null);
  const [animated, setAnimated] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  // Load GeoJSON
  useEffect(() => {
    fetch("/geo/india-states.geo.json")
      .then((r) => r.json())
      .then((d: FeatureCollection) => setGeo(d))
      .catch(console.error);
  }, []);

  // Trigger animation after geo loads and in view
  useEffect(() => {
    if (geo && inView) {
      const t = setTimeout(() => setAnimated(true), 200);
      return () => clearTimeout(t);
    }
  }, [geo, inView]);

  // Build projection
  const projection = geo
    ? geoMercator().fitSize([W, H], geo as GeoPermissibleObjects)
    : null;
  const pathGen = projection ? geoPath(projection) : null;

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<SVGPathElement>, feat: Feature) => {
      const meta = STATE_META[feat.properties?.NAME_1 as string];
      if (!meta || meta.type === "inactive") return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setTooltip({
        name: feat.properties?.NAME_1 as string,
        titles: meta.projectTitles,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  const stateFill = (name: string, animated: boolean) => {
    const meta = STATE_META[name];
    if (!meta) return "#1a2a4a";
    if (!animated) return meta.type !== "inactive" ? "rgba(242,185,28,0.05)" : "#1a2a4a";
    if (meta.type === "primary") return "#F2B91C";
    if (meta.type === "project") return "#c49010";
    return "#1a2a4a";
  };

  return (
    <div ref={containerRef} className="relative w-full" aria-label="Pan-India presence map">
      {/* Screen-reader / AI text summary */}
      <div className="sr-only">
        <p>Parkline Infra has active presence in: Rajasthan, Gujarat, Haryana, Punjab, Uttar Pradesh, Madhya Pradesh, Kerala, Delhi NCR. Project-only states: Karnataka, Uttarakhand, Maharashtra.</p>
        <ul>
          {Object.entries(STATE_META).filter(([,v]) => v.type !== "inactive").map(([name, meta]) => (
            <li key={name}><strong>{name}</strong>: {meta.projectTitles.join("; ")}</li>
          ))}
        </ul>
      </div>

      {!geo && (
        <div className="w-full aspect-[9/10] flex items-center justify-center">
          <div className="text-gold-500/40 text-xs font-mono animate-pulse">Loading map…</div>
        </div>
      )}

      {geo && pathGen && projection && (
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          style={{ filter: "drop-shadow(0 0 32px rgba(242,185,28,0.10))" }}
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F2B91C" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#F2B91C" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Glow behind active states */}
          <ellipse cx={W * 0.48} cy={H * 0.45} rx={W * 0.45} ry={H * 0.45} fill="url(#mapGlow)" />

          {/* State paths */}
          {(geo.features as Feature<Geometry>[]).map((feat, i) => {
            const name = feat.properties?.NAME_1 as string;
            const meta = STATE_META[name];
            const isInteractive = meta && meta.type !== "inactive";
            const d = pathGen(feat as GeoPermissibleObjects);
            if (!d) return null;

            return (
              <motion.path
                key={name || i}
                d={d}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  fill: stateFill(name, animated),
                }}
                transition={{
                  opacity: { duration: 0.3, delay: isInteractive ? i * 0.04 : 0 },
                  fill: { duration: 0.5, delay: isInteractive ? i * 0.06 : 0, ease: [0.16, 1, 0.3, 1] },
                }}
                stroke="#0F1B3D"
                strokeWidth="0.8"
                style={{ cursor: isInteractive ? "pointer" : "default" }}
                onMouseEnter={(e) => handleMouseEnter(e as unknown as React.MouseEvent<SVGPathElement>, feat)}
                onMouseLeave={() => setTooltip(null)}
                aria-label={`${name}${meta?.type === "primary" ? " — active presence" : meta?.type === "project" ? " — project presence" : ""}`}
              />
            );
          })}

          {/* City marker pulses */}
          {animated && CITY_MARKERS.map((m) => {
            const [px, py] = projection(m.coords) ?? [0, 0];
            const meta = STATE_META[
              Object.keys(STATE_META).find((k) => STATE_META[k].id === m.id) ?? ""
            ];
            return (
              <g key={m.id} transform={`translate(${px},${py})`}>
                <circle r="10" fill="rgba(242,185,28,0.12)" className="map-pulse" />
                <circle r="4.5" fill={meta?.type === "project" ? "#c49010" : "#F2B91C"} />
                <circle r="2" fill="#0F1B3D" />
              </g>
            );
          })}

          {/* State labels on active states */}
          {animated && CITY_MARKERS.map((m) => {
            const [px, py] = projection(m.coords) ?? [0, 0];
            return (
              <text
                key={`lbl-${m.id}`}
                x={px}
                y={py + 14}
                textAnchor="middle"
                fontSize="7"
                fontFamily="monospace"
                fontWeight="bold"
                fill="rgba(15,27,61,0.7)"
                style={{ pointerEvents: "none", userSelect: "none" }}
              >
                {m.id}
              </text>
            );
          })}
        </svg>
      )}

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute z-20 pointer-events-none"
            style={{
              left: Math.min(tooltip.x + 12, (containerRef.current?.offsetWidth ?? 400) - 220),
              top: Math.max(tooltip.y - 80, 8),
            }}
          >
            <div className="bg-navy-900 border border-gold-500/30 rounded-xl shadow-xl p-3 w-52">
              <p className="text-gold-500 font-mono text-xs font-bold uppercase tracking-wider mb-1.5">
                {tooltip.name}
              </p>
              <ul className="space-y-1">
                {tooltip.titles.map((t, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-white/70 text-xs">
                    <span className="text-gold-500 mt-0.5 flex-shrink-0">·</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      {animated && (
        <div className="flex flex-wrap items-center gap-4 mt-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-gold-500" />
            <span className="font-mono text-xs text-white/50">8 Presence States</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm" style={{ background: "#c49010" }} />
            <span className="font-mono text-xs text-white/50">Project States</span>
          </div>
        </div>
      )}

      {/* Mobile stacked fallback */}
      <div className="sm:hidden mt-5 space-y-2" role="list" aria-label="State-wise projects">
        {Object.entries(STATE_META)
          .filter(([, v]) => v.type !== "inactive" && v.projectTitles.length > 0)
          .map(([name, meta]) => (
            <div key={name} role="listitem" className="bg-navy-800/50 rounded-xl p-3 border border-gold-500/20">
              <p className="text-gold-500 font-mono text-xs font-bold uppercase tracking-wider mb-1">
                {name} <span className="text-white/30">({meta.id})</span>
              </p>
              <ul className="space-y-0.5">
                {meta.projectTitles.map((p, i) => (
                  <li key={i} className="text-white/60 text-xs flex items-start gap-1.5">
                    <span className="text-gold-500">·</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
