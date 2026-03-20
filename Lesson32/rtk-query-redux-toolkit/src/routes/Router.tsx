import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const Home = lazy(() => import("../pages/Home"));
const BreweriesPage = lazy(() => import("../pages/breweries/BreweriesPage"))
const BreweryDetailsPage = lazy(() => import("../pages/breweries/BreweryDetailsPage"))
const BreweriesRandom = lazy(() => import("../pages/breweries/BreweriesRandom"))
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/breweries">
          <Route index element={<BreweriesPage />} />
          <Route path="random" element={<BreweriesRandom />} />
          <Route path=":id" element={<BreweryDetailsPage />} />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default Router;
