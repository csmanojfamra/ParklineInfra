"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS, PROJECT_SECTORS } from "../data/projects";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABand from "../components/CTABand";

export default function ProjectsPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.sector === active);

  return (
    <>
      <section className="relative bg-navy-900 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} light />
          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">
              Project Portfolio
            </p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] text-white mb-4">
              9 Flagship<br />
              <span className="text-gold-500">Projects</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              From Adani Group&apos;s large-scale ground improvement to L&T&apos;s DFC corridors spanning five states —
              Parkline Infra&apos;s project record speaks to capability, scale, and delivery certainty.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {PROJECT_SECTORS.map((s) => (
              <button
                key={s.value}
                onClick={() => setActive(s.value)}
                className={`px-4 py-2 rounded-xl text-sm font-mono transition-all ${
                  active === s.value
                    ? "bg-gold-500 text-navy-900 font-bold"
                    : "bg-paper-100 border border-slate-200 text-slate-500 hover:border-gold-500 hover:text-gold-500"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="bg-paper-100 rounded-2xl border border-slate-200 hover:border-gold-500 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="bg-navy-800 p-5">
                  <span className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded-md">
                    {p.sectorLabel}
                  </span>
                  <h2 className="font-display text-2xl text-white mt-3 mb-1 leading-tight">{p.client}</h2>
                  <p className="text-white/60 text-xs font-mono">{p.states.join(" · ")}</p>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-semibold text-navy-800 mb-2 text-sm leading-tight">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{p.scope}</p>
                  <div className="space-y-1.5">
                    {p.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="text-gold-500 flex-shrink-0 mt-0.5">·</span>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              No projects found for this filter.
            </div>
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
