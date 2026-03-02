import React from "react";
import { Outlet } from "react-router-dom";
import AuthForm from "../components/forms/AuthForm";
import type { IAuth } from "../interfaces/IAuth";

interface ProtectedProps {
  onsubmit: (formData: IAuth) => void;
}

const ProtectedRoutes: React.FC<ProtectedProps> = ({ onsubmit }) => {
  const auth = { token: false };
  return auth.token ? (
    <Outlet />
  ) : (
    <AuthForm type="login" onSubmit={onsubmit} />
  );
};

export default ProtectedRoutes;
