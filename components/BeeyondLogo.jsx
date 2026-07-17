// Taruh di: components/BeeyondLogo.jsx
"use client";

/**
 * Logo pill "🐝 Beeyond".
 * Ganti <BeeIcon /> dengan <img src="/logo-icon.svg" /> kalau sudah ada asetnya.
 */
export default function BeeyondLogo({ size = "md" }) {
  const dims = {
    sm: { padding: "6px 18px", fontSize: 20, iconSize: 20 },
    md: { padding: "8px 24px", fontSize: 26, iconSize: 26 },
  }[size];

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "var(--bee-yellow)",
        borderRadius: 999,
        padding: dims.padding,
        boxShadow: "0 4px 0 rgba(0,0,0,0.15)",
      }}
    >
      <BeeIcon size={dims.iconSize} />
      <span
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: dims.fontSize,
          color: "#1a1a1a",
          letterSpacing: -0.5,
        }}
      >
        Beeyond
      </span>
    </div>
  );
}

/* Placeholder icon — ganti dengan asetmu sendiri kalau sudah ada */
function BeeIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" fill="#1a1a1a" />
      <circle cx="6" cy="8" r="3.2" fill="#1a1a1a" />
      <circle cx="18" cy="8" r="3.2" fill="#1a1a1a" />
      <circle cx="6" cy="16" r="3.2" fill="#1a1a1a" />
      <circle cx="18" cy="16" r="3.2" fill="#1a1a1a" />
    </svg>
  );
}