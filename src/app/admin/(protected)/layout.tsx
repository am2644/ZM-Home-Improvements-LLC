import type { Metadata } from "next";
import Link from "next/link";
import AdminNav from "@/components/admin/AdminNav";
import { logoutAdmin } from "@/lib/actions/auth";
import { requireAdmin } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Admin | ZM Home Improvements",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-slate-100 lg:flex">
      <aside className="bg-ink text-white lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-64 lg:shrink-0 lg:flex-col">
        <div className="flex items-center gap-3 px-5 py-5">
          <img src="/assets/unnamed.png" alt="" width="108" height="108" className="h-10 w-10" />
          <div>
            <p className="font-display text-lg leading-tight">ZM Admin</p>
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
              Home Improvements
            </p>
          </div>
        </div>

        <AdminNav />

        <div className="border-t border-white/10 px-5 py-4 lg:mt-auto">
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Sign out
            </button>
          </form>
          <Link
            href="/"
            className="mt-3 flex items-center justify-center gap-2 text-xs text-white/50 transition hover:text-white"
          >
            View website
            <svg className="h-3.5 w-3.5" aria-hidden="true"><use href="#icon-arrow" /></svg>
          </Link>
        </div>
      </aside>

      <main className="flex-1 px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
