import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Northrise — Applied AI. Built for people. Made to matter.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "#0B1324",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Subtle orange glow — the rocket-on-horizon motif */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 360,
            height: 360,
            top: 230,
            left: 420,
            background:
              "radial-gradient(circle, rgba(255,138,61,0.55) 0%, rgba(255,138,61,0.18) 30%, rgba(255,138,61,0) 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Vertical "rocket trail" line above the glow */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 2,
            height: 380,
            top: 30,
            left: 599,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.35) 55%, rgba(255,235,210,0.95) 88%, #FF8A3D 100%)",
          }}
        />

        {/* North-star dot at the top of the trail */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 8,
            height: 8,
            top: 30,
            left: 596,
            background: "#FF8A3D",
            borderRadius: "50%",
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: 132,
            fontWeight: 500,
            letterSpacing: "0.06em",
            color: "#FAFAF8",
            marginTop: -40,
            zIndex: 1,
          }}
        >
          NORTHRISE
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#9ca3af",
            marginTop: 28,
            letterSpacing: "0.01em",
            zIndex: 1,
          }}
        >
          <span>Applied AI. Built for people. Made to&nbsp;</span>
          <span style={{ color: "#FF8A3D" }}>matter.</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
