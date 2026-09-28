"use client";

import { useEffect, useRef, useState } from "react";

type Slide =
  | { type: "stat"; platform: string; rating: number; count: number }
  | { type: "quote"; quote: string; author: string; source: string };

export function ReviewsCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const id = setInterval(() => {
      if (!paused.current) {
        setIndex((i) => (i + 1) % slides.length);
      }
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div
      className="relative"
      role="region"
      aria-label="Reviews"
      data-reviews-region
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
      onFocus={() => {
        paused.current = true;
      }}
      onBlur={() => {
        paused.current = false;
      }}
    >
      <div className="relative min-h-32">
        {slides.map((slide, i) => (
          <div
            key={i}
            aria-hidden={i !== index}
            className={`transition-opacity duration-700 ${
              i === index ? "relative opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
            }`}
          >
            {slide.type === "stat" ? (
              <>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/50">{slide.platform}</p>
                <p className="mt-3 font-serif text-4xl tracking-tight lg:text-5xl">
                  {slide.rating.toFixed(1).replace(".", ",")} / 5
                </p>
                <p className="mt-2 text-ink/70">{slide.count} beoordelingen</p>
              </>
            ) : (
              <>
                <p className="font-serif text-2xl leading-snug lg:text-3xl">“{slide.quote}”</p>
                <p className="mt-4 text-sm uppercase tracking-[0.14em] text-ink/60">
                  {slide.author} · {slide.source}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-4">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ga naar item ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-6 rounded-full transition-colors ${i === index ? "bg-ink" : "bg-steel"}`}
            />
          ))}
        </div>
        <div className="motion-reduce:hidden h-0.5 w-16 overflow-hidden bg-steel">
          <div key={index} className="review-progress h-full w-full bg-ink" />
        </div>
      </div>
    </div>
  );
}
