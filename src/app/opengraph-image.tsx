import { ImageResponse } from "next/og";
import { COMPANY_NAME } from "@/lib/constants";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          background: "linear-gradient(135deg, #102033 0%, #0f4f3d 55%, #1aa7a1 100%)",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 800, color: "#f8c14a" }}>Karnali tours and vehicle rental from Surkhet</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05 }}>{COMPANY_NAME}</div>
          <div style={{ marginTop: 28, fontSize: 34, color: "rgba(255,255,255,0.82)" }}>Rara / Phoksundo / Dolpo / Humla / Jumla</div>
        </div>
        <div style={{ fontSize: 24, color: "rgba(255,255,255,0.72)" }}>Local planning, practical routes, reliable vehicles</div>
      </div>
    ),
    size,
  );
}
