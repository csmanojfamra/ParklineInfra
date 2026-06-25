import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "../data/industries";
import { SERVICES } from "../data/services";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABand from "../components/CTABand";
import HeroRingAccent from "../components/HeroRingAccent";

export const metadata: Metadata = {
  title: "Industries Served — Transportation, Energy, Railway & More",
  description:
    "Parkline Infra delivers across transportation, energy, mining, government, urban, and smart-city infrastructure sectors — with a proven multi-state project track record.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative bg-paper-50 pt-32 pb-16 overflow-hidden border-b border-line-200">
        <div className="absolute inset-0 bg-dot-light opacity-50 pointer-events-none" />
        <HeroRingAccent />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">Industries Served</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] text-navy-900 mb-6">
              Built for<br />
              <span className="text-gold-500 italic">Every Sector</span>
            </h1>
            <p className="text-ink-700/70 text-lg leading-relaxed">
              Parkline Infra&apos;s multi-discipline capability spans six infrastructure sectors — from national
              freight corridors to renewable energy parks, government road projects to urban commercial construction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.id}
              id={ind.id}
              className={`grid lg:grid-cols-12 gap-8 items-start ${i % 2 === 0 ? "" : "lg:[&>*:first-child]:col-start-5 lg:[&>*:last-child]:col-start-1 lg:[&>*:last-child]:row-start-1"}`}
            >
              <div className="lg:col-span-5">
                <div className="bg-navy-900 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-4 right-4 font-display text-8xl text-white/4 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 mb-3">
                    Sector {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display text-3xl text-white mb-4">{ind.title}</h2>
                  <p className="text-white/60 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <h3 className="font-display text-xl text-navy-800 mb-4">Relevant Parkline Services</h3>
                <div className="space-y-3">
                  {ind.services.map((slug) => {
                    const svc = SERVICES.find((s) => s.slug === slug);
                    if (!svc) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/services/${slug}`}
                        className="group flex items-center justify-between bg-paper-100 rounded-xl p-4 border border-slate-200 hover:border-gold-500 transition-all"
                      >
                        <div>
                          <p className="font-semibold text-navy-800 text-sm group-hover:text-gold-500 transition-colors">
                            {svc.title}
                          </p>
                          <p className="text-xs text-ink-700/60 mt-0.5">{svc.tagline}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-gold-500 transition-colors" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
