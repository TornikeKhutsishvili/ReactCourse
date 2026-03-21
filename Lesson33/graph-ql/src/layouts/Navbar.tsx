import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="nav navbar">
      <NavLink to={"/home"} className="logo">
        <img src="/favicon.svg" alt="react" />
      </NavLink>

      <ul className="nav-links">
        <NavLink to={"/home"} className="nav-link">Home</NavLink>
        <NavLink to={"/about"} className="nav-link">About</NavLink>
        <NavLink to={"/games"} className="nav-link">Games</NavLink>
        <NavLink to={"/reviews"} className="nav-link">Reviews</NavLink>
        <NavLink to={"/authors"} className="nav-link">Authors</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
