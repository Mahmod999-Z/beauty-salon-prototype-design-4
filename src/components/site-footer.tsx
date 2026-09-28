import { salon } from "@/lib/salon";
import { Hours } from "./hours";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="grid gap-12 px-5 py-16 lg:grid-cols-3 lg:px-10">
        <Wordmark />
        <div>
          <address className="not-italic leading-relaxed">
            {salon.street}
            <br />
            {salon.postalCode} {salon.city}
          </address>
          <a className="mt-4 inline-flex min-h-11 items-center" href={`tel:${salon.phoneTel}`}>
            {salon.phoneDisplay}
          </a>
        </div>
        <Hours />
      </div>
      <p className="border-t border-steel px-5 py-6 text-sm leading-relaxed lg:px-10">
        Een ontwerpconcept van Xbuilt Studio. Namen, foto&rsquo;s en reviews op
        deze pagina zijn illustratief, niet van een echte klant.
      </p>
    </footer>
  );
}
