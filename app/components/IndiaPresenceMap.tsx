"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { geoMercator, geoPath } from "d3-geo";
import type { GeoPermissibleObjects } from "d3-geo";
import type { FeatureCollection, Feature, Geometry } from "geojson";

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

const CITY_MARKERS = [
  { id: "RJ", coords: [75.8, 26.9]  as [number, number] },
  { id: "UP", coords: [80.9, 26.8]  as [number, number] },
  { id: "PB", coords: [75.8, 30.9]  as [number, number] },
  { id: "GJ", coords: [72.6, 23.0]  as [number, number] },
  { id: "MP", coords: [77.4, 23.2]  as [number, number] },
  { id: "KA", coords: [77.6, 12.97] as [number, number] },
  { id: "UK", coords: [78.0, 30.3]  as [number, number] },
  { id: "HR", coords: [77.0, 28.4]  as [number, number] },
];

const W = 520, H = 580;
type TooltipData = { name: string; titles: string[]; x: number; y: number } | null;

function stateFill(name: string) {
  const meta = STATE_META[name];
  if (!meta || meta.type === "inactive") return "#1a2a4a";
  if (meta.type === "primary") return "#F2B91C";
  return "#c49010";
}

export default function IndiaPresenceMap() {
  const [geo, setGeo] = useState<FeatureCollection | null>(null);
  const [tooltip, setTooltip] = useState<TooltipData>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/geo/india-states-simple.geo.json")
      .then(r => r.json())
      .then((d: FeatureCollection) => setGeo(d))
      .catch(console.error);
  }, []);

  // Manual Mercator calibrated for India (68–97°E, 7–37°N) in a 520×580 viewport
  const projection = geo
    ? geoMercator().scale(1050).center([82.5, 22]).translate([W / 2, H / 2])
    : null;
  const pathGen = projection ? geoPath(projection) : null;

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<SVGPathElement>, feat: Feature) => {
      const name = feat.properties?.NAME_1 as string;
      const meta = STATE_META[name];
      if (!meta || meta.type === "inactive") return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setTooltip({ name, titles: meta.projectTitles, x: e.clientX - rect.left, y: e.clientY - rect.top });
    }, []
  );

  return (
    <div ref={containerRef} className="relative w-full h-full" aria-label="Pan-India presence map">
      <div className="sr-only">
        Parkline Infra operates in: Rajasthan, Gujarat, Haryana, Punjab, Uttar Pradesh, Madhya Pradesh, Kerala, Delhi NCR.
      </div>

      {!geo && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-gold-500/40 text-xs font-mono animate-pulse">Loading map…</div>
        </div>
      )}

      {geo && pathGen && projection && (
        <motion.svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ filter: "drop-shadow(0 0 32px rgba(242,185,28,0.10))" }}
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#F2B91C" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#F2B91C" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx={W*0.48} cy={H*0.45} rx={W*0.45} ry={H*0.45} fill="url(#mapGlow)" />

          {(geo.features as Feature<Geometry>[]).map((feat, i) => {
            const name = feat.properties?.NAME_1 as string;
            const meta = STATE_META[name];
            const interactive = meta && meta.type !== "inactive";
            const d = pathGen(feat as GeoPermissibleObjects);
            if (!d) return null;
            return (
              <motion.path
                key={name || i}
                d={d}
                fill={stateFill(name)}
                stroke="#0F1B3D"
                strokeWidth="0.8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.02 }}
                style={{ cursor: interactive ? "pointer" : "default" }}
                onMouseEnter={e => handleMouseEnter(e as unknown as React.MouseEvent<SVGPathElement>, feat)}
                onMouseLeave={() => setTooltip(null)}
              />
            );
          })}

          {CITY_MARKERS.map((m, mi) => {
            const [px, py] = projection(m.coords) ?? [0, 0];
            const meta = STATE_META[Object.keys(STATE_META).find(k => STATE_META[k].id === m.id) ?? ""];
            const color = meta?.type === "project" ? "#c49010" : "#F2B91C";
            return (
              <motion.g
                key={m.id}
                transform={`translate(${px},${py})`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + mi * 0.05 }}
              >
                <circle r="10" fill={`${color}22`} className="map-pulse" />
                <circle r="4.5" fill={color} />
                <circle r="2"   fill="#0F1B3D" />
                <text x={0} y={14} textAnchor="middle" fontSize="7" fontFamily="monospace"
                  fontWeight="bold" fill="rgba(15,27,61,0.7)"
                  style={{ pointerEvents: "none", userSelect: "none" }}>
                  {m.id}
                </text>
              </motion.g>
            );
          })}
        </motion.svg>
      )}

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
              top:  Math.max(tooltip.y - 80, 8),
            }}
          >
            <div className="bg-navy-900 border border-gold-500/30 rounded-xl shadow-xl p-3 w-52">
              <p className="text-gold-500 font-mono text-xs font-bold uppercase tracking-wider mb-1.5">{tooltip.name}</p>
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

      {geo && (
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
    </div>
  );
}
