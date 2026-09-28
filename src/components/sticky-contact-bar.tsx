"use client";

import { useEffect, useState } from "react";
import { salon } from "@/lib/salon";

export function StickyContactBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`print:hidden fixed inset-x-0 bottom-0 z-30 border-t border-steel bg-paper transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-center px-5 py-3">
        <a
          href={`tel:${salon.phoneTel}`}
          className="inline-flex min-h-11 w-full items-center justify-center bg-taupe px-4 text-sm uppercase tracking-[0.12em] text-ink sm:w-auto sm:px-8"
        >
          Bel {salon.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
