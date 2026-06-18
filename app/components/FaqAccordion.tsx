"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  light?: boolean;
}

export default function FaqAccordion({ items, light = false }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className={`rounded-2xl border overflow-hidden transition-colors ${
              light
                ? "border-white/10 bg-white/5"
                : "border-slate-200 bg-paper-50 hover:border-gold-500/50"
            }`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              aria-expanded={open === i}
            >
              <span
                className={`font-semibold text-sm leading-snug ${
                  light ? "text-white" : "text-navy-800"
                }`}
              >
                {item.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                  open === i ? "rotate-180 text-gold-500" : light ? "text-white/40" : "text-slate-400"
                }`}
              />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className={`px-5 pb-4 text-sm leading-relaxed ${
                      light ? "text-white/60" : "text-slate-500"
                    }`}
                  >
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
}
