"use client";
import React, { Fragment, useEffect, useState } from "react";
import axiosClient from "../axios/axiosClient";

const LogoutButton = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogout = async () => {
    await axiosClient.get("/logout");
    window?.localStorage.removeItem("isLogin");
    location.replace("/");
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin === "true") {
      setIsLogin(true);
    }
  }, []);

  return (
    <Fragment>
      {isLogin ? (
        <button
          onClick={() => handleLogout()}
          className="btn btn-ghost btn-circle"
        >
          log out
        </button>
      ) : null}
    </Fragment>
  );
};

export default LogoutButton;
