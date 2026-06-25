"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PROJECTS, PROJECT_SECTORS } from "../data/projects";
import { PROJECT_IMAGES, SECTION_IMAGES } from "../lib/images";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABand from "../components/CTABand";
import { Stagger, StaggerItem, FadeUp } from "../components/ui/motion";

export default function ProjectsPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.sector === active);

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="relative bg-navy-900 pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={SECTION_IMAGES.bridgeConstruction}
            alt="Infrastructure projects"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-navy-900/85 to-navy-900" />
        </div>
        <div className="absolute inset-0 bg-dot-pattern opacity-8 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
          <div className="mt-8 max-w-3xl">
            <FadeUp delay={0.1}>
              <p className="eyebrow text-gold-500 mb-5">Project Portfolio</p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 className="font-display font-black tracking-tight text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] text-white mb-4">
                9 Flagship<br />
                <span className="text-gold-500 italic">Projects</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                From Adani Group&apos;s large-scale ground improvement to L&T&apos;s DFC corridors spanning five states —
                a project record built on capability, scale, and delivery certainty.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── GRID ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter chips */}
          <FadeUp className="flex flex-wrap gap-2 mb-12">
            {PROJECT_SECTORS.map((s) => (
              <button
                key={s.value}
                onClick={() => setActive(s.value)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-200 ${
                  active === s.value
                    ? "bg-gold-500 text-navy-900 shadow-[0_2px_12px_rgba(242,185,28,0.35)]"
                    : "bg-white border border-line-200 text-slate-500 hover:border-gold-500/50 hover:text-gold-500"
                }`}
                style={active !== s.value ? { boxShadow: "var(--shadow-sm)" } : {}}
              >
                {s.label}
              </button>
            ))}
          </FadeUp>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-400 font-mono text-sm">
              No projects found for this sector.
            </div>
          ) : (
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <StaggerItem key={p.id}>
                  <div
                    className="group relative bg-white rounded-2xl overflow-hidden border border-line-200 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    {/* Photo */}
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <Image
                        src={PROJECT_IMAGES[p.id] ?? SECTION_IMAGES.about}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/30 to-transparent" />

                      {/* Sector chip */}
                      <div className="absolute top-4 left-4">
                        <span className="eyebrow text-gold-500 bg-navy-900/70 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                          {p.sectorLabel}
                        </span>
                      </div>

                      {/* Client logo */}
                      {p.clientLogo && (
                        <div className="absolute top-4 right-4 bg-white rounded-lg p-1.5 w-12 h-8 flex items-center justify-center">
                          <Image
                            src={p.clientLogo}
                            alt={p.client}
                            width={36}
                            height={20}
                            className="object-contain"
                          />
                        </div>
                      )}

                      {/* States */}
                      <div className="absolute bottom-3 left-4">
                        <span className="font-mono text-[10px] text-white/60">{p.states.join(" · ")}</span>
                      </div>

                      {/* Featured badge */}
                      {p.featured && (
                        <div className="absolute bottom-3 right-4">
                          <span className="font-mono text-[10px] text-gold-500 bg-gold-500/20 px-2 py-0.5 rounded-md">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="font-display font-bold text-2xl text-navy-800 leading-tight mb-1">
                        {p.client}
                      </h2>
                      <p className="font-display font-semibold text-[15px] text-navy-700 mb-2 leading-snug">{p.title}</p>
                      <p className="text-sm text-ink-700/60 leading-relaxed mb-4 flex-1 line-clamp-3">{p.scope}</p>

                      {/* Highlights */}
                      <div className="space-y-1.5 border-t border-line-200 pt-4">
                        {p.highlights.slice(0, 3).map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-ink-700/60">
                            <span className="text-gold-500 flex-shrink-0 mt-0.5 font-bold">·</span>
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>

      <CTABand
        heading="Your Project Could Be Next"
        sub="Parkline Infra is ready to mobilise for projects across India. Tell us about your requirement."
      />
    </>
  );
}
