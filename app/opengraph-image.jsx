import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Anshu Nigam | AI/ML + Backend";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: "#050609", color: "#f5f7ff", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "72px", fontFamily: "sans-serif" }}>
        <div style={{ color: "#66e3ff", fontSize: 24, letterSpacing: 6 }}>AN • LABS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -4 }}>Anshu Nigam</div>
          <div style={{ color: "#b6c1d7", fontSize: 32 }}>AI/ML + Backend</div>
        </div>
        <div style={{ color: "#8390ab", fontSize: 22 }}>SWE / AI-ML internships · Kolkata, India</div>
      </div>
    ),
    { ...size },
  );
}
