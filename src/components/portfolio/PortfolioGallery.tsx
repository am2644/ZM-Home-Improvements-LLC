"use client";

import { useState } from "react";
import Link from "next/link";
import FallbackImage from "@/components/ui/FallbackImage";
import { PORTFOLIO_CATEGORY_LABELS, PROJECT_ASPECTS } from "@/lib/site";

export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
};

const FILTERS = [
  { value: "all", label: "All" },
  { value: "kitchens", label: "Kitchens" },
  { value: "bathrooms", label: "Bathrooms" },
  { value: "additions", label: "Additions" },
];

export default function PortfolioGallery({
  items,
  initialFilter,
}: {
  items: GalleryItem[];
  initialFilter?: string;
}) {
  const [filter, setFilter] = useState(
    FILTERS.some((option) => option.value === initialFilter) && initialFilter
      ? initialFilter
      : "all",
  );

  return (
    <>
      <div
        id="work-gallery"
        className="mt-12 flex scroll-mt-28 flex-wrap items-center gap-2"
        role="group"
        aria-label="Filter projects"
      >
        {FILTERS.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={filter === option.value}
            onClick={() => setFilter(option.value)}
            className="rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white"
          >
            {option.label}
          </button>
        ))}
      </div>

      <div
        id="gallery"
        className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3"
        aria-label="Project gallery"
      >
        {items.map((item) => {
          const hidden = filter !== "all" && item.category !== filter;
          const categoryLabel = PORTFOLIO_CATEGORY_LABELS[item.category] ?? item.category;
          const aspect = PROJECT_ASPECTS[item.imageUrl] ?? "aspect-[4/3]";

          return (
            <figure
              key={item.id}
              className={`gallery-item mb-5 break-inside-avoid ${hidden ? "hidden" : ""}`}
            >
              <Link
                href={`/portfolio/${item.id}`}
                aria-label={`View ${item.title}`}
                className={`group relative block ${aspect} overflow-hidden rounded-2xl bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold`}
              >
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                  aria-hidden="true"
                >
                  <img
                    src="/assets/unnamed.png"
                    alt=""
                    width="108"
                    height="108"
                    className="h-12 w-12 opacity-80"
                  />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                    Project photo
                  </span>
                </div>
                <FallbackImage
                  src={item.imageUrl}
                  alt={`${item.title} — ${categoryLabel.toLowerCase()} remodeling project in Austin, TX`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="absolute inset-0 z-[1] h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 z-[2] flex items-end justify-between gap-4 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent p-5 pt-16">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                      {categoryLabel}
                    </p>
                    <h3 className="mt-1 font-display text-xl text-white">{item.title}</h3>
                  </div>
                  <span
                    className="mb-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <svg className="h-4 w-4"><use href="#icon-arrow" /></svg>
                  </span>
                </div>
              </Link>
            </figure>
          );
        })}
      </div>

      {items.length === 0 && (
        <p className="mt-12 rounded-2xl border border-ink/10 bg-mist p-8 text-center text-sm text-slate-600">
          New project photos are on the way. Check back soon.
        </p>
      )}
    </>
  );
}
