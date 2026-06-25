import type { Metadata } from "next";
import { INDIA_STATES } from "../data/states";
import { PROJECTS } from "../data/projects";
import IndiaPresenceMap from "../components/IndiaPresenceMap";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABand from "../components/CTABand";
import HeroRingAccent from "../components/HeroRingAccent";

export const metadata: Metadata = {
  title: "Pan-India Presence — 8 States, 9 Flagship Projects",
  description:
    "Parkline Infra has active presence and delivered projects across Rajasthan, Punjab, Uttar Pradesh, Gujarat, Haryana, Madhya Pradesh, Karnataka, Uttarakhand, Maharashtra, and Delhi NCR.",
  alternates: { canonical: "/presence" },
};

export default function PresencePage() {
  const presenceStates = INDIA_STATES.filter((s) => s.presence);
  const projectOnlyStates = INDIA_STATES.filter((s) => s.active && !s.presence && s.projects.length > 0);

  return (
    <>
      <section className="relative bg-paper-50 pt-32 pb-16 overflow-hidden border-b border-line-200">
        <div className="absolute inset-0 bg-dot-light opacity-50 pointer-events-none" />
        <HeroRingAccent />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pan-India Presence" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">Our Footprint</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] text-navy-900 mb-6">
              8 States.<br />
              <span className="text-gold-500 italic">One Standard.</span>
            </h1>
            <p className="text-ink-700/70 text-lg leading-relaxed">
              Parkline Infra has delivered projects across 8 Indian states,
              working under India&apos;s largest infrastructure programmes — EDFC/WDFC, state highways, solar parks,
              and urban development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <IndiaPresenceMap lightBg />
          </div>
          <p className="text-center text-sm text-ink-700/40 font-mono mt-4">
            Hover / tap a highlighted state to view project details
          </p>
        </div>
      </section>

      {/* ── 8 PRESENCE STATES ─────────────────────────────────────────── */}
      <section className="py-16 bg-paper-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline gap-3 mb-8">
            <h2 className="font-display text-3xl text-navy-800">8 Presence States</h2>
            <span className="font-mono text-xs text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded">Established Footprint</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {presenceStates.map((state) => {
              const stateProjects = PROJECTS.filter((p) => state.projects.includes(p.id));
              const hasProjects = stateProjects.length > 0;
              return (
                <div key={state.id} className="bg-paper-50 rounded-2xl p-5 border border-line-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs font-bold bg-gold-500 text-navy-900 px-2 py-0.5 rounded">
                      {state.id}
                    </span>
                    <h3 className="font-display text-xl text-navy-800">{state.name}</h3>
                  </div>
                  {hasProjects ? (
                    <div className="space-y-3">
                      {stateProjects.map((p) => (
                        <div key={p.id} className="border-l-2 border-gold-500/30 pl-3">
                          <p className="text-xs font-mono text-gold-500 uppercase tracking-wider">{p.client}</p>
                          <p className="text-sm text-navy-800 font-medium mt-0.5">{p.title}</p>
                          <p className="text-xs text-ink-700/60 mt-0.5">{p.sectorLabel}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-ink-700/50 italic border-l-2 border-navy-800/10 pl-3">
                      Active presence — projects in progress
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL PROJECT STATES ──────────────────────────────────── */}
      <section className="py-12 bg-paper-50 border-t border-line-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline gap-3 mb-6">
            <h2 className="font-display text-2xl text-navy-800">Additional Project States</h2>
            <span className="font-mono text-xs text-ink-700/50 bg-navy-900/5 px-2 py-0.5 rounded">Project Execution</span>
          </div>
          <p className="text-sm text-ink-700/60 mb-6 max-w-2xl">States where Parkline Infra has executed specific project contracts — not counted in the 8 core presence states.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectOnlyStates.map((state) => {
              const stateProjects = PROJECTS.filter((p) => state.projects.includes(p.id));
              return (
                <div key={state.id} className="bg-paper-50 rounded-2xl p-5 border border-line-200 border-dashed opacity-80">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs font-bold bg-navy-800/10 text-navy-700 px-2 py-0.5 rounded">
                      {state.id}
                    </span>
                    <h3 className="font-display text-xl text-navy-700">{state.name}</h3>
                  </div>
                  <div className="space-y-3">
                    {stateProjects.map((p) => (
                      <div key={p.id} className="border-l-2 border-navy-800/15 pl-3">
                        <p className="text-xs font-mono text-navy-600/70 uppercase tracking-wider">{p.client}</p>
                        <p className="text-sm text-navy-800 font-medium mt-0.5">{p.title}</p>
                        <p className="text-xs text-ink-700/60 mt-0.5">{p.sectorLabel}</p>
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
