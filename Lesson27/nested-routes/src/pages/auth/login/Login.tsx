import React from "react";
import { Form } from "react-router-dom";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <>
      <Form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </Form>
    </>
  );
};

export default Login;
