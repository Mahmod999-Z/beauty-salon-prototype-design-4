import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2b2019",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 32 32">
          <circle cx="8" cy="24" r="3.25" fill="none" stroke="#c9a57c" strokeWidth="1.6" />
          <circle cx="24" cy="24" r="3.25" fill="none" stroke="#c9a57c" strokeWidth="1.6" />
          <path d="M10.4 21.4 22.2 6.5" fill="none" stroke="#c9a57c" strokeWidth="1.6" />
          <path d="M21.6 21.4 9.8 6.5" fill="none" stroke="#c9a57c" strokeWidth="1.6" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
