import Link from "next/link";
import { HeroVideo } from "@/components/hero-video";
import { Reveal } from "@/components/reveal";
import { ReviewsCarousel } from "@/components/reviews-carousel";
import { SectionWave } from "@/components/section-wave";
import { WerkGallery } from "@/components/werk-gallery";
import { featuredReviews, reviewStats, salon, salonJsonLd } from "@/lib/salon";

const googleReviewsUrl = `https://www.google.com/search?q=${encodeURIComponent(
  `${salon.name} ${salon.street} ${salon.city} reviews`,
)}`;

const reviewSlides = [
  { type: "stat" as const, ...reviewStats[0] },
  { type: "quote" as const, ...featuredReviews[0] },
  { type: "stat" as const, ...reviewStats[1] },
  { type: "quote" as const, ...featuredReviews[1] },
];

const werkPhotos = Array.from(
  { length: 6 },
  (_, i) => `/werk/werk-${String(i + 1).padStart(2, "0")}.jpg`,
);

const [nameFirst, ...nameRest] = salon.name.split(" ");
const nameSecond = nameRest.join(" ");

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(salonJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-ink px-5 pt-28 pb-10 text-paper lg:px-10 lg:pt-20 lg:pb-14">
        <HeroVideo />
        <p className="enter enter-1 relative z-10 text-xs uppercase tracking-[0.2em] text-paper/70">
          {salon.city} · sinds {salon.since}
        </p>
        <div className="relative z-10 grid items-end gap-12 lg:grid-cols-12">
          <h1 className="enter enter-2 font-serif text-[clamp(2.75rem,8vw,6rem)] leading-[0.92] tracking-[-0.03em] text-balance lg:col-span-7">
            {nameFirst}
            <span className="block text-taupe">{nameSecond}</span>
          </h1>
          <div className="flex max-w-md flex-col gap-6 lg:col-span-5">
            <p className="enter enter-3 font-serif text-2xl leading-snug text-balance lg:text-3xl">
              {salon.positioning[0].toUpperCase() + salon.positioning.slice(1)}.
            </p>
            <p className="enter enter-3 text-base leading-relaxed text-paper/85 lg:text-lg">
              Een complete salon voor dames en heren, aan de {salon.street} in{" "}
              {salon.city}.
            </p>
            <div className="enter enter-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-paper/85">
              <span>
                {reviewStats[0].rating.toFixed(1).replace(".", ",")} ★ · {salon.reviews} beoordelingen
              </span>
              <span aria-hidden="true">·</span>
              <span>Sinds {salon.since}</span>
              <span aria-hidden="true">·</span>
              <span>{salon.walkIn}</span>
            </div>
            <div className="enter enter-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${salon.phoneTel}`}
                className="motion-safe:transition-transform motion-safe:duration-300 inline-flex min-h-12 items-center justify-center bg-taupe px-6 text-ink motion-safe:hover:scale-[1.03]"
              >
                Boek nu — bel {salon.phoneDisplay}
              </a>
              <Link
                href="/prijslijst"
                className="inline-flex min-h-12 w-fit items-center border-b border-transparent px-1 uppercase tracking-[0.14em] transition-colors duration-300 hover:border-current"
              >
                Prijslijst
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionWave />

      <section className="px-5 py-16 lg:px-10 lg:py-24">
        <p className="max-w-3xl font-serif text-2xl leading-snug text-pretty lg:text-4xl">
          {salon.owner} runt {salon.name} sinds {salon.since}. {salon.credential}.
          De zaak is er {salon.positioning}.
        </p>
      </section>

      <section className="grid border-t border-steel lg:grid-cols-2">
        <Reveal className="border-b border-steel lg:border-r lg:border-b-0">
          <Link
            href="/over-ons"
            className="group flex h-full flex-col px-5 py-14 transition-colors duration-300 hover:bg-steel lg:px-10 lg:py-20"
          >
            <p className="text-xs uppercase tracking-[0.2em]">01</p>
            <h2 className="mt-10 w-fit font-serif text-5xl tracking-tight transition-transform duration-300 group-hover:translate-x-1">
              Vakmanschap
            </h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed">
              {salon.credential}.
            </p>
            <p className="mt-12 w-fit border-b border-transparent text-sm uppercase tracking-[0.16em] transition-colors duration-300 group-hover:border-current">
              Over ons
            </p>
          </Link>
        </Reveal>
        <Reveal delayMs={150}>
          <Link
            href="/community"
            className="group flex h-full flex-col bg-ink px-5 py-14 text-paper transition-colors duration-300 hover:bg-ink/90 lg:px-10 lg:py-20"
          >
            <p className="text-xs uppercase tracking-[0.2em]">02</p>
            <h2 className="mt-10 w-fit font-serif text-5xl tracking-tight text-taupe transition-transform duration-300 group-hover:translate-x-1">
              In de buurt
            </h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed">
              Een haar-donatieprogramma en de sponsoring van een lokale voetbalclub.
            </p>
            <p className="mt-12 w-fit border-b border-transparent text-sm uppercase tracking-[0.16em] transition-colors duration-300 group-hover:border-current">
              Community
            </p>
          </Link>
        </Reveal>
      </section>

      <section className="border-t border-steel px-5 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">Haar werk</p>
          <p className="mt-4 max-w-lg text-lg leading-relaxed">
            Een greep uit ons werk, rechtstreeks uit de salon aan de {salon.street}.
          </p>
          <div className="mt-8">
            <WerkGallery photos={werkPhotos} />
          </div>
        </Reveal>
      </section>

      <section className="border-t border-steel px-5 py-16 lg:px-10 lg:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em]">Reviews</p>
          <div className="mt-6 max-w-lg">
            <ReviewsCarousel slides={reviewSlides} />
          </div>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 w-fit items-center border-b border-current text-sm uppercase tracking-[0.16em]"
          >
            Bekijk op Google
          </a>
        </Reveal>
      </section>
    </>
  );
}
