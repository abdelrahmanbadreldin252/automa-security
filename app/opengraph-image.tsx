import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "AUTOMA SECURITY — cybersecurity products in development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const logo = readFileSync(join(process.cwd(), "public", "logo.png")).toString("base64");
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#050705",
          border: "2px solid rgba(0,255,136,0.3)",
          color: "#F5FFF8",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "48px",
          width: "100%",
        }}
      >
        <img src={`data:image/png;base64,${logo}`} alt="AUTOMA SECURITY logo" width="760" height="424" />
        <div
          style={{
            color: "#00FF88",
            fontFamily: "Arial, sans-serif",
            fontSize: 32,
            marginTop: 16,
          }}
        >
          Cybersecurity products in development
        </div>
      </div>
    ),
    { ...size },
  );
}
