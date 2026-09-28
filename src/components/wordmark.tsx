import { salon } from "@/lib/salon";

export function Wordmark({ className = "" }: { className?: string }) {
  const [nameFirst, ...nameRest] = salon.name.split(" ");
  const nameSecond = nameRest.join(" ");

  return (
    <span className={`inline-flex items-center gap-3 text-inherit ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-8 w-8 shrink-0 transition-transform duration-300 ease-out motion-safe:group-hover:-rotate-12"
      >
        <circle
          cx="8"
          cy="24"
          r="3.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <circle
          cx="24"
          cy="24"
          r="3.25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M10.4 21.4 22.2 6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M21.6 21.4 9.8 6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[0.62rem] uppercase tracking-[0.28em]">
          {nameFirst}
        </span>
        <span className="font-serif text-[1.7rem] tracking-tight">{nameSecond}</span>
      </span>
    </span>
  );
}
