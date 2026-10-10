import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SITE, FOUNDER, STATS, WHY_CHOOSE } from "../lib/site";
import { SECTION_IMAGES } from "../lib/images";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABand from "../components/CTABand";
import StatCounter from "../components/StatCounter";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us — Parkline Infra Private Limited",
  description:
    "Parkline Infra Private Limited — founded in 2015 in Jaipur, Rajasthan. AA Class PWD Contractor with a proven record in ground improvement, pile foundations, bridges, and railway infrastructure across India.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Parkline Infra Private Limited",
    description:
      "AA Class PWD Contractor since 2015 — engineering infrastructure across India for Adani, L&T, GMR, and KEC.",
  },
};

const CAPABILITIES = [
  "Ground Improvement & Geotechnical Solutions",
  "Deep Pile Foundation Systems",
  "Major Bridge & RCC Structure Construction",
  "Structural Steel Fabrication",
  "Residential & Commercial Building Construction",
  "Railway RRV Manufacturing & Maintenance",
  "Customized Equipment Engineering",
];

const MILESTONES = [
  { year: "2015", title: "Company Founded", desc: "Parkline Infra Private Limited incorporated in Chomu, Jaipur, Rajasthan." },
  { year: "2016", title: "First Government Contract", desc: "Secured first PWD road development contract in Rajasthan." },
  { year: "2018", title: "DFC Entry", desc: "Began work on Dedicated Freight Corridor projects with L&T Construction." },
  { year: "2019", title: "RRV Manufacturing", desc: "Developed and supplied Rail-Road Vehicles for the Mauritius Metro Project." },
  { year: "2021", title: "Adani Partnership", desc: "Awarded large-scale ground improvement contracts for Adani Group in Punjab." },
  { year: "2023", title: "Pan-India Operations", desc: "Projects delivered across 10+ states — from Rajasthan to Punjab, Gujarat, Kerala, and Delhi NCR." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — Keller split */}
      <section className="relative overflow-hidden bg-navy-900">

        {/* Mobile */}
        <div className="lg:hidden relative min-h-[52vw] flex items-end">
          <Image
            src={SECTION_IMAGES.about}
            alt="Parkline Infra infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/55 to-navy-900/15" />
          <div className="relative px-4 sm:px-6 pb-10 pt-20 w-full">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
            <div className="mt-4">
              <p className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-gold-500 mb-2">
                Our Story
              </p>
              <div className="w-10 h-[2px] bg-gold-500 mb-4" />
              <h1 className="font-display font-black tracking-tight text-[clamp(2rem,8vw,3rem)] leading-[1.05] text-white">
                Building India&apos;s Infrastructure
              </h1>
            </div>
          </div>
        </div>

        {/* Desktop — Keller split */}
        <div
          className="hidden lg:flex relative overflow-hidden"
          style={{ minHeight: "clamp(360px, 46vh, 540px)" }}
        >
          {/* Left navy panel */}
          <div
            className="relative z-10 bg-navy-900 flex flex-col justify-center flex-shrink-0"
            style={{ width: "52%", padding: "2.5rem 4vw 2.5rem 5vw" }}
          >
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
            <div className="mt-6">
              <p className="font-mono text-[11px] font-bold tracking-[0.22em] uppercase text-gold-500 mb-2">
                Our Story
              </p>
              <div className="w-10 h-[2px] bg-gold-500 mb-5" />
              <h1
                className="font-display font-black text-white leading-[1.05]"
                style={{ fontSize: "clamp(1.8rem, 3.2vw, 3.4rem)", letterSpacing: "-0.02em" }}
              >
                Building India&apos;s<br />
                <span className="text-gold-500 italic">Infrastructure</span><br />
                Since 2015.
              </h1>
              <p className="text-white/55 text-[0.9rem] leading-relaxed mt-4 max-w-[40ch]">
                AA Class PWD Contractor — engineering certainty across India for Adani, L&T, GMR, and KEC.
              </p>
            </div>
          </div>

          {/* Right image panel */}
          <div
            className="absolute inset-y-0 right-0 z-20"
            style={{
              left: "38%",
              clipPath: "polygon(22.6% 0%, 100% 0%, 100% 100%, 22.6% 100%, 0% 50%)",
            }}
          >
            <Image
              src={SECTION_IMAGES.about}
              alt="Parkline Infra infrastructure projects"
              fill
              priority
              sizes="65vw"
              className="object-cover object-left"
              style={{ filter: "contrast(1.06) saturate(1.1)" }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to right, rgba(15,27,61,0.6) 0%, transparent 30%)" }}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-paper-100 py-12 border-b border-line-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                overline="Who We Are"
                title="Engineering Strength,"
                titleHighlight="Delivering Certainty"
                align="left"
              />
              <div className="mt-8 space-y-4 text-ink-700/80 leading-relaxed">
                <p>
                  Parkline Infra Private Limited (CIN: {SITE.cin}) is an AA Class contractor registered with
                  the Public Works Department (PWD), Rajasthan — the highest state contractor classification —
                  and one of India&apos;s trusted names in infrastructure construction and engineering.
                </p>
                <p>
                  Incorporated in Chomu, Jaipur, Parkline Infra began as a ground improvement and foundation
                  specialist, building on the founder&apos;s deep expertise in geotechnical engineering and
                  large-scale project management. The company has since expanded into seven distinct
                  service lines spanning bridges, steel fabrication, building construction, railway infrastructure,
                  and in-house equipment manufacturing.
                </p>
                <p>
                  Today, Parkline Infra has delivered projects for India&apos;s largest corporates — Adani Group,
                  L&T Construction, GMR Infrastructure, KEC International — and for government agencies
                  including the Jaipur Development Authority and Public Works Department across India.
                </p>
              </div>
              <div className="mt-8">
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 mb-4">
                  Core Capabilities
                </p>
                <ul className="space-y-2">
                  {CAPABILITIES.map((c) => (
                    <li key={c} className="flex items-center gap-2.5 text-sm text-ink-700/80">
                      <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="space-y-6">
              <div className="bg-navy-900 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 font-display text-8xl text-white/4 leading-none select-none">V</div>
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 mb-3">Vision</p>
                <p className="text-white/80 leading-relaxed">{SITE.vision}</p>
              </div>
              <div className="bg-gold-500 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 font-display text-8xl text-navy-900/10 leading-none select-none">M</div>
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-navy-900/60 mb-3">Mission</p>
                <p className="text-navy-900 leading-relaxed font-medium">{SITE.mission}</p>
              </div>
              <div className="bg-paper-100 rounded-2xl p-6 border border-slate-200">
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 mb-3">
                  Company Registration
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-ink-700/50">Legal Name</span>
                    <span className="text-navy-800 font-semibold text-right text-xs">Parkline Infra Private Limited</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-700/50">CIN</span>
                    <span className="text-navy-800 font-mono text-xs">{SITE.cin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-700/50">Established</span>
                    <span className="text-navy-800 font-semibold">{SITE.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-700/50">Classification</span>
                    <span className="text-gold-500 font-semibold text-xs">AA Class PWD Contractor</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-700/50">Headquarters</span>
                    <span className="text-navy-800 font-semibold text-xs text-right">Chomu, Jaipur, Rajasthan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-paper-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            overline="Our Journey"
            title="Milestones of"
            titleHighlight="Engineering Excellence"
          />
          <div className="mt-12 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row gap-6 items-start md:items-center ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-paper-50 rounded-2xl p-5 border border-slate-200 inline-block text-left max-w-sm">
                      <p className="font-display text-3xl text-gold-500 mb-1">{m.year}</p>
                      <h3 className="font-semibold text-navy-800 mb-1">{m.title}</h3>
                      <p className="text-sm text-ink-700/60">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-8 h-8 rounded-full bg-gold-500 border-4 border-paper-100 flex-shrink-0 z-10 items-center justify-center">
                    <div className="w-2 h-2 bg-navy-900 rounded-full" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            overline="Leadership"
            title="The Founder"
            light
          />
          <div className="mt-12 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="relative">
                <div className="w-full aspect-[3/4] max-w-sm mx-auto bg-navy-800 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for founder photo */}
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-gold-500/20 border-2 border-gold-500/40 flex items-center justify-center mx-auto mb-4">
                      <span className="font-display text-4xl text-gold-500">GS</span>
                    </div>
                    <p className="text-white/40 text-sm font-mono">Photo</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 text-xs font-mono px-4 py-2 rounded-full font-bold whitespace-nowrap">
                  Founder & Managing Director
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-display text-4xl md:text-5xl text-white mb-2">{FOUNDER.name}</h2>
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 mb-6">{FOUNDER.title}</p>
              <div className="flex gap-2 mb-6">
                {FOUNDER.traits.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/10 border border-white/20 text-white/70 text-xs font-mono rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-white/70 leading-relaxed text-base mb-8">{FOUNDER.bio}</p>
              <blockquote className="border-l-2 border-gold-500 pl-5">
                <p className="text-white/80 italic text-lg leading-relaxed">
                  &ldquo;Infrastructure is not just construction — it is risk management. Every project
                  is a commitment to the client, to the public, and to the nation.&rdquo;
                </p>
                <cite className="mt-2 block text-gold-500 text-sm font-mono not-italic">— {FOUNDER.name}</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading="Partner with Parkline Infra"
        sub="Tell us about your infrastructure project. Our engineering team will respond within one business day."
      />
    </>
  );
}
