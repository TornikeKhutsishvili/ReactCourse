import React, { useState } from "react";
import type { IAuth } from "../../interfaces/IAuth";
import { Button, TextField, Typography } from "@mui/material";

interface AuthFormProps {
  type: string;
  onSubmit: (FormData: IAuth) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <form
      style={{
        width: "500px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontWeight: "700",
          fontSize: "24px",
        }}
      >
        {type === "login" ? "Login" : "Register"}
      </Typography>
      <div className="form-group">
        <TextField
          style={{ marginBottom: "7px" }}
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          type="email"
          fullWidth
          required
        />
      </div>
      <div className="form-group">
        <TextField
          style={{ marginBottom: "7px" }}
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          type="password"
          fullWidth
          required
        />
      </div>
      <div className="form-group">
        <Button
          type="submit"
          onClick={() => handleSubmit}
          style={{ fontWeight: "700" }}
        >
          {type === "login" ? "Login" : "Register"}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
