import axiosServer from "@/app/axios/axiosServer";
import { ISLOGIN } from "@/app/contants";
import { cookies } from "next/headers";

export interface MyResponse {
  msg?: string;
  error?: boolean;
  result?: Record<any, any>;
}

export async function GET(request: Request) {}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {
  const body = await request.json();
  const res: MyResponse = await axiosServer.post("/login", body);
  if (!res?.error) {
    cookies().set(ISLOGIN, res.result.user, {
      httpOnly: true,
    });
    return Response.json({
      msg: res.msg,
    });
  }
  return Response.json({
    msg: "set cookies fail",
  });
}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
