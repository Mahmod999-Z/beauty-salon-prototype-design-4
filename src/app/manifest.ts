import type { MetadataRoute } from "next";
import { salon } from "@/lib/salon";

export default function manifest(): MetadataRoute.Manifest {
  const [, ...nameRest] = salon.name.split(" ");

  return {
    name: salon.name,
    short_name: nameRest.join(" ") || salon.name,
    description: `Ontwerpconcept van Xbuilt Studio voor een kapsalon in ${salon.city}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf7f2",
    theme_color: "#2b2019",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
