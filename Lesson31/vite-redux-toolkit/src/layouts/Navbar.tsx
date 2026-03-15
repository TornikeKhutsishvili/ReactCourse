import React, { useState } from "react";
import ThemeSwitcher from "../components/themes/ThemeSwitcher";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <NavLink to={"/home"} className="logo">
        <img src="/favicon.svg" alt="react" />
      </NavLink>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li className="nav-link"><NavLink to={"/home"}>Home</NavLink></li>
        <li className="nav-link"><NavLink to={"/users"}>Users</NavLink></li>
        <li className="nav-link"><NavLink to={"/add-user"}>Add user</NavLink></li>
        <li className="nav-link"><NavLink to={"/posts"}>Posts</NavLink></li>
        <li className="nav-link"><NavLink to={"/add-post"}>Add post</NavLink></li>
      </ul>
      <i className="fa-solid fa-bars fontSize-32" onClick={() => setMenuOpen(!menuOpen)}></i>
      <div className="nav-link nav-actions">
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;