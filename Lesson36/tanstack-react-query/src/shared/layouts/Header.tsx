import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <h1>Tanstack and React-query</h1>
      </div>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      </nav>
    </header>
  );
};

export default Header;