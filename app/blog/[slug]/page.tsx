import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft, Tag } from "lucide-react";
import { BLOG_POSTS } from "../../data/blog";
import { SITE } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";
import CTABand from "../../components/CTABand";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Parkline Infra Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2 class="font-display text-2xl text-navy-800 mt-10 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="font-display text-xl text-navy-800 mt-8 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-navy-800 font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li class="text-ink-700/80 leading-relaxed ml-4">• $1</li>')
    .replace(/(<li[^]*?<\/li>\n?)+/gm, '<ul class="space-y-1.5 my-4">$&</ul>')
    .replace(/^\d+\. (.+)$/gm, '<li class="text-ink-700/80 leading-relaxed ml-4 list-decimal">$1</li>')
    .replace(/^\| (.+) \|$/gm, '<tr>$1</tr>')
    .replace(/\n\n/g, '</p><p class="text-ink-700/80 leading-relaxed my-4">')
    .replace(/^([^<\n].+)$/gm, '<p class="text-ink-700/80 leading-relaxed my-4">$1</p>');
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/images/parkline-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative bg-paper-50 pt-32 pb-16 overflow-hidden border-b border-line-200">
        <div className="absolute inset-0 bg-dot-light opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title.slice(0, 40) + "..." },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-4">
              <span className="font-mono text-xs text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded-md whitespace-nowrap">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-ink-700/40 font-mono">
                <Clock className="w-3 h-3" />
                {post.readTime} read
              </div>
              <span className="text-xs text-ink-700/40 font-mono">
                {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </div>
            <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-tight text-navy-900">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-paper-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <article className="lg:col-span-8">
              <p className="text-lg text-ink-700/80 leading-relaxed border-l-4 border-gold-500 pl-5 mb-8 italic">
                {post.excerpt}
              </p>
              <div
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
              />
              <div className="mt-10 pt-6 border-t border-slate-200">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-ink-700/40" />
                  {post.tags.map((t) => (
                    <span key={t} className="text-xs bg-navy-900/5 text-ink-700/60 px-2.5 py-1 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-mono text-gold-500 hover:underline"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-navy-900 rounded-2xl p-6 sticky top-24">
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-gold-500 mb-4">
                  Need a Quote?
                </p>
                <p className="text-white/60 text-sm mb-4">
                  Have a project related to {post.category.toLowerCase()}? Our engineering team is ready to help.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-gold-500 text-navy-900 font-semibold rounded-xl hover:bg-gold-400 transition-colors text-sm"
                >
                  Request a Quote
                </Link>
              </div>

              <div>
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-slate-500 mb-4">
                  Related Articles
                </p>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="block bg-paper-100 rounded-xl p-4 border border-slate-200 hover:border-gold-500 transition-colors"
                    >
                      <p className="text-xs font-mono text-gold-500 mb-1">{r.category}</p>
                      <p className="text-sm text-navy-800 font-semibold leading-tight">{r.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
