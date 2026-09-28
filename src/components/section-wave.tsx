export function SectionWave() {
  return (
    <div aria-hidden="true" className="relative h-14 overflow-hidden bg-ink lg:h-20">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-full w-full"
      >
        <path
          d="M0 80 C 200 20, 400 100, 600 55 S 1000 15, 1200 60 L1200 120 L0 120 Z"
          fill="var(--color-paper)"
        />
      </svg>
    </div>
  );
}
