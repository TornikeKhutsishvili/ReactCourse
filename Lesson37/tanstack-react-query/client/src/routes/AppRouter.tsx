import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const MainLayout = lazy(() => import("../shared/layouts/MainLayout"));
const ErrorPage = lazy(() => import("../features/pages/ErrorPage"));

const Home = lazy(() => import("../features/pages/Home"));
const TodosPage = lazy(() => import("../features/pages/todos/TodosPage"));
const TodoPage = lazy(() => import("../features/pages/todos/TodoPage"));
const UsersPage = lazy(() => import("../features/pages/users/UsersPage"));
const UserPage = lazy(() => import("../features/pages/users/UserPage"));

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

        {/* Todos */}
        <Route path='todos'>
          <Route index element={<TodosPage /> } />
          <Route path=":id" element={<TodoPage /> } />
        </Route>
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default AppRouter;