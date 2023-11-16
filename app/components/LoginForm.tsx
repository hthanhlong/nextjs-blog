"use client";
import { handler } from "@/auth";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axiosClient from "../axios/axiosClient";

type Inputs = {
  myUsername: string;
  myPassword: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      console.log("handler", handler);
      const res = await axiosClient.post("/login", data);
      console.log("res", res.data);
      // await handler.signIn("Credentials", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="myUsername"
        >
          myUsername
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          id="myUsername"
          type="text"
          placeholder="myUsername"
          required
          autoComplete="off"
          {...register("myUsername")}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="myPassword"
        >
          myUsername
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="myPassword"
          type="myPassword"
          {...register("myPassword")}
          placeholder="******************"
          required
          autoComplete="off"
        />
      </div>
      <div className="flex items-center justify-center">
        <input type="submit" className="btn mt-4 w-full text-white" />
      </div>
    </form>
  );
};

export default LoginForm;
