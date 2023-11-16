import axiosServer from "@/app/axios/axiosServer";
import { ISLOGIN } from "@/app/contants";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const res = await axiosServer.get("/logout");
  if (!res?.data?.error) {
    cookies().delete(ISLOGIN);
    return Response.json({
      msg: res.data.msg,
    });
  }
  return Response.json({
    msg: "delete cookies fail",
  });
}

export async function POST(request: Request) {}

export async function HEAD(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}
