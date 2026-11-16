"use client";

import { useActionState, useEffect, useRef } from "react";
import { createPortfolioItem, type PortfolioState } from "@/lib/actions/portfolio";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_CATEGORY_LABELS } from "@/lib/site";

const initialState: PortfolioState = { status: "idle" };

export default function PortfolioForm() {
  const [state, formAction, pending] = useActionState(createPortfolioItem, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} encType="multipart/form-data" className="mt-5 space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600"
        >
          Project title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          placeholder="Crestview Kitchen Refresh"
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
        />
      </div>

      <div>
        <label
          htmlFor="category"
          className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600"
        >
          Category
        </label>
        <div className="relative mt-2">
          <select
            id="category"
            name="category"
            required
            defaultValue=""
            className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 pr-11 text-[15px] text-slate-900 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          >
            <option value="" disabled>
              Select a category
            </option>
            {PORTFOLIO_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {PORTFOLIO_CATEGORY_LABELS[category]}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
            aria-hidden="true"
          >
            <use href="#icon-chevron" />
          </svg>
        </div>
      </div>

      <div>
        <label
          htmlFor="image"
          className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600"
        >
          Project photo
        </label>
        <input
          id="image"
          name="image"
          type="file"
          required
          accept="image/jpeg,image/png,image/webp,image/avif"
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white text-sm text-slate-600 file:mr-3 file:rounded-full file:border-0 file:bg-ink file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:bg-slate-800"
        />
        <p className="mt-2 text-xs text-slate-500">JPG, PNG, WebP, or AVIF. Max 8 MB.</p>
      </div>

      {state.status === "error" && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {state.message}
        </p>
      )}

      {state.status === "success" && (
        <p
          role="status"
          className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
        >
          <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-check" /></svg>
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-sm font-semibold text-ink transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Uploading…" : "Add Portfolio Item"}
        <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
      </button>
    </form>
  );
}
