interface LogoProps {
  variant?: "horizontal" | "stacked" | "icon";
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ variant = "horizontal", className = "", showTagline = true }: LogoProps) {
  if (variant === "icon") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className={className}>
        <rect width="32" height="32" rx="6" className="fill-primary" />
        <g transform="translate(3, 4)" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 24V13L11 6L16 10V24" stroke="white" strokeWidth="2.2" fill="none" />
          <path d="M1 14L11 5L18 11" stroke="white" strokeWidth="2.2" fill="none" />
          <rect x="6" y="14" width="5" height="4" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M16 24V8H24V24" className="stroke-cta" strokeWidth="2.2" fill="none" />
          <rect x="18" y="11" width="4" height="4" className="stroke-cta" strokeWidth="1.5" fill="none" />
          <line x1="1" y1="24" x2="26" y2="24" stroke="white" strokeWidth="2" />
        </g>
      </svg>
    );
  }

  if (variant === "stacked") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none" className={className}>
        <g transform="translate(22, 6)" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 58V28L22 14L34 24V58" className="stroke-primary" strokeWidth="3.5" fill="none" />
          <path d="M2 31L22 12L38 26" className="stroke-primary" strokeWidth="3.5" fill="none" />
          <rect x="12" y="33" width="9" height="9" className="stroke-primary" strokeWidth="2.5" fill="none" />
          <rect x="24" y="43" width="7" height="15" className="stroke-primary" strokeWidth="2.5" fill="none" />
          <path d="M34 58V20H52V58" className="stroke-cta" strokeWidth="3.5" fill="none" />
          <rect x="38" y="26" width="9" height="7" className="stroke-cta" strokeWidth="2.5" fill="none" />
          <rect x="38" y="38" width="9" height="7" className="stroke-cta" strokeWidth="2.5" fill="none" />
          <line x1="2" y1="58" x2="56" y2="58" className="stroke-primary" strokeWidth="3" />
        </g>
        <text x="60" y="88" textAnchor="middle" fontFamily="var(--font-heading), system-ui, sans-serif" fontWeight="800" fontSize="26" letterSpacing="-0.5">
          <tspan className="fill-primary">CADI</tspan>
          <tspan className="fill-cta">67</tspan>
        </text>
        {showTagline && (
          <text x="60" y="102" textAnchor="middle" fontFamily="var(--font-body), system-ui, sans-serif" fontWeight="500" fontSize="6.5" letterSpacing="2" className="fill-muted">
            BUILD · TRANSFORM · MAINTAIN
          </text>
        )}
      </svg>
    );
  }

  // Horizontal (default)
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 80" fill="none" className={className}>
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* Residential structure with pitched roof */}
        <path d="M8 68V32L28 16L42 28V68" className="stroke-primary" strokeWidth="3.5" fill="none" />
        <path d="M4 35L28 14L46 30" className="stroke-primary" strokeWidth="3.5" fill="none" />
        <rect x="16" y="38" width="10" height="10" className="stroke-primary" strokeWidth="2.5" fill="none" />
        <rect x="30" y="50" width="8" height="18" className="stroke-primary" strokeWidth="2.5" fill="none" />
        {/* Commercial extension — right pillar in Safety Orange */}
        <path d="M42 68V24H62V68" className="stroke-cta" strokeWidth="3.5" fill="none" />
        <rect x="47" y="30" width="10" height="8" className="stroke-cta" strokeWidth="2.5" fill="none" />
        <rect x="47" y="44" width="10" height="8" className="stroke-cta" strokeWidth="2.5" fill="none" />
        {/* Ground line */}
        <line x1="4" y1="68" x2="66" y2="68" className="stroke-primary" strokeWidth="3" />
      </g>

      {/* Text: CADI in Forest Green, 67 in Safety Orange */}
      <text x="80" y="52" fontFamily="var(--font-heading), system-ui, sans-serif" fontWeight="800" fontSize="38" letterSpacing="-1">
        <tspan className="fill-primary">CADI</tspan>
        <tspan className="fill-cta">67</tspan>
      </text>

      {/* Tagline */}
      {showTagline && (
        <text x="82" y="68" fontFamily="var(--font-body), system-ui, sans-serif" fontWeight="500" fontSize="10" letterSpacing="3" className="fill-muted">
          BUILD · TRANSFORM · MAINTAIN
        </text>
      )}
    </svg>
  );
}
