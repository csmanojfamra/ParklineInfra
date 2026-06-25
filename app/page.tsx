import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Award, Users, Train, Settings, MapPin, Shield, ArrowRight, ChevronRight } from "lucide-react";
import { SITE, WHY_CHOOSE, STATS } from "./lib/site";
import { SERVICES } from "./data/services";
import { PROJECTS } from "./data/projects";
import { INDUSTRIES } from "./data/industries";
import { INDIA_STATES } from "./data/states";
import { SERVICE_IMAGES, PROJECT_IMAGES, SECTION_IMAGES } from "./lib/images";
import { SERVICE_BLUR } from "./lib/blur-placeholders";
import StatCounter from "./components/StatCounter";
import CTABand from "./components/CTABand";
import FaqAccordion from "./components/FaqAccordion";
import HeroMap from "./components/HeroMap";
import { FadeUp, Stagger, StaggerItem, FadeIn } from "./components/ui/motion";
import HeroDesktop from "./components/HeroDesktop";
import SectionHeader from "./components/SectionHeader";

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Award, Users, Train, Settings, MapPin, Shield,
};

const CLIENT_LOGOS = [
  { name: "Adani Group", logo: "/images/clients/adani.png" },
  { name: "L&T Construction", logo: "/images/clients/lt.png" },
  { name: "GMR Infrastructure", logo: "/images/clients/gmr.png" },
  { name: "KEC International", logo: "/images/clients/kec.png" },
  { name: "Dilip Buildcon", logo: "/images/clients/dilip-buildcon.png" },
  { name: "Rays Power Infra", logo: "/images/clients/rays-power.png" },
  { name: "PWD Rajasthan", logo: "/images/clients/pwd.png" },
  { name: "RVNL", logo: "/images/clients/rvnl.png" },
];

