import type { Metadata } from "next";
import { PROJECTS } from "../data/projects";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABand from "../components/CTABand";
import HeroRingAccent from "../components/HeroRingAccent";

export const metadata: Metadata = {
  title: "Clients & Partners — Adani, L&T, GMR, KEC, Dilip Buildcon",
  description:
    "Parkline Infra has delivered projects for Adani Group, L&T Construction, GMR Infrastructure, KEC International, Dilip Buildcon, Rays Power Infra, JDA, and PWD Rajasthan.",
  alternates: { canonical: "/clients" },
};

const CLIENTS = [
  {
    name: "Adani Group",
    type: "Private Corporate",
    desc: "Large-scale ground improvement across multiple Punjab locations — one of Parkline's largest and most technically complex assignments.",
    projects: ["adani-ground-improvement"],
  },
  {
    name: "L&T Construction",
    type: "EPC / Private Corporate",
    desc: "Pile foundation, drainage, and maintenance works on EDFC & WDFC across UP, Rajasthan, Gujarat, Haryana, and Maharashtra; rail trolley fabrication for Mauritius Metro.",
    projects: ["lt-edfc-wdfc", "lt-rrv-mauritius"],
  },
  {
    name: "GMR Infrastructure Limited",
    type: "Private Corporate",
    desc: "Pile foundation, sand pile, stone pile, and major bridge construction for EDFCCIL projects in Uttar Pradesh.",
    projects: ["gmr-edfccil"],
  },
  {
    name: "KEC International",
    type: "Private Corporate",
    desc: "Infrastructure and civil works for 30 MW power project in Karnataka and 250 MW power project in Madhya Pradesh.",
    projects: ["kec-solar-power"],
  },
  {
    name: "Dilip Buildcon",
    type: "EPC / Private Corporate",
    desc: "Pile foundation and major bridge construction for national highway projects in Uttar Pradesh.",
    projects: ["dilip-buildcon-highway"],
  },
  {
    name: "Rays Power Infra",
    type: "Renewable Energy",
    desc: "Civil works and pile foundations for 125 MW and 102 MW solar power projects in Karnataka and Uttarakhand.",
    projects: ["rays-power-karnataka"],
  },
  {
    name: "Jaipur Development Authority (JDA)",
    type: "Government",
    desc: "Flexible pavement road resurfacing and city road development projects across Jaipur under the JDA urban infrastructure programme.",
    projects: ["jda-road"],
  },
  {
    name: "Public Works Department (PWD)",
    type: "Government",
    desc: "Road development from Chomu to Fatehpur under PWD Rajasthan — Parkline's home state government infrastructure programme.",
    projects: ["pwd-chomu-fatehpur"],
  },
  {
    name: "VRB",
    type: "Private Developer",
    desc: "Residential pile foundation works and construction of commercial and residential complexes in Jaipur.",
    projects: ["vrb-residential"],
  },
];

export default function ClientsPage() {
  return (
    <>
      <section className="relative bg-paper-50 pt-32 pb-16 overflow-hidden border-b border-line-200">
        <div className="absolute inset-0 bg-dot-light opacity-50 pointer-events-none" />
        <HeroRingAccent />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Clients" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">Clients & Partners</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] text-navy-900 mb-6">
              Trusted by<br />
              <span className="text-gold-500 italic">India&apos;s Best</span>
            </h1>
            <p className="text-ink-700/70 text-lg leading-relaxed">
              Parkline Infra&apos;s client roster includes India&apos;s largest industrial conglomerates, leading EPC
              contractors, renewable energy developers, and government agencies. These relationships are built
              on delivery — not promises.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="bg-paper-100 rounded-2xl p-6 border border-slate-200 hover:border-gold-500 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="font-display text-xl text-navy-800 leading-tight">{c.name}</h2>
                  <span className="text-xs font-mono text-ink-700/40 bg-navy-900/5 px-2 py-0.5 rounded flex-shrink-0 ml-2">
                    {c.type}
                  </span>
                </div>
                <p className="text-sm text-ink-700/60 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-navy-900 rounded-3xl p-10 text-center">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-3">Trust Narrative</p>
            <p className="font-display text-3xl md:text-4xl text-white leading-tight max-w-3xl mx-auto">
              When India&apos;s largest infrastructure companies need a contractor they can rely on —
              for technical capability, safety, and delivery — they call Parkline Infra.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        heading="Join the Parkline Client Roster"
        sub="Bring your next infrastructure project to a contractor with a proven track record at national scale."
      />
    </>
  );
}
