"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { id: "home", path: "/dashboard/murid", icon: "/images/Home.svg" },
  { id: "kamera", path: "/dashboard/murid/kamera", icon: "/images/Cam.svg" },
  { id: "pesan", path: "/dashboard/murid/pesan", icon: "/images/chat_bubble.svg" },
  { id: "buku", path: "/dashboard/murid/buku", icon: "/images/Book.svg" },
];

export default function BottomNavBar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav
      style={{
        background: "linear-gradient(#FFF, #FFF) padding-box, linear-gradient(90deg, #FFD700, #FFF3B0, #FFD700) border-box",
        border: "2px solid transparent",
        borderBottom: "none",
        borderRadius: "30px 30px 0 0",
        padding: "15px",
        display: "flex",
        justifyContent: "space-around",
        boxShadow: "0 -4px 12px rgba(0,0,0,0.05)",
      }}
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => router.push(item.path)}
          style={{
            border: "none",
            background: pathname === item.path ? "#FFD700" : "transparent",
            padding: "10px",
            borderRadius: "10px",
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={item.icon} alt={item.id} width={30} height={30} />
        </button>
      ))}
    </nav>
  );
}