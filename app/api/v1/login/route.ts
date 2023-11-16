import axiosServer from "@/app/axios/axiosServer";

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const body = await request.json();
  const res = await axiosServer.post("/login", body);
  return Response.json(res.data);
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
