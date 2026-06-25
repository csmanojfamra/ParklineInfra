import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "../data/blog";
import Breadcrumbs from "../components/Breadcrumbs";
import HeroRingAccent from "../components/HeroRingAccent";

export const metadata: Metadata = {
  title: "Blog — Infrastructure Insights & Technical Guides",
  description:
    "Parkline Infra's blog: technical guides on ground improvement, pile foundations, bridge construction, RRV manufacturing, and infrastructure risk management.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="relative bg-paper-50 pt-32 pb-16 overflow-hidden border-b border-line-200">
        <div className="absolute inset-0 bg-dot-light opacity-50 pointer-events-none" />
        <HeroRingAccent />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <div className="mt-8 max-w-3xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">Knowledge Centre</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] text-navy-900 mb-6">
              Infrastructure<br />
              <span className="text-gold-500 italic">Insights</span>
            </h1>
            <p className="text-ink-700/70 text-lg leading-relaxed">
              Technical guides, industry insights, and expert commentary on infrastructure construction,
              geotechnical engineering, and project delivery from Parkline Infra.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-paper-100 rounded-2xl border border-slate-200 hover:border-gold-500 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                {i === 0 && (
                  <div className="bg-gold-500 px-4 py-1.5">
                    <span className="font-mono text-xs font-bold text-navy-900 uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded-md">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-ink-700/40">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="font-display text-xl text-navy-800 leading-tight mb-3 group-hover:text-gold-500 transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-ink-700/60 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-ink-700/40 font-mono">
                      {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
