import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

const Users = lazy(() => import("../pages/users/Users"));
const AddUsers = lazy(() => import("../pages/users/AddUsers"));
const UserDetails = lazy(() => import("../pages/users/UserDetails"));
const UpdateUser = lazy(() => import("../pages/users/UpdateUsers"));

const Posts = lazy(() => import("../pages/posts/Posts"));
const AddPost = lazy(() => import("../pages/posts/AddPost"));
const PostDetails = lazy(() => import("../pages/posts/PostDetails"));
const UpdatePost = lazy(() => import("../pages/posts/UpdatePost"));

const ErrorPage = lazy(() => import("../pages/ErrorPage"));

const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/add-user" element={<AddUsers />} />
        <Route path="/add-post" element={<AddPost />} />

        {/* Dynamic routes */}
        <Route path="/user-detail/:id" element={<UserDetails />} />
        <Route path="/post-detail/:id" element={<PostDetails />} />
        <Route path="/update-users/:id" element={<UpdateUser />} />
        <Route path="/update-posts/:id" element={<UpdatePost />} />

        {/* 404 Not Found */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Router;