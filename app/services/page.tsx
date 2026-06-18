import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";
import { SERVICES } from "../data/services";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABand from "../components/CTABand";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Services — Ground Improvement, Pile Foundation, Bridges & More",
  description:
    "Parkline Infra delivers 7 core infrastructure service lines: ground improvement, pile foundation, bridge/structure construction, steel fabrication, building construction, RRV manufacturing, and custom equipment engineering.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-navy-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} light />
          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">What We Do</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] text-white mb-6">
              Seven Core<br />
              <span className="text-gold-500">Service Lines</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Parkline Infra Private Limited is an AA-Class infrastructure contractor delivering seven
              integrated service lines — from deep geotechnical ground improvement to in-house railway
              equipment manufacturing — under a single disciplined programme.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group grid md:grid-cols-12 gap-6 bg-paper-100 rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-gold-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="md:col-span-1 flex items-start">
                  <span className="font-display text-5xl text-slate-200 leading-none group-hover:text-gold-500/30 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-8">
                  <h2 className="font-display text-2xl md:text-3xl text-navy-800 mb-2 group-hover:text-gold-500 transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed mb-4">{s.intro.slice(0, 180)}...</p>
                  <div className="flex flex-wrap gap-2">
                    {s.expertise.slice(0, 3).map((e) => (
                      <span key={e} className="text-xs bg-slate-100 text-slate-500 px-2.5 py-1 rounded-lg">
                        {e}
                      </span>
                    ))}
                    {s.expertise.length > 3 && (
                      <span className="text-xs text-slate-400 px-2 py-1">+{s.expertise.length - 3} more</span>
                    )}
                  </div>
                </div>
                <div className="md:col-span-3 flex items-center justify-end">
                  <div className="flex items-center gap-2 text-sm font-mono text-gold-500 group-hover:gap-3 transition-all">
                    View Service <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
