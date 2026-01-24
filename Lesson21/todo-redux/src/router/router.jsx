// main layout
import MainLayout from "../layouts/MainLayout";
// pages
import TodoList from "../pages/TodoList";
import CreatePage from "../pages/CreatePage";
import DoneTodoList from "../pages/DoneTodoList";
import DeferTodo from "../pages/DeferTodo";
// error page
import ErrorPage from "../pages/ErrorPage";

const router = [
  // Nested Routes
  {
    element: <MainLayout />,
    children: [
      {
        element: <TodoList />,
        path: "/",
      },
      {
        element: <CreatePage />,
        path: "/create",
      },
      {
        element: <DoneTodoList />,
        path: "/done-todo",
      },
      {
        element: <DeferTodo />,
        path: "/defer-todo",
      },
    ],
  },

  // Error Handling Route
  {
    element: <ErrorPage />,
    path: "*",
  },
];

export default router;
