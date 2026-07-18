export async function POST(request) {
  try {
    const formData = await request.formData();

    const apiUrl = process.env.YOLO_API_URL;

    if (!apiUrl) {
      return Response.json({ error: "YOLO_API_URL belum di-set di .env" }, { status: 500 });
    }

    const response = await fetch(`${apiUrl}/detect`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      return Response.json({ error: "Deteksi gagal" }, { status: 500 });
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Tidak bisa terhubung ke server deteksi" }, { status: 500 });
  }
}