type PriceRow = {
  name: string;
  price: string;
};

export function PriceTable({
  id,
  eyebrow,
  title,
  rows,
  revealed = true,
}: {
  id: string;
  eyebrow: string;
  title: string;
  rows: readonly PriceRow[];
  revealed?: boolean;
}) {
  return (
    <div
      className={`overflow-x-auto ${revealed ? "rows-visible" : ""}`}
      tabIndex={0}
      role="region"
      aria-labelledby={`${id}-caption`}
    >
      <table className="w-full min-w-[28rem] border-collapse text-left">
        <caption id={`${id}-caption`} className="pb-8 text-left">
          <span className="block text-xs uppercase tracking-[0.2em] text-ink/50">
            {eyebrow}
          </span>
          <span className="mt-3 block font-serif text-4xl tracking-tight lg:text-5xl">
            {title}
          </span>
        </caption>
        <thead>
          <tr className="border-b border-steel">
            <th scope="col" className="py-3 text-xs font-normal uppercase tracking-[0.16em]">
              Behandeling
            </th>
            <th
              scope="col"
              className="py-3 text-right text-xs font-normal uppercase tracking-[0.16em]"
            >
              Prijs
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.name}
              style={{ "--i": i } as React.CSSProperties}
              className="row-reveal border-b border-steel hover:bg-steel/60"
            >
              <td className="py-4 pr-8">{row.name}</td>
              <td className="py-4 text-right font-medium whitespace-nowrap tabular-nums">
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
