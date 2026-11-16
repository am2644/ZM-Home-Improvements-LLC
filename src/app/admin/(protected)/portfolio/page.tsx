import type { Metadata } from "next";
import PortfolioForm from "@/components/admin/PortfolioForm";
import FallbackImage from "@/components/ui/FallbackImage";
import { formatShortDate } from "@/lib/format";
import { prisma } from "@/lib/db";
import { PORTFOLIO_CATEGORY_LABELS } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portfolio | ZM Home Improvements",
};

export default async function AdminPortfolioPage() {
  const items = await prisma.portfolioItem.findMany({
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
  });

  return (
    <div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Manage</p>
        <h1 className="mt-2 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
          Portfolio
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {items.length} {items.length === 1 ? "project" : "projects"} live on the public gallery.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-8">
          <h2 className="font-display text-2xl text-ink">Add a project</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Upload a photo and it appears on the public portfolio immediately.
          </p>
          <PortfolioForm />
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink">Current projects</h2>

          {items.length === 0 ? (
            <p className="mt-4 rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center text-sm text-slate-500 shadow-sm">
              No portfolio items yet. Add your first project with the form.
            </p>
          ) : (
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/3] bg-ink">
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <img
                        src="/assets/unnamed.png"
                        alt=""
                        width="108"
                        height="108"
                        className="h-10 w-10 opacity-40"
                      />
                    </div>
                    <FallbackImage
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                      {PORTFOLIO_CATEGORY_LABELS[item.category] ?? item.category}
                    </p>
                    <h3 className="mt-1 font-display text-lg text-ink">{item.title}</h3>
                    <p className="mt-1 text-xs text-slate-500">{formatShortDate(item.createdAt)}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
