// import React from "react";
// import "../styles/Navbar.css";
// import { NavLink, Outlet } from "react-router-dom";
// import type { IRoute } from "../../interfaces/IRoute";

// interface NavbarProps {
//   routes: IRoute[];
//   isVertical: boolean;
// }

// const Navbar: React.FC<NavbarProps> = ({ routes, isVertical }) => {
//   return (
//     <>
//       <nav className={`navbar ${isVertical ? "vertical" : "horizontal"}`}>
//         {routes.map(({ path, label }) => (
//           <NavLink key={path} to={path}>
//             {label}
//           </NavLink>
//         ))}
//       </nav>
//       <Outlet />
//     </>
//   );
// };

// export default Navbar;
