// Ganti file: src/app/api/auth/login/route.js
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password, role, mode } = body;

    // --- LOGIKA DAFTAR (REGISTER) ---
    if (mode === "register") {
      const existingUser = await prisma.user.findFirst({
        where: { email: email },
      });

      if (existingUser) {
        return NextResponse.json(
          { error: "Email sudah terdaftar!" },
          { status: 400 }
        );
      }

      await prisma.user.create({
        data: {
          email,
          password, 
          role,
        },
      });

      // BERUBAH: Jangan kirim redirect, cukup kirim pesan sukses
      return NextResponse.json({
        success: true,
        message: "Registrasi berhasil!",
      });
    }

    // --- LOGIKA MASUK (LOGIN) ---
    const user = await prisma.user.findFirst({
      where: {
        email: email,
        role: role, 
      },
    });

    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: "Email atau kata sandi salah!" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      redirect: `/dashboard/${role}`,
    });
  } catch (error) {
    console.error("Auth Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server" },
      { status: 500 }
    );
  }
}