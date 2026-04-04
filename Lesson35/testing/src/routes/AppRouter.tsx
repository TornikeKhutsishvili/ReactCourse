import { Route, Routes } from "react-router-dom";
import Register from "../pages/register/Register";
import MainLayout from "../layout/mainLayout/MainLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Register />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;