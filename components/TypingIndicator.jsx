import Image from "next/image";

export default function TypingIndicator() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 16 }}>
      <div style={{ width: 32, height: 32, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
        <Image src="/images/bee-character.svg" alt="TalkBuddy" width={32} height={32} />
      </div>
      <div
        style={{
          background: "#fff",
          padding: "14px 18px",
          borderRadius: 18,
          borderBottomLeftRadius: 4,
          display: "flex",
          gap: 4,
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        <Dot delay={0} />
        <Dot delay={0.15} />
        <Dot delay={0.3} />
      </div>
    </div>
  );
}

function Dot({ delay }) {
  return (
    <span
      style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#bbb",
        display: "inline-block",
        animation: "bounce 1.2s infinite",
        animationDelay: `${delay}s`,
      }}
    >
      <style jsx>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </span>
  );
}