"use client";

import { useEffect, useState } from "react";
import { hours } from "@/lib/salon";

type HourRow = (typeof hours)[number];

type Status = {
  today?: string;
  open: boolean;
  message: string;
};

const weekdayIndex = new Map<number, HourRow>();
for (const row of hours) {
  for (const day of row.weekdays as readonly number[]) {
    weekdayIndex.set(day, row);
  }
}

function toMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

function formatDuration(minutes: number) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} uur`;
  return `${h}u ${m}m`;
}

function getStatus(now: Date): Status {
  const day = now.getDay();
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const todayRow = weekdayIndex.get(day);

  if (todayRow && "open" in todayRow) {
    const openMin = toMinutes(todayRow.open);
    const closeMin = toMinutes(todayRow.close);
    if (minutesNow >= openMin && minutesNow < closeMin) {
      return {
        today: todayRow.days,
        open: true,
        message: `Open nu · sluit over ${formatDuration(closeMin - minutesNow)}`,
      };
    }
    if (minutesNow < openMin) {
      return {
        today: todayRow.days,
        open: false,
        message: `Gesloten · opent vandaag om ${todayRow.open}`,
      };
    }
  }

  for (let offset = 1; offset <= 7; offset++) {
    const nextDay = (day + offset) % 7;
    const row = weekdayIndex.get(nextDay);
    if (row && "open" in row) {
      const when = offset === 1 ? "morgen" : row.days;
      return {
        today: todayRow?.days,
        open: false,
        message: `Gesloten · opent ${when} om ${row.open}`,
      };
    }
  }

  return { today: todayRow?.days, open: false, message: "Gesloten" };
}

export function Hours({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null);
  const [grown, setGrown] = useState(false);

  useEffect(() => {
    const update = () => setStatus(getStatus(new Date()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setGrown(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={className}>
      <p className="flex min-h-5 items-center gap-1.5 text-xs uppercase tracking-[0.14em]">
        {status ? (
          <>
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full bg-current ${status.open ? "pulse-dot" : "opacity-40"}`}
            />
            {status.message}
          </>
        ) : null}
      </p>

      <div className="mt-4 flex items-end gap-2" aria-hidden="true">
        {hours.map((row) => {
          const isToday = status?.today === row.days;
          const isOpenDay = "open" in row;
          const duration = isOpenDay ? toMinutes(row.close) - toMinutes(row.open) : 0;
          const heightPct = isOpenDay ? Math.round((duration / 630) * 100) : 8;
          return (
            <div key={row.days} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-16 w-full items-end">
                <div
                  className={`w-full rounded-[1px] transition-all duration-500 ${
                    isToday ? "bg-taupe" : "bg-steel"
                  }`}
                  style={{ height: `${grown ? heightPct : 0}%` }}
                />
              </div>
              <span
                className={`text-[0.65rem] uppercase tracking-[0.1em] ${isToday ? "font-medium" : "text-ink/50"}`}
              >
                {row.days.slice(0, 2)}
              </span>
            </div>
          );
        })}
      </div>

      <dl className="mt-6">
        {hours.map((row) => {
          const isToday = status?.today === row.days;
          return (
            <div
              key={row.days}
              className={`grid grid-cols-[7.5rem_1fr] items-center gap-x-4 gap-y-1 border-b border-steel py-3 ${
                isToday ? "font-medium" : ""
              }`}
            >
              <dt>{row.days}</dt>
              <dd>{row.time}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
