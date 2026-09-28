"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteNav } from "./site-nav";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-30 bg-transparent text-paper"
          : "relative border-b border-steel bg-paper text-ink"
      }
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 lg:px-10">
        <Link href="/" className="group text-inherit">
          <Wordmark />
        </Link>
        <Link
          href="/concept"
          className="hidden border-b border-current/40 text-[0.68rem] uppercase tracking-[0.18em] transition-colors duration-300 hover:border-current lg:block"
        >
          Concept · Xbuilt Studio
        </Link>
        <SiteNav />
      </div>
      <Link
        href="/concept"
        className="block px-5 pb-3 text-[0.68rem] uppercase tracking-[0.18em] lg:hidden"
      >
        Concept · Xbuilt Studio
      </Link>
    </header>
  );
}
