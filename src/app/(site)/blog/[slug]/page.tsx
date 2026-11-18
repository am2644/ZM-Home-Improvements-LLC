import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost, type BlogBlock } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} | ZM Home Improvements`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.heroImage],
    },
  };
}

function ArticleBlock({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-base leading-8 text-slate-600">{block.text}</p>;
    case "heading":
      return (
        <h2 className="pt-5 font-display text-2xl font-light tracking-tight text-ink sm:text-3xl">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <figure className="rounded-2xl border-l-2 border-gold bg-mist px-6 py-5 sm:px-7">
          <blockquote className="font-display text-xl leading-8 text-ink sm:text-2xl">
            “{block.text}”
          </blockquote>
          <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {block.author} · {block.source}
          </figcaption>
        </figure>
      );
    case "image":
      return (
        <figure>
          <img
            src={block.src}
            alt={block.alt}
            width="1400"
            height="1050"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <figcaption className="mt-3 text-xs leading-5 text-slate-500">{block.caption}</figcaption>
        </figure>
      );
    case "list":
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-8 text-slate-600">
              <svg className="mt-1.5 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true">
                <use href="#icon-check" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="mx-auto max-w-4xl px-5 py-24 sm:py-32 lg:px-8">
          <Link
            href="/blog"
            className="hero-reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60 transition hover:text-white"
            style={{ "--d": "80ms" } as CSSProperties}
          >
            ← All articles
          </Link>
          <p
            className="hero-reveal mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-gold"
            style={{ "--d": "120ms" } as CSSProperties}
          >
            Blog · {post.readTime}
          </p>
          <h1
            className="hero-reveal mt-3 font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            style={{ "--d": "180ms" } as CSSProperties}
          >
            {post.title}
          </h1>
          <p
            className="hero-reveal mt-5 max-w-2xl text-base leading-7 text-white/70"
            style={{ "--d": "260ms" } as CSSProperties}
          >
            {post.excerpt}
          </p>
          <p className="mt-6 text-sm text-white/50">
            By {post.author} ·{" "}
            <time dateTime={post.date}>{post.dateLabel}</time>
          </p>
        </div>
      </section>

      <article className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5">
          <img
            src={post.heroImage}
            alt={post.heroAlt}
            width="1400"
            height="1050"
            fetchPriority="high"
            className="aspect-[16/9] w-full rounded-3xl object-cover"
          />

          <div className="mt-12 space-y-6">
            {post.blocks.map((block, index) => (
              <ArticleBlock key={index} block={block} />
            ))}
          </div>

          <div className="section-gradient mt-14 rounded-3xl p-8 text-white sm:p-10">
            <h2 className="font-display text-3xl font-light tracking-tight">
              Planning a project in Austin?
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-white/70">
              Send us the details and we&rsquo;ll respond within one business day with a free estimate.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-light"
              >
                See Our Work
                <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
              </Link>
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <p className="mt-8 text-xs leading-6 text-slate-500">
            Reviews quoted from Google Maps, November 2026. Project photos from ZM Home Improvements.
          </p>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-gold-dark"
          >
            ← Back to all articles
          </Link>
        </div>
      </article>
    </>
  );
}
