"use client";
import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import Cookies from "js-cookie";

const LogoutButton = () => {
  const [isLogin, setIsLogin] = useState(false);

  const logOut = async () => {
    const res = await axios.post("http://localhost:8080/logout");

    if (res?.data?.msg === "remove cookies done") {
      window.location.replace("/login");
      Cookies.remove("isLogin");
      Cookies.remove("my-token");
    }
  };

  useEffect(() => {
    const res = Cookies.get("isLogin");
    if (res === "true") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  return (
    <Fragment>
      {isLogin ? (
        <button onClick={() => logOut()} className="btn btn-ghost btn-circle">
          log out
        </button>
      ) : null}
    </Fragment>
  );
};

export default LogoutButton;
