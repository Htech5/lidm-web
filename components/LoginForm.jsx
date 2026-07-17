// Ganti file: components/LoginForm.jsx
"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Props:
 * - role: "murid" | "guru"
 * - onSubmit: (data: {name?, email, password, mode}) => Promise<boolean>
 * - errorMsg: String (pesan error dari API)
 */
export default function LoginForm({ role = "murid", onSubmit, errorMsg }) {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isMurid = role === "murid";
  const title = isLoginMode
    ? (isMurid ? "Login Murid" : "Login Guru")
    : (isMurid ? "Daftar Murid" : "Daftar Guru");

  const ctaLabel = isMurid ? "Ayo main! 🚀" : "Ayo ajar! 🚀";

  // BERUBAH: Fungsi ini sekarang async
  async function handleSubmit(e) {
    e.preventDefault();
    if (isLoginMode) {
      // Jika mode login, jalankan biasa
      await onSubmit?.({ email, password, mode: "login" });
    } else {
      // Jika mode register, tangkap hasilnya
      const isSuccess = await onSubmit?.({ name, email, password, mode: "register" });
      
      // Jika berhasil, munculkan alert, dan saat OK diklik, jalankan toggleMode()
      if (isSuccess) {
        alert("Pendaftaran berhasil! Tekan OK untuk masuk menggunakan akun baru Anda.");
        toggleMode();
      }
    }
  }

  function toggleMode() {
    setIsLoginMode(!isLoginMode);
    // Bersihkan field saat berpindah form
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div
      style={{
        background: "var(--bee-white)",
        borderRadius: 40,
        padding: "40px 28px 32px",
        width: "100%",
        maxWidth: 340,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 120 }}>
        <Image src="/images/honey-drop.svg" alt="Honey Drop" width={40} height={36} />
      </div>
      <div style={{ position: "absolute", top: 0, right: 100 }}>
        <Image src="/images/honey-drop2.svg" alt="Honey Drop 2" width={15} height={20} />
      </div>

      <Image
        src="/images/beeyond-logo.webp"
        alt="Beeyond Logo"
        width={220}
        height={62}
        style={{ objectFit: "contain", marginTop: 12 }}
        priority
      />

      <h1
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 800,
          fontSize: 26,
          color: "var(--bee-yellow-dark)",
          margin: "18px 0 4px",
          textAlign: "center",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "#785900",
          fontSize: 14,
          margin: "0 0 24px",
          textAlign: "center",
        }}
      >
        Let&apos;s learn and go Beeyond!
      </p>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        {!isLoginMode && (
          <>
            <label style={fieldLabelStyle}>Nama Lengkap</label>
            <div style={inputWrapStyle}>
              <Image src="/images/icon-account.svg" alt="Name Icon" width={20} height={20} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nama kamu"
                required
                style={inputStyle}
              />
            </div>
          </>
        )}

        <label style={{ ...fieldLabelStyle, marginTop: !isLoginMode ? 18 : 0 }}>
          Akun Email
        </label>
        <div style={inputWrapStyle}>
          <Image src="/images/icon-account.svg" alt="Email Icon" width={20} height={20} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nama@madu.com"
            required
            style={inputStyle}
          />
        </div>

        <label style={{ ...fieldLabelStyle, marginTop: 18 }}>Kata Sandi</label>
        <div
          style={{
            ...inputWrapStyle,
            border: errorMsg ? "1px solid #E02D2D" : "1px solid var(--bee-border)",
          }}
        >
          <Image src="/images/icon-pw.svg" alt="Password Icon" width={20} height={20} />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            style={inputStyle}
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            style={eyeButtonStyle}
            aria-label="Tampilkan kata sandi"
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        </div>

        {errorMsg && (
          <p
            style={{
              color: "#E02D2D",
              fontSize: 12,
              fontWeight: 600,
              marginTop: 6,
              marginBottom: 0,
              textAlign: "left",
            }}
          >
            * {errorMsg}
          </p>
        )}

        {isLoginMode ? (
          <div style={{ textAlign: "center", margin: "10px 0 22px" }}>
            <a
              href="#"
              style={{
                color: "var(--bee-yellow-dark)",
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              Lupa kata sandi?
            </a>
          </div>
        ) : (
          <div style={{ marginBottom: 32 }} />
        )}

        <button
          type="submit" // Pastikan type-nya "submit"
          style={{
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 4,
            transition: "transform 0.1s ease",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Image
            src={isLoginMode ? "/images/button-login.svg" : "/images/button-regis.svg"}
            alt={ctaLabel}
            width={180}
            height={80}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </button>
      </form>

      <p style={{ marginTop: 22, fontSize: 13, color: "var(--bee-text-muted)" }}>
        {isLoginMode ? "Belum punya akun? " : "Sudah punya akun? "}
        <button
          type="button"
          onClick={toggleMode}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            color: "var(--bee-yellow-dark)",
            fontWeight: 700,
            cursor: "pointer",
            fontSize: 13,
            fontFamily: "inherit",
          }}
        >
          {isLoginMode ? "Daftar sekarang!" : "Masuk di sini!"}
        </button>
      </p>
    </div>
  );
}

/* ---------- styles ---------- */
const fieldLabelStyle = { display: "block", fontSize: 13, fontWeight: 600, color: "var(--bee-brown-dark)", marginBottom: 6 };
const inputWrapStyle = { display: "flex", alignItems: "center", gap: 10, background: "var(--bee-cream-dark)", border: "1px solid var(--bee-border)", borderRadius: 999, padding: "12px 18px" };
const inputStyle = { border: "none", background: "transparent", outline: "none", flex: 1, fontSize: 14, color: "var(--bee-brown-dark)" };
const eyeButtonStyle = { border: "none", background: "transparent", fontSize: 16, padding: 0, cursor: "pointer", opacity: 0.6 };