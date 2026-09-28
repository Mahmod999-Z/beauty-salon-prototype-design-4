"use client";

import { useEffect, useRef, useState } from "react";
import { PriceTable } from "./price-table";
import { prices } from "@/lib/salon";

const SECTIONS = [
  { id: "dames", eyebrow: "01", title: "Dames", rows: prices.dames },
  { id: "heren", eyebrow: "02", title: "Heren", rows: prices.heren },
] as const;

export function PriceList() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target instanceof HTMLElement ? visible.target.dataset.sectionId : undefined;
        if (id) setActive(id);

        for (const entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            const sectionId = entry.target.dataset.sectionId;
            if (sectionId) {
              setRevealedIds((prev) => (prev.has(sectionId) ? prev : new Set(prev).add(sectionId)));
            }
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    for (const section of SECTIONS) {
      const el = sectionRefs.current[section.id];
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeEl = navRef.current?.querySelector<HTMLElement>(`[data-tab-id="${active}"]`);
    setIndicator(activeEl ? { left: activeEl.offsetLeft, width: activeEl.offsetWidth } : null);
  }, [active]);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredSections = SECTIONS.map((section) => ({
    ...section,
    rows: normalizedQuery
      ? section.rows.filter((row) => row.name.toLowerCase().includes(normalizedQuery))
      : section.rows,
  }));

  return (
    <>
      <div className="print:hidden mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <nav ref={navRef} aria-label="Onderdelen" className="relative flex gap-6">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              data-tab-id={section.id}
              href={`#${section.id}`}
              className="inline-flex min-h-11 items-center border-b border-transparent text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:border-current"
            >
              {section.eyebrow} · {section.title}
            </a>
          ))}
          {indicator ? (
            <span
              aria-hidden="true"
              className="absolute bottom-0 h-px bg-current transition-all duration-300 ease-out"
              style={{ left: indicator.left, width: indicator.width }}
            />
          ) : null}
        </nav>
        <label className="flex max-w-xs flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.2em] text-ink/50">Zoeken</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Zoek een behandeling…"
            className="min-h-11 border-b border-steel bg-transparent px-0 py-2 text-base outline-none placeholder:text-ink/40 focus-visible:border-ink"
          />
        </label>
      </div>

      <div className="mt-14 grid gap-20">
        {filteredSections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            data-section-id={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            className="scroll-mt-24"
          >
            {section.rows.length > 0 ? (
              <PriceTable
                id={section.id}
                eyebrow={section.eyebrow}
                title={section.title}
                rows={section.rows}
                revealed={revealedIds.has(section.id)}
              />
            ) : (
              <div>
                <span className="block text-xs uppercase tracking-[0.2em] text-ink/50">
                  {section.eyebrow}
                </span>
                <span className="mt-3 block font-serif text-4xl tracking-tight lg:text-5xl">
                  {section.title}
                </span>
                <p className="mt-8 text-ink/60">
                  Geen behandelingen gevonden voor “{query}”.
                </p>
              </div>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
