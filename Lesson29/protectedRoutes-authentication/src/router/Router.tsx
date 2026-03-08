import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import type { IAuth } from "../interfaces/IAuth";

// layouts
// import Navbar from "../components/Navbar";
import MaterialNavbar from "../components/navbar/MaterialNavbar";
import ProtectedRoutes from "./ProtectedRoutes";

// pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Profile from "../pages/auth/Profile";

// router
const Router: React.FC = () => {
  const handleAuthSubmit = (formData: IAuth) => {
    console.log("Auth form submitted:", formData);
  };

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navbar routes={routes} isVertical={false} />}> */}
        <Route path="/" element={<MaterialNavbar routes={routes} />}>
          <Route>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route element={<ProtectedRoutes onsubmit={handleAuthSubmit} />}>
            <Route path="products" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Router;
