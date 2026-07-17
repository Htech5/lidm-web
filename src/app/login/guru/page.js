// Ganti file: src/app/login/guru/page.js
"use client";

import { useRouter } from "next/navigation";
import LoginForm from "../../../../components/LoginForm";

export default function LoginGuruPage() {
  const router = useRouter();

  function handleLogin({ email, password }) {
    // TODO: sambungkan ke API/auth logic guru di sini
    console.log("Login guru:", email, password);
    // contoh redirect setelah sukses login:
    // router.push("/guru/dashboard");
  }

  return (
    <main
      className="bee-page"
      style={{
        // Ganti background gradient dengan gambar
        backgroundImage: "url('/images/option-background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        justifyContent: "center",
        padding: "24px 20px",
        minHeight: "100vh", // Tambahkan ini agar background selalu penuh satu layar
      }}
    >
      <LoginForm role="guru" onSubmit={handleLogin} />
    </main>
  );
}