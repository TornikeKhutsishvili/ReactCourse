import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../components/themes/ThemeSwitcher";

const HeaderItem = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink></li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/add-users">Add User</NavLink></li>
      <li className="nav-item">
        <div className="nav-link">
          <ThemeSwitcher />
        </div>
      </li>
    </ul>
  );
};

export default HeaderItem;