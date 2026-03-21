import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

const Games = lazy(() => import("../pages/game/Games"));
const Game = lazy(() => import("../pages/game/Game"));
const Reviews = lazy(() => import("../pages/review/Reviews"));
const Review = lazy(() => import("../pages/review/Review"));
const Authors = lazy(() => import("../pages/author/Authors"));
const Author = lazy(() => import("../pages/author/Author"));

const ErrorPage = lazy(() => import("../pages/ErrorPage"));

const AppRouter:React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Games */}
        <Route path='/games'>
          <Route index element={<Games />} />
          <Route path=":id" element={<Game />} />
        </Route>

        {/* Reviews */}
        <Route path='/reviews'>
          <Route index element={<Reviews />} />
          <Route path=":id" element={<Review />} />
        </Route>

        {/* Authors */}
        <Route path='/authors'>
          <Route index element={<Authors />} />
          <Route path=":id" element={<Author />} />
        </Route>

        {/* 404 Not Found */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter