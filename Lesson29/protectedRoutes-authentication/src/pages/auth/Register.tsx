import React from "react";
import "../../styles/Register.css";
import type { IAuth } from "../../interfaces/IAuth";
import AuthForm from "../../components/forms/AuthForm";
import $axios from "../../http";

const Register: React.FC = () => {
  const onSubmit = async (FormData: IAuth) => {
    try {
      const res = await $axios.post("/registration", { ...FormData });
      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <AuthForm type="register" onSubmit={onSubmit} />;
};

export default Register;
