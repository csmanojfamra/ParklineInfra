import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />
      <div className="relative text-center max-w-xl">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold-500 mb-4">
          Error 404
        </p>
        <h1 className="font-display text-[clamp(4rem,15vw,12rem)] leading-none text-white/10 mb-0 select-none">
          404
        </h1>
        <h2 className="font-display text-3xl md:text-4xl text-white -mt-4 mb-4">
          Page Not Found
        </h2>
        <p className="text-white/60 mb-8 leading-relaxed">
          This page doesn&apos;t exist — but Parkline Infra&apos;s engineering capability does.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 text-navy-900 font-semibold rounded-xl hover:bg-gold-400 transition-colors"
          >
            Go Home <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white rounded-xl hover:border-gold-500 hover:text-gold-500 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
