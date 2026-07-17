// Ganti file: src/app/layout.js
import "./globals.css";
import MobileOnlyGuard from "../../components/MobileOnlyGuard";

export const metadata = {
  title: "Beeyond",
  description: "Let's learn and go Beeyond!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <MobileOnlyGuard maxWidth={480}>{children}</MobileOnlyGuard>
      </body>
    </html>
  );
}