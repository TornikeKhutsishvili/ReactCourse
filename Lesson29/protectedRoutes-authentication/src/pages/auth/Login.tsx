import React from "react";
import "../../styles/Login.css";
import type { IAuth } from "../../interfaces/IAuth";
import AuthForm from "../../components/forms/AuthForm";
import $axios from "../../http";

const Login: React.FC = () => {
  const onSubmit = (FormData: IAuth) => {
    $axios
      .post("/login", { ...FormData })
      .then((res) => localStorage.setItem("token", res.data.accessToken))
      .catch((err) => console.log(err));
  };

  return <AuthForm type="login" onSubmit={onSubmit} />;
};

export default Login;
