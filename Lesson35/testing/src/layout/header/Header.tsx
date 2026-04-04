import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <nav style={{
        display: "flex", width: "300px", margin: "0 auto", gap: "20px",
        alignItems: "center", justifyContent: "space-between"
      }}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
      </nav>
    </header>
  );
};

export default Header;