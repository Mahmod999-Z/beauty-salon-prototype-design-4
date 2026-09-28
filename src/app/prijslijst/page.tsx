import type { Metadata } from "next";
import { PriceList } from "@/components/price-list";
import { StickyContactBar } from "@/components/sticky-contact-bar";
import { salon } from "@/lib/salon";

export const metadata: Metadata = {
  title: "Prijslijst",
  description: `Prijslijst van ${salon.name} in ${salon.city}: behandelingen voor dames en heren.`,
};

export default function PrijslijstPage() {
  return (
    <article className="px-5 py-14 lg:px-10 lg:py-20">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em]">{salon.city}</p>
        <h1 className="mt-4 font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] tracking-tight">
          Prijslijst
        </h1>
        <p className="mt-6 text-lg leading-relaxed">
          Dames en heren. Bedragen zoals gepubliceerd door {salon.name}.
        </p>
      </header>
      <PriceList />
      <StickyContactBar />
    </article>
  );
}
