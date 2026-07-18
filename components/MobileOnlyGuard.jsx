    // Taruh di: components/MobileOnlyGuard.jsx
"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

/**
 * Membungkus seluruh aplikasi. Kalau layar melebihi ukuran HP potrait
 * (default breakpoint 480px lebar ATAU orientasi landscape/rasio lebar > tinggi),
 * tampilkan halaman peringatan alih-alih konten app.
 *
 * Cara pakai (di src/app/layout.js):
 *   <MobileOnlyGuard>{children}</MobileOnlyGuard>
 */
export default function MobileOnlyGuard({ children, maxWidth = 480 }) {
  const [blocked, setBlocked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function check() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isTooWide = w > maxWidth;
      const isLandscape = w > h; // portrait check
      setBlocked(isTooWide || isLandscape);
      setReady(true);
    }
    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, [maxWidth]);

  // Hindari flash konten sebelum pengecekan pertama selesai
  if (!ready) return null;

  if (blocked) {
    return (
      <div
        style={{
          minHeight: "100dvh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 32,
          background: "var(--bee-cream)",
          gap: 16,
        }}
      >
        <Image 
          src="/images/avatar.svg" 
          alt="Phone Icon" 
          width={56} 
          height={56} 
        />
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: 22,
            color: "var(--bee-brown-dark)",
            margin: 0,
          }}
        >
          Tampilan Tidak Didukung
        </h1>
        <p
          style={{
            color: "var(--bee-text-muted)",
            fontSize: 15,
            maxWidth: 320,
            margin: 0,
          }}
        >
          Beeyond hanya bisa diakses melalui layar ponsel dengan orientasi
          potrait. Silakan buka aplikasi ini lewat HP kamu.
        </p>
      </div>
    );
  }

  return children;
}