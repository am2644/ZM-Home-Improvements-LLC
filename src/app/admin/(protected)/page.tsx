import type { Metadata } from "next";
import Link from "next/link";
import { formatLeadDate, getDateDaysAgo } from "@/lib/format";
import { prisma } from "@/lib/db";
import { SERVICE_LABELS } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dashboard | ZM Home Improvements",
};

export default async function AdminDashboardPage() {
  const weekAgo = getDateDaysAgo(7);

  const [leadCount, weekCount, portfolioCount, recentLeads] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { createdAt: { gte: weekAgo } } }),
    prisma.portfolioItem.count(),
    prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
  ]);

  const stats = [
    { label: "Total leads", value: leadCount },
    { label: "New this week", value: weekCount },
    { label: "Portfolio projects", value: portfolioCount },
  ];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Overview</p>
          <h1 className="mt-2 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
            Dashboard
          </h1>
        </div>
        <Link
          href="/admin/leads"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View all leads
          <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {stat.label}
            </p>
            <p className="mt-3 font-display text-4xl text-ink">{stat.value}</p>
          </div>
        ))}
      </div>

      <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <h2 className="font-display text-xl text-ink">Recent leads</h2>
          <Link href="/admin/leads" className="text-sm font-semibold text-gold-dark hover:text-ink">
            View all
          </Link>
        </div>

        {recentLeads.length === 0 ? (
          <p className="px-6 py-12 text-center text-sm text-slate-500">
            No leads yet. Submissions from the website quote forms will show up here.
          </p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {recentLeads.map((lead) => (
              <li key={lead.id} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink">{lead.name}</p>
                  <p className="text-xs text-slate-500">
                    {SERVICE_LABELS[lead.service] ?? lead.service} · {lead.phone}
                  </p>
                </div>
                <p className="text-xs text-slate-500">{formatLeadDate(lead.createdAt)}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link
          href="/admin/portfolio"
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-ink/25"
        >
          <p className="font-display text-xl text-ink">Manage portfolio</p>
          <p className="mt-2 text-sm text-slate-500">Add new project photos to the public gallery.</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
            Open portfolio
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
              <use href="#icon-arrow" />
            </svg>
          </span>
        </Link>
        <Link
          href="/"
          className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-ink/25"
        >
          <p className="font-display text-xl text-ink">View public website</p>
          <p className="mt-2 text-sm text-slate-500">See the live pages and quote forms.</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
            Open website
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
              <use href="#icon-arrow" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
