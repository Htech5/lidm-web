"use client";
import Image from "next/image";

export default function DetectionBubble({ label, visible }) {
  if (!visible || !label) return null;

  return (
    <div
      style={{
        position: "absolute",
        bottom: 190,
        right: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 6,
      }}
    >
      {/* Speech bubble */}
      <div
        style={{
          background: "#fff",
          padding: "12px 18px",
          borderRadius: 20,
          borderBottomRightRadius: 4,
          fontSize: 15,
          fontWeight: 500,
          color: "#333",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          maxWidth: 220,
        }}
      >
        Itu adalah{" "}
        <span style={{ color: "#F5A623", fontWeight: 700 }}>{label}</span>!
      </div>

      {/* Karakter lebah - SVG kosongan, ganti dengan asetmu */}
      <div
        style={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <Image src="/images/bee-character.svg" alt="Karakter" width={70} height={70} />
      </div>
    </div>
  );
}