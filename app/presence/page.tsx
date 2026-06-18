import type { Metadata } from "next";
import { INDIA_STATES } from "../data/states";
import { PROJECTS } from "../data/projects";
import IndiaPresenceMap from "../components/IndiaPresenceMap";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABand from "../components/CTABand";

export const metadata: Metadata = {
  title: "Pan-India Presence — 8+ States, 9 Flagship Projects",
  description:
    "Parkline Infra has active presence and delivered projects across Rajasthan, Punjab, Uttar Pradesh, Gujarat, Haryana, Madhya Pradesh, Karnataka, Uttarakhand, Maharashtra, and Delhi NCR.",
  alternates: { canonical: "/presence" },
};

export default function PresencePage() {
  const activeStates = INDIA_STATES.filter((s) => s.active);

  return (
    <>
      <section className="relative bg-navy-900 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pan-India Presence" }]} light />
          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">Our Footprint</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] text-white mb-6">
              {activeStates.length}+ States.<br />
              <span className="text-gold-500">One Standard.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Parkline Infra has delivered projects across {activeStates.length} Indian states and Union Territories,
              working under India&apos;s largest infrastructure programmes — EDFC/WDFC, state highways, solar parks,
              and urban development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <IndiaPresenceMap />
          </div>
          <p className="text-center text-sm text-slate-400 font-mono mt-4">
            Hover / tap a highlighted state to view project details
          </p>
        </div>
      </section>

      <section className="py-16 bg-paper-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-navy-800 mb-8">State-Wise Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeStates
              .filter((s) => s.projectTitles.length > 0)
              .map((state) => {
                const stateProjects = PROJECTS.filter((p) => state.projects.includes(p.id));
                return (
                  <div key={state.id} className="bg-paper-50 rounded-2xl p-5 border border-slate-200">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs font-bold bg-gold-500 text-navy-900 px-2 py-0.5 rounded">
                        {state.id}
                      </span>
                      <h3 className="font-display text-xl text-navy-800">{state.name}</h3>
                    </div>
                    <div className="space-y-3">
                      {stateProjects.map((p) => (
                        <div key={p.id} className="border-l-2 border-gold-500/30 pl-3">
                          <p className="text-xs font-mono text-gold-500 uppercase tracking-wider">{p.client}</p>
                          <p className="text-sm text-navy-800 font-medium mt-0.5">{p.title}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{p.sectorLabel}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <CTABand
        heading="Expand Your Project Across India"
        sub="Parkline Infra&apos;s proven multi-state execution capability means your project is in capable hands — wherever in India it needs to be built."
      />
    </>
  );
}
