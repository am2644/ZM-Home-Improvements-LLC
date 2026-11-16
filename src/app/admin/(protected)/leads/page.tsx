import type { Metadata } from "next";
import Link from "next/link";
import { formatLeadDate } from "@/lib/format";
import { prisma } from "@/lib/db";
import { SERVICE_LABELS } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Leads | ZM Home Improvements",
};

export default async function AdminLeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Manage</p>
          <h1 className="mt-2 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
            Leads
          </h1>
        </div>
        <p className="text-sm text-slate-500">
          {leads.length} {leads.length === 1 ? "lead" : "leads"} received
        </p>
      </div>

      {leads.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
          <p className="font-display text-2xl text-ink">No leads yet</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            When someone submits a quote request from the home or contact page, their details will appear
            here.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold-light"
          >
            Back to website
            <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
          </Link>
        </div>
      ) : (
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-[0.08em] text-slate-500">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Name</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Phone</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Email</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Service</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Received</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {leads.map((lead) => (
                  <tr key={lead.id} className="align-top transition hover:bg-slate-50/70">
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-ink">{lead.name}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                      <a
                        href={`tel:${lead.phone.replace(/[^\d+]/g, "")}`}
                        className="transition hover:text-gold-dark"
                      >
                        {lead.phone}
                      </a>
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      <a href={`mailto:${lead.email}`} className="transition hover:text-gold-dark">
                        {lead.email}
                      </a>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate-700">
                        {SERVICE_LABELS[lead.service] ?? lead.service}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-xs text-slate-500">
                      {formatLeadDate(lead.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
