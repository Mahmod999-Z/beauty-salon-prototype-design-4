import { ImageResponse } from "next/og";
import { salon } from "@/lib/salon";

export const alt = `${salon.name} — ${salon.positioning}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [nameFirst, ...nameRest] = salon.name.split(" ");
  const nameSecond = nameRest.join(" ");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#2b2019",
          color: "#fbf7f2",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          {salon.city} · sinds {salon.since}
        </div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <div style={{ display: "flex", fontSize: 128 }}>{nameFirst}</div>
          <div style={{ display: "flex", fontSize: 128, color: "#c9a57c" }}>{nameSecond}</div>
        </div>
        <div style={{ display: "flex", fontSize: 32, opacity: 0.9 }}>
          {salon.positioning[0].toUpperCase() + salon.positioning.slice(1)}
        </div>
      </div>
    ),
    { ...size },
  );
}
