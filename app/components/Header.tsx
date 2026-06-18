"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE } from "../lib/site";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Ground Improvement", href: "/services/ground-improvement" },
      { label: "Pile Foundation", href: "/services/pile-foundation" },
      { label: "Structure Work", href: "/services/structure-work" },
      { label: "Steel Fabrication", href: "/services/fabrication-steel-structures" },
      { label: "Building Construction", href: "/services/building-construction" },
      { label: "Maintenance & RRV", href: "/services/maintenance-repairing-rrv" },
      { label: "Custom Equipment", href: "/services/customized-equipment-engineering" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Presence", href: "/presence" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "hi">("en");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/98 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo — white on dark hero, natural on scrolled solid header */}
          <Link href="/" className="flex items-center group">
            <Image
              src={scrolled ? "/images/parkline-logo-dark.png" : "/images/parkline-logo-light.png"}
              alt="Parkline Infra Private Limited"
              width={220}
              height={52}
              className="object-contain h-9 sm:h-[52px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/90 hover:text-gold-500 transition-colors"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div
                    className="absolute top-full left-0 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="bg-navy-900 border border-white/10 rounded-xl shadow-xl w-56 overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-gold-500 hover:bg-white/5 transition-colors animated-underline"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-white/90 hover:text-gold-500 transition-colors animated-underline"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE.contact.phone1}`}
              className="flex items-center gap-1.5 text-sm text-white/70 hover:text-gold-500 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-mono text-xs">{SITE.contact.phone1Display}</span>
            </a>
            <button
              onClick={() => setLang(lang === "en" ? "hi" : "en")}
              className="px-2.5 py-1 rounded-md border border-white/20 text-xs text-white/70 hover:border-gold-500 hover:text-gold-500 transition-colors font-mono"
              aria-label="Toggle language"
            >
              {lang === "en" ? "हिं" : "EN"}
            </button>
            <Link
              href="/contact"
              className="px-4 py-2 bg-gold-500 text-navy-900 text-sm font-semibold rounded-lg hover:bg-gold-400 transition-colors"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-white/10 mt-2">
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-white/90 hover:text-gold-500 transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 border-l border-white/10 ml-3 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-xs text-white/60 hover:text-gold-500 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-3 bg-gold-500 text-navy-900 font-semibold rounded-lg"
              >
                Request Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
