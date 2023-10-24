import {
  createBrowserRouter,
} from "react-router-dom";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Home from "../pages/Home";
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
    element: <Home />,
  },
]);