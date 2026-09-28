import type { Metadata } from "next";
import Link from "next/link";
import { salon } from "@/lib/salon";

export const metadata: Metadata = {
  title: "Over ons",
  description: `${salon.owner}, ${salon.credential.toLowerCase()}, runt ${salon.name} sinds ${salon.since}.`,
};

export default function OverOnsPage() {
  return (
    <article>
      <header className="px-5 py-16 lg:px-10 lg:py-24">
        <p className="text-xs uppercase tracking-[0.2em]">Over ons</p>
        <h1 className="mt-4 font-serif text-[clamp(4.5rem,14vw,9rem)] leading-[0.86] tracking-[-0.04em]">
          {salon.owner}
        </h1>
        <p className="mt-8 max-w-2xl font-serif text-3xl leading-snug text-balance lg:text-4xl">
          {salon.credential}. De zaak sinds {salon.since}.
        </p>
      </header>
      <section className="grid border-t border-steel lg:grid-cols-2">
        <div className="border-b border-steel px-5 py-14 lg:border-r lg:border-b-0 lg:px-10 lg:py-20">
          <h2 className="font-serif text-4xl tracking-tight">De zaak</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            {salon.owner} runt {salon.name} sinds {salon.since}. Een complete
            salon voor dames en heren, {salon.positioning}.
          </p>
        </div>
        <div className="bg-ink px-5 py-14 text-paper lg:px-10 lg:py-20">
          <h2 className="font-serif text-4xl tracking-tight text-taupe">
            Vakmanschap
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed">
            {salon.credential}. Elke knipbeurt krijgt de tijd en aandacht die
            bij dat vakmanschap hoort.
          </p>
        </div>
      </section>
      <section className="grid gap-8 border-t border-steel px-5 py-14 lg:grid-cols-2 lg:px-10 lg:py-20">
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em]">Adres</h2>
          <p className="mt-4 font-serif text-4xl tracking-tight">
            {salon.street}
            <span className="mt-2 block text-2xl font-sans">
              {salon.postalCode} {salon.city}
            </span>
          </p>
        </div>
        <p className="self-end">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center bg-taupe px-6 text-ink"
          >
            Contact
          </Link>
        </p>
      </section>
    </article>
  );
}
