"use client";
import BottomNavBar from "../../../../components/BottomNavBar";

export default function MuridDashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url('/images/murid.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center 5%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <header style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 40, height: 40, background: "#ccc", borderRadius: "50%" }} />
          <span style={{ fontWeight: 800 }}>BuzzQuiz</span>
        </div>
        <div style={{ background: "#FFD700", padding: "5px 15px", borderRadius: 20, fontWeight: 700 }}>
          $ 0
        </div>
      </header>

      {/* Mission Path - scrollable, tinggi tetap, fade halus di atas */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
        <div
          style={{
            height: 650,
            width: "100%",
            maxWidth: 400,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px 0",
            gap: 10,
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 60px, black calc(100% - 20px), transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 60px, black calc(100% - 20px), transparent 100%)",
          }}
        >
          {[4, 3, 2, 1].map((num) => (
            <div
              key={num}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", flexShrink: 0 }}
            >
              <div style={{ width: 80, height: 80, background: "#EAE6D7", borderRadius: "10px", border: "3px solid #D6D2C4" }} />
              <div style={{ padding: "5px 15px", background: "#EAE6D7", borderRadius: 15, margin: "5px 0" }}>Misi {num}</div>
              {num !== 1 && <div style={{ width: 4, height: 40, background: "#D6D2C4" }} />}
            </div>
          ))}
        </div>
      </div>

      <BottomNavBar />
    </main>
  );
}