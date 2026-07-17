// Buat file baru di: src/app/login/murid/page.js
"use client";

import { useRouter } from "next/navigation";
import LoginForm from "../../../../components/LoginForm";

export default function LoginMuridPage() {
  const router = useRouter();

  function handleLogin({ email, password }) {
    // TODO: sambungkan ke API/auth logic murid di sini
    console.log("Login murid:", email, password);
    // contoh redirect setelah sukses login:
    // router.push("/murid/dashboard");
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
      <LoginForm role="murid" onSubmit={handleLogin} />
    </main>
  );
}