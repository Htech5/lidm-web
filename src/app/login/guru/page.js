// Buat file baru di: src/app/login/guru/page.js
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
        background: "linear-gradient(180deg, var(--bee-cream) 0%, var(--bee-yellow-light) 100%)",
        justifyContent: "center",
        padding: "24px 20px",
      }}
    >
      <LoginForm role="guru" onSubmit={handleLogin} />
    </main>
  );
}