import { salon } from "@/lib/salon";

export function SiteMap() {
  const address = `${salon.street}, ${salon.postalCode} ${salon.city}`;
  const query = encodeURIComponent(address);

  return (
    <figure className="group relative min-h-[22rem] overflow-hidden border-t border-steel lg:min-h-[28rem]">
      <iframe
        title={`Kaart naar ${salon.name}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full grayscale contrast-[1.1]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ink/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"
      />
      <figcaption className="pointer-events-none relative flex min-h-[22rem] flex-col justify-end bg-gradient-to-t from-ink/90 to-transparent p-6 text-paper lg:min-h-[28rem] lg:p-10">
        <p className="font-serif text-3xl tracking-tight lg:text-4xl">{salon.street}</p>
        <p className="mt-1">
          {salon.postalCode} {salon.city}
        </p>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto mt-6 inline-flex min-h-11 w-fit items-center border border-paper px-5 text-sm uppercase tracking-[0.14em]"
        >
          Route plannen
        </a>
      </figcaption>
    </figure>
  );
}
