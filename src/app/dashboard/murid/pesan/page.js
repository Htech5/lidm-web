"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import BottomNavBar from "../../../../../components/BottomNavBar";
import ChatBubble from "../../../../../components/ChatBubble";
import TypingIndicator from "../../../../../components/TypingIndicator";

export default function PesanPage() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Halo! Apa yang kamu temukan hari ini?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || "Maaf, aku belum mengerti." },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Maaf, TalkBuddy sedang tidak bisa dihubungi." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url('/images/bg-talk.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center 10%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <div style={{ padding: "16px 20px 8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Image src="/images/talk-buddy.svg" alt="TalkBuddy" width={160} height={60} />
        <button
          style={{
            width: 80,
            height: 60,
            border: "none",
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Image src="/images/shop-cart.svg" alt="Belanja" width={32} height={32} />
        </button>
      </div>

      {/* Karakter hexagon */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0 20px" }}>
        <div
          style={{
            width: 160,
            height: 160,
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            background: "linear-gradient(#F5C518, #F5C518) padding-box",
            border: "6px solid #F5C518",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "88%",
              height: "88%",
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src="/images/bee-character.svg" alt="TalkBuddy" width={100} height={100} />
          </div>
        </div>
        <span style={{ marginTop: 10, fontWeight: 600, color: "#b8860b" }}>Ayo ngobrol!</span>
      </div>

      {/* Chat area */}
      <div style={{ flex: 1, overflowY: "auto", padding: "0 20px" }}>
        {messages.map((msg, i) => (
          <ChatBubble key={i} sender={msg.sender} text={msg.text} />
        ))}
        {loading && <TypingIndicator />}
        <div ref={scrollRef} />
      </div>

      {/* Input area */}
      <div style={{ padding: "12px 20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#fff",
            border: "2px solid #F5C518",
            borderRadius: 30,
            padding: "6px 6px 6px 16px",
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a small message..."
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: 14,
              background: "transparent",
            }}
          />
          <button
            onClick={handleSend}
            disabled={loading}
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "#5a4400",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            <span style={{ color: "#fff", fontSize: 16 }}>➤</span>
          </button>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
}