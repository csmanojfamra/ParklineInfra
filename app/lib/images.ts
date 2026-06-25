// All images are self-hosted in /public/images/ — no external hotlinks

// Optimised WebP at 1600×900 (231–296 KB each) — next/image serves further-compressed variants
export const SERVICE_IMAGES: Record<string, string> = {
  "ground-improvement":              "/images/services/ground-improvement.webp",
  "pile-foundation":                 "/images/services/pile-foundation.webp",
  "structure-work":                  "/images/services/structure-work.webp",
  "fabrication-steel-structures":    "/images/services/steel-fabrication.webp",
  "building-construction":           "/images/services/building-construction.webp",
  "maintenance-repairing-rrv":       "/images/services/maintenance-rrv.webp",
  "customized-equipment-engineering":"/images/services/custom-equipment.webp",
};

// All project images map to brand-clean photos in /images/services/ — no stock, no third-party branding.
// Adjacency checked against 3-col grid order to avoid back-to-back duplicates.
export const PROJECT_IMAGES: Record<string, string> = {
  "adani-ground-improvement": "/images/services/ground-improvement.webp",  // stone column / vibro replacement
  "lt-edfc-wdfc":             "/images/services/maintenance-rrv.webp",      // DFC pile + maintenance
  "lt-rrv-mauritius":         "/images/services/custom-equipment.webp",     // RRV fabrication
  "jda-road":                 "/images/services/road-works.png",            // city road resurfacing
  "rays-power-karnataka":     "/images/services/pile-foundation.webp",      // civil + pile for solar
  "vrb-residential":          "/images/services/building-construction.webp",// residential / commercial
  "pwd-chomu-fatehpur":       "/images/services/pile-foundation.webp",      // road dev (avoids road-works back-to-back with jda above it)
  "dilip-buildcon-highway":   "/images/services/structure-work.webp",       // pile + major bridge
  "kec-solar-power":          "/images/services/custom-equipment.webp",     // power project civil works
  "gmr-edfccil":              "/images/services/structure-work.webp",       // pile + bridge, DFC corridor
};

export const SECTION_IMAGES = {
  about:            "/images/sections/construction-hero.jpg",
  whyChoose:        "/images/sections/why-choose.jpg",
  railway:          "/images/projects/railway.jpg",
  solarEnergy:      "/images/projects/solar.jpg",
  bridgeConstruction: "/images/services/cta-band.webp",
  groundWork:       "/images/projects/ground-improvement.jpg",
};
