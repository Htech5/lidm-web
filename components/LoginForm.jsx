// Taruh di: components/LoginForm.jsx
"use client";

import { useState } from "react";
import BeeyondLogo from "./BeeyondLogo";

/**
 * Form login yang dipakai bersama oleh halaman Login Murid & Login Guru.
 *
 * Props:
 * - role: "murid" | "guru"
 * - onSubmit: (data: {email, password}) => void
 */
export default function LoginForm({ role = "murid", onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isMurid = role === "murid";
  const title = isMurid ? "Login Murid" : "Login Guru";
  const ctaLabel = isMurid ? "Ayo main! 🚀" : "Ayo ajar! 🚀";

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.({ email, password });
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
      {/* dua "tab" kuning di atas kartu, seperti di desain */}
      <div style={{ position: "absolute", top: -14, left: 60, width: 22, height: 26, background: "var(--bee-yellow)", borderRadius: "0 0 10px 10px" }} />
      <div style={{ position: "absolute", top: -14, right: 60, width: 22, height: 26, background: "var(--bee-yellow)", borderRadius: "0 0 10px 10px" }} />

      <BeeyondLogo size="sm" />

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
          color: "var(--bee-text-muted)",
          fontSize: 14,
          margin: "0 0 24px",
          textAlign: "center",
        }}
      >
        Let&apos;s learn and go Beeyond!
      </p>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <label style={fieldLabelStyle}>Akun Email</label>
        <div style={inputWrapStyle}>
          <PlaceholderIcon />
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
        <div style={inputWrapStyle}>
          <PlaceholderIconOutline />
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
            👁
          </button>
        </div>

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

        <button type="submit" style={ctaButtonStyle}>
          {ctaLabel}
        </button>
      </form>

      <p style={{ marginTop: 22, fontSize: 13, color: "var(--bee-text-muted)" }}>
        Belum punya akun?{" "}
        <a href="#" style={{ color: "var(--bee-yellow-dark)", fontWeight: 700 }}>
          Daftar sekarang!
        </a>
      </p>
    </div>
  );
}

/* ---------- styles ---------- */

const fieldLabelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "var(--bee-brown-dark)",
  marginBottom: 6,
};

const inputWrapStyle = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  background: "var(--bee-cream-dark)",
  border: "1px solid var(--bee-border)",
  borderRadius: 999,
  padding: "12px 18px",
};

const inputStyle = {
  border: "none",
  background: "transparent",
  outline: "none",
  flex: 1,
  fontSize: 14,
  color: "var(--bee-brown-dark)",
};

const eyeButtonStyle = {
  border: "none",
  background: "transparent",
  fontSize: 16,
  padding: 0,
  opacity: 0.6,
};

const ctaButtonStyle = {
  width: "100%",
  border: "2px solid var(--bee-brown-dark)",
  background: "var(--bee-yellow)",
  color: "var(--bee-brown-dark)",
  fontFamily: "var(--font-heading)",
  fontWeight: 800,
  fontSize: 17,
  padding: "16px 0",
  borderRadius: 999,
  clipPath:
    "polygon(4% 50%, 12% 0%, 88% 0%, 96% 50%, 88% 100%, 12% 100%)",
  boxShadow: "0 5px 0 rgba(0,0,0,0.15)",
  marginTop: 4,
};

/* Placeholder icons — ganti dengan aset asli kamu nanti */
function PlaceholderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" fill="var(--bee-yellow-dark)" />
      <circle cx="7" cy="9" r="2.4" fill="var(--bee-yellow-dark)" />
      <circle cx="17" cy="9" r="2.4" fill="var(--bee-yellow-dark)" />
      <circle cx="7" cy="15" r="2.4" fill="var(--bee-yellow-dark)" />
      <circle cx="17" cy="15" r="2.4" fill="var(--bee-yellow-dark)" />
    </svg>
  );
}

function PlaceholderIconOutline() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <polygon
        points="12,2 21,7 21,17 12,22 3,17 3,7"
        stroke="var(--bee-yellow-dark)"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}