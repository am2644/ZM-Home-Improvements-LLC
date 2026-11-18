import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Remodeling Insights for Austin Homeowners | ZM Home Improvements",
  description:
    "Project stories, practical guidance, and what Austin homeowners say about remodeling with ZM Home Improvements.",
  openGraph: {
    title: "Remodeling Insights for Austin Homeowners | ZM Home Improvements",
    description:
      "Project stories, practical guidance, and what Austin homeowners say about remodeling with ZM Home Improvements.",
    images: ["/assets/hero.jpg"],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8 lg:py-40">
          <p
            className="hero-reveal text-xs font-semibold uppercase tracking-[0.18em] text-gold"
            style={{ "--d": "100ms" } as CSSProperties}
          >
            Blog
          </p>
          <h1
            className="hero-reveal mt-3 max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl"
            style={{ "--d": "120ms" } as CSSProperties}
          >
            Remodeling Insights
          </h1>
          <p
            className="hero-reveal mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
            style={{ "--d": "220ms" } as CSSProperties}
          >
            Project stories, practical guidance, and what Austin homeowners say about building with ZM.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Latest from ZM
            </h2>
          </div>

          <div className="mt-12 grid gap-10">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                data-reveal
                className="group grid overflow-hidden rounded-3xl border border-ink/10 bg-white opacity-0 translate-y-8 shadow-sm transition-all duration-700 ease-out hover:shadow-card lg:grid-cols-[1.1fr_0.9fr]"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-mist lg:aspect-auto lg:h-full"
                >
                  <img
                    src={post.heroImage}
                    alt={post.heroAlt}
                    width="1400"
                    height="1050"
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </Link>

                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                    Blog · {post.readTime}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-light leading-snug tracking-tight text-ink sm:text-3xl">
                    <Link href={`/blog/${post.slug}`} className="transition hover:text-gold-dark">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <time dateTime={post.date} className="text-xs text-slate-500">
                      {post.dateLabel}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-gold-dark"
                    >
                      Read the story
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <use href="#icon-arrow" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gradient py-24 text-white sm:py-28">
        <div
          data-reveal
          className="mx-auto max-w-3xl px-5 text-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
            Have a Project in Mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/70">
            Tell us what you are planning. We will reply within one business day with a free estimate.
          </p>
          <Link
            href="/contact#contact-form"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Get a Quote
            <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
