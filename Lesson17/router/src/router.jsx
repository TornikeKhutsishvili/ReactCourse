import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";

const router = [
  {
    path: "/",
    element: <Navigation />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: ":factId", element: <Details /> },
    ],
  },
];

export default router;
