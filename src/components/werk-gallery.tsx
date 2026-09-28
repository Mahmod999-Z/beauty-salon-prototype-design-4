import Image from "next/image";
import { salon } from "@/lib/salon";

function Photo({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative aspect-[3/4] w-56 shrink-0 overflow-hidden lg:w-64">
      <Image
        src={src}
        alt={label}
        fill
        sizes="256px"
        className="object-cover grayscale transition-[filter,transform] duration-500 hover:grayscale-0 motion-safe:hover:scale-105"
      />
    </div>
  );
}

export function WerkGallery({ photos }: { photos: string[] }) {
  return (
    <>
      <div className="hidden overflow-hidden motion-safe:block">
        <div className="werk-track flex w-max gap-4">
          {[...photos, ...photos].map((src, i) => (
            <Photo
              key={i}
              src={src}
              label={`Illustratieve sfeerfoto ${(i % photos.length) + 1} bij ${salon.name}`}
            />
          ))}
        </div>
      </div>
      <div className="hidden motion-reduce:block">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
          {photos.map((src, i) => (
            <div key={src} className="snap-start">
              <Photo src={src} label={`Illustratieve sfeerfoto ${i + 1} bij ${salon.name}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
