import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

// layouts
// import Navbar from "../components/Navbar";
import MaterialNavbar from "../components/MaterialNavbar";
import ProtectedRoutes from "../components/ProtectedRoutes";

// pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/auth/login/Login";
import Products from "../pages/Products";

// router
const Router: React.FC = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Navbar routes={routes} />} isVertical={false}> */}
        <Route path="/" element={<MaterialNavbar routes={routes} />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/products" element={<Products />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
