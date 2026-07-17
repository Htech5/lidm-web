import BottomNavBar from "../../../../../components/BottomNavBar";

export default function KameraPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, padding: 40, textAlign: "center" }}>
        <h1>Halaman Kamera Kosong</h1>
        <a href="/dashboard/murid">Kembali ke Dashboard</a>
      </div>
      <BottomNavBar />
    </div>
  );
}