import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Orders from "./Components/Orders.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import Profile from "./Components/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "orders",
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: 'profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
