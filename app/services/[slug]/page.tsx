import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { SERVICES } from "../../data/services";
import { PROJECTS } from "../../data/projects";
import { SERVICE_IMAGES, PROJECT_IMAGES, SECTION_IMAGES } from "../../lib/images";
import { SERVICE_BLUR } from "../../lib/blur-placeholders";
import Breadcrumbs from "../../components/Breadcrumbs";
import FaqAccordion from "../../components/FaqAccordion";
import CTABand from "../../components/CTABand";
import { FadeUp, Stagger, StaggerItem } from "../../components/ui/motion";
import { SITE } from "../../lib/site";

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
  const heroImg = SERVICE_IMAGES[service.slug] ?? SECTION_IMAGES.about;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.ogDesc,
    provider: {
      "@type": "Organization",
      name: "Parkline Infra Private Limited",
      url: SITE.url,
    },
    areaServed: "India",
    serviceType: service.title,
    url: `${SITE.url}/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO with photo ─────────────────────────────────────────────── */}
      <section className="relative bg-navy-900 pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={SERVICE_BLUR[service.slug]}
            className="object-cover object-center"
          />
          {/* Bottom scrim: strong navy at foot (behind breadcrumb + H1), fades up */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-navy-900/10" />
          {/* Left scrim: protects text column, fades right so photo reads clearly */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/35 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-dot-pattern opacity-8 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.shortTitle },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <FadeUp delay={0.1}>
              <span className="inline-block px-3 py-1 bg-gold-500/15 border border-gold-500/30 text-gold-500 font-mono text-xs rounded-lg mb-5 uppercase tracking-wider">
                {service.tagline}
              </span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 className="font-display font-black tracking-tight text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] text-white">
                {service.title}
              </h1>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── INTRO + SIDEBAR ─────────────────────────────────────────────── */}
      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <FadeUp>
                <p className="eyebrow text-gold-500 mb-4">Overview</p>
                <p className="text-ink-700/80 leading-relaxed text-lg">{service.intro}</p>
              </FadeUp>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-navy-900 rounded-2xl p-6 sticky top-24" style={{ boxShadow: "var(--shadow-xl)" }}>
                <p className="eyebrow text-gold-500 mb-4">Quick Contact</p>
                <p className="text-white/55 text-sm mb-5 leading-relaxed">
                  Have a {service.shortTitle} requirement? Our engineering team is ready to help.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-colors text-sm shadow-[0_4px_16px_rgba(242,185,28,0.30)]"
                >
                  <MessageSquare className="w-4 h-4" /> Request a Quote
                </Link>
                <a
                  href={`tel:${SITE.contact.phone1}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-white/15 text-white/70 rounded-xl hover:border-gold-500 hover:text-gold-500 transition-colors text-sm mt-3"
                >
                  <Phone className="w-4 h-4" /> {SITE.contact.phone1Display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper-100 border-y border-line-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-10">
            <p className="eyebrow text-gold-500 mb-3">Technical Scope</p>
            <h2 className="font-display font-black tracking-tight text-3xl md:text-4xl text-navy-900">
              Our Expertise Includes
            </h2>
          </FadeUp>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.expertise.map((e, i) => (
              <StaggerItem key={e}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-line-200 hover:border-gold-500/30 transition-colors" style={{ boxShadow: "var(--shadow-sm)" }}>
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy-800 text-sm font-medium leading-snug">{e}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── APPLICATIONS ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-10">
            <p className="eyebrow text-gold-500 mb-3">Application Areas</p>
            <h2 className="font-display font-black tracking-tight text-3xl md:text-4xl text-navy-900">
              Where It Is Applied
            </h2>
          </FadeUp>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.applications.map((a, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-line-200 hover:border-gold-500/30 transition-all hover:-translate-y-0.5 duration-200" style={{ boxShadow: "var(--shadow-sm)" }}>
                  <span className="font-mono text-sm text-gold-500 font-bold flex-shrink-0 tabular-nums mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink-700/80 text-sm leading-relaxed">{a}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── RELATED PROJECTS ─────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-20 bg-navy-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-8 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="mb-10">
              <p className="eyebrow text-gold-500 mb-3">Client Proof</p>
              <h2 className="font-display font-black tracking-tight text-3xl md:text-4xl text-white">
                Delivered for Leading Clients
              </h2>
            </FadeUp>
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <StaggerItem key={p.id}>
                  <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: "0 4px 20px rgba(15,27,61,0.3)" }}>
                    {/* Photo */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={PROJECT_IMAGES[p.id] ?? SECTION_IMAGES.about}
                        alt={p.title}
                        fill
                        className="object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-300 group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <span className="eyebrow text-gold-500">{p.sectorLabel}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-bold text-xl text-white mb-1">{p.client}</h3>
                      <p className="font-display font-semibold text-[15px] text-white/70 mb-2 leading-snug">{p.title}</p>
                      <p className="font-mono text-xs text-white/40 mb-3">{p.states.join(" · ")}</p>
                      <ul className="space-y-1">
                        {p.highlights.slice(0, 2).map((h, i) => (
                          <li key={i} className="text-xs text-white/45 flex items-start gap-1.5">
                            <span className="text-gold-500 mt-0.5">·</span> {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <FadeUp delay={0.3} className="mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-mono text-gold-500 hover:underline"
              >
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeUp>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-paper-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-10">
            <p className="eyebrow text-gold-500 mb-3">Questions & Answers</p>
            <h2 className="font-display font-black tracking-tight text-3xl md:text-4xl text-navy-900">
              Frequently Asked
            </h2>
          </FadeUp>
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
