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
        <NavLink to={"/breweries"} className="nav-link">Breweries</NavLink>
        <NavLink to={"/breweries/random"} className="nav-link">Random Breweries</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
