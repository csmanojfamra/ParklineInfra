import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SERVICES } from "../../data/services";
import { PROJECTS } from "../../data/projects";
import Breadcrumbs from "../../components/Breadcrumbs";
import FaqAccordion from "../../components/FaqAccordion";
import CTABand from "../../components/CTABand";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Parkline Infra`,
    description: service.ogDesc,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Parkline Infra`,
      description: service.ogDesc,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = PROJECTS.filter((p) => service.relatedProjects.includes(p.id));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.ogDesc,
    provider: {
      "@type": "Organization",
      name: "Parkline Infra Private Limited",
      url: "https://www.parklineinfra.com",
    },
    areaServed: "India",
    serviceType: service.title,
    url: `https://www.parklineinfra.com/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative bg-navy-900 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.shortTitle },
            ]}
            light
          />
          <div className="mt-8">
            <span className="inline-block px-4 py-1.5 bg-gold-500 text-navy-900 font-mono text-xs font-bold rounded-lg mb-4 uppercase tracking-wider">
              {service.tagline}
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] text-white mt-2">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 mb-4">Overview</p>
              <p className="text-slate-600 leading-relaxed text-lg">{service.intro}</p>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-navy-900 rounded-2xl p-6 sticky top-24">
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 mb-4">
                  Quick Contact
                </p>
                <p className="text-white/60 text-sm mb-4">
                  Have a requirement for {service.shortTitle}? Talk to our engineering team.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-gold-500 text-navy-900 font-semibold rounded-xl hover:bg-gold-400 transition-colors text-sm"
                >
                  Request a Quote
                </Link>
                <a
                  href="tel:+919785817192"
                  className="block w-full text-center px-4 py-3 border border-white/20 text-white rounded-xl hover:border-gold-500 transition-colors text-sm mt-3"
                >
                  +91 97858 17192
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-paper-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-navy-800 mb-8">Our Expertise Includes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.expertise.map((e) => (
              <div key={e} className="flex items-start gap-3 bg-paper-50 rounded-xl p-4 border border-slate-200">
                <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-navy-800 text-sm font-medium">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-navy-800 mb-8">Where It Is Applied</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.applications.map((a, i) => (
              <div key={i} className="flex items-start gap-3 bg-paper-100 rounded-xl p-4 border border-slate-200">
                <span className="font-mono text-xs text-gold-500 font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-slate-600 text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-16 bg-navy-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 mb-3">
              Client Proof
            </p>
            <h2 className="font-display text-3xl text-white mb-8">Delivered For Leading Clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <div key={p.id} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-gold-500/40 transition-colors">
                  <span className="font-mono text-xs text-gold-500 uppercase tracking-wider">{p.sectorLabel}</span>
                  <h3 className="font-display text-xl text-white mt-2 mb-1">{p.client}</h3>
                  <p className="text-sm font-semibold text-white/70 mb-2">{p.title}</p>
                  <p className="text-xs text-white/50 mb-3">{p.states.join(" · ")}</p>
                  <ul className="space-y-1">
                    {p.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="text-xs text-white/50 flex items-start gap-1.5">
                        <span className="text-gold-500">·</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-mono text-gold-500 hover:underline"
              >
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-paper-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-navy-800 mb-8">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      <CTABand
        heading={`Ready to Discuss Your ${service.shortTitle} Project?`}
        sub="Speak with Parkline Infra's engineering team about your specific requirements."
      />
    </>
  );
}
