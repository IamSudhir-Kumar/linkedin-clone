import {
    createBrowserRouter,
  } from "react-router-dom";
import LogIn from "../pages/LogIn";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <LogIn/>,
    },
  ]);