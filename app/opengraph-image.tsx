import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0ea5e9 0%, #6366f1 45%, #111827 100%)",
          color: "white",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 700 }}>Caploop</div>
        <div style={{ fontSize: 28, marginTop: 16, opacity: 0.9 }}>
          增长 → 估值 → 资本 · SME 投资平台
        </div>
      </div>
    ),
    { ...size }
  );
}