import Image from "next/image";

export default function ChatBubble({ sender, text }) {
  const isBot = sender === "bot";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        alignItems: "flex-end",
        gap: 8,
        marginBottom: 16,
      }}
    >
      {isBot && (
        <div style={{ width: 32, height: 32, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
          <Image src="/images/bee-character.svg" alt="TalkBuddy" width={32} height={32} />
        </div>
      )}

      <div
        style={{
          maxWidth: "70%",
          background: isBot ? "#fff" : "#F5C518",
          color: "#333",
          padding: "12px 16px",
          borderRadius: 18,
          borderBottomLeftRadius: isBot ? 4 : 18,
          borderBottomRightRadius: isBot ? 18 : 4,
          fontSize: 14,
          lineHeight: 1.5,
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        }}
      >
        {text}
      </div>

      {!isBot && (
        <div style={{ width: 32, height: 32, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
          <Image src="/images/avatar.svg" alt="Kamu" width={32} height={32} />
        </div>
      )}
    </div>
  );
}