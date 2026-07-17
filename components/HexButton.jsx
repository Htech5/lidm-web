// Taruh di: components/HexButton.jsx
"use client";

/**
 * Tombol berbentuk hexagon (Murid / Guru) di Welcome Page.
 *
 * Props:
 * - label: teks di bawah icon ("Murid" / "Guru")
 * - icon: ReactNode / placeholder icon (ganti sesuai asetmu)
 * - variant: "filled" (kuning solid, seperti "Murid") | "outline" (coklat solid dgn border kuning, seperti "Guru")
 * - onClick: handler klik -> arahkan ke halaman login yang sesuai
 */
export default function HexButton({ label, icon, variant = "filled", onClick }) {
  const isFilled = variant === "filled";

  const bg = isFilled ? "var(--bee-yellow)" : "var(--bee-brown)";
  const textColor = isFilled ? "var(--bee-brown-dark)" : "var(--bee-yellow)";
  const borderColor = isFilled ? "var(--bee-brown-dark)" : "var(--bee-yellow)";

  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        border: "none",
        background: "transparent",
        padding: 0,
        width: 220,
        height: 220,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* shadow layer belakang (efek 3D seperti di desain) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#E4DCC7",
          clipPath:
            "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
          transform: "translate(0px, 10px)",
        }}
      />
      {/* hexagon utama */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: bg,
          border: `4px solid ${borderColor}`,
          clipPath:
            "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          transition: "transform 0.12s ease",
        }}
        className="hex-inner"
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: isFilled ? "rgba(255,255,255,0.35)" : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: 22,
            color: textColor,
          }}
        >
          {label}
        </span>
      </div>

      <style jsx>{`
        button:active .hex-inner {
          transform: translateY(6px);
        }
      `}</style>
    </button>
  );
}