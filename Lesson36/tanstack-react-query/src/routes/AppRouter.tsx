import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const MainLayout = lazy(() => import("../shared/layouts/MainLayout"));
const ErrorPage = lazy(() => import("../features/pages/ErrorPage"));

const Home = lazy(() => import("../features/pages/Home"));
const UsersPage = lazy(() => import("../features/pages/users/UsersPage"));
const UserPage = lazy(() => import("../features/pages/users/UserPage"));
const ProductsPage = lazy(() => import("../features/pages/products/ProductsPage"));
const ProductPage = lazy(() => import("../features/pages/products/ProductPage"));

const AppRouter:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home /> } />

        {/* Users */}
        <Route path='users'>
          <Route index element={<UsersPage /> } />
          <Route path=":id" element={<UserPage /> } />
        </Route>

        {/* Products */}
        <Route path='products'>
          <Route index element={<ProductsPage /> } />
          <Route path=":id" element={<ProductPage /> } />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRouter;