// layouts
import type { RouteObject } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddUsers from "../pages/AddUsers";
// pages
import Home from "../pages/Home";
import UpdateUsers from "../pages/UpdateUsers";
import UsersList from "../pages/UsersList";

const router: RouteObject[] = [
  // Nested Routes
  {
    element: <MainLayout />,
    children: [
      { element: <Home />, index: true },
      { element: <UsersList />, path: "/users-list" },
      { element: <AddUsers />, path: "/add-users" },

      // Dynamic Route
      { element: <UpdateUsers />, path: "/update-users/:id" },
    ],
  },
];

export default router;