import type { Metadata } from "next";
import Link from "next/link";
import { ShareButtons } from "@/components/share-buttons";
import { salon } from "@/lib/salon";

export const metadata: Metadata = {
  title: "Community",
  description: `${salon.name} heeft een haar-donatieprogramma en sponsort een lokale voetbalclub in ${salon.city}.`,
};

export default function CommunityPage() {
  return (
    <article>
      <section className="flex min-h-[calc(100svh-6.5rem)] flex-col justify-between bg-ink px-5 py-12 text-paper lg:px-10 lg:py-16">
        <p className="text-xs uppercase tracking-[0.22em]">Haar-donatieprogramma</p>
        <h1 className="max-w-5xl font-serif text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.88] tracking-[-0.04em] text-balance">
          Meer dan een knipbeurt
        </h1>
        <p className="max-w-xl text-lg leading-relaxed lg:text-xl">
          {salon.name} heeft een haar-donatieprogramma. Het hoort bij de zaak,
          naast de knipbeurt, aan de {salon.street} in {salon.city}.
        </p>
      </section>

      <section className="flex min-h-svh flex-col justify-between border-t border-steel px-5 py-12 lg:px-10 lg:py-16">
        <p className="text-xs uppercase tracking-[0.22em]">Sponsoring</p>
        <h2 className="max-w-5xl font-serif text-[clamp(3.5rem,11vw,8.5rem)] leading-[0.88] tracking-[-0.04em] text-balance">
          Een lokale voetbalclub
        </h2>
        <p className="max-w-xl text-lg leading-relaxed lg:text-xl">
          De salon sponsort een lokale voetbalclub. De steun blijft waar de zaak
          staat: in {salon.city}.
        </p>
      </section>

      <section className="flex min-h-[70svh] flex-col justify-between bg-ink px-5 py-12 text-paper lg:px-10 lg:py-16">
        <p className="text-xs uppercase tracking-[0.22em]">Sinds {salon.since}</p>
        <div>
          <h2 className="max-w-4xl font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-balance">
            Twee dingen naast de prijslijst.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed">
            Een haar-donatieprogramma. De sponsoring van een lokale voetbalclub.{" "}
            {salon.street}, {salon.city}.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-fit items-center bg-taupe px-6 text-ink"
          >
            Kom langs
          </Link>
          <ShareButtons text={`Meer dan een knipbeurt — ${salon.name} in ${salon.city}`} />
        </div>
      </section>
    </article>
  );
}
