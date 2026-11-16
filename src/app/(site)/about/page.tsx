import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import FallbackImage from "@/components/ui/FallbackImage";

export const metadata: Metadata = {
  title: "About ZM Home Improvements | Austin, TX",
  description:
    "Meet Zeev Machluf and ZM Home Improvements, licensed and insured Austin remodelers with 42 plus five-star Google reviews.",
  openGraph: {
    title: "About ZM Home Improvements | Austin, TX",
    description:
      "Meet Zeev Machluf and ZM Home Improvements, licensed and insured Austin remodelers with 42 plus five-star Google reviews.",
    images: ["/assets/hero.jpg"],
  },
};

const stats = [
  { value: "42+", label: "Five-star Google reviews" },
  { value: "5.0", label: "Google rating" },
  { value: "Licensed", label: "Fully insured" },
  { value: "5+", label: "Years serving Austin" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h1
            className="hero-reveal max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl"
            style={{ "--d": "120ms" } as CSSProperties}
          >
            About ZM Home Improvements
          </h1>
          <p
            className="hero-reveal mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
            style={{ "--d": "220ms" } as CSSProperties}
          >
            Owner-led remodeling built on honest communication and careful craftsmanship.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <h2 className="max-w-xl font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Meet Zeev Machluf
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Zeev Machluf founded ZM Home Improvements with a simple standard: do careful work,
                communicate clearly, and leave every home better than you found it.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                You work directly with Zeev from the first walkthrough to the final punch list. He brings
                samples, practical ideas, and daily updates, and the crew protects and cleans your home
                along the way.
              </p>
            </div>

            <figure
              data-reveal
              className="relative opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink">
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center"
                  aria-hidden="true"
                >
                  <img
                    src="/assets/unnamed.png"
                    alt=""
                    width="108"
                    height="108"
                    className="h-16 w-16 opacity-90"
                  />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                    Team photo
                  </span>
                </div>
                <FallbackImage
                  src="/assets/team.jpg"
                  alt="Zeev Machluf, owner of ZM Home Improvements in Austin, Texas"
                  width={1000}
                  height={1250}
                  loading="lazy"
                  className="absolute inset-0 z-[1] h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-sm text-slate-500">
                Zeev Machluf · Founder &amp; Lead Craftsman
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl">
              Licensed, Insured &amp; 5-Star Rated
            </h2>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-reveal
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              >
                <p className="font-display text-5xl text-gold">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-white">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs text-white/40">Based on ZM&rsquo;s Google Maps profile, November 2026.</p>
          <div className="mt-14 text-center">
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ink transition hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Get a Quote
              <svg className="h-4 w-4" aria-hidden="true"><use href="#icon-arrow" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
