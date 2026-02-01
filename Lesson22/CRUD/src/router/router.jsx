// layouts
import MainLayout from "../layout/MainLayout.jsx";
// pages
import Home from "../pages/Home.jsx";
import AddUsers from "../pages/AddUsers.jsx";
import UpdateUsers from "../pages/UpdateUsers.jsx";
import UsersList from "../pages/UsersList.jsx";

const router = [
  // Nested Routes
  {
    element: <MainLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <UsersList />,
        path: "/users-list",
      },
      {
        element: <AddUsers />,
        path: "/add-users",
      },

      // Dynamic Route
      {
        element: <UpdateUsers />,
        path: "/update-users/:id",
      },
    ],
  },
];

export default router;
