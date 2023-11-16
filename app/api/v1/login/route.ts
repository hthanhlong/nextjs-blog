import axiosServer from "@/app/axios/axiosServer";
import { ISLOGIN } from "@/app/contants";
import { cookies } from "next/headers";

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const body = await request.json();
  const res = await axiosServer.post("/login", body);
  if (!res?.data?.error) {
    cookies().set(ISLOGIN, res.data.result.user, {
      httpOnly: true,
    });
    return Response.json({
      msg: res.data.msg,
    });
  }
  return Response.json({
    msg: "set cookies fail",
  });
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
