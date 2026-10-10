"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Search, ArrowRight } from "lucide-react";
import { SITE } from "../lib/site";

// ── Top utility bar links (desktop only) ────────────────────────────────────
const TOP_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Pan-India Presence", href: "/presence" },
  { label: "Why Parkline", href: "/why-parkline" },
];

// ── Main nav links ───────────────────────────────────────────────────────────
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
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── Main nav bar ────────────────────────────────────────────────── */}
      <div className={`bg-white transition-shadow duration-200 ${scrolled ? "shadow-md" : "border-b border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[84px] lg:h-[116px]">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 self-center">
              <Image
                src="/images/parkline-logo-dark.png"
                alt="Parkline Infra Private Limited"
                width={220}
                height={147}
                className="h-[80px] lg:h-[104px] w-auto block"
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center" aria-label="Main navigation">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <button
                      className={`flex items-center gap-1.5 px-4 py-5 text-[15px] font-semibold tracking-wide transition-colors group-hover:text-gold-500 ${
                        pathname.startsWith(link.href) ? "text-gold-500" : "text-navy-800"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150">
                      <div className="mt-0 bg-white border border-gray-100 shadow-xl w-60 overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-5 py-3 text-[14px] font-medium border-l-2 transition-colors ${
                              pathname === child.href
                                ? "border-gold-500 text-gold-500 bg-gold-500/5"
                                : "border-transparent text-navy-700 hover:border-gold-500 hover:text-gold-500 hover:bg-gray-50"
                            }`}
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
                    className={`px-4 py-5 text-[15px] font-semibold tracking-wide transition-colors border-b-2 ${
                      pathname === link.href
                        ? "border-gold-500 text-gold-500"
                        : "border-transparent text-navy-800 hover:text-gold-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-navy-600 hover:text-gold-500 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* CTA — clean solid button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-[13px] uppercase tracking-[0.08em] px-6 py-3 transition-colors"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-navy-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ─────────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <nav className="px-4 py-4 space-y-0.5" aria-label="Mobile navigation">
            {/* Phone at top */}
            <a
              href={`tel:${SITE.contact.phone1}`}
              className="flex items-center gap-2 px-3 py-3 text-gold-500 font-mono text-sm border-b border-gray-100 mb-2"
            >
              <Phone className="w-4 h-4" />
              {SITE.contact.phone1Display}
            </a>

            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-3 text-[15px] font-medium transition-colors rounded-lg ${
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                      ? "text-gold-500 bg-gold-500/5"
                      : "text-navy-800 hover:text-gold-500 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 pl-3 border-l-2 border-gray-100 mt-0.5 mb-1 space-y-0.5">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-2 text-sm transition-colors rounded ${
                          pathname === child.href ? "text-gold-500" : "text-navy-600 hover:text-gold-500"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Secondary links */}
            <div className="pt-3 border-t border-gray-100 space-y-0.5">
              {TOP_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm text-navy-600 hover:text-gold-500 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gold-500 text-navy-900 font-bold text-sm uppercase tracking-wider"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
