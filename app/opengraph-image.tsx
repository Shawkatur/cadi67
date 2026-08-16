import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "CADI67 - Professional Property Services in Corona, NY";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #064E3B 0%, #065F46 40%, #047857 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Dot pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Building icon */}
        <div style={{ display: "flex", marginBottom: 24 }}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              transform="translate(3, 4)"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M3 24V13L11 6L16 10V24"
                stroke="white"
                strokeWidth="2.2"
                fill="none"
              />
              <path
                d="M1 14L11 5L18 11"
                stroke="white"
                strokeWidth="2.2"
                fill="none"
              />
              <rect
                x="6"
                y="14"
                width="5"
                height="4"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M16 24V8H24V24"
                stroke="#F97316"
                strokeWidth="2.2"
                fill="none"
              />
              <rect
                x="18"
                y="11"
                width="4"
                height="4"
                stroke="#F97316"
                strokeWidth="1.5"
                fill="none"
              />
              <line
                x1="1"
                y1="24"
                x2="26"
                y2="24"
                stroke="white"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-2px",
            marginBottom: 12,
          }}
        >
          <span style={{ color: "white" }}>CADI</span>
          <span style={{ color: "#F97316" }}>67</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 18,
            fontWeight: 500,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "4px",
            textTransform: "uppercase" as const,
            marginBottom: 32,
          }}
        >
          BUILD · TRANSFORM · MAINTAIN
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 3,
            background: "#F97316",
            borderRadius: 2,
            marginBottom: 28,
          }}
        />

        {/* Description */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "rgba(255,255,255,0.85)",
            fontWeight: 400,
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          Professional Property Services
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 16,
            color: "rgba(255,255,255,0.5)",
            fontWeight: 400,
            marginTop: 8,
          }}
        >
          Renovation · Construction · Painting · Flooring · Maintenance
        </div>

        {/* Location badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginTop: 24,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 999,
            padding: "8px 20px",
            fontSize: 14,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          📍 Corona, NY & NYC Metro Area
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 32,
            fontSize: 14,
            color: "rgba(255,255,255,0.35)",
            fontWeight: 500,
          }}
        >
          cadi67.com
        </div>
      </div>
    ),
    { ...size }
  );
}
