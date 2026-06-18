import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export default function Breadcrumbs({ items, light = false }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://www.parklineinfra.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronRight
                className={`w-3 h-3 ${light ? "text-white/30" : "text-slate-400"}`}
              />
            )}
            {item.href && i < items.length - 1 ? (
              <Link
                href={item.href}
                className={`text-xs font-mono tracking-wide hover:text-gold-500 transition-colors ${
                  light ? "text-white/50" : "text-slate-500"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`text-xs font-mono tracking-wide ${
                  light ? "text-gold-400" : "text-gold-500"
                }`}
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
