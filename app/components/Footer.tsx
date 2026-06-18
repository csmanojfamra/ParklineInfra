import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { SITE } from "../lib/site";

const SERVICES_LINKS = [
  { label: "Ground Improvement", href: "/services/ground-improvement" },
  { label: "Pile Foundation", href: "/services/pile-foundation" },
  { label: "Structure Work", href: "/services/structure-work" },
  { label: "Steel Fabrication", href: "/services/fabrication-steel-structures" },
  { label: "Building Construction", href: "/services/building-construction" },
  { label: "Maintenance & RRV", href: "/services/maintenance-repairing-rrv" },
  { label: "Custom Equipment", href: "/services/customized-equipment-engineering" },
];

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Why Parkline", href: "/why-parkline" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Pan-India Presence", href: "/presence" },
  { label: "Clients", href: "/clients" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80 relative overflow-hidden" role="contentinfo">
      {/* Blueprint grid bg */}
      <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/parkline-logo-light.png"
                alt="Parkline Infra Private Limited"
                width={180}
                height={44}
                className="object-contain h-[44px] w-auto"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              AA Class PWD Contractor · Founded 2015 · Chomu, Jaipur, Rajasthan
            </p>
            <p className="text-xs text-white/40 font-mono">CIN: {SITE.cin}</p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-gold-500 font-display tracking-wide uppercase">
                Engineering Strength.<br />Delivering Certainty.
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-gold-500 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {SERVICES_LINKS.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/60 hover:text-gold-400 transition-colors animated-underline"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-gold-500 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-gold-400 transition-colors animated-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-mono tracking-[0.15em] uppercase text-gold-500 mb-4">
              Contact Us
            </h3>
            <address className="not-italic space-y-3">
              <a
                href={`tel:${SITE.contact.phone1}`}
                className="flex items-start gap-2.5 text-sm text-white/60 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500" />
                <span>{SITE.contact.phone1Display}</span>
              </a>
              <a
                href={`tel:${SITE.contact.phone2}`}
                className="flex items-start gap-2.5 text-sm text-white/60 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500" />
                <span>{SITE.contact.phone2Display}</span>
              </a>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="flex items-start gap-2.5 text-sm text-white/60 hover:text-gold-400 transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500" />
                <span>{SITE.contact.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500" />
                <span className="leading-relaxed">{SITE.address.full}</span>
              </div>
            </address>
            <a
              href={SITE.sisterSite}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-1.5 text-xs text-white/40 hover:text-gold-400 transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Sister company: Parkline Rigs
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Parkline Infra Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">Terms & Conditions</Link>
            <Link href="/sitemap.xml" className="hover:text-gold-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
