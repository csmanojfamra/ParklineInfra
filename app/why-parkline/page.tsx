import type { Metadata } from "next";
import { Award, Users, Train, Settings, MapPin, Shield } from "lucide-react";
import { WHY_CHOOSE } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABand from "../components/CTABand";

export const metadata: Metadata = {
  title: "Why Choose Parkline Infra — AA Class, Multi-State Execution, In-House RRV",
  description:
    "Six reasons why India's leading infrastructure companies choose Parkline Infra: AA Class PWD recognition, proven client roster, railway RRV manufacturing, mechanical capabilities, multi-state execution, and strict safety protocols.",
  alternates: { canonical: "/why-parkline" },
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Award, Users, Train, Settings, MapPin, Shield,
};

const EXTENDED = [
  {
    detail: "The AA Class PWD classification is awarded only to contractors who meet the Public Works Department of Rajasthan's most stringent financial, technical, and operational criteria. It unlocks eligibility for the largest government infrastructure contracts in the state and signals to private sector clients that Parkline Infra has been independently vetted at the highest level. For clients, it means one fewer due-diligence step — the government has already done it.",
  },
  {
    detail: "Parkline Infra has delivered for Adani Group, L&T Construction, GMR Infrastructure Limited, KEC International, Dilip Buildcon, and Rays Power Infra — names that represent India's most rigorous project management standards. These relationships are not one-off transactions; they are sustained by performance, reliability, and the ability to mobilise rapidly across states.",
  },
  {
    detail: "Rail-Road Vehicles (RRVs) are a highly specialised product. Parkline is one of a small number of Indian companies approved to manufacture both mechanically and hydraulically operated RRVs for deployment on the Dedicated Freight Corridor network. This in-house manufacturing capability gives Parkline a unique advantage in railway infrastructure projects — faster deployment, bespoke configuration, and post-delivery support.",
  },
  {
    detail: "In-house fabrication workshops, ground improvement equipment, and custom machinery engineering capability mean Parkline Infra is not dependent on subcontractors or equipment rental markets for critical work. This translates to tighter cost control, faster mobilisation, and higher quality assurance — all of which compound across large, complex projects.",
  },
  {
    detail: "The L&T EDFC/WDFC programme covered Uttar Pradesh, Rajasthan, Gujarat, Haryana, and Maharashtra simultaneously. GMR's EDFCCIL works spanned UP. Adani's ground improvement covered multiple Punjab sites. Multi-state execution is not a capability Parkline is building — it is a capability Parkline has demonstrated at scale, under demanding client scrutiny.",
  },
  {
    detail: "Working on railway corridors, major bridges, and large-scale ground improvement sites means safety failure is not an option. Parkline Infra operates with site-specific safety plans, engineering supervision, structured quality control, and compliance with IS standards — not because it is required, but because it is the only way to protect people and protect the project.",
  },
];

export default function WhyParklinePage() {
  return (
    <>
      <section className="relative bg-navy-900 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Why Parkline" }]} light />
          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">The Case for Parkline</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] text-white mb-6">
              Infrastructure Is Not<br />Just Construction —<br />
              <span className="text-gold-500">It Is Risk Management.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Every infrastructure project carries risk — of ground failure, structural inadequacy, programme
              delay, cost overrun, and safety incident. Choosing Parkline Infra is how that risk is managed.
              Here is the evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {WHY_CHOOSE.map((w, i) => {
            const Icon = ICON_MAP[w.icon] || Shield;
            const ext = EXTENDED[i];
            return (
              <div key={i} className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-1">
                  <span className="font-display text-5xl text-slate-200 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gold-500" />
                    </div>
                  </div>
                  <h2 className="font-display text-2xl text-navy-800 leading-tight">{w.title}</h2>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{w.desc}</p>
                </div>
                <div className="md:col-span-7">
                  <div className="bg-paper-100 rounded-2xl p-6 border border-slate-200 border-l-4 border-l-gold-500">
                    <p className="text-slate-600 leading-relaxed">{ext.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote>
            <p className="font-display text-3xl md:text-5xl text-white leading-tight mb-6">
              &ldquo;When the ground is right, the structure is right, the programme is right —<br />
              <span className="text-gold-500">that is what certainty looks like.&rdquo;</span>
            </p>
            <cite className="font-mono text-sm text-white/40 not-italic">
              — Gajanand Sharma, Founder & Managing Director, Parkline Infra
            </cite>
          </blockquote>
        </div>
      </section>

      <CTABand />
    </>
  );
}
