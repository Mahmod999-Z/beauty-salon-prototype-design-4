import type { Metadata } from "next";
import Image from "next/image";
import { Hours } from "@/components/hours";
import { Reveal } from "@/components/reveal";
import { SiteMap } from "@/components/site-map";
import { salon, salonJsonLd } from "@/lib/salon";

export const metadata: Metadata = {
  title: "Contact",
  description: `${salon.name}, ${salon.street}, ${salon.postalCode} ${salon.city}. Bel ${salon.phoneDisplay}.`,
};

export default function ContactPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(salonJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="px-5 py-14 lg:px-10 lg:py-20">
        <p className="text-xs uppercase tracking-[0.2em]">{salon.city}</p>
        <h1 className="mt-4 font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] tracking-tight">
          Kom langs
        </h1>
      </header>
      <div className="grid border-t border-steel lg:grid-cols-2">
        <Reveal className="border-b border-steel lg:border-r lg:border-b-0">
          <div className="px-5 py-12 lg:px-10 lg:py-16">
            <h2 className="text-xs uppercase tracking-[0.2em]">Adres</h2>
            <p className="mt-5 font-serif text-3xl leading-[1.05] tracking-tight lg:text-4xl">
              {salon.street}
              <span className="mt-2 block font-sans text-base">
                {salon.postalCode} {salon.city}
              </span>
            </p>
            <h2 className="mt-10 text-xs uppercase tracking-[0.2em]">Telefoon</h2>
            <a
              href={`tel:${salon.phoneTel}`}
              className="mt-3 inline-flex min-h-11 items-center border-b border-transparent font-serif text-2xl tracking-tight transition-colors hover:border-current lg:text-3xl"
            >
              {salon.phoneDisplay}
            </a>
          </div>
        </Reveal>
        <Reveal delayMs={150}>
          <div className="px-5 py-12 lg:px-10 lg:py-16">
            <h2 className="text-xs uppercase tracking-[0.2em]">Openingstijden</h2>
            <Hours className="mt-5" />
          </div>
        </Reveal>
      </div>
      <Reveal className="border-t border-steel">
        <figure className="px-5 py-12 lg:px-10 lg:py-16">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">De gevel</p>
          <Image
            src="/storefront.jpg"
            alt={`De gevel van ${salon.name} aan de ${salon.street}`}
            width={1600}
            height={1200}
            className="mt-5 h-auto w-full max-w-2xl object-cover"
          />
        </figure>
      </Reveal>
      <SiteMap />
    </article>
  );
}