const HOME_FAQS = [
  {
    q: "What makes Parkline Infra different from other infrastructure contractors?",
    a: "Parkline Infra holds the AA Class PWD contractor classification — the highest government rating in Rajasthan — and combines this with in-house manufacturing (RRVs), multi-discipline capability (ground improvement through fabrication), and a proven track record with Adani, L&T, GMR, and KEC across 8 states.",
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
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-paper-50 overflow-hidden border-b border-line-200">
        <div className="absolute inset-0 bg-dot-light opacity-60 pointer-events-none" />

        {/* MOBILE — copy leads, map supports below fold */}
        <div className="lg:hidden flex flex-col">
          {/* Nav spacer */}
          <div className="h-[72px]" />

          {/* ① COPY — fully above fold */}
          <div className="px-5 pt-5 pb-6">
            <span className="inline-flex items-center px-3 py-1 bg-gold-500 text-navy-900 font-mono text-[9px] font-bold tracking-[0.15em] uppercase rounded-full mb-4 select-none">
              AA Class PWD Contractor · Since {SITE.founded}
            </span>
            <h1 className="font-display font-black tracking-tight text-[clamp(2rem,8vw,2.6rem)] leading-[1.04] text-navy-900 mb-3">
              Engineering{" "}
              <span className="text-gold-500">Strength.</span>
              <br />Delivering Certainty.
            </h1>
            <p className="text-[#1B2A4A] text-sm leading-relaxed mb-5 max-w-sm">
              India&apos;s AA-Class infrastructure contractor — ground improvement, pile foundations, bridges &amp; railways across 8 states since 2015.
            </p>
            <div className="flex gap-2.5 mb-4">
              <Link
                href="/contact"
                className="group flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-gold-500 text-navy-900 font-bold rounded-xl text-xs whitespace-nowrap hover:bg-gold-400 transition-colors shadow-[0_2px_12px_rgba(242,185,28,0.35)]"
              >
                Request a Quote <ArrowRight className="w-3 h-3 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="flex-1 inline-flex items-center justify-center px-4 py-3 border border-navy-800/25 text-navy-800 rounded-xl text-xs whitespace-nowrap hover:border-gold-500 hover:text-gold-500 transition-colors"
              >
                Explore Services
              </Link>
            </div>
            <p className="font-mono text-[10px] text-slate-400 tracking-widest">8 States · 9 Projects</p>
          </div>

          {/* ② MAP — secondary, below fold, legend fully visible */}
          <div className="mx-5 border-t border-line-200 mb-4" />
          <div
            className="px-4"
            style={{ paddingBottom: "max(2rem, env(safe-area-inset-bottom))" }}
          >
            <div className="mx-auto" style={{ maxWidth: "300px", maxHeight: "50svh" }}>
              <HeroMap lightBg />
            </div>
          </div>
        </div>

        {/* DESKTOP — extracted to client component for framer-motion animate */}
        <HeroDesktop founded={SITE.founded} />

      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="relative bg-navy-900 py-16 overflow-hidden">
        {/* Background photo with duotone */}
        <div className="absolute inset-0">
          <Image
            src={SECTION_IMAGES.about}
            alt=""
            fill
            className="object-cover opacity-15"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900" />
        </div>
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <StaggerItem key={s.label}>
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} light />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="01 — What We Do"
            heading={<>Seven Core <span className="text-gold-500">Service</span> Lines</>}
            description="Full-spectrum infrastructure delivery — from deep geotechnical ground improvement to custom railway equipment."
          />

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group relative block bg-white rounded-2xl overflow-hidden border border-line-200 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: "var(--shadow-card)" }}>
                  {/* Photo */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={SERVICE_IMAGES[s.slug] ?? SECTION_IMAGES.about}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      placeholder="blur"
                      blurDataURL={SERVICE_BLUR[s.slug]}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-[10px] text-white/70 bg-navy-900/60 backdrop-blur-sm px-2 py-0.5 rounded-md">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-navy-800 leading-tight mb-1.5 group-hover:text-gold-500 transition-colors">
                      {s.shortTitle}
                    </h3>
                    <p className="text-sm text-ink-700/60 leading-relaxed line-clamp-2">{s.tagline}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-mono text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
            {/* CTA card */}
            <StaggerItem>
              <Link
                href="/services"
                className="group flex flex-col justify-between bg-navy-900 rounded-2xl p-6 border border-navy-800 hover:border-gold-500 transition-all duration-300 h-full min-h-[240px]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <p className="eyebrow text-gold-500">View All Services</p>
                <div>
                  <p className="text-white/50 text-sm mb-4">Full capability overview — 7 service lines across infrastructure disciplines.</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold-500/40 text-gold-500 rounded-xl text-xs font-mono group-hover:bg-gold-500/10 transition-colors">
                    Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* ── WHY PARKLINE ─────────────────────────────────────────────────── */}
      <section className="relative py-24 bg-navy-900 overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src={SECTION_IMAGES.whyChoose}
            alt=""
            fill
            className="object-cover opacity-12"
            aria-hidden
          />
          <div className="absolute inset-0 bg-navy-900/90" />
        </div>
        <div className="absolute inset-0 bg-dot-pattern opacity-8 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-14">
            <p className="eyebrow text-gold-500 mb-4">02 — Our Differentiators</p>
            <h2 className="font-display font-black tracking-tight text-4xl md:text-6xl text-white leading-[1.06] max-w-3xl">
              Infrastructure Is Risk Management.{" "}
              <span className="text-gold-500 italic">We Manage It.</span>
            </h2>
          </FadeUp>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE.map((w, i) => {
              const Icon = ICON_MAP[w.icon] || Shield;
              return (
                <StaggerItem key={i}>
                  <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold-500/30 hover:bg-white/8 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gold-500/15 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-gold-500" />
                      </div>
                      <span className="font-mono text-3xl text-white/6 font-bold select-none" aria-hidden>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-2 leading-tight">
                      {w.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <FadeUp delay={0.3} className="mt-10 text-center">
            <Link
              href="/why-parkline"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold-500/40 text-gold-500 rounded-xl hover:bg-gold-500/10 transition-colors font-mono text-sm"
            >
              Full Capability Story <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────────────────────── */}
      <section className="py-24 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="04 — Project Highlights"
            heading={<>Proven at <span className="text-gold-500">National</span> Scale</>}
            action={
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-navy-800/25 text-navy-800 rounded-xl hover:border-gold-500 hover:text-gold-500 transition-all text-sm font-mono"
              >
                All 9 Projects <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((p) => (
              <StaggerItem key={p.id}>
                <div
                  className="group relative bg-white rounded-2xl overflow-hidden border border-line-200 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  {/* Photo */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={PROJECT_IMAGES[p.id] ?? SECTION_IMAGES.about}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/30 to-transparent" />
                    {/* Sector chip */}
                    <div className="absolute top-4 left-4">
                      <span className="eyebrow text-gold-500 bg-navy-900/70 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                        {p.sectorLabel}
                      </span>
                    </div>
                    {/* States */}
                    <div className="absolute bottom-4 left-4">
                      <span className="font-mono text-[10px] text-white/60">{p.states.join(" · ")}</span>
                    </div>
                    {/* Client logo if available */}
                    {p.clientLogo && (
                      <div className="absolute top-4 right-4 bg-white rounded-lg p-1.5 w-12 h-8 flex items-center justify-center">
                        <Image src={p.clientLogo} alt={p.client} width={36} height={20} className="object-contain" />
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-2xl text-navy-800 leading-tight mb-1">
                      {p.client}
                    </h3>
                    <p className="font-display font-semibold text-[15px] text-navy-700 mb-2 leading-snug">{p.title}</p>
                    <p className="text-sm text-ink-700/60 leading-relaxed line-clamp-2">{p.scope}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-mono text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      View project <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper-100 border-y border-line-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="03 — Industries Served"
            heading={<>Built for <span className="text-gold-500">Every</span> Sector</>}
            className="mb-12"
          />
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIES.map((ind) => (
              <StaggerItem key={ind.id}>
                <Link
                  href="/industries"
                  className="group flex items-start gap-4 bg-white rounded-2xl p-5 border border-line-200 hover:border-gold-500/40 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="w-1 h-12 bg-gold-500/20 rounded-full flex-shrink-0 group-hover:bg-gold-500 transition-colors" />
                  <div>
                    <h3 className="font-display font-bold text-lg text-navy-800 mb-1 group-hover:text-gold-500 transition-colors leading-tight">
                      {ind.title}
                    </h3>
                    <p className="text-sm text-ink-700/60 leading-relaxed">{ind.desc}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── CLIENTS ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-8 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="text-center mb-12">
            <p className="eyebrow text-gold-500 mb-3">Clients & Partners</p>
            <h2 className="font-display font-black tracking-tight text-4xl md:text-5xl text-white leading-[1.08]">
              Trusted by India&apos;s{" "}
              <span className="text-gold-500 italic">Best</span>
            </h2>
          </FadeUp>
          <Stagger className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CLIENT_LOGOS.map((c) => (
              <StaggerItem key={c.name}>
                <div className="flex items-center justify-center bg-white/6 border border-white/10 rounded-2xl p-5 hover:border-gold-500/30 hover:bg-white/10 transition-all duration-200 h-20">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={100}
                    height={40}
                    className="object-contain max-h-10 brightness-0 invert opacity-60 hover:opacity-90 transition-opacity"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Common Questions"
            heading="Frequently Asked"
            className="mb-10"
          />
          <FaqAccordion items={HOME_FAQS} />
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
