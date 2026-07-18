export async function POST(request) {
  try {
    const body = await request.json();
    const apiUrl = process.env.CHATBOT_API_URL;

    if (!apiUrl) {
      return Response.json({ error: "CHATBOT_API_URL belum di-set di .env" }, { status: 500 });
    }

    const response = await fetch(`${apiUrl}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return Response.json({ error: "Gagal mendapat balasan" }, { status: 500 });
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Tidak bisa terhubung ke chatbot" }, { status: 500 });
  }
}