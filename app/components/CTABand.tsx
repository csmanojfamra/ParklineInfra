import Link from "next/link";

interface CTABandProps {
  heading?: string;
  sub?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABand({
  heading = "Ready to Build Something Extraordinary?",
  sub = "Talk to Parkline Infra's engineering team about your next project.",
  primaryLabel = "Request a Quote",
  primaryHref = "/contact",
  secondaryLabel = "Explore Services",
  secondaryHref = "/services",
}: CTABandProps) {
  return (
    <section className="relative bg-navy-900 overflow-hidden grain-overlay">
      <div className="absolute inset-0 bg-gold-glow pointer-events-none" />
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">
          Get in Touch
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-white leading-tight mb-4">
          {heading}
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="px-8 py-4 bg-gold-500 text-navy-900 font-semibold rounded-xl hover:bg-gold-400 transition-all duration-200 hover:shadow-gold text-base"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-gold-500 hover:text-gold-500 transition-all duration-200 text-base"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
