import axiosServer from "@/app/axios/axiosServer";
import { ISLOGIN } from "@/app/contants";
import { cookies } from "next/headers";
import { MyResponse } from "../login/route";

export async function GET(request: Request) {
  const res: MyResponse = await axiosServer.get("/logout");
  if (!res?.error) {
    cookies().delete(ISLOGIN);
    return Response.json({
      msg: res.msg,
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
