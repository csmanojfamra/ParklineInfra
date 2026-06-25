import type { Metadata } from "next";
import { FAQS } from "../data/faqs";
import FaqAccordion from "../components/FaqAccordion";
import Breadcrumbs from "../components/Breadcrumbs";
import CTABand from "../components/CTABand";

export const metadata: Metadata = {
  title: "FAQ — Parkline Infra Infrastructure Services",
  description:
    "Answers to common questions about Parkline Infra's AA Class PWD classification, ground improvement methods, pile foundations, RRV manufacturing, project coverage, and how to request a quote.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <section className="relative bg-paper-50 pt-32 pb-16 overflow-hidden border-b border-line-200">
        <div className="absolute inset-0 bg-dot-light opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">Knowledge Base</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] text-navy-900 mb-6">
              Frequently<br />
              <span className="text-gold-500 italic">Asked Questions</span>
            </h1>
            <p className="text-ink-700/70 text-lg leading-relaxed">
              Clear answers to the questions most commonly asked about Parkline Infra&apos;s capabilities,
              credentials, services, and how to work with us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      <CTABand
        heading="Didn't Find Your Answer?"
        sub="Contact Parkline Infra's engineering team directly. We respond to all enquiries within one business day."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
