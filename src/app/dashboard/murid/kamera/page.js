"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BottomNavBar from "../../../../../components/BottomNavBar";
import DetectionBubble from "../../../../../components/DetectionBubble";

export default function KameraPage() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [detectedLabel, setDetectedLabel] = useState(null);

  useEffect(() => {
    let stream;
    let isMounted = true;

    async function startCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false,
        });

        // Kalau komponen sudah unmount sebelum stream selesai didapat, langsung matikan
        if (!isMounted) {
          mediaStream.getTracks().forEach((track) => track.stop());
          return;
        }

        stream = mediaStream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError("Tidak bisa mengakses kamera. Pastikan izin kamera sudah diberikan.");
      }
    }

    startCamera();

    return () => {
      isMounted = false;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      // Extra safety: matikan juga langsung dari video element kalau masih ada
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    };
  }, []);

  async function handleCapture() {
    if (!videoRef.current || loading) return;

    setLoading(true);
    setDetectedLabel(null);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append("file", blob, "capture.jpg");

      try {
        const res = await fetch("/api/detect", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();

        if (data.best) {
          setDetectedLabel(data.best.label);
        } else {
          setDetectedLabel(null);
        }
      } catch (err) {
        setError("Gagal mendeteksi objek.");
      } finally {
        setLoading(false);
      }
    }, "image/jpeg");
  }

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden", background: "#000" }}>
      {/* Live camera feed */}
      {error ? (
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
            padding: 20,
          }}
        >
          {error}
        </div>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Canvas tersembunyi untuk capture frame */}
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {/* Header pill */}
      <div style={{ position: "absolute", top: 20, left: 20, right: 20, display: "flex", justifyContent: "center" }}>
        <div
          style={{
            background: "rgba(0,0,0,0.45)",
            color: "#fff",
            fontWeight: 700,
            padding: "12px 28px",
            borderRadius: 30,
            fontSize: 16,
          }}
        >
          AR Word Explorer
        </div>
      </div>

      {/* Target frame di tengah */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 260,
          height: 260,
        }}
      >
        <CornerBracket position="top-left" />
        <CornerBracket position="top-right" />
        <CornerBracket position="bottom-left" />
        <CornerBracket position="bottom-right" />
        <div style={{ position: "absolute", inset: 20, border: "2px dashed rgba(255,255,255,0.7)", borderRadius: 12 }} />
      </div>

      {/* Speech bubble muncul hanya setelah ada hasil deteksi */}
      <DetectionBubble label={detectedLabel} visible={!!detectedLabel} />

      {/* Tombol Ambil Foto */}
      <div
        style={{
          position: "absolute",
          bottom: 110,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <button
          onClick={handleCapture}
          disabled={loading}
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: loading ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.35)",
            border: "2px solid rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          <Image src="/images/Cam.svg" alt="Ambil Foto" width={26} height={26} />
        </button>
        <span style={{ color: "#fff", fontSize: 13, fontWeight: 600, textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
          {loading ? "Mendeteksi..." : "Ambil Foto"}
        </span>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <BottomNavBar transparent />
      </div>
    </div>
  );
}

function CornerBracket({ position }) {
  const base = {
    position: "absolute",
    width: 32,
    height: 32,
    borderColor: "#FFD700",
    borderStyle: "solid",
    borderWidth: 0,
  };

  const styles = {
    "top-left": { ...base, top: 0, left: 0, borderTopWidth: 4, borderLeftWidth: 4, borderTopLeftRadius: 12 },
    "top-right": { ...base, top: 0, right: 0, borderTopWidth: 4, borderRightWidth: 4, borderTopRightRadius: 12 },
    "bottom-left": { ...base, bottom: 0, left: 0, borderBottomWidth: 4, borderLeftWidth: 4, borderBottomLeftRadius: 12 },
    "bottom-right": { ...base, bottom: 0, right: 0, borderBottomWidth: 4, borderRightWidth: 4, borderBottomRightRadius: 12 },
  };

  return <div style={styles[position]} />;
}