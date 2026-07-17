// Ganti file: src/app/page.js
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <main
        className="bee-page"
        style={{
          backgroundImage: "url('/images/background-welcome.webp')",
          backgroundSize: "cover", // Agar gambar memenuhi layar
          backgroundPosition: "center", // Agar gambar berada di tengah
          backgroundRepeat: "no-repeat",
          justifyContent: "flex-start",
          paddingTop: 48,
          paddingBottom: 40,
          minHeight: "100vh", // Opsional: pastikan tinggi minimal seukuran layar
        }}
      >
      {/* blob kuning dekoratif di atas — ganti dengan asetmu kalau perlu */}

        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <Image 
            src="/images/beeyond-logo.webp" 
            alt="Beeyond Logo" 
            width={220}  // Sesuaikan nilai ini dengan lebar asli/yang kamu inginkan
            height={62}  // Sesuaikan nilai ini dengan tinggi asli/yang kamu inginkan
            priority     // Tambahkan ini agar logo dimuat lebih awal (bagus untuk performa)
            style={{
              objectFit: "contain",
              marginTop: "80px",
          }}
        />

        <h1
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: 32,
            color: "#785900",
            margin: "0px 0 4px",
          }}
        >
          Selamat Datang!
        </h1>
        <p
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#4F4632",
            fontSize: 16,
            margin: "0 0 36px",
            textAlign: "center",
          }}
        >
          Pilih peranmu untuk memulai petualangan.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 28, alignItems: "center" }}>
          {/* Tombol Murid */}
          <button
            onClick={() => router.push("/login/murid")}
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "transform 0.1s ease", // Opsional: efek animasi kecil saat diklik
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Image
              src="/images/murid-icon.svg"
              alt="Login Murid"
              width={220} // Sesuaikan dengan lebar gambarmu
              height={220} // Sesuaikan dengan tinggi gambarmu
              priority
            />
          </button>

          {/* Tombol Guru */}
          <button
            onClick={() => router.push("/login/guru")}
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "transform 0.1s ease", // Opsional: efek animasi kecil saat diklik
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Image
              src="/images/guru-icon.svg"
              alt="Login Guru"
              width={220} // Sesuaikan dengan lebar gambarmu
              height={220} // Sesuaikan dengan tinggi gambarmu
              priority
            />
          </button>
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