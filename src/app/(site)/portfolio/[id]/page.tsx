import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { PORTFOLIO_CATEGORY_LABELS } from "@/lib/site";
import { getWorkProject } from "@/lib/work";

export const dynamic = "force-dynamic";

type WorkProjectPageProps = {
  params: Promise<{ id: string }>;
};

async function getProject(idParam: string) {
  const id = Number(idParam);
  if (!Number.isInteger(id) || id <= 0) return null;
  return prisma.portfolioItem.findUnique({ where: { id } });
}

export async function generateMetadata({ params }: WorkProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const item = await getProject(id);
  if (!item) return {};

  const content = getWorkProject(item);
  return {
    title: `${item.title} | Our Work | ZM Home Improvements`,
    description: content.summary,
    openGraph: {
      title: `${item.title} | ZM Home Improvements`,
      description: content.summary,
      images: [item.imageUrl],
    },
  };
}

export default async function WorkProjectPage({ params }: WorkProjectPageProps) {
  const { id } = await params;
  const item = await getProject(id);
  if (!item) notFound();

  const content = getWorkProject(item);
  const categoryLabel = PORTFOLIO_CATEGORY_LABELS[item.category] ?? item.category;
  const related = await prisma.portfolioItem.findMany({
    where: { id: { not: item.id }, category: item.category },
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    take: 3,
  });

  if (related.length < 3) {
    const excludeIds = [item.id, ...related.map((project) => project.id)];
    const fillers = await prisma.portfolioItem.findMany({
      where: { id: { notIn: excludeIds } },
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      take: 3 - related.length,
    });
    related.push(...fillers);
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:py-28 lg:px-8">
          <Link
            href="/portfolio"
            className="hero-reveal inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60 transition hover:text-white"
            style={{ "--d": "80ms" } as CSSProperties}
          >
            ← Back to Our Work
          </Link>
          <p
            className="hero-reveal mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-gold"
            style={{ "--d": "120ms" } as CSSProperties}
          >
            {categoryLabel} · Austin, TX
          </p>
          <h1
            className="hero-reveal mt-3 max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl"
            style={{ "--d": "180ms" } as CSSProperties}
          >
            {item.title}
          </h1>
          <p
            className="hero-reveal mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
            style={{ "--d": "260ms" } as CSSProperties}
          >
            {content.summary}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <img
            src={item.imageUrl}
            alt={`${item.title} — ${categoryLabel.toLowerCase()} project in Austin, TX`}
            width="1400"
            height="1050"
            fetchPriority="high"
            className="aspect-[16/9] w-full rounded-3xl object-cover"
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-light tracking-tight text-ink">
                About this project
              </h2>
              <div className="mt-5 space-y-5">
                {content.overview.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              <h3 className="mt-10 font-display text-2xl font-light tracking-tight text-ink">
                Project highlights
              </h3>
              <ul className="mt-4 space-y-3">
                {content.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-base leading-7 text-slate-600">
                    <svg className="mt-1 h-5 w-5 shrink-0 text-gold-dark" aria-hidden="true">
                      <use href="#icon-check" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <figure className="mt-10 rounded-2xl border-l-2 border-gold bg-mist px-6 py-5 sm:px-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
                  What clients say
                </p>
                <blockquote className="mt-3 font-display text-xl leading-8 text-ink sm:text-2xl">
                  “{content.quote.text}”
                </blockquote>
                <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {content.quote.author} · {content.quote.source}
                </figcaption>
              </figure>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-2xl border border-ink/10 bg-mist p-6">
                <h2 className="font-display text-2xl font-light tracking-tight text-ink">
                  Project details
                </h2>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Category
                    </dt>
                    <dd className="mt-1 font-semibold text-ink">{categoryLabel}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Project type
                    </dt>
                    <dd className="mt-1 font-semibold text-ink">{content.projectType}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Location
                    </dt>
                    <dd className="mt-1 font-semibold text-ink">Austin, TX</dd>
                  </div>
                </dl>
              </div>

              <div className="section-gradient rounded-2xl p-6 text-white">
                <h2 className="font-display text-2xl font-light tracking-tight">
                  Planning something similar?
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Tell us about your space and we&rsquo;ll follow up with a free estimate.
                </p>
                <Link
                  href="/contact#contact-form"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold-light"
                >
                  Request a Quote
                  <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-mist py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-3xl font-light tracking-tight text-ink">
                  More from Our Work
                </h2>
                <p className="mt-2 text-sm text-slate-500">A closer look at recent work around Austin.</p>
              </div>
              <Link
                href="/portfolio"
                className="text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 transition hover:text-gold-dark"
              >
                View all projects
              </Link>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((project) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                  className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      width="1400"
                      height="1050"
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                      {PORTFOLIO_CATEGORY_LABELS[project.category] ?? project.category}
                    </p>
                    <h3 className="mt-1 font-display text-xl text-ink">{project.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
