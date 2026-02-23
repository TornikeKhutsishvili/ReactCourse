import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UsersLayout from "./layouts/UsersLayout";
import Users, { loader } from "./pages/Users";
import User from "./pages/User";
import FormPage, { action } from "./components/FormPage";
import ErrorPage from "./pages/ErrorPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      <Route path="users" element={<UsersLayout />}>
        <Route index element={<Users />} loader={loader} />
        <Route path=":id" element={<User />} />
      </Route>

      <Route path="form-page" element={<FormPage />} action={action} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
