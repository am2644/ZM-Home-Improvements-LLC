import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Remodeling Projects in Austin, TX | ZM Home Improvements",
  description:
    "Recent kitchen, bathroom, and addition remodeling projects in Austin, TX by ZM Home Improvements.",
  openGraph: {
    title: "Remodeling Projects in Austin, TX | ZM Home Improvements",
    description:
      "Recent kitchen, bathroom, and addition remodeling projects in Austin, TX by ZM Home Improvements.",
    images: ["/assets/hero.jpg"],
  },
};

export default async function PortfolioPage() {
  const items = await prisma.portfolioItem.findMany({
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    select: { id: true, title: true, category: true, imageUrl: true },
  });

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h1
            className="hero-reveal max-w-4xl font-display text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl"
            style={{ "--d": "120ms" } as CSSProperties}
          >
            Our Work
          </h1>
          <p
            className="hero-reveal mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
            style={{ "--d": "220ms" } as CSSProperties}
          >
            Kitchen, bathroom, and addition projects across Austin, TX.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Austin Remodeling Projects
            </h2>
          </div>

          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <PortfolioGallery items={items} />
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white sm:py-28">
        <div
          data-reveal
          className="mx-auto max-w-3xl px-5 text-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <h2 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
            Ready to Start Your Austin Remodeling Project?
          </h2>
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
