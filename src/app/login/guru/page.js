// Ganti file: src/app/login/guru/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "../../../../components/LoginForm";

export default function LoginGuruPage() {
  const router = useRouter();
  // State untuk menyimpan pesan error dari API
  const [errorMessage, setErrorMessage] = useState("");

  // Tambahkan 'name' dan 'mode' sesuai kiriman LoginForm
  async function handleLogin({ name, email, password, mode }) {
    setErrorMessage(""); // Bersihkan error setiap kali tombol ditekan

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role: "guru", mode }), 
      });

      const data = await res.json();

      if (!res.ok) {
        // Simpan pesan error ke state alih-alih memakai alert()
        setErrorMessage(data.error || "Gagal memproses data");
        return;
      }

      // Jika sukses, arahkan ke dashboard
      router.push(data.redirect);
    } catch (error) {
      setErrorMessage("Terjadi kesalahan jaringan.");
    }
  }

  return (
    <main
      className="bee-page"
      style={{
        backgroundImage: "url('/images/option-background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        justifyContent: "center",
        padding: "24px 20px",
        minHeight: "100vh",
      }}
    >
      {/* Kirim pesan error sebagai prop 'errorMsg' ke komponen form */}
      <LoginForm role="guru" onSubmit={handleLogin} errorMsg={errorMessage} />
    </main>
  );
}