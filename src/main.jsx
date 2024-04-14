import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import UpdateProfile from "./components/Home/UpdateProfile";
import UserProfile from "./components/Home/UserProfile";
import LogIn from "./components/Authentication/LogIn";
import Registration from "./components/Authentication/Registration";
import Deatails from "./components/Deatails";
import AuthProvider from "./components/Authentication/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";

// routes.....
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/details/:id",
        element: <Deatails></Deatails>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/userProfile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
