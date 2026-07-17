// src/app/layout.js
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import MobileOnlyGuard from "../../components/MobileOnlyGuard";

// Inisialisasi font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"], // Subset standar
  display: "swap",    // Mencegah flash teks kosong saat font dimuat
});

export const metadata = {
  title: "Beeyond",
  description: "Let's learn and go Beeyond!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      {/* Tambahkan className dari font ke body */}
      <body className={plusJakartaSans.className}>
        <MobileOnlyGuard maxWidth={480}>{children}</MobileOnlyGuard>
      </body>
    </html>
  );
}