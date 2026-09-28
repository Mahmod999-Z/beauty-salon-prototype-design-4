"use client";

import { useEffect, useState } from "react";

export function ShareButtons({ text }: { text: string }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const frame = requestAnimationFrame(() => setUrl(window.location.href));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!url) return null;

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  const links = [
    { label: "WhatsApp", href: `https://wa.me/?text=${encodedText}%20${encodedUrl}` },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center border-b border-current/40 text-sm uppercase tracking-[0.14em] transition-colors duration-300 hover:border-current"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
