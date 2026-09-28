"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/prijslijst", label: "Prijslijst" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Contact" },
];

function NavList({ className, animated = false }: { className: string; animated?: boolean }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLUListElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    if (!animated) return;
    const activeEl = containerRef.current?.querySelector<HTMLElement>('[aria-current="page"]');
    setIndicator(activeEl ? { left: activeEl.offsetLeft, width: activeEl.offsetWidth } : null);
  }, [animated, pathname]);

  return (
    <ul ref={containerRef} className={`relative ${className}`}>
      {links.map((link) => {
        const current = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={current ? "page" : undefined}
              className={`inline-flex min-h-11 items-center border-b text-sm tracking-wide transition-colors duration-300 ${
                animated
                  ? "border-transparent"
                  : current
                    ? "border-current"
                    : "border-transparent hover:border-current"
              }`}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
      {animated && indicator ? (
        <span
          aria-hidden="true"
          className="absolute bottom-0 h-px bg-current transition-all duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
      ) : null}
    </ul>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  }, [pathname]);

  return (
    <>
      <details
        ref={detailsRef}
        className="lg:hidden"
        onKeyDown={(event) => {
          if (event.key === "Escape" && detailsRef.current) {
            detailsRef.current.open = false;
          }
        }}
      >
        <summary className="flex min-h-11 cursor-pointer items-center px-1 text-sm tracking-wide">
          Menu
        </summary>
        <div className="absolute inset-x-0 top-full z-20 border-b border-steel bg-paper px-5 py-4 text-ink">
          <NavList className="flex flex-col" />
        </div>
      </details>
      <NavList className="hidden items-center gap-6 lg:flex" animated />
    </>
  );
}
