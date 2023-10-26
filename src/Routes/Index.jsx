import {
  createBrowserRouter,
} from "react-router-dom";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import HomeLayout from "../layout/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <HomeLayout />,
  },
]);