// Ganti file: src/app/page.js
"use client";

import { useRouter } from "next/navigation";
import BeeyondLogo from "../../components/BeeyondLogo";
import HexButton from "../../components/HexButton";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <main
      className="bee-page"
      style={{
        background: "var(--bee-cream)",
        justifyContent: "flex-start",
        paddingTop: 48,
        paddingBottom: 40,
      }}
    >
      {/* blob kuning dekoratif di atas — ganti dengan asetmu kalau perlu */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 160,
          background: "var(--bee-yellow-light)",
          borderBottomLeftRadius: "50% 40px",
          borderBottomRightRadius: "50% 40px",
          zIndex: 0,
        }}
      />
      {/* pola hexagon dekoratif di bawah — placeholder, ganti dengan image asset */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 220,
          opacity: 0.25,
          backgroundImage:
            "radial-gradient(circle, var(--bee-yellow) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <BeeyondLogo />

        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: 28,
            color: "var(--bee-yellow-dark)",
            margin: "20px 0 4px",
          }}
        >
          Selamat Datang!
        </h1>
        <p
          style={{
            color: "var(--bee-text-muted)",
            fontSize: 14,
            margin: "0 0 36px",
            textAlign: "center",
          }}
        >
          Pilih peranmu untuk memulai petualangan.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 28, alignItems: "center" }}>
          <HexButton
            label="Murid"
            variant="filled"
            icon={<PlaceholderSmileIcon />}
            onClick={() => router.push("/login/murid")}
          />
          <HexButton
            label="Guru"
            variant="outline"
            icon={<PlaceholderCapIcon />}
            onClick={() => router.push("/login/guru")}
          />
        </div>
      </div>
    </main>
  );
}

/* Placeholder icons — ganti dengan aset asli (svg/png) kamu nanti */
function PlaceholderSmileIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.4" />
      <circle cx="9" cy="10" r="1.2" fill="var(--bee-brown-dark)" />
      <circle cx="15" cy="10" r="1.2" fill="var(--bee-brown-dark)" />
      <path d="M8 14c1.2 1.4 6.8 1.4 8 0" stroke="var(--bee-brown-dark)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function PlaceholderCapIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <path d="M12 3 2 8l10 5 8-4v6" stroke="var(--bee-yellow)" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
      <path d="M6 10v4c0 1.5 3 3 6 3s6-1.5 6-3v-4" stroke="var(--bee-yellow)" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
    </svg>
  );
}