import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CTA_BLUR = "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAQCdASoQAAcABUB8JaACdAEUmsfsYQAA999Bgi2YTTWk92Nz6XCBaJjltIKyGtnOx4AA";

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
    <section className="relative bg-navy-900 overflow-hidden">
      {/* Cinematic background — flyover + piling rigs at golden hour */}
      <div className="absolute inset-0">
        <Image
          src="/images/services/cta-band.webp"
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={CTA_BLUR}
          className="object-cover"
          aria-hidden
        />
        {/* Navy gradient scrim — keeps text legible across all viewport sizes */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/80 to-navy-900/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-navy-900/60" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <p className="eyebrow text-gold-500 mb-5">Get in Touch</p>
        <h2 className="font-display font-black tracking-tight text-4xl md:text-6xl text-white leading-[1.06] mb-5">
          {heading}
        </h2>
        <p className="text-white/65 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-xl hover:bg-gold-400 transition-all duration-200 shadow-[0_4px_20px_rgba(242,185,28,0.45)] hover:shadow-[0_6px_28px_rgba(242,185,28,0.60)] hover:-translate-y-px text-base"
          >
            {primaryLabel} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-gold-500 hover:text-gold-500 transition-all duration-200 text-base"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
