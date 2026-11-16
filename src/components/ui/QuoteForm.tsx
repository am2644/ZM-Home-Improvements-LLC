"use client";

import { useActionState, useEffect, useRef } from "react";
import { addLead, type LeadState } from "@/lib/actions/leads";
import { PHONE_HREF, SERVICE_OPTIONS } from "@/lib/site";

const initialState: LeadState = { status: "idle" };

export default function QuoteForm() {
  const [state, formAction, pending] = useActionState(addLead, initialState);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      successRef.current?.focus();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        ref={successRef}
        id="form-success"
        className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900"
        role="status"
        aria-live="polite"
        tabIndex={-1}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
            <svg className="h-5 w-5" aria-hidden="true"><use href="#icon-check" /></svg>
          </span>
          <h4 className="font-display text-xl">Thanks — your request is on its way.</h4>
        </div>
        <p className="mt-3 text-sm leading-6 text-emerald-800">
          We&rsquo;ll reach out within one business day to talk through your project and schedule a free
          estimate.
        </p>
      </div>
    );
  }

  return (
    <>
      <form id="quote-form" action={formAction} className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="First and last name"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            placeholder="(512) 555-0123"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@email.com"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-600"
          >
            Service
          </label>
          <div className="relative mt-2">
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 pr-11 text-[15px] text-slate-900 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
            >
              <option value="" disabled>
                Select a service
              </option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
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

        <button
          id="quote-submit"
          type="submit"
          disabled={pending}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-sm font-semibold text-ink transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span>{pending ? "Sending…" : "Request My Free Quote"}</span>
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
            <use href="#icon-arrow" />
          </svg>
        </button>

        <p className="text-center text-xs leading-5 text-slate-500">
          We use your details only to respond to your request. No spam, ever.
        </p>
      </form>

      {state.status === "error" && (
        <div
          id="form-error"
          className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
          role="alert"
        >
          <p>{state.message ?? "Something went wrong while sending your request."}</p>
          <p className="mt-1">
            You can also call{" "}
            <a href={PHONE_HREF} className="font-semibold underline underline-offset-2">
              (512) 560-1400
            </a>
            .
          </p>
        </div>
      )}
    </>
  );
}
