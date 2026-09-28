import type { Metadata } from "next";
import { Public_Sans, Source_Serif_4 } from "next/font/google";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { salon } from "@/lib/salon";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: {
    default: salon.name,
    template: `%s · ${salon.name}`,
  },
  description: `Ontwerpconcept van Xbuilt Studio voor een kapsalon in ${salon.city}. Illustratief voorbeeld, geen echte klant.`,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${publicSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <ScrollProgress />
        <a
          href="#inhoud"
          className="absolute left-4 top-0 z-30 -translate-y-full bg-taupe px-4 py-3 text-ink focus:translate-y-4"
        >
          Ga naar inhoud
        </a>
        <SiteHeader />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
