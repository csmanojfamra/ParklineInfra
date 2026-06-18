import type { Metadata } from "next";
import Link from "next/link";
import { Award, Users, Train, Settings, MapPin, Shield, ArrowRight } from "lucide-react";
import { SITE, WHY_CHOOSE, STATS } from "./lib/site";
import { SERVICES } from "./data/services";
import { PROJECTS } from "./data/projects";
import { INDUSTRIES } from "./data/industries";
import { INDIA_STATES } from "./data/states";
import StatCounter from "./components/StatCounter";
import SectionHeading from "./components/SectionHeading";
import CTABand from "./components/CTABand";
import FaqAccordion from "./components/FaqAccordion";
import HeroMap from "./components/HeroMap";

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Award, Users, Train, Settings, MapPin, Shield,
};

const CLIENTS = [
  "Adani Group",
  "L&T Construction",
  "GMR Infrastructure",
  "KEC International",
  "Dilip Buildcon",
  "Rays Power Infra",
  "Jaipur Development Authority",
  "Public Works Department",
];

const HOME_FAQS = [
  {
    q: "What makes Parkline Infra different from other infrastructure contractors?",
    a: "Parkline Infra holds the AA Class PWD contractor classification — the highest government rating in Rajasthan — and combines this with in-house manufacturing (RRVs), multi-discipline capability (ground improvement through fabrication), and a proven track record with Adani, L&T, GMR, and KEC across 8+ states.",
  },
  {
    q: "What is the AA Class PWD contractor classification?",
    a: "AA Class is the highest classification granted by the Public Works Department (PWD) of Rajasthan. It certifies that Parkline Infra meets the most stringent financial, technical, and operational standards required to execute large-scale government infrastructure projects.",
  },
  {
    q: "In which states does Parkline Infra operate?",
    a: "Parkline Infra operates across Rajasthan, Punjab, Uttar Pradesh, Gujarat, Haryana, Madhya Pradesh, Karnataka, Uttarakhand, Maharashtra, and Delhi NCR — with projects delivered for national clients including L&T, GMR, Adani, and Dilip Buildcon.",
  },
];

