import type { Metadata } from "next";
import Link from "next/link";
import { salon } from "@/lib/salon";

export const metadata: Metadata = {
  title: "Het concept",
  description: "Hoe Xbuilt Studio ontwerpt: de aanpak achter dit voorbeeld.",
};

export default function ConceptPage() {
  return (
    <article>
      <header className="px-5 py-14 lg:px-10 lg:py-20">
        <p className="text-xs uppercase tracking-[0.2em]">Xbuilt Studio</p>
        <h1 className="mt-4 font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] tracking-tight">
          Het concept
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">
          Dit is een ontwerpvoorbeeld van Xbuilt Studio voor een kapsalon —
          geen bestaande klant. De naam {salon.name}, de foto&rsquo;s en de
          reviews hierboven zijn illustratief. Zo pakken we het wél altijd
          echt aan.
        </p>
      </header>

      <section className="grid border-t border-steel lg:grid-cols-2">
        <div className="border-b border-steel px-5 py-14 lg:border-r lg:border-b-0 lg:px-10 lg:py-20">
          <p className="text-xs uppercase tracking-[0.2em]">01</p>
          <h2 className="mt-6 font-serif text-4xl tracking-tight">Sjabloonkleuren</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed">
            Veel salons draaien nog op een standaard websitesjabloon, met een
            accentkleur die toevallig in het thema zat — niet omdat die bij
            het merk past. Dat soort toevalligheden halen we er als eerste
            uit.
          </p>
        </div>
        <div className="bg-ink px-5 py-14 text-paper lg:px-10 lg:py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-taupe">02</p>
          <h2 className="mt-6 font-serif text-4xl tracking-tight text-taupe">
            Een eigen palet
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed">
            Inkt, papier, staal en een sepia-tint — vier kleuren, gedreven
            door leesbaarheid in plaats van sjablonen. Warm genoeg om
            persoonlijk te voelen, rustig genoeg om het werk te laten
            spreken.
          </p>
        </div>
      </section>

      <section className="grid border-t border-steel lg:grid-cols-2">
        <div className="border-b border-steel px-5 py-14 lg:border-r lg:border-b-0 lg:px-10 lg:py-20">
          <p className="text-xs uppercase tracking-[0.2em]">03</p>
          <h2 className="mt-6 font-serif text-4xl tracking-tight">Echt, of niet</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed">
            Voor een echte klant bouwen we altijd op wat er al is: hun eigen
            foto&rsquo;s, hun eigen Google-reviews, hun eigen openingstijden —
            nooit verzonnen testimonials. Dit specifieke ontwerp is een
            voorbeeldtemplate, dus de inhoud hierboven is duidelijk als
            illustratief gemarkeerd.
          </p>
        </div>
        <div className="px-5 py-14 lg:px-10 lg:py-20">
          <p className="text-xs uppercase tracking-[0.2em]">04</p>
          <h2 className="mt-6 font-serif text-4xl tracking-tight">Beweging met een reden</h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed">
            Elke animatie op deze site legt uit, benadrukt of beloont — nooit
            versiering om de versiering. En alles respecteert
            &lsquo;verminderde beweging&rsquo;-instellingen voor wie daar
            gevoelig voor is.
          </p>
        </div>
      </section>

      <section className="border-t border-steel px-5 py-16 lg:px-10 lg:py-24">
        <p className="max-w-2xl font-serif text-2xl leading-snug text-pretty lg:text-4xl">
          Dit is hoe Xbuilt Studio werkt: geen sjabloon, geen gefabriceerde
          testimonials — een eigen systeem, gebouwd op wat er echt is.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 w-fit items-center bg-taupe px-6 text-ink"
        >
          Terug naar de homepage
        </Link>
      </section>
    </article>
  );
}
