import Header from "../header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;