export default function HomePage() {
  const activeStateCount = INDIA_STATES.filter((s) => s.active).length;
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-dot-pattern pointer-events-none opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">
          {/* Mobile: copy → map stacked. Desktop: 7/5 col grid side-by-side */}
          <div className="w-full grid lg:grid-cols-12 gap-6 lg:items-center">

            {/* COPY — always first in DOM → always above fold on mobile */}
            <div className="lg:col-span-7 py-2 lg:py-8">
              <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">
                AA Class PWD Contractor · Since {SITE.founded}
              </p>
              <h1 className="font-display text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.93] text-white mb-5">
                Engineering<br />
                <span className="text-gold-500">Strength.</span><br />
                Delivering<br />
                Certainty.
              </h1>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-5 max-w-xl">
                Parkline Infra Private Limited is an AA-Class government-recognised infrastructure contractor,
                delivering ground improvement, pile foundations, bridges, steel fabrication,
                and railway structures across India since 2015.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["8 States", "9 Marquee Projects", "Railway-Approved RRV", "AA-Class PWD"].map((b) => (
                  <span key={b} className="px-3 py-1.5 border border-gold-500/40 text-gold-400 text-xs font-mono tracking-wide rounded-lg bg-gold-500/8">
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-xl hover:bg-gold-400 transition-all duration-200 text-base group">
                  Request a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-gold-500/50 text-white font-semibold rounded-xl hover:border-gold-500 hover:text-gold-500 transition-all duration-200 text-base">
                  Explore Services
                </Link>
              </div>
            </div>

            {/* MAP — below copy on mobile, right column on desktop */}
            <div className="lg:col-span-5 flex flex-col items-center mt-8 lg:mt-0">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500">Pan-India Presence</p>
                  <span className="font-mono text-xs text-white/40">8 States · 9 Projects</span>
                </div>
                {/* Fixed aspect-ratio container — zero CLS when map swaps in */}
                <div className="w-full aspect-[9/10] max-h-[55vh] lg:max-h-none">
                  <HeroMap />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Trust strip */}
        <div className="border-t border-white/10 bg-navy-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-white/40 tracking-widest">
              <span>TRUSTED BY</span>
              {["ADANI GROUP", "L&T CONSTRUCTION", "GMR INFRASTRUCTURE", "KEC INTERNATIONAL"].map((c) => (
                <span key={c} className="text-white/60 font-semibold">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-paper-100 py-16 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            overline="What We Do"
            title="Seven Core"
            titleHighlight="Service Lines"
            subtitle="From deep geotechnical ground improvement to custom railway equipment manufacturing — Parkline Infra covers the full spectrum of infrastructure delivery."
            num="01"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative bg-paper-100 rounded-2xl p-6 border border-slate-200 hover:border-gold-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="absolute top-4 right-4 font-mono text-xs text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4">
                  <Settings className="w-4 h-4 text-gold-500" />
                </div>
                <h3 className="font-display text-xl text-navy-800 leading-tight mb-2 group-hover:text-gold-500 transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{s.tagline}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-mono text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
            <Link
              href="/services"
              className="group bg-navy-800 rounded-2xl p-6 border border-navy-700 hover:border-gold-500 transition-all duration-300 flex flex-col justify-between min-h-[180px]"
            >
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 mb-3">
                View All Services
              </p>
              <div className="flex items-end justify-between">
                <p className="text-white/60 text-sm">Full capability overview</p>
                <ArrowRight className="w-5 h-5 text-gold-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY PARKLINE */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">
              Our Differentiators
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-white leading-tight max-w-3xl">
              Infrastructure Is Not Just Construction —{" "}
              <span className="text-gold-500">It Is Risk Management.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE.map((w, i) => {
              const Icon = ICON_MAP[w.icon] || Shield;
              return (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold-500/40 transition-colors">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-gold-500/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold-500" />
                    </div>
                    <span className="font-mono text-2xl text-white/8 font-bold leading-none pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-white mb-2 leading-tight">
                    {w.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/why-parkline"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold-500/40 text-gold-500 rounded-xl hover:bg-gold-500/10 transition-colors font-mono text-sm"
            >
              Full Capability Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-paper-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            overline="Industries Served"
            title="Built for"
            titleHighlight="Every Sector"
            subtitle="Parkline Infra delivers across India's most demanding infrastructure sectors."
            num="03"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.id}
                href="/industries"
                className="group bg-paper-50 rounded-2xl p-6 border border-slate-200 hover:border-gold-500 hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-display text-xl text-navy-800 mb-2 group-hover:text-gold-500 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{ind.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeading
              overline="Project Highlights"
              title="Proven at"
              titleHighlight="National Scale"
              align="left"
              num="04"
            />
            <Link
              href="/projects"
              className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 border border-navy-800 text-navy-800 rounded-xl hover:bg-navy-800 hover:text-white transition-all text-sm font-mono"
            >
              All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                className="group bg-paper-100 rounded-2xl p-6 border border-slate-200 hover:border-gold-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded-md">
                      {p.sectorLabel}
                    </span>
                    <p className="mt-2 font-mono text-xs text-slate-400">{p.states.join(" · ")}</p>
                  </div>
                </div>
                <h3 className="font-display text-2xl text-navy-800 leading-tight mb-1">
                  {p.client}
                </h3>
                <p className="text-sm font-semibold text-navy-700 mb-2">{p.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{p.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 text-center mb-3">
            Clients & Partners
          </p>
          <h2 className="font-display text-4xl text-white text-center mb-12">
            Trusted by India&apos;s{" "}
            <span className="text-gold-500">Leading Organisations</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CLIENTS.map((c) => (
              <div
                key={c}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center justify-center hover:border-gold-500/40 transition-colors"
              >
                <p className="text-white/70 font-semibold text-sm text-center leading-tight">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOME FAQs */}
      <section className="py-20 bg-paper-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading overline="Common Questions" title="Frequently" titleHighlight="Asked" />
          <div className="mt-10">
            <FaqAccordion items={HOME_FAQS} />
          </div>
          <div className="mt-6 text-center">
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-mono text-gold-500 hover:underline">
              View all FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